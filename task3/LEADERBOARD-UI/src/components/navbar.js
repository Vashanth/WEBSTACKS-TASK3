import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Router from 'react-router-dom';
import './navbar.css'; 
class NavBar extends Component {

  render() {
  	
      return (
        <div>
     <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="mx-auto order-0">
        <a class="navbar-brand mx-auto" href="#"><h4><strong>WEBSTACKS</strong></h4></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
            <span class="navbar-toggler-icon"></span>
        </button>
    </div>
    <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                    <a class="nav-link" href="./login.js">Login</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Signup</a>
            </li>
             <li class="nav-item active">
                <a class="nav-link" href="#">Leaderboard</a>
            </li>
        </ul>
    </div>
</nav>
</div>
    );
  }
}

export default NavBar;
