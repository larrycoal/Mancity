import React from "react";
import Layout from "./Components/Layout/HOC";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import SignIn from "./Components/SignIn";
import Dashboard from './Components/Admin/Dashboard'

function App(props) {
  return (
    <Layout>
      <Switch>
      <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/sign_in" component={SignIn} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Layout>
  );
}

export default App;
