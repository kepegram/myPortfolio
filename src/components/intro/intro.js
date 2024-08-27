import React from "react";
import { Link } from "react-scroll";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import down from "../../assets/drop-down-arrow-3.png";
import headshot from "../../assets/kadin-headshot.jpeg";
import "./intro.css";

export default function Intro() {
  const githubUrl = "https://github.com/kepegram";
  const linkedinUrl = "https://www.linkedin.com/in/kadin-pegram-15982118b/";
  return (
    <div className="i" id="intro">
      <img src={headshot} alt="kadin-headshot" className="i-headshot" />
      <h1 className="i-name">Kadin Pegram</h1>
      <p className="i-pronounce">/kāden PEGrəm/</p>
      <p className="i-title">Mobile/Web Developer</p>
      <div className="i-apps-container">
        <FaLinkedin
          className="i-app-icon"
          style={{ cursor: "pointer" }}
          onClick={() => window.open(linkedinUrl, "_blank")}
        />
        <FaGithubSquare
          className="i-app-icon"
          style={{ cursor: "pointer" }}
          onClick={() => window.open(githubUrl, "_blank")}
        />
      </div>

      <Link
        to="about"
        spy={true}
        smooth={true}
        offset={10}
        duration={500}
        style={{ cursor: "pointer" }}
      >
        <img className="i-down-arrow" src={down} alt="down arrow" />
      </Link>
    </div>
  );
}
