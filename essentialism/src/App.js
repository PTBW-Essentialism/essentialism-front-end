import React from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";
import Landing from "./components/main/Landing";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Landing />
      </Route>
      <Route exact path="/signin">
        <Landing />
      </Route>
      <Route exact path="/signup">
        <Landing />
      </Route>
    </div>
  );
}

export default App;
