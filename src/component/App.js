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
      view:'home'
    }
    this._setView = this._setView.bind(this);
  };

  // when component actual mounts you do your API calls
  componentDidMount() {
    const currentUser = clientAuth.getCurrentUser();
    this.setState({
      currentUser: currentUser,
      loggedIn: !!currentUser
    })


    // GET --- API Call to all users
    const url = "http://localhost:3001/api/users";
    axios.get(url).then( response => {
      console.log(response);
      this.setState({
        users: response.data,
        loading:false,
      })
    }).catch(err => {
      console.log(err);
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


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2> {this.state.login ? this.state.currentUser.name : 'Not Logged in'} </h2>
          <ul>
            <button name="signup" onClick={this._setView}> Signup Component</button>
            <button name="login" onClick={this._setView}> Login Component</button>
          </ul>
          <h2>Welcome to React</h2>
        </div>
        <div>
          {{
              home: <h1>Home</h1>,
              login: <Login />,
              signup: <Signup />,
          }[this.state.view]}
        </div>
      </div>
    );
  }
}

export default App;
