import React, { Component } from 'react';


class NavBar extends Component {
  render(){
    let navBarStyle = {
      backgroundColor: "#0000FF",
      showMenu: {
        backgroundColor: "#FFAAFF",
      },
      hidden: {

      },
      ulMenu: {
        listStyleType: "none",
        margin: 0,
        padding: 0,
        position: "abolute",
      }

    }
    return(
      <div style={navBarStyle}>
        <lable htmlFor="showMenu" style={navBarStyle.showMenu}>Show menu</lable>
        <input type="checkbox" id="showMenu" role="button" />
        <ul id="menu" style={navBarStyle.ulMenu}>
          <li> <a href="#"> </a>Home </li>
          <li> <a href="#"> </a>About
            <ul style={navBarStyle.hidden}>
              <li> <a href="#"> </a>Who we are </li>
              <li> <a href="#"> </a>What we Do </li>
            </ul>
          </li>
          <li> <a href="#"> </a>News
            <ul className="hidden">
              <li> <a href="#"> </a>Photography </li>
              <li> <a href="#"> </a>Web &amp; User Interface Design </li>
              <li> <a href="#"> </a>Ilustration </li>
            </ul>
          </li>
          <li> <a href="#"> </a>Contact </li>
        </ul>
      </div>
    )
  }
}

export default NavBar;
