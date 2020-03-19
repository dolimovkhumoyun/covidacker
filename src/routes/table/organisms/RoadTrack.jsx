import React, { useEffect, useState } from "react";
import CustomTimeline from "../moleculas/CustomTimeline";
import { getRoadTrack } from "../api";

import InfiniteScroll from "react-infinite-scroll-component";
import LinearProgress from "@material-ui/core/LinearProgress";

const RoadTrack = () => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getRoadTrack(data.length, 6, setData, setTotal);
  }, []);

  const fetchData = e => {
    getRoadTrack(data.length, 6, setData, setTotal);
  };

  const refresh = e => {
    console.log(e);
  };
  return (
    <InfiniteScroll
      dataLength={100} //This is important field to render the next data
      next={fetchData}
      hasMore={total !== data.length}
      loader={""}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
      // below props only if you need pull down functionality
      refreshFunction={refresh}
      pullDownToRefresh
      pullDownToRefreshContent={<h3 style={{ textAlign: "center" }}>&#8595; Pull down to refresh</h3>}
      releaseToRefreshContent={<h3 style={{ textAlign: "center" }}>&#8593; Release to refresh</h3>}
      style={{ width: "100vw" }}
    >
      <CustomTimeline data={data} total={total} />
    </InfiniteScroll>
  );
};

export default RoadTrack;
