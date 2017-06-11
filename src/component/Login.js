import React, { Component } from 'react'
import axios from 'axios';
import clientAuth from '../clientAuth/clientAuth.js'

axios.defaults.baseURL = 'http://localhost:3001'

class Login extends Component {
  constructor(props){
    super(props);
    this._handleLogin = this._handleLogin.bind(this);
  };

  _getCredentials(){
    return ({
      email: this.refs.email.value,
      password: this.refs.password.value,
    })
  }

  _handleLogin(evt) {
    evt.preventDefault()
    this.props.onLogin(this._getCredentials())
  }

  render() {
    let loginStyle = {
      padding: 10,
      margin: 10,
      fontSize: "sans-serif",
      backgroundColor:"#FF9900",
    };
    return(
      <div style={loginStyle}>
        <h1>Login Component</h1>
        <form onSubmit={this._handleLogin}>
          <input type="text" ref="email" placeholder="email"></input>
          <input type="password" ref="password" placeholder="password"></input>
          <button type="submit">Login</button>
        </form>
      </div>
    )
  };
}

export default Login;
