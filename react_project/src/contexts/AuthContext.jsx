import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext({
    user:null,
    token:null,
    setUser:()=> {},
    setToken:()=>{}

});

export const AuthContextProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [token,_setToken] = useState(localStorage.getItem('token'));

    const setToken = (token) => {
        _setToken(token);
        localStorage.setItem('token',token);
    }
    return (
        <AuthContext.Provider value={{
            user,
            token,
            setToken,
            setUser
        }}>

        </AuthContext.Provider>
    )
}

export const UseAuthCotext = useContext(AuthContext)