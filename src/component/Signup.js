import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component {
  constructor(props){
    super(props);
    this.onSignup = this.onSignup.bind(this)
  }

  onSignup(event) {
    event.preventDefault();
    const url = 'http://localhost:3001/api/users';
    const data = {
      name: this.refs.name.value,
      email:this.refs.email.value,
      password: this.refs.pass.value,
    };

    axios.post(url, data).then(response => {
      console.log(response);
    }).catch( err => {
      console.log("err yanny");
      console.log(err);
    })
    // headers.append("Content-Type", "application/json");
  }


  render() {
    return(
      <div>
        <h1>Signup Account</h1>
        <form onSubmit={this.onSignup}>
          <input type="text" ref="name" placeholder="Name" />
          <input type="text" ref="email" placeholder="Email" />
          <input type="password" ref="pass" placeholder="Password" />
          <input type="password" placeholder="Confirmation password" />
          <button type="submit">Create</button>
        </form>
      </div>
    )
  }
}

export default Signup;
