import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "../../routes/main-page";
import Table from "../../routes/table";
import MapView from "../../routes/map-view";
import Profile from "../../routes/profile";

const AppContent = ({ props }) => {
  console.log(props);
  const { url } = props.match;
  console.log(`${url}`);
  return (
    <React.Fragment>
      <Switch>
        <Route path="/main/profile" component={Profile} />
        <Route path="/main/map" component={MapView} />
        <Route path="/main/table" component={Table} />
        <Route path="/" component={Main} />
      </Switch>
    </React.Fragment>
  );
};

export default AppContent;
