import React, { Component } from 'react';
import './navbar.css'; 
import image from './card2.png';
import image2 from './card3.jpg';

import image3 from './card4.png';


class Cards extends Component {

  render() {
    
      return (
        <div class="vash">
        <div class="card-deck">
  <div class="card">
    <img class="card-img-top" src={image2} width="10" height="170" alt="Card image"/>
    <div class="card-body left11">
      <h4 class="card-title left11"><b>Vashanth</b></h4>
      <p class="card-text">Hard-worker</p>
  </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={image} width="10" height="170" alt="Card image"/>
    <div class="card-body right11">
      <h4 class="card-title right11"><b>Venkat</b></h4>
      <p class="card-text">Intelligent</p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={image3} width="10" height="170" alt="Card image"/>
    <div class="card-body center11">
      <h4 class="card-title center11"><b>Ragav</b></h4>
      <p class="card-text">Quick-learner</p>
    </div>
  </div>
<br />
  <br />
  
</div>
</div>
    );
  }
}

export default Cards;
