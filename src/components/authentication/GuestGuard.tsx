import React, { Fragment, ReactNode } from "react";

// component props interface
interface GuestGuardProps {
  children: ReactNode;
}
const GuestGuard = ({ children }: GuestGuardProps) => {
  //// UNCOMMNET BELOW CODE IF YOU WANT TO HIDE AUTH PAGES TO AUTHENTICATED USERS

  //   const { isAuthenticated } = useAuth();

  //   if (isAuthenticated) {
  //     return <Navigate to="/dashboard" />;
  //   }

  return <Fragment>{children}</Fragment>;
};

export default GuestGuard;
