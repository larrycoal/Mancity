import React from "react";
import jersey from "../../../Resources/images/chelseaKit.png";
import { Zoom } from "react-reveal";

const animation = () => {
  return (
    <Zoom>
      <div className="promotion_animation">
        <div className="left">
          <span>win a</span>
          <span>jersey</span>
        </div>
        <div className="right">
          <div
            style={{
              background: `url(${jersey}) no-repeat`,
            }}
          ></div>
        </div>
      </div>
    </Zoom>
  );
};

export default animation;
