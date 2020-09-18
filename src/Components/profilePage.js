import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

import Header2 from "./Header2";
import Profile from "./profile";

export default function ProfilePage() {
  return (
    <div>
      <Header2 />
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar className="app-toolbar">
          <Typography>
            <Link to="/" aria-label="Login page">
              Login
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Profile />
    </div>
  );
}
