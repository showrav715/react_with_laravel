import Login from "./views/Login";
import Register from "./views/Register";
import User from "./views/User";
import {createBrowserRouter} from "react-router-dom";
import Error from "./views/Error";
import Front from "./layouts/Front";
import UserLayout from "./layouts/User";

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
                path: '/user',
                element: <User/>,
            }
        ]
    },

    
  
    {
        path:'*',
        element: <Error/>,
    }
]);

export default router;