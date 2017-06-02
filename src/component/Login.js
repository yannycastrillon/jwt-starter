import React, { Component } from 'react'

class Login extends Component{

  onLogin(event) {
    // prevents page to refresh
    event.preventDefault();
    console.log(this.refs);
    // $.ajax({
    //   url:"api/users/login",
    //   method:"post",
    //
    // }).done();
  };


  render() {
    return(
      <div>
        <h1>Login Component</h1>
        <form onSubmit={this.onLogin.bind(this)}>
          <input type="text" ref="email" placeholder="email"></input>
          <input type="password" ref="password" placeholder="password"></input>
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}

export default Login;
