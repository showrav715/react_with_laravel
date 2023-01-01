import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext({
    user:null,
    token:null,
    setUser:()=> {},
    setToken:()=>{}
});

export const AuthContextProvider = ({children}) => {

    const [user,setUser] = useState({});
    const [token,_setToken] = useState(localStorage.getItem('token'));
    
   
    const setToken = (token) => {
        if(token){
            _setToken(token);
        localStorage.setItem('token',token);
        }else{
            _setToken(null);
            localStorage.removeItem('token');
        }
    }
    return (
        <AuthContext.Provider value={{
            user,
            token,
            setToken,
            setUser
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const UseAuthCotext = () => useContext(AuthContext)