import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomeLogin from "./screen/HomeLogin";
import Navigation from './screen/Navigation'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomeLogin}/>
        <Navigation/>
        <Route path='*' component={()=>'404 NOT FOUND'}/>
      </Switch>
    </div>
  );
}

export default App;
