import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "../../routes/main-page";
import Table from "../../routes/table";
import MapView from "../../routes/map-view";
import Profile from "../../routes/profile";
import Login from "./../../routes/login/index";

const AppContent = ({ props }) => {
  const { url } = props.match;
  return (
    <React.Fragment>
      <Switch>
        <Route path="/main/profile" component={Profile} />
        <Route path="/main/map" component={MapView} />
        <Route path="/main/table" component={Table} />
        <Route path="/main" component={Main} />
        <Route path="/" component={Login} />
      </Switch>
    </React.Fragment>
  );
};

export default AppContent;
