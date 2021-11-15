import useAuth from "hooks/useAuth";
import Login from "pages/authentication/Login";
import React, { Fragment, ReactNode, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

// component props interface
interface AuthGuardProps {
  children: ReactNode;
}

const AuthGuard = ({ children }: AuthGuardProps) => {
  const { isAuthenticated } = useAuth();
  const { pathname } = useLocation();
  const [requestedLocation, setRequestedLocation] = useState<string | null>(
    null
  );

  if (!isAuthenticated) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }

    return <Login />;
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }
  return <Fragment>{children}</Fragment>;
};

export default AuthGuard;
