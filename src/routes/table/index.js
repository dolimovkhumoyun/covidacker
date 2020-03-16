import React from "react";
import { Grid } from "@material-ui/core";
import RoadTrack from "./organisms/RoadTrack";

const Table = () => {
  return (
    <Grid container>
      <div className="container">
        <RoadTrack />
      </div>
    </Grid>
  );
};

export default Table;
