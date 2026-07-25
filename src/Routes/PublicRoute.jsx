import { Outlet } from 'react-router'
import useAuth from '../Hooks/useAuth'
import { Navigate } from 'react-router'
const PublicRoute = () => {
    const{currentUser}=useAuth();
    if(currentUser){
      return  <Navigate to="/home"/>
    }
  
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default PublicRoute