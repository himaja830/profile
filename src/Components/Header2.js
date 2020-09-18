import React from "react";
import { AppBar } from "@material-ui/core";

function Header2() {
  return (
    <AppBar position="static" style={{ backgroundColor: "black" }}>
      <div style={{ textAlign: "center" }}>
        <h1> My Profile</h1>
        <p>Here are my Profile Details</p>
      </div>
    </AppBar>
  );
}
export default Header2;
