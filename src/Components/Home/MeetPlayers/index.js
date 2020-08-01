import React, { useState } from "react";
import Stripes from "../../../Resources/images/stripes.png";
import { Reveal } from "react-reveal";
import { Tag } from "../../ui/misc";
import PlayerCards from "./Cards";
const MeetPlayers = () => {
  const [show, setShow] = useState(false);
  return (
    <div
      className="home_meetplayers"
      style={{
        background: `#ffffff url(${Stripes})`,
      }}
    >
      <Reveal
        fraction={0.7}
        onReveal={() => {
          setShow(true);
        }}
      >
        <div className="container">
          <div className="home_meetplayers_wrapper">
            <div className="home_card_wrapper">
              <PlayerCards show={show} />
            </div>
            <div className="home_text_wrapper">
              <Tag
                background="#0e1731"
                fontSize="100px"
                color="#ffffff"
                display="inline-block"
                marginBottom="20px"
              >
                Meet
              </Tag>
              <Tag
                background="#0e1731"
                fontSize="100px"
                color="#ffffff"
                display="inline-block"
                marginBottom="20px"
              >
                The
              </Tag>
              <Tag
                background="#0e1731"
                fontSize="100px"
                color="#ffffff"
                display="inline-block"
                marginBottom="20px"
              >
                Players
              </Tag>
              <Tag
                color="#0e1731"
                fontSize="22px"
                background="#ffffff"
                display="inline-block"
                marginBottom="10px"
                border="1px solid #0e1731"
                link={true}
                linkto="/the_team"
              >
                meet the team
              </Tag>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default MeetPlayers;
