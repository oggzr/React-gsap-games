import React, { Component } from 'react';
import {TweenLite, TimelineLite, Bounce} from 'gsap';

class Balls extends Component {

  constructor(props) {
    super(props);

    this.bounce = this.bounce.bind(this);
  }


  bounce(ball) {
    ball = ball.target;
    TweenLite.set(ball, {y:350});
    let tl = new TimelineLite({delay:0.5});
    tl.to(ball, 0.5, {y:0})
    .to(ball, 1.25, {y:350, ease:Bounce.easeOut})
    .to(ball, 2.5, {x:"+=450"}, "-=1.75")
    .to(ball, 1, {x:0,}, "+=1");

  }

  render() {
    return (
      <div className="gameContainer">
        <div className="gameContainer__game">
          <div className="ball red" onClick={this.bounce} id="1337"/>
          <div className="pine"/>
          <div className="basket"/>
        </div>
      </div>
    );
  }

}

export default Balls;
