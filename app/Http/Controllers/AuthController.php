<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

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
                'token' => $user->create,
                'message' => 'Successfully created user!'
            ],
            200
        );
    }
}
