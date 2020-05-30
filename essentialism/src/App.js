import React from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";
import PrivateRoute from "./components/onboarding/PrivateRoute";
import Landing from "./components/main/Landing";
import Register from "./components/onboarding/Register";
import Login from './components/onboarding/Login';
import AreasOfFocus from "./components/main/AreasOfFocus";
import OnboardingFocus from "./components/onboarding/OnboardingFocus"
import Header from "./components/main/Header";
import styled from "styled-components";
import Dashboard from "./components/main/Dashboard";
import Initiatives from "./components/main/Initiatives";
import { connect } from "react-redux";

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

//this is the app

function App(props) {
  const USERID = window.localStorage.getItem("userId");
  return (
    <AppContainer className="App">
      {props.userId || USERID ? <Dashboard userId={props.userId}/> : null}
      <MainContainer>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/selection">
          <OnboardingFocus />
        </Route>
        <Route exact path="/initiatives">
          <Header />
          <Initiatives />
        </Route>

        <Route path="/login" render ={(props) => <Login {...props} />} />
        <Route path="/register" render ={(props) => <Register {...props} />} />
        <Route exact path="/focus" component={OnboardingFocus} />
        <PrivateRoute exact path="/users/:id/focus">
          <Header /> {/* need to pass in a user id prop here */}
          <AreasOfFocus />
        </PrivateRoute>
        <PrivateRoute path="/users/:id/initiatives">
          <Header />
          <Initiatives userId={props.userId} /> {/* need to pass in a user id prop here */}
        </PrivateRoute>
      </MainContainer>
    </AppContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    userId: state.userId
  }
}

export default connect(mapStateToProps, {})(App);