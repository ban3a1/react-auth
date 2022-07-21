import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

export const ProtectedRoute = ({ redirectPath = "/signup", children }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};
