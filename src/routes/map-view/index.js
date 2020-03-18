import React, { useEffect, useState } from "react";
import RouteMap from "./organisms/RouteMap";
import { Grid } from "@material-ui/core";
import { getMap } from "./api/index";

const MapView = () => {
  const [cords, setCoords] = useState([]); // coordinates

  useEffect(() => {
    getMap(setCoords);
  }, []);

  return (
    <Grid container>
      <RouteMap coords={cords} />
    </Grid>
  );
};

export default MapView;
