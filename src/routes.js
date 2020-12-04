import React from "react";
import Layout from "./Components/Layout/HOC";
import { Switch } from "react-router-dom";


import PrivateRoute from './Components/authRoutes/privateRoute'
import PublicRoute from './Components/authRoutes/publicRoutes'

import Home from "./Components/Home";
import SignIn from "./Components/SignIn";
import Dashboard from './Components/Admin/Dashboard'
import AdminMatches from './Components/Admin/Matches'
import AddEditMatches from './Components/Admin/Matches/addEditMatches'


function App(props) {
  return (
    <Layout>
      <Switch>
      <PrivateRoute {...props} exact path="/admin_matches/add_match" Component={AddEditMatches} />
      <PrivateRoute {...props} exact path="/admin_matches/edit_match/:id" Component={AddEditMatches} />
      <PrivateRoute {...props} exact path="/admin_matches" Component={AdminMatches} />
        <PrivateRoute {...props} exact path="/dashboard" Component={Dashboard} />
        <PublicRoute restricted={true} {...props} exact path="/sign_in" Component={SignIn}/>
        <PublicRoute restricted={false} {...props} exact path="/" Component={Home}/>
      </Switch>
    </Layout>
  );
}

export default App;
