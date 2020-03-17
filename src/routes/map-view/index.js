import React, { useState } from "react";
import FlightMap from "./organisms/FlightMap";
import { Grid } from "@material-ui/core";

const MapView = () => {
  const [markerPosition, setMarkerPosition] = useState({
    lat: 49.8419,
    lng: 24.0315
  });
  const { lat, lng } = markerPosition;

  function moveMarker() {
    setMarkerPosition({
      lat: lat + 0.0001,
      lng: lng + 0.0001
    });
  }

  return (
    <Grid container>
      <FlightMap markerPosition={markerPosition} />
    </Grid>
  );
};

export default MapView;
