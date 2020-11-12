import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ user, Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        rest.restricted ? (
          user ? (
            <Redirect to="/dashboard" />
          ) : (
            <Component {...props} user={user} />
          )
        ) : (
          <Component {...props} user={user} />
        )
      }
    />
  );
};

export default PublicRoute;