import React from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";
import PrivateRoute from "./components/onboarding/PrivateRoute";
import Landing from "./components/main/Landing";
import Register from "./components/onboarding/Register";
import Login from './components/onboarding/Login';
import AreasOfFocus from "./components/main/AreasOfFocus";
import Header from "./components/main/Header";
import styled from "styled-components";
import Dashboard from "./components/main/Dashboard";
import OnboardingFocus from "./components/onboarding/OnboardingFocus";

const AppContainer = styled.div`
  display: flex;
  height: 100%;
`;

const MainContainer = styled.div`
  width: 74%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <AppContainer className="App">
      <Dashboard />
      <MainContainer>
        <Route path="/">
          <Header />
        </Route>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/selection">
          <OnboardingFocus />
        </Route>

        <Route path="/login" render ={(props) => <Login {...props} />} />
        <Route path="/register" render ={(props) => <Register {...props} />} />
        <PrivateRoute exact path="/users/:id/dashboard" component={AreasOfFocus} />
      </MainContainer>
    </AppContainer>
  );
}

export default App;
