import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import {firebase} from './firebase'

import Routes from "./routes";
import "./Resources/css/app.css";
import './firebase'
const App = (props) => {
  return (
    <BrowserRouter>
      <Routes {...props} />
    </BrowserRouter>
  );
};
firebase.auth().onAuthStateChanged((user)=>{
  ReactDOM.render(
    <BrowserRouter>
      <App user = {user} />
    </BrowserRouter>,
    document.getElementById("root")
  );
})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
