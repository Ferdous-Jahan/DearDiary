import React from "react";
import Login from "./components/auth/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Registration from "./components/auth/Registration";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/registration" exact component={Registration} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
