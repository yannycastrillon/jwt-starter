import React, { Component } from 'react';
import axios from 'axios';
import clientAuth from '../clientAuth/clientAuth.js';
import logo from '../logo/logo.svg';
import '../css/App.css';

import Login from './Login.js';
import Signup from './Signup.js';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      users:[],
      loading:true,
      loggedIn: false,
      currentUser:null,
      flashMsg: null,
      view:'home'
    }
    this._setView = this._setView.bind(this);
    this._handleSignup = this._handleSignup.bind(this);
    this._handleLogout = this._handleLogout.bind(this);
  };

  // when component actual mounts you do your API calls
  componentDidMount() {
    const currentUser = clientAuth.getCurrentUser();
    this.setState({
      currentUser: currentUser,
      loggedIn: !!currentUser
    })
  };

  _setView(evt){
    evt.preventDefault();
    console.log(evt.target.name);
    const view = evt.target.name;
    this.setState({
      view: view
    })
  };

  _handleSignup(data) {
    console.log("_handleSignup is executing");
    this.setState({
      currentUser:data.user,
      flashMsg:data.msg,
      loggedIn:data.loggedIn,
      view:'home'
    })
  };

  _handleLogout(evt) {
    evt.preventDefault();
    clientAuth.logOut().then( (data) => {
      this.setState({
        currentUser: null,
        flashMsg: data.msg,
        view: 'home',
      })
    });
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2> {this.state.login ? this.state.currentUser.name : 'Not Logged in'} </h2>
          <ul>
            <button name="signup" onClick={this._setView} > Signup Component</button>
            <button name="login" onClick={this._setView}> Login Component</button>
            <button onClick={this._handleLogout}> Logout</button>
          </ul>
          <h2>Welcome to React</h2>
        </div>
        <div>{this.state.flashMsg}</div>
        <div>
          {{
              home: <h1>Home</h1>,
              login: <Login _handleLoggeIn=""/>,
              signup: <Signup _handleSignup={this._handleSignup}/>,
          }[this.state.view]}
        </div>
      </div>
    );
  }
}

export default App;
