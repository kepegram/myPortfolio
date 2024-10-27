import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { IoArrowUpCircleSharp } from "react-icons/io5";
import down from "../../assets/drop-down-arrow-3.png";
import "./intro.css";

export default function Intro() {
  const githubUrl = "https://github.com/kepegram";
  const linkedinUrl = "https://www.linkedin.com/in/kadin-pegram-15982118b/";

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 600) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  // to prevent zoom on safari
  document.addEventListener("gesturestart", function (e) {
    e.preventDefault();
    document.body.style.zoom = 0.99;
  });

  document.addEventListener("gesturechange", function (e) {
    e.preventDefault();
    document.body.style.zoom = 0.99;
  });

  document.addEventListener("gestureend", function (e) {
    e.preventDefault();
    document.body.style.zoom = 0.99;
  });

  return (
    <div className="i" id="intro">
      
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
        offset={-90}
        duration={500}
        style={{ cursor: "pointer" }}
      >
        <img className="i-down-arrow" src={down} alt="down arrow" />
      </Link>
      {visible && (
        <div className="i-return-btn">
          <IoArrowUpCircleSharp
            onClick={scrollToTop}
            style={{ cursor: "pointer" }}
          />
        </div>
      )}
    </div>
  );
}
