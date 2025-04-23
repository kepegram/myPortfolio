import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { IoArrowUpCircleSharp } from "react-icons/io5";
import down from "../../assets/imgs/drop-down-arrow-3.png";
import headshot from "../../assets/imgs/kadin-headshot.jpeg";
import "./intro.css";

export default function Intro() {
  const githubUrl = "https://github.com/kepegram";
  const linkedinUrl = "https://www.linkedin.com/in/kadin-pegram-15982118b/";

  const [visible, setVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 400) {
      setVisible(true);
    } else if (scrolled <= 200) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  useEffect(() => {
    const preventZoom = (e) => {
      e.preventDefault();
      document.body.style.zoom = 0.99;
    };

    document.addEventListener("gesturestart", preventZoom);
    document.addEventListener("gesturechange", preventZoom);
    document.addEventListener("gestureend", preventZoom);

    return () => {
      document.removeEventListener("gesturestart", preventZoom);
      document.removeEventListener("gesturechange", preventZoom);
      document.removeEventListener("gestureend", preventZoom);
    };
  }, []);

  return (
    <div className="i" id="intro">
      <div className={`i-content ${mounted ? 'fade-in' : ''}`}>
        <div
          className="i-name-container"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onMouseMove={handleMouseMove}
        >
          <h1 className="i-name">Kadin Pegram</h1>
          {isHovering && (
            <div
              className="i-headshot-container"
              style={{
                position: "fixed",
                left: `${mousePosition.x}px`,
                top: `${mousePosition.y}px`,
                transform: "translate(-50%, -50%)",
                pointerEvents: "none",
              }}
            >
              <img src={headshot} alt="Kadin Pegram" className="i-headshot" />
            </div>
          )}
        </div>
        <p className="i-pronounce">/kāden PEGrəm/</p>
        <h2 className="i-title">Mobile Engineer</h2>
        <div className="i-apps-container">
          <FaLinkedin
            className="i-app-icon"
            aria-label="LinkedIn Profile"
            style={{ cursor: "pointer" }}
            onClick={() => window.open(linkedinUrl, "_blank")}
          />
          <FaGithubSquare
            className="i-app-icon"
            aria-label="GitHub Profile"
            style={{ cursor: "pointer" }}
            onClick={() => window.open(githubUrl, "_blank")}
          />
        </div>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-40}
          duration={500}
          style={{ cursor: "pointer" }}
        >
          <img className="i-down-arrow" src={down} alt="Scroll down" />
        </Link>
      </div>

      <div 
        className="i-return-btn"
        style={{
          opacity: visible ? 0.8 : 0,
          visibility: visible ? 'visible' : 'hidden',
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.3s ease'
        }}
      >
        <IoArrowUpCircleSharp
          onClick={scrollToTop}
          aria-label="Scroll to top"
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
}
