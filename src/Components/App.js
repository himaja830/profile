import React from "react";
import LoginCard from "./loginPage";
import ProfilePage from "./profilePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LoginCard} />
          <Route path="/myprofile" component={ProfilePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
