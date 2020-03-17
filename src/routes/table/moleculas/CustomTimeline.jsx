import React, { Fragment } from "react";

import InfiniteScroll from "react-infinite-scroller";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const CustomTimeline = ({ data }) => {
  const renderTimelineElements = (item, index, length) => {
    return (
      <VerticalTimelineElement
        key={index}
        className="vertical-timeline-element--work"
        contentStyle={index % 2 === 0 ? {} : { background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date={item.the_date}
        iconStyle={{
          background: "rgb(33, 150, 243)",
          color: "#fff",
          textAlign: "center",
          fontSize: 24,
          fontWeight: "bold",
          lineHeight: "37px"
        }}
        icon={<Fragment>{length - index}</Fragment>}
      >
        <h3 className="vertical-timeline-element-title">{item.name}</h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
      </VerticalTimelineElement>
    );
  };

  const loadFunc = e => {};

  return (
    <VerticalTimeline animate={false}>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadFunc}
        hasMore={true}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
      >
        {data.map((item, index, data) => renderTimelineElements(item, index, data.length))}
      </InfiniteScroll>
    </VerticalTimeline>
  );
};

export default CustomTimeline;