import React from 'react';
import Layout from './Components/Layout/HOC'
import {Switch,Route} from 'react-router-dom'
import Home from './Components/Home'
function App(props) {
  return (
      <Layout>
       <Switch>
         <Route exact path="/" component={Home}/>
       </Switch>
      </Layout>
  );
}

export default App;
