import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ user, Component, ...props }) => {
  return (
    <Route
      {...props}
      component={(props) => (user ? <Component {...props} user={user} /> : <Redirect to="/sign_in" />)}
    />
  );
};

export default PrivateRoute;
