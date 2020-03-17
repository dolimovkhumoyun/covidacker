import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "../../routes/main-page";
import Table from "../../routes/table";
import MapView from "../../routes/map-view";

const AppContent = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/dashboard/map" component={MapView} />
        <Route path="/dashboard/table" component={Table} />
        <Route path="/dashboard" component={Main} />
      </Switch>
    </React.Fragment>
  );
};

export default AppContent;
