import { FiArrowUpRight } from "react-icons/fi";
import "./project.css";

const projects = [
  {
    title: "Jetset",
    year: "2024",
    blurb:
      "An AI travel planner for iOS and Android that turns a destination into a full itinerary, with suggestions from Gemini and maps from Google Places.",
    stack: ["React Native", "Expo", "Firebase", "Gemini"],
    url: "https://github.com/kepegram/Jetset-2.0",
  },
  {
    title: "myYouTubeClone",
    year: "2023",
    blurb:
      "A mobile app that rebuilds the YouTube UI pixel for pixel, close enough to hold up next to the real thing.",
    stack: ["React Native", "RN CLI"],
    url: "https://github.com/kepegram/myYouTubeClone",
  },
  {
    title: "myWeather",
    year: "2023",
    blurb:
      "A mobile weather app pulling live conditions from the OpenWeather API into a clean forecast view.",
    stack: ["React Native", "Expo", "OpenWeather"],
    url: "https://github.com/kepegram/myWeather",
  },
  {
    title: "This site",
    year: "2025",
    blurb:
      "The portfolio you're reading now, a single-page React build with a light and dark theme.",
    stack: ["React", "EmailJS"],
    url: "https://github.com/kepegram/myPortfolio",
  },
];

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="section-head">
        <span className="eyebrow">03</span>
        <h2>Projects</h2>
        <a
          className="count count-link"
          href="https://github.com/kepegram?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          all repos ↗
        </a>
      </div>

      <p className="project-lead">
        Mostly mobile apps built with React Native, shipped to iOS and Android.
      </p>

      <ul className="project-list">
        {projects.map((p, i) => (
          <li key={p.title}>
            <a className="project" href={p.url} target="_blank" rel="noreferrer">
              <span className="project-index">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="project-body">
                <div className="project-top">
                  <h3 className="project-title">
                    {p.title}
                    <FiArrowUpRight className="project-arrow" aria-hidden />
                  </h3>
                  <span className="project-year">{p.year}</span>
                </div>

                <p className="project-blurb">{p.blurb}</p>

                <ul className="project-stack">
                  {p.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
