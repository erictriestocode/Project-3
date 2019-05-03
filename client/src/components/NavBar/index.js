//set imports
import React from "react";
import "./style.css";

function Navbar(props){
  return (
    <div>
    <nav>
    <div class="nav-wrapper blue darken-4">
      <a href="#!" class="brand-logo center">ThisforThat</a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li><a href="#">My Profile</a></li>
        <li><a href="#">Search People</a></li>
        <li><a href="#">Transactions</a></li>
      </ul>
    </div>
  </nav>
  </div>
  );
  // <ul class="sidenav" id="mobile-demo">
  //   <li>
  //     <div class="user-view">
  //       <div class="background blue lighten-2"></div>
  //       <a href="#user">
  //         <img class="circle" src="avatar.png" />
  //       </a>
  //       <a href="#name">
  //         <span class="white-text name">User Name</span>
  //       </a>
  //     </div>
  //   </li>
  //   <li>
  //     <a href="#"><i class="material-icons">person</i>My Profile</a>
  //   </li>
  //   <li>
  //     <a href="#"><i class="material-icons">search</i>Search People</a>
  //   </li>
  //   <li>
  //     <a href="#"><i class="material-icons">timer</i>Transactions</a>
  //   </li>
  // </ul>
  // <br>
    
}
 

export default Navbar

