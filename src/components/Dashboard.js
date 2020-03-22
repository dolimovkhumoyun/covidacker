import React from "react";
import App from "./layout/AppLayout";
import { Grid } from "@material-ui/core";

const Dashboard = props => {
  return (
    <Grid container>
      <App props={props} />
    </Grid>
  );
};

export default Dashboard;
