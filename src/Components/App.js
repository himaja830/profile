import React from "react";
import LoginCard from "./loginPage";
import ProfilePage from "./profilePage";

function App() {
  function getPage() {
    const route = window.location.pathname;
    if (route === "/Myprofile") return <ProfilePage />;
    if (route === "/Login") return <LoginCard />;
    return <LoginCard />;
  }
  return <div className="container-fluid">{getPage()}</div>;
}

export default App;
