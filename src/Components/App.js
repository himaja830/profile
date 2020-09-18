import React from "react";
import LoginCard from "./loginPage";
import ProfilePage from "./profilePage";
import { HashRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <HashRouter basename="/">
      <div>
        <Switch>
          <Route exact path="/" component={LoginCard} />
          <Route path="/myprofile" component={ProfilePage} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
