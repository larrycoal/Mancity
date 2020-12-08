import React, { Component } from "react";
import { Promise } from "core-js";
import { firebasePlayers, firebase } from "../../firebase";
import PlayerCard from "../ui/misc/PlayerCard";
import { firbaseLooper } from "../ui/misc";
import { CircularProgress } from "@material-ui/core";
import { Fade } from "react-reveal";
class TheTeam extends Component {
  state = {
    loading: true,
    players: [],
  };
  componentDidMount() {
    firebasePlayers.once("value").then((snapshot) => {
      const players = firbaseLooper(snapshot.val());
      const promises = [];
      for (let key in players) {
        promises.push(
          new Promise((resolve, reject) => {
            firebase
              .storage()
              .ref("players")
              .child(players[key].image)
              .getDownloadURL()
              .then((url) => {
                players[key].imageUrl = url;
                resolve();
              })
              .catch((e) => {
                console.log(e);
              });
          })
        );
      }
      Promise.all(promises).then(() => {
        this.setState({
          loading: false,
          players,
        });
      });
    });
  }
  getPlayerCard(position) {
    return this.state.players.map((player, i) =>
      player.position === position ? (
        <Fade delay={i * 50} left>
          <div className="item" key={i}>
            <PlayerCard
              name={player.name}
              bck={player.imageUrl}
              lastname={player.lastname}
              number={player.number}
            />
          </div>
        </Fade>
      ) : null
    );
  }
  render() {
    return (
      <div className="the_team_container">
        {this.state.loading ? (
          <div>
            <CircularProgress />
          </div>
        ) : (
          <div className="team_category_wrapper">
            <div className="title">KEEPER</div>
            <div className="team_cards">{this.getPlayerCard("Keeper")}</div>
            <div className="title">DEFENCE</div>
            <div className="team_cards">{this.getPlayerCard("Defence")}</div>
            <div className="title">MIDFIELD</div>
            <div className="team_cards">{this.getPlayerCard("Midfield")}</div>
            <div className="title">STRIKER</div>
            <div className="team_cards">{this.getPlayerCard("Striker")}</div>
          </div>
        )}
      </div>
    );
  }
}

export default TheTeam;
