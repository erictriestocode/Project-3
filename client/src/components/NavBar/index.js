//set imports
import React, { Component } from 'react';
import "./style.css";

class Navbar extends Component {
  render() {
    return (
    <div>
    <nav>
    <div className="nav-wrapper blue darken-4">
      <a href="#!" className="brand-logo center">ThisforThat</a>
      <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down">
        <li><a href="#">My Profile</a></li>
        <li><a href="#">Search People</a></li>
        <li><a href="#">Transactions</a></li>
      </ul>
    </div>
  </nav>
  </div>
  );
    }
  }


  // <ul className="sidenav" id="mobile-demo">
  //   <li>
  //     <div className="user-view">
  //       <div className="background blue lighten-2"></div>
  //       <a href="#user">
  //         <img className="circle" src="avatar.png" />
  //       </a>
  //       <a href="#name">
  //         <span className="white-text name">User Name</span>
  //       </a>
  //     </div>
  //   </li>
  //   <li>
  //     <a href="#"><i className="material-icons">person</i>My Profile</a>
  //   </li>
  //   <li>
  //     <a href="#"><i className="material-icons">search</i>Search People</a>
  //   </li>
  //   <li>
  //     <a href="#"><i className="material-icons">timer</i>Transactions</a>
  //   </li>
  // </ul>
  // <br>
    
 

export default Navbar