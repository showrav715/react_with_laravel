import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { UseAuthCotext } from '../contexts/AuthContext';

export default function User() {

  const {token,user} = UseAuthCotext();
  console.log(user);
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
