import React, { useState } from "react";
import { Animate } from "react-move";
import {easePolyOut} from "d3-ease"

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
      delay:200
    },
    {
      bottom: "30px",
      left: "100px",
      delay:100
    },
    {
      bottom: "0px",
      left: "0px",
      delay:0
    },
  ]);
 
  const showCards = () => {
    return cards.map((card,i) => {
      return (
        <Animate 
        key={i}
        show={show}
        
        start={{
          left:"0px",
          bottom:"0px"
        }}
        enter={{
          left:card.left,
          bottom:card.bottom,
          timing:{ delay:card.delay,duration:1000,ease:easePolyOut}
        }}
        >
          {({left,bottom}) => {
            return <div
            style={{
              position:"absolute",
              left,
              bottom
            }}
            >hello</div>;
          }}
        </Animate>
      );
    });
  };
  return <div>{showCards()}</div>;
};

export default Cards;
