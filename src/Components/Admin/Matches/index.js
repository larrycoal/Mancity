import React, { Component } from "react";

import { firebaseMatches } from "../../../firebase";
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

class AdminMatches extends Component {
  state = {
    isLoading: true,
    matches: [],
  };

  componentDidMount() {
    firebaseMatches.once("value").then((snapshot) => {
      var matches = firbaseLooper(snapshot.val()).reverse();
      this.setState({
        isLoading: false,
        matches,
      });
    });
  }

  showMatches() {
    return this.state.matches.map((match, i) => (
      <TableRow key={i}>
        <TableCell>{match.date}</TableCell>
        <TableCell>
        <Link to={`/admin_matches/add_match/${match.id}`}>
            {match.local}
            <strong>-</strong>
            {match.away}
        </Link>
        </TableCell>
        <TableCell>
          {match.resultLocal} <strong>-</strong>
          {match.resultAway}
        </TableCell>
        <TableCell>{match.final === "Yes"?
        "final"
        :
        "Yet to be played"
    }</TableCell>
      </TableRow>
    ));
  }
  render() {
    console.log(this.state.matches);
    return (
      <AdminHoc>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Match</TableCell>
                <TableCell>Result</TableCell>
                <TableCell>Final</TableCell>
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

export default AdminMatches;
