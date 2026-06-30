import { FaLinkedin, FaGithub } from "react-icons/fa";
import AboutData from "../about/aboutData";
import headshot from "../../assets/imgs/kadin-headshot.jpeg";
import "./intro.css";

export default function Hero() {
  const github = "https://github.com/kepegram";
  const linkedin = "https://www.linkedin.com/in/kadin-pegram-15982118b/";

  return (
    <section className="hero" id="top">
      <div className="hero-main">
        <p className="eyebrow hero-eyebrow">
          Mobile Engineer · {AboutData.location}
        </p>

        <h1 className="hero-name">
          Kadin
          <br />
          Pegram
        </h1>

        <div className="hero-now">
          <span className="eyebrow">Now</span>
          <p>
            Mobile Application Engineer at <strong>Voicd</strong>
          </p>
        </div>

        <div className="hero-links">
          <a href="#contact">Get in touch</a>
          <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub /> GitHub
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>

      <img className="hero-photo" src={headshot} alt="Kadin Pegram" />
    </section>
  );
}
