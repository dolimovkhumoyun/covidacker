import React, { Component } from "react";

import { Map, TileLayer, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";

class FlightMap extends Component {
  state = {
    lat: 41.2995,
    lng: 69.2401,
    zoom: 5,
    data: [
      {
        from_lat: "41.2995",
        from_long: "69.2401",
        id: "132512",
        to_lat: "40.8154",
        to_long: "72.2837"
      },
      {
        from_lat: "45.2995",
        from_long: "69.2401",
        id: "132512",
        to_lat: "45.8154",
        to_long: "72.2837"
      }
    ]
  };

  render() {
    const position = [this.state.lat, this.state.lng];

    return (
      <div id="map" style={{ position: "absolute", top: 0, bottom: 70, width: "100%" }}>
        <Map style={{ height: "100%" }} center={position} zoom={this.state.zoom}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {this.state.data.map(({ id, from_lat, from_long, to_lat, to_long }) => {
            return (
              <Polyline
                key={id}
                positions={[
                  [from_lat, from_long],
                  [to_lat, to_long]
                ]}
                color={"red"}
              />
            );
          })}
        </Map>
      </div>
    );
  }
}

export default FlightMap;
