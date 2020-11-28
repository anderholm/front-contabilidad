import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomeLogin from "./screen/HomeLogin";
import AdminDashboard from './screen/AdminDashboard'
import UserDashboard from './screen/UserDashboard'
import Protected from './auth/Protected'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomeLogin}/>
        <Protected path='/admin' component={AdminDashboard}/>
        <Protected path='/user' component={UserDashboard}/>
        <Route path='*' component={()=>'404 NOT FOUND'}/>
      </Switch>
    </div>
  );
}

export default App;
