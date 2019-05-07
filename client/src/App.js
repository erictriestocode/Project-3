// import React from 'react';
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
// import Home from './components/Home';
import SigninForm from './components/SigninForm';
import LandingPage from "./components/LandingPage";

class App extends Component {
  render() {
    return (
      <div>
      <Navbar/>
      <BrowserRouter>
        <Switch>
        <Route exact path="/" component={LandingPage} />
          <Route path="/SigninForm" component={SigninForm} />
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;

