import React, { useEffect, useRef } from "react";
import "./timeline.css";

const Timeline = ({ experiences }) => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    const timelineItems = document.querySelectorAll(".timeline-item");
    timelineItems.forEach((item, index) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(30px)";
      item.style.transition = `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${
        index * 0.2
      }s`;
      observer.observe(item);
    });

    // Add parallax effect
    const handleScroll = () => {
      if (timelineRef.current) {
        const items = timelineRef.current.querySelectorAll(".timeline-content");
        items.forEach((item) => {
          const rect = item.getBoundingClientRect();
          const centerPosition = window.innerHeight / 2;
          const distanceFromCenter = centerPosition - rect.top;
          const parallaxValue = distanceFromCenter * 0.03;

          if (rect.top < window.innerHeight && rect.bottom > 0) {
            item.style.transform = `translateY(${parallaxValue}px)`;
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="timeline" ref={timelineRef}>
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
