<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Laravel\Sanctum\PersonalAccessToken;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        //return $request->all();
        $request->validate([
            'username' => 'required|string',
            'email' => 'required|string|email|unique:users',
            //'password' => 'required|string|confirmed'
        ]);

        $user = new User([
            'name' => $request->username,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);

        $user->save();
        return response()->json(
            [
                'user' => $user,
                'token' => $user->createToken('token')->plainTextToken,
                'message' => 'Successfully created user!'
            ],
            200
        );
    }


    public function login(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'email' => 'required|string|email',
            'password' => 'required|string'
        ]);

        if ($validate->fails()) {
            return response()->json([
                'message' => 'Validation error',
                'errors' => $validate->errors()
            ], 422);
        }

        $credentials = request(['email', 'password']);
        if (!auth()->attempt($credentials)) {
            return response()->json([
                'message' => 'Unauthorized'
            ], 401);
        }

        $user = $request->user();
        $tokenResult = $user->createToken('token')->plainTextToken;
        $token = $tokenResult;
        return response()->json([
            'user' => $user,
            'token' => $token,
            'message' => 'Successfully logged in'
        ], 200);
    }

    public function check($tok)
    {
        
        $token = PersonalAccessToken::findToken($tok);
        $user = $token ? $token->tokenable : null;
        return response()->json([
            'user' => $user,
        ], 200);
    }

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();
        return response()->json([
            'message' => 'Successfully logged out'
        ], 200);
    }
}
