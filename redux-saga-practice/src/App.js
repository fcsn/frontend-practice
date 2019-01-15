import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import * as Actions from './actions';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import UsersPage from './pages/UsersPage';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Navigation/>
            <Route exact path="/" component={MainPage}/>
            <Route path="/users/:id" component={UsersPage}/>
          </div>
        </Router>
    );
  }
}

export default App;
