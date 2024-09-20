import "./projectItems.css";

const ProjectItem = (props) => {
  const { projectDetails } = props;
  const { description, title, url, icon } = projectDetails;
  return (
    <>
      <li className="project-item-container">
        <div
          className="project-item-details-container"
          onClick={() => window.open(url, "_blank")}
        >
          <div className="project-item-icon">{icon}</div>
          <h1 className="project-item-title">{title}</h1>
          <h4 className="project-item-description">{description}</h4>
        </div>
      </li>
    </>
  );
};

export default ProjectItem;
