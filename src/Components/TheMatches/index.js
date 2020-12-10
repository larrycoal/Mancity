import React, { Component } from "react";
import { firebaseMatches } from "../../firebase";
import { firbaseLooper } from "../ui/misc";

import MatchesList from "./matchesList";
import Table from "./table";

class TheMatches extends Component {
  state = {
    loading: true,
    matches: [],
    filterMatches: [],
  };

  componentDidMount() {
    firebaseMatches.once("value").then((snapshot) => {
      const matches = firbaseLooper(snapshot.val());
      this.setState({
        loading: false,
        matches: matches,
        filterMatches: matches,
      });
    });
  }
  filterMatch(played) {
     const matches = this.state.matches.filter((match)=>{
        return match.final === played
    })
    this.setState({
        filterMatches:matches
    })
  }
  render() {
    return (
      <div className="the_matches_container">
        <div className="the_matches_wrapper">
          <div className="left">
            <div className="match_filters">
              <div className="match_filters_box">
                <div className="tag">Show Match</div>
                <div className="cont">
                  <div className={`option`}  onClick={()=>this.filterMatch("Yes")}>All</div>
                  <div className={`option`} onClick={()=>this.filterMatch("Yes")}>
                    Played
                  </div>
                  <div className={`option`}
                  onClick={()=>this.filterMatch("No")}
                  >Not Played</div>
                </div>
              </div>
            </div>
            <MatchesList matches={this.state.filterMatches} />
          </div>
          <div classname="right">
            <Table />
          </div>
        </div>
      </div>
    );
  }
}

export default TheMatches;
