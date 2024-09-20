import ProjectItem from "./items/projectItems";
import {
  MdOutlineHorizontalRule,
  MdLock,
  MdVideoLibrary,
  MdCalculate,
  MdWeb,
} from "react-icons/md";
import "./project.css";

export default function Projects() {
  const projectsList = [
    {
      projectId: 0,
      title: "myPassword",
      description:
        "myPassword is a React Native application that allows you to generate passwords based on your set criteria. (Created with Expo CLI)",
      url: "https://snack.expo.dev/@kpegra1/github.com-kepegram-mypassword",
      icon: <MdLock color="#007bff" />,
    },
    {
      projectId: 1,
      title: "myYoutubeClone",
      description:
        "myYoutubeClone is a React Native appplication that matches the UI of the Youtube application. Download the latest version of Youtube and compare! (Created with RN CLI)",
      url: "https://github.com/kepegram/myYouTubeClone",
      icon: <MdVideoLibrary color="#007bff" />,
    },
    {
      projectId: 2,
      title: "myWeather",
      description:
        "myCalculator is a React Native appplication that is a real-time weather app. Fetches data from OpenWeather API and presents it to the user  (Created with Expo CLI)",
      url: "https://github.com/kepegram/myWeather",
      icon: <MdCalculate color="#007bff" />,
    },
    {
      projectId: 3,
      title: "myPorfolio",
      description:
        "myPorfolio is the site you are browsing now. (Created using React.js)",
      url: "https://kepegram.github.io/myPortfolio/",
      icon: <MdWeb color="#007bff" />,
    },
  ];

  return (
    <div className="p" id="projects">
      <h1 className="p-title">Projects</h1>
      <MdOutlineHorizontalRule color="#007bff" />
      <ul className="p-list-container">
        {projectsList.map((projectDetails) => (
          <ProjectItem
            key={projectDetails.projectId}
            projectDetails={projectDetails}
            icon={projectDetails.icon}
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
