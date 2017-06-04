import React, { Component } from 'react'
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001'

class Login extends Component{
  constructor(props){
    super(props);
    this.onLogin = this.onLogin.bind(this);
  }

  onLogin(event) {
    event.preventDefault(); // prevents page to refresh
    const url = "/api/users/login";

    const data = {
      email: this.refs.email.value,
      password: this.refs.password.value,
    };

    axios.post(url, data).then(response => {
           console.log(response);
           let token = response.data.token;

         }).catch(err => {
           console.log(err);
         })
  };

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
        <form onSubmit={this.onLogin}>
          <input type="text" ref="email" placeholder="email"></input>
          <input type="password" ref="password" placeholder="password"></input>
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}

export default Login;
