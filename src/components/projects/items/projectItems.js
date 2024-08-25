import "./projectItems.css";

const ProjectItem = (props) => {
  const { projectDetails } = props;
  const { projectId, image, description, title, url } = projectDetails;
  return (
    <>
      <li className="project-item-container">
        <img
          className="project-item-image"
          src={image}
          alt={`project-item ${projectId}`}
          onClick={() => window.open(url, "_blank")}
          style={{ cursor: "pointer" }}
        />
        <div className="project-item-details-container">
          <h1 className="project-item-title">{title}</h1>
          <p className="project-item-description">{description}</p>
        </div>
      </li>
    </>
  );
};

export default ProjectItem;
