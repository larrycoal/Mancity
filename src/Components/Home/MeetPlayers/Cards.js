import React, { useState } from "react";
import { Animate } from "react-move";
import { easePolyOut } from "d3-ease";

const Cards = (props) => {
  const [cards] = useState([
    {
      left: "300px",
      bottom: "90px",
    },
    {
      bottom: "60px",
      left: "200px",
    },
    {
      bottom: "30px",
      left: "100px",
    },
    {
      bottom: "0px",
      left: "0px",
    },
  ]);
  let showAnimatedCards = () => {
    cards.map((card, i) => (
        <Animate
          key={i}
          show={props.show}
          start={{
            left: 0,
            bottom: 0,
          }}
          enter={{
            left: [card.left],
            bottom: [card.bottom],
            timing: { duration: 500, ease: easePolyOut }
          }}
        >
        { console.log("hello")
        }
        </Animate>
    ));
  };
  return <div>{showAnimatedCards()}</div>;
};

export default Cards;
