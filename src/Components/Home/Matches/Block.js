import React, { useEffect, useState } from "react";
import { firebaseMatches } from "../../../firebase";
import { firbaseLooper } from "../../ui/misc";
import{Slide} from 'react-reveal'

import MatchBlock from '../../ui/misc/matchBlock'
const Block = () => {
  const [blocks, setBlocks] = useState({
    matches: [],
  });

  useEffect((blocks) => {
    firebaseMatches
      .limitToLast(6)
      .once("value")
      .then((snapshot) => {
        let matches = firbaseLooper(snapshot.val()).reverse();
        setBlocks({
          matches,
        });
      });
  }, []);
  const showMatches = ({ matches }) => {
    if(matches)
      return  matches.map((match) => (
          <Slide bottom key={match.id}>
          <div className="item">
            <div className="wrapper">
                <MatchBlock
                match={match}
                />
            </div>
          </div>
          </Slide>
        ))
      else{
     return
      } 
  };

  return (
  <div className="home_matches">
      {showMatches(blocks)}
    </div>
  );
};

export default Block;
