import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import { AuthProvider } from './Auth';
import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
          <PrivateRoute exact path="/" component={Home}/>
          <Route exact path="/fakebook" component={Login}/>
          <Route exact path="/signup" component={SignUp}/>
      </Router>
    </AuthProvider>
  );
};

export default App;
