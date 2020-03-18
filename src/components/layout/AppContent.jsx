import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "../../routes/main-page";
import Table from "../../routes/table";
import MapView from "../../routes/map-view";
import Profile from "../../routes/profile";

const AppContent = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/dashboard/profile" component={Profile} />
        <Route path="/dashboard/map" component={MapView} />
        <Route path="/dashboard/table" component={Table} />
        <Route path="/dashboard" component={Main} />
      </Switch>
    </React.Fragment>
  );
};

export default AppContent;
