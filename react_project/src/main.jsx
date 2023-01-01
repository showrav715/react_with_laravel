import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {RouterProvider} from 'react-router-dom'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContextProvider } from './contexts/AuthContext'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
    <RouterProvider  router={router} />
    </AuthContextProvider>
  </React.StrictMode>,
)
