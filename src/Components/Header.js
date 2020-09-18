import React from "react";
import { AppBar } from "@material-ui/core";

function Header() {
  return (
    <AppBar position="static" style={{ backgroundColor: "black" }}>
      <div style={{ textAlign: "center" }}>
        <h1> My Profile</h1>
        <p>Click on login button to view Profile</p>
      </div>
    </AppBar>
  );
}
export default Header;
