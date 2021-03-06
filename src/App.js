import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route path="/" component={Dashboard} />
      </Switch>
    </Fragment>
  );
};

export default App;
