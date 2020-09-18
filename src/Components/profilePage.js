import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Header2 from "./Header2";
import Profile from "./profile";

export default function ProfilePage() {
  return (
    <div>
      <Header2 />
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar className="app-toolbar">
          <a href="/login">Login</a>
        </Toolbar>
      </AppBar>
      <Profile />
    </div>
  );
}
