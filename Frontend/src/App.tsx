import React from "react";
import Login from "./components/auth/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Registration from "./components/auth/Registration";
import APITest from "./components/auth/APItest"

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/registration" exact component={Registration} />
          <Route path="/apiTest" exact component={APITest} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
