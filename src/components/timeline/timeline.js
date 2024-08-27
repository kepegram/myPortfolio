import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

import "./timeline.css";

const CustomTimeline = ({ title, icon, children }) => {
  return (
    <div className="timeline-container">
      <Timeline className={"timeline"}>
        <TimelineItem className={"timeline_firstItem"}>
          <TimelineDot className={"timeline_dot_header"}>{icon}</TimelineDot>
          <TimelineContent>
            <h1 className={"timeline_header"}>{title}</h1>
          </TimelineContent>
        </TimelineItem>
        {children}
      </Timeline>
    </div>
  );
};

export const CustomTimelineSeparator = () => (
  <TimelineSeparator className={"separator_padding"}>
    <TimelineDot variant={"outlined"} className={"timeline_dot"} />
    <TimelineConnector />
  </TimelineSeparator>
);

export default CustomTimeline;
