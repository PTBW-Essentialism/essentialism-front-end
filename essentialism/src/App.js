import React from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";
import PrivateRoute from "./components/onboarding/PrivateRoute";
import Landing from "./components/main/Landing";
import Register from "./components/onboarding/Register";
import Login from './components/onboarding/Login';
import AreasOfFocus from "./components/main/AreasOfFocus";
import Header from "./components/main/Header";

function App() {
  return (
    <div className="App">
      <Route path="/">
        <Header />
      </Route>
      <Route exact path="/">
        <Landing />
      </Route>

      <Route path="/login" render ={(props) => <Login {...props} />} />
      <Route path="/register" render ={(props) => <Register {...props} />} />
      <PrivateRoute exact path="/users/:id/dashboard" component={AreasOfFocus} />
    </div>
  );
}

export default App;
