import React, { Fragment } from "react";

import {
  YMaps,
  Map,
  GeoObject,
  Placemark,
  ZoomControl
} from "react-yandex-maps";

const RouteMap = ({ coords }) => {
  const reverseLatLong = array => {
    let reversed = [];
    array.map(a => reversed.push(a.reverse()));
    return reversed;
  };

  let coordinates = [];
  if (
    coords.length !== 0 &&
    coords[0].hasOwnProperty("geometry") &&
    coords[0].geometry !== null
  ) {
    coordinates = coords[0].geometry.coordinates;
  }

  return (
    <div
      id="map"
      style={{ position: "absolute", top: 0, bottom: 70, width: "100%" }}
    >
      <YMaps>
        <Map
          defaultState={{
            bounds: [
              [37.16636, 55.97708],
              [45.598, 73.17463]
            ],
            center: [41.3775, 64.5853],
            zoom: 5
          }}
          width="100%"
          height="100%"
        >
          {coordinates.map((c, index) => (
            <Fragment key={index}>
              <GeoObject
                geometry={{
                  type: "LineString",
                  coordinates: reverseLatLong(c)
                }}
                options={{
                  geodesic: true,
                  strokeWidth: 5,
                  strokeColor: "#F008"
                }}
                key={index}
              />

              {c.map((mark, index) => (
                <Placemark
                  key={index}
                  geometry={mark}
                  hint="ss"
                  options={{
                    balloonPanelMaxMapArea: 0,
                    openEmptyBalloon: true
                  }}
                  properties={{
                    balloonContent: `${coords[0].props.post_names[index]}<br/>${coords[0].props.dates[index]}`,
                    hintOpenTimeout: 100, //default=150
                    hintCloseTimeout: 1
                  }}
                  modules={["geoObject.addon.balloon"]}
                />
              ))}
            </Fragment>
          ))}
          <ZoomControl options={{ float: "right" }} />
        </Map>
      </YMaps>
    </div>
  );
};

export default RouteMap;
