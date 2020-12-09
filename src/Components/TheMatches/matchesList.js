import React, { useState, useEffect } from "react";
import { NodeGroup } from "react-move";
import { easePolyOut } from "d3-ease";

const MatchesList = (props) => {
  const [state, setState] = useState({});

  useEffect(() => {
    setState({
      matches: props.matches,
    });
  }, [props.matches]);

  const showMatches = () =>
    state.matches
      ? state.matches.map((match, i) => (
          <NodeGroup
            data={state.matches}
            keyAccessor={(d) => d.id}
            start={() => ({
              opacity: 0,
              x: -200,
            })}
            enter={(d, i) => ({
              opacity: [1],
              x: [0],
              timing: { duration: 500, delay: i * 50, ease: easePolyOut },
            })}
            update={(d, i) => ({
              opacity: [1],
              x: [0],
              timing: { duration: 500, delay: i * 50, ease: easePolyOut },
            })}
            leave={(d, i) => ({
              opacity: [0],
              x: [-200],
              timing: { duration: 500, delay: i * 50, ease: easePolyOut },
            })}
          >
            {(nodes) => (
              <div>
                {nodes.map(({ key, data, state: { x, opacity } }) => (
                  <div key={key} 
                  className="match_box_big" 
                  style={{
                      opacity,
                      transform:`translate(${x}px)`
                  }}>
hello
                  </div>
                ))}
              </div>
            )}
          </NodeGroup>
        ))
      : null;

  return (
      <div>
          {showMatches()}
      </div>
  );
};

export default MatchesList;
