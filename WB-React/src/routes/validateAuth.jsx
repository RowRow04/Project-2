import { Navigate, Outlet, useLocation } from "react-router-dom";

export const Auth = ({ store, redirect }) => {
  const { token, userData } = store();
  const location = useLocation();

  return token && userData ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export const UnAuth = ({ store, redirect }) => {
  const { token, userData } = store();
  const location = useLocation();

  return token && userData ? (
    <Navigate to="/events" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};
