import React, { Component } from 'react';
import clientAuth from '../clientAuth/clientAuth.js'
import axios from 'axios';

class Signup extends Component {
  constructor(props){
    super(props);
    this._onSignup = this._onSignup.bind(this)
  }

  // To signup a new user
  _onSignup(event) {
    event.preventDefault();
    const userInfo = {
      name:this.refs.name.value,
      email:this.refs.email.value,
      password:this.refs.password.value,
    }
    clientAuth.signUp(userInfo).then( data => {
      console.log(data);
      this.props.onSignup( () => ({
        user: data.user,
        msg: data.message,
        loggedIn: true
      }))
    });
  }


  render() {
    return(
      <div>
        <h1>Signup Account</h1>
        <form onSubmit={this._onSignup}>
          <input type="text" ref="name" placeholder="Name" />
          <input type="text" ref="email" placeholder="Email" />
          <input type="password" ref="password" placeholder="Password" />
          <input type="password" placeholder="Confirmation password" />
          <button type="submit">Create</button>
        </form>
      </div>
    )
  }
}

export default Signup;
