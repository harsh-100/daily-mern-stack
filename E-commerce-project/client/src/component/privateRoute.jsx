import { Navigate, Outlet } from "react-router-dom";

const PrivateRouteComponent = ({ userConditon, redirectRoute = "/login" }) => {
  if (!userConditon) {
    return <Navigate to={redirectRoute} replace />;
  }
  return (
    <>
      <Outlet />
    </>
  );
};

export default PrivateRouteComponent;
