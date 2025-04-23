import ProjectItem from "./items/projectItems";
import {
  MdFlightTakeoff,
  MdVideoLibrary,
  MdCalculate,
  MdWeb,
} from "react-icons/md";

import "./project.css";

export default function Projects() {
  const projectsList = [
    {
      projectId: 0,
      title: "Jetset",
      description:
        "Jetset is an AI-powered travel app built with React Native and Expo. It features personalized destination suggestions, comprehensive itineraries, and seamless trip planning using Firebase, Gemini API, Google Maps API, and Google Places API.",
      url: "https://github.com/kepegram/Jetset-2.0",
      icon: <MdFlightTakeoff color="#FF6B00" />,
    },
    {
      projectId: 1,
      title: "myYoutubeClone",
      description:
        "myYoutubeClone is a React Native appplication that matches the UI of the Youtube application. Download the latest version of Youtube and compare! (Created with RN CLI)",
      url: "https://github.com/kepegram/myYouTubeClone",
      icon: <MdVideoLibrary color="#FF6B00" />,
    },
    {
      projectId: 2,
      title: "myWeather",
      description:
        "myCalculator is a React Native appplication that is a real-time weather app. Fetches data from OpenWeather API and presents it to the user  (Created with Expo CLI)",
      url: "https://github.com/kepegram/myWeather",
      icon: <MdCalculate color="#FF6B00" />,
    },
    {
      projectId: 3,
      title: "myPorfolio",
      description:
        "myPorfolio is the site you are browsing now. (Created using React.js)",
      url: "https://kepegram.github.io/myPortfolio/",
      icon: <MdWeb color="#FF6B00" />,
    },
  ];

  return (
    <section className="p" id="projects">
      <div className="p-container">
        <div className="p-header">
          <h1 className="p-title">Projects</h1>
        </div>
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
            window.open(
              "https://github.com/kepegram?tab=repositories",
              "_blank"
            )
          }
        >
          See All
        </button>
      </div>
    </section>
  );
}
