import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import {Logo} from "../ui/icons"
const Header = () => {
  return (
    <div>
      <AppBar
        style={{
          position: "fixed",
          backgroundColor: "#98c5e9",
          boxShadow: "none",
          padding: "5px 0",
          borderBottom: "2px solid #00285e",
        }}
      >
        <Toolbar style={{ display: "flex" }}>
          <div
            style={{
              flexGrow: "1",
            }}
          >
            <div className="header_logo">
                <Logo
                linkTo="/"
                link={true}
                height="70px"
                width="70px"
                />
            </div>
          </div>
          <Link to="the_team">
            <Button color="inherit">The-Team</Button>
          </Link>
          <Link to="the_matches">
            <Button color="inherit">Matches</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
