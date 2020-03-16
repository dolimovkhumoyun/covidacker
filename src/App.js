import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./routes/login";

const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/" component={Login} />
      </Switch>
    </Fragment>
  );
};

export default App;
