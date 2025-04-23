import { useEffect, useRef } from "react";
import "./projectItems.css";

const ProjectItem = (props) => {
  const { projectDetails } = props;
  const { description, title, url, icon } = projectDetails;
  const cardRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const currentCard = cardRef.current;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observerRef.current.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px",
      }
    );

    if (currentCard) {
      observerRef.current.observe(currentCard);
    }

    return () => {
      if (observerRef.current && currentCard) {
        observerRef.current.unobserve(currentCard);
      }
    };
  }, []);

  return (
    <li className="project-card" ref={cardRef}>
      <div
        className="project-card-inner"
        onClick={() => window.open(url, "_blank")}
      >
        <div className="project-card-header">
          <div className="project-icon-container">{icon}</div>
          <h3 className="project-title">{title}</h3>
        </div>
        <p className="project-description">{description}</p>
        <div className="project-card-footer">
          <span className="view-project">
            View Project
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </li>
  );
};

export default ProjectItem;
