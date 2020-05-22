import React from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";
import Landing from "./components/main/Landing";
import Register from "./components/onboarding/Register";
import Login from './components/onboarding/Login';

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Landing />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
    </div>
  );
}

export default App;
