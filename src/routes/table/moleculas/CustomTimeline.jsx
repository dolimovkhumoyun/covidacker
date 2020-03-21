import React, { Fragment } from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const CustomTimeline = ({ data, total }) => {
  const renderTimelineElements = (item, index, length) => {
    return (
      <VerticalTimelineElement
        key={index}
        className="vertical-timeline-element--work"
        contentStyle={
          index % 2 === 0
            ? {}
            : { background: "rgb(33, 150, 243)", color: "#fff" }
        }
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
        icon={<Fragment>{total - index}</Fragment>}
        style={{ width: "80vw" }}
      >
        <h3 className="vertical-timeline-element-title">{item.name}</h3>
        <h4 className="vertical-timeline-element-subtitle">
          {item.district}, {item.region}
        </h4>
        <p style={{ display: "none" }}>
          Creative Direction, User Experience, Visual Design, Project
          Management, Team Leading
        </p>
      </VerticalTimelineElement>
    );
  };

  return (
    <VerticalTimeline
      animate={false}
      style={{ marginBottom: 50, width: "80%" }}
    >
      {data.map((item, index, data) =>
        renderTimelineElements(item, index, data.length)
      )}
    </VerticalTimeline>
  );
};

export default CustomTimeline;
