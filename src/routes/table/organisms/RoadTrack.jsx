import React, { useEffect, useState } from "react";
import CustomTimeline from "../moleculas/CustomTimeline";
import { getRoadTrack } from "../api";

const RoadTrack = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getRoadTrack(setData);
  }, []);

  return <CustomTimeline data={data} />;
};

export default RoadTrack;
