// import React from 'react';
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
// Import Components
import Navbar from "./components/NavBar";
import Home from './components/Home';
import SigninForm from './components/SigninForm';
import LandingPage from "./components/landingPage";
import Help from './components/Help';
import Registration from './components/Registration';
import Transaction from './components/Transaction';


class App extends Component {
  render() {
    return (
      <div>

        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/signinform" component={SigninForm} />
            <Route path="/home" component={Home} />
            <Route path="/help" component={Help} />
            <Route path="/registration" component={Registration} />
            <Route path="/transaction" component={Transaction} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

