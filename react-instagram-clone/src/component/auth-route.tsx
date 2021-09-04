import React from "react";
import { Redirect, Route } from "react-router-dom";

export const AuthenticatedRoute = ({ user, children, ...props }: any) => {
  return (
    <Route
      {...props}
      render={({ location }) => {
        if (user) {
          return React.cloneElement(children, { user });
        }
        if (!user) {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location }
              }}
            />
          );
        }
      }}
    />
  );
}