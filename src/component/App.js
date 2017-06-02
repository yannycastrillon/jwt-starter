import React, { Component } from 'react';
import logo from '../logo/logo.svg';
import '../css/App.css';

import Login from './Login.js';
import Signup from './Signup.js';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {

    }
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/component/App.js</code> and save to reload.
        </p>
        <Signup />

      </div>
    );
  }
}

export default App;
