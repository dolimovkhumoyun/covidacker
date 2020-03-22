import React from "react";
import BottomNav from "../common/BottomNav";
import AppContent from "./AppContent";
import { Grid } from "@material-ui/core";

const App = ({ props }) => {
  return (
    <React.Fragment>
      <Grid container>
        <AppContent props={props} />
        <BottomNav />
      </Grid>
    </React.Fragment>
  );
};

export default App;
