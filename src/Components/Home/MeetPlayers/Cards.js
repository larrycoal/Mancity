import React, { useState } from "react";
import { Animate } from "react-move";
import {easePolyOut} from "d3-ease"
import PlayerCard from "../../ui/misc/PlayerCard"
import Otamendi from "../../../Resources/images/players/Otamendi.png"

const Cards = (props) => {
  let { show } = props;

  let [cards] = useState([
    {
      left: "300px",
      bottom: "90px",
      delay:300
    },
    {
      bottom: "60px",
      left: "200px",
      delay:200,
    },
    {
      bottom: "30px",
      left: "100px",
      delay:100,
    },
    {
      bottom: "0px",
      left: "0px",
      delay:0
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
          timing:{delay:card.delay,duration:200,ease:easePolyOut}
        }}
        >
          {({left,bottom,opacity}) => {
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
              bck={Otamendi}
              number="30"
              name="Otamendi"
              lastname="micheal"
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
