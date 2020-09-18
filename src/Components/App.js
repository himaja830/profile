import React from "react";
import LoginCard from "./loginPage";
import ProfilePage from "./profilePage";

function App() {
  function getPage() {
    const route = window.location.pathname;
    if (route === process.env.PUBLIC_URL + "/Myprofile") return <ProfilePage />;
    if (route === process.env.PUBLIC_URL + "/Login") return <LoginCard />;
    return <LoginCard />;
  }
  return <div className="container-fluid">{getPage()}</div>;
}

export default App;
