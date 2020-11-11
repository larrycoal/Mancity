import React, { useState } from "react";
import { Animate } from "react-move";
import {easePolyOut} from "d3-ease"
import PlayerCard from "../../ui/misc/PlayerCard"
import hakim from "../../../Resources/images/Hakim.png"
import Pulisic from "../../../Resources/images/pulisic.png"
import havertz from "../../../Resources/images/havertz.png"
import timo from "../../../Resources/images/timo.png"

const Cards = (props) => {
  let { show } = props;

  let [cards] = useState([
    {
      left: "300px",
      bottom: "90px",
      delay:300,
      bck:`${Pulisic}`
    },
    {
      bottom: "60px",
      left: "200px",
      delay:200,
      bck:`${havertz}`
    },
    {
      bottom: "30px",
      left: "100px",
      delay:100,
      bck:`${timo}`
    },
    {
      bottom: "0px",
      left: "0px",
      delay:0,
      bck:`${hakim}`
    },
  ]);
 
  const showCards = () => (
    cards.map((card,i) => {
      return (
        <Animate 
        key={i}
        show={show}
        
        start={{
          left:0,
          bottom:0,
          opacity:0
        }}
        enter={{
          left:card.left,
          bottom:card.bottom,
          opacity:1,
          bck:card.bck,
          timing:{delay:card.delay,duration:200,ease:easePolyOut}
        }}
        >
          {({left,bottom,opacity,bck}) => {
            return (
            <div
            style={{
              position:"absolute",
              left,
              bottom,
              opacity
            }}
            >
              <PlayerCard
              bck={bck}
              number="22"
              name="Hakim"
              lastname="ziyech"
              />
            </div>
            )}}
        </Animate>
      );
    })
  );
  return <div>{showCards()}</div>;
};

export default Cards;
