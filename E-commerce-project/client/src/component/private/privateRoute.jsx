import { Link, Navigate, Outlet, Route, Routes } from "react-router-dom";

const ProtectedRoute = ({ user, redirectPath = "/login" }) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
