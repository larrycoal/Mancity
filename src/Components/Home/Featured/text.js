import React, { Component } from 'react';
import {Animate} from 'react-move'
import {easePolyOut} from 'd3-ease'
import player from '../../../Resources/images/featured_player.png'


class text extends Component {
    showText=()=>(
       <Animate
       show={true}
       start={{
        size:16,
        opacity:0
       }}
       enter={{
        size:[92],
        opacity:[1],
        timing:{delay:700,duration:1000,ease:easePolyOut}
       }}
       >
        {({size, opacity})=>{
        return(
            <div
            className="featured_first"
            style={{
               fontSize:`${size}px`,
               opacity
            }}
            >
            Manchester
            </div>
        )
        }}
       </Animate>
    )
    showText2=()=>(
        <Animate
        show={true}
        start={{
         x:450,
         y:350,
         opacity:0
        }}
        enter={{
        x:[450],
        y:[250],
         opacity:[1],
         timing:{delay:1200,duration:1000,ease:easePolyOut}
        }}
        >
         {({opacity,x,y})=>{
         return(
             <div
             className="featured_second"
             style={{
                top:`${x}px`,
                left:`${y}px`,
                opacity
             }}
             >
             ETHIAD WARRIORS
             </div>
         )
         }}
        </Animate>
     )
     showLogo=()=>(
         <Animate
         show={true}
         start={{
          x:1000,
          y:50,
          opacity:0
         }}
         enter=
         {{
          x:[850],
          y:[50],
          opacity:[1],
          timing:{delay:1500,duration:400,ease:easePolyOut}
         }}
         >
        {({x,y,opacity})=>{
            return(
                <div
                className="featured_player"
                style={{
                  backgroundImage:`url(${player})`,
                  top:`${y}px`,
                  left:`${x}px`,
                  opacity
                }}
                >
                </div>
            )
        }}
         </Animate>
     )
    render() {
        return (
            <div className="featured_text">
                {this.showLogo()}
                {this.showText()}
                {this.showText2()}
            </div>
        );
    }
}

export default text;