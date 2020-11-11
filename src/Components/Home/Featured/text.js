import React, { Component } from "react";
import { Animate } from "react-move";
import { easePolyOut } from "d3-ease";
import player from "../../../Resources/images/havertz.png";
import pulisic from "../../../Resources/images/pulisic.png";
import timo from "../../../Resources/images/timo.png";

class text extends Component {
  showText = () => (
    <Animate
      show={true}
      start={{
        size: 16,
        opacity: 0,
      }}
      enter={{
        size: [92],
        opacity: [1],
        timing: { delay: 2500, duration: 1000, ease: easePolyOut },
      }}
    >
      {({ size, opacity }) => {
        return (
          <div
            className="featured_first"
            style={{
              fontSize: `${size}px`,
              opacity,
            }}
          >
            CHELSEA FC
          </div>
        );
      }}
    </Animate>
  );
  showText2 = () => (
    <Animate
      show={true}
      start={{
        x: 450,
        y: 350,
        opacity: 0,
      }}
      enter={{
        x: [450],
        y: [250],
        opacity: [1],
        timing: { delay: 1200, duration: 1000, ease: easePolyOut },
      }}
    >
      {({ opacity, x, y }) => {
        return (
          <div
            className="featured_second"
            style={{
              top: `${x}px`,
              left: `${y}px`,
              opacity,
            }}
          >
            ETHIAD WARRIORS
          </div>
        );
      }}
    </Animate>
  );
  showHavertz = () => (
    <Animate
      show={true}
      start={{
        x: 1000,
        y: 50,
        opacity: 0,
      }}
      enter={{
        x: [700],
        y: [150],
        opacity: [1],
        timing: { delay: 1000, duration: 400, ease: easePolyOut },
      }}
    >
      {({ x, y, opacity }) => {
        return (
          <div
            className="featured_player"
            style={{
              backgroundImage: `url(${player})`,
              top: `${y}px`,
              left: `${x}px`,
              backgroundSize:"contain",
              opacity,
            }}
          ></div>
        );
      }}
    </Animate>
  );
  showPulisic = () => (
    <Animate
      show={true}
      start={{
        x: 100,
        y: 50,
        opacity: 0,
      }}
      enter={{
        x: [0],
        y: [100],
        opacity: [1],
        timing: { delay: 1500, duration: 400, ease: easePolyOut },
      }}
    >
      {({ x, y, opacity }) => {
        return (
          <div
            className="featured_player"
            style={{
              backgroundImage: `url(${pulisic})`,
              top: `${y}px`,
              left: `${x}px`,
              backgroundSize:"contain",
              opacity,
            }}
          ></div>
        );
      }}
    </Animate>
  );
  showTimo = () => (
    <Animate
      show={true}
      start={{
        x: 0,
        opacity: 0,
      }}
      enter={{
        x: [700],
        opacity: [1],
        timing: { delay: 2000, duration: 500, ease: easePolyOut },
      }}
    >
      {({ x,  opacity }) => {
        return (
          <div
            className="featured_player"
            style={{
              backgroundImage: `url(${timo})`,
              top: `80px`,
              left: `300px`,
              backgroundSize:`${x}px`,
              opacity,
            }}
          ></div>
        );
      }}
    </Animate>
  );
  render() {
    return (
      <div className="featured_text">
        {this.showHavertz()}
        {this.showPulisic()}
        {this.showTimo()}
        {this.showText()}
      </div>
    );
  }
}

export default text;
