import Login from "./views/Login";
import Register from "./views/Register";
import User from "./views/User";
import {createBrowserRouter, Navigate} from "react-router-dom";
import Error from "./views/Error";
import Front from "./layouts/Front";
import UserLayout from "./layouts/User";
import Profile from "./views/Profile";

const router = createBrowserRouter([

    {
        path: '/',
        element: <Front/>,
        children:[
            {
                path: '/register',
                element: <Register/>,
            },
            {
                path: '/login',
                element: <Login/>,
            },
        ]
    },

    {
        path: '/',
        element: <UserLayout/>,
        children:[
            {
                path: '/',
                element: <Navigate to="/user" />,
            },
            {
                path: '/user',
                element: <User/>,
            },
            {
                path: '/profile/edit',
                element: <Profile/>,
            }
        ]
    },

    
  
    {
        path:'*',
        element: <Error/>,
    }
]);

export default router;