import ProjectItem from "./items/projectItems";
import calculator from "../../assets/project-imgs/calc-square.png";
import password from "../../assets/project-imgs/lock-square.png";
import youtube from "../../assets/project-imgs/youtube-square.png";
import porfolio from "../../assets/project-imgs/porfolio.png";
import "./project.css";

export default function Projects() {
  const projectsList = [
    {
      projectId: 0,
      image: password,
      title: "myPassword",
      description:
        "myPassword is a React Native application that allows you to generate passwords based on your set criteria. (Created with Expo CLI)",
      url: "https://snack.expo.dev/@kpegra1/github.com-kepegram-mypassword",
    },
    {
      projectId: 1,
      image: youtube,
      title: "myYoutubeClone",
      description:
        "myYoutubeClone is a React Native appplication that matches the UI of the Youtube application. Download the latest version of Youtube and compare! (Created with RN CLI)",
      url: "https://github.com/kepegram/myYouTubeClone",
    },
    {
      projectId: 2,
      image: calculator,
      title: "myCalculator",
      description:
        "myCalculator is a React Native appplication that is a fully functional calculator. (Created with Expo CLI)",
      url: "https://snack.expo.dev/@kpegra1/github.com-kepegram-mycalculator",
    },
    {
      projectId: 3,
      image: porfolio,
      title: "myPorfolio",
      description:
        "myPorfolio is the site you are browsing now. (Created using React.js)",
      url: "https://kepegram.github.io/myPortfolio/",
    },
  ];
  return (
    <div className="p" id="projects">
      <h1 className="p-title">projects</h1>
      <ul className="p-list-container">
        {projectsList.map((projectDetails) => (
          <ProjectItem
            key={projectDetails.projectId}
            projectDetails={projectDetails}
          />
        ))}
      </ul>
      <h2
        className="p-sub"
        onClick={() =>
          window.open("https://github.com/kepegram?tab=repositories", "_blank")
        }
        style={{ cursor: "pointer" }}
      >
        see all
      </h2>
    </div>
  );
}
