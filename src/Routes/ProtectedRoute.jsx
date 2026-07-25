import React from 'react'
import useAuth from '../Hooks/useAuth'
import { Navigate, Outlet } from 'react-router'
const ProtectedRoute = () => {
    const {currentUser}=useAuth()
    if(!currentUser){
      return  <Navigate to="/"/>
    }
    return (
    <div>
        <Outlet/>
    </div>
  )
}
export default ProtectedRoute