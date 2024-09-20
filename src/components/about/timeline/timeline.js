import React from "react";
import "./timeline.css";

const Timeline = ({ experiences }) => {
  return (
    <div className="timeline">
      {experiences.map((experience, index) => (
        <div
          className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          key={index}
        >
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-date">{experience.date}</div>
            <div className="timeline-title">{experience.title}</div>
            <div className="timeline-org">{experience.organization}</div>
            <p className="timeline-description">{experience.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
