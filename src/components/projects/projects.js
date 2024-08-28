import ProjectItem from "./items/projectItems";
import { MdOutlineHorizontalRule } from "react-icons/md";
import "./project.css";

export default function Projects() {
  const projectsList = [
    {
      projectId: 0,
      title: "myPassword",
      description:
        "myPassword is a React Native application that allows you to generate passwords based on your set criteria. (Created with Expo CLI)",
      url: "https://snack.expo.dev/@kpegra1/github.com-kepegram-mypassword",
    },
    {
      projectId: 1,
      title: "myYoutubeClone",
      description:
        "myYoutubeClone is a React Native appplication that matches the UI of the Youtube application. Download the latest version of Youtube and compare! (Created with RN CLI)",
      url: "https://github.com/kepegram/myYouTubeClone",
    },
    {
      projectId: 2,
      title: "myCalculator",
      description:
        "myCalculator is a React Native appplication that is a fully functional calculator. (Created with Expo CLI)",
      url: "https://snack.expo.dev/@kpegra1/github.com-kepegram-mycalculator",
    },
    {
      projectId: 3,
      title: "myPorfolio",
      description:
        "myPorfolio is the site you are browsing now. (Created using React.js)",
      url: "https://kepegram.github.io/myPortfolio/",
    },
  ];
  return (
    <div className="p" id="projects">
      <h1 className="p-title">Projects</h1>
      <MdOutlineHorizontalRule />
      <ul className="p-list-container">
        {projectsList.map((projectDetails) => (
          <ProjectItem
            key={projectDetails.projectId}
            projectDetails={projectDetails}
          />
        ))}
      </ul>
      <button
        type="button"
        className="p-button"
        onClick={() =>
          window.open("https://github.com/kepegram?tab=repositories", "_blank")
        }
      >
        See All
      </button>
    </div>
  );
}
