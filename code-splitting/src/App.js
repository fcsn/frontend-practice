import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import withSplitting from './withSplitting';
import { Route, Link } from 'react-router-dom';
import { About, Home } from './pages';

class App extends Component {
  handleMouseOVer = () => {
    About.preload();
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about" onMouseOver={this.handleMouseOVer}>About</Link>
          </li>
        </ul>

        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    )
  }
}

export default App;
