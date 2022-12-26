import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Front() {
  return (
    <div>
        <h1>Front</h1>
        <Outlet/>
    </div>
    
  )
}
