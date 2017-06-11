import React, { Component } from 'react';

import clientAuth from '../clientAuth/clientAuth.js';
import logo from '../logo/logo.svg';
import '../css/App.css';

import Login from './Login.js';
import Signup from './Signup.js';
import NavBar from './NavBar.js';

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
    this._signup = this._signup.bind(this);
    this._logout = this._logout.bind(this);
    this._login = this._login.bind(this);
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

  _login(credentials) {
    clientAuth.logIn(credentials).then( data => {
      this.setState({
        currentUser: data.user,
        loggedIn: data.loggedIn,
        flashMsg: data.msg,
        view: 'home'
      })
    })
  }

  _signup(data) {
    console.log("_signup is executing");
    this.setState({
      currentUser:data.user,
      flashMsg:data.msg,
      loggedIn:data.loggedIn,
      view:'home'
    })
  };

  _logout(evt) {
    evt.preventDefault();
    clientAuth.logOut().then( data => {
      this.setState({
        loggedIn: false,
        currentUser: null,
        flashMsg: data.msg,
        view: 'home',
      })
    });
  }

  render() {
    return (
      <div className="App">
      <NavBar />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2> {this.state.loggedIn ? this.state.currentUser.name : 'Not Logged in'} </h2>
          <ul>
            <li><button name="signup" onClick={this._setView} > Signup Component</button></li>
            <li><button name="login" onClick={this._setView}> Login Component</button></li>
            <li><button onClick={this._logout}> Logout </button></li>
          </ul>
        </div>
        <div>{this.state.flashMsg}</div>
        <div>
          {{
            home: <h1>Home</h1>,
            login: <Login onLogin={this._login}/>,
            signup: <Signup onSignup={this._signup}/>,
          }[this.state.view]}
        </div>
      </div>
    );
  }
}

export default App;
