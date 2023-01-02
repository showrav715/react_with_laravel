import axios from 'axios';
import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import ApiUrl from '../ApiUrl';
import { UseAuthCotext } from '../contexts/AuthContext';

export default function User() {

  const {token,user,checkAndSetUser} = UseAuthCotext();

  useEffect ( ()=> {
    checkUser();
  },[])

  const checkUser = async () => {
   await axios.get(ApiUrl.checkUser(token))
   .then(res => {
      checkAndSetUser(res.data.user);
   })
   .catch (err => {
     console.log(err);
    })
  }

  if(!token){
    return <Navigate to='/login'/>
  }


  return (
    <>
    <div>User</div>
    <Outlet/>
    </>
  )
}
