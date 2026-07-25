import useAuth from "../Hooks/useAuth";
import { Outlet, Navigate } from "react-router";
const ProtectedRoute = () => {
  const { currentUser, loading } = useAuth();
  if (loading) {
    return <div>Loading...</div>;
  } 
  if (!currentUser) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};
export default ProtectedRoute;