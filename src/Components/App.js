import React from "react";
import LoginCard from "./loginPage";
import ProfilePage from "./profilePage";
import { HashRouter, Route, Switch } from "react-router-dom";
//Created App Component and Routing using React-Router.
//Used HashRouter Instead of Router/BrowseRouter to prevent deployment issues via github.
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
