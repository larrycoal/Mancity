import React, { Component } from "react";

import { firebasePlayers } from "../../../firebase";
import { firbaseLooper } from "../../ui/misc";
import AdminHoc from "../../Layout/AdminHoc";

import { Link } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";

class AdminPlayers extends Component {
  state = {
    isLoading: true,
    players: [],
  };

  componentDidMount() {
    firebasePlayers.once("value").then((snapshot) => {
      const players = firbaseLooper(snapshot.val());
      this.setState({
        isLoading: false,
        players,
      });
    });
  }
  showMatches() {
    return this.state.players.map((player, i) => (
      <TableRow key={i}>
        <TableCell>
          <Link to={`/admin_players/${player.id}`}>{player.name}</Link>
        </TableCell>
        <TableCell>{player.lastname}</TableCell>
        <TableCell>{player.number}</TableCell>
        <TableCell>{player.position}</TableCell>
      </TableRow>
    ));
  }
  render() {
    return (
      <AdminHoc>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Number</TableCell>
                <TableCell>Position</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.isLoading ? (
                <div
                  className="admin_progress"
                  style={{
                    display: "flex",
                    width: "100vw",
                    justifyContent: "center",
                  }}
                >
                  <CircularProgress />
                </div>
              ) : (
                this.showMatches()
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </AdminHoc>
    );
  }
}

export default AdminPlayers;
