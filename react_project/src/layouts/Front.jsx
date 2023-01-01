import React from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'
import { UseAuthCotext } from '../contexts/AuthContext'

export default function Front() {

  const {token} = UseAuthCotext();

  if(token){
    return <Navigate to='/user'/>
  }
  
  return (
    <div>
      <Link to='/login'>Login</Link>
        <Outlet/>
    </div>
    
  )
}
