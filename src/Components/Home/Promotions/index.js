import React from "react";
import Animation from "./animation";
import Enroll from './Enroll'

const Promotions = () => {
  return (
    <div
      className="promotion_wrapper"
      style={{
        background: "#ffffff",
      }}
    >
      <div className="container">
        <Animation />
        <Enroll/>
      </div>
      
    </div>
  );
};

export default Promotions;
