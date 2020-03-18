import React from "react";
import { Grid } from "@material-ui/core";
import RoadTrack from "./organisms/RoadTrack";

const Table = () => {
  return (
    <Grid container style={{ backgroundColor: "#F5F5F5", marginBottom: 60 }}>
      <RoadTrack />
    </Grid>
  );
};

export default Table;
