import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/kp-logo.png";
import resume from "../../assets/2024-pegram-resume.pdf";
import "./navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <div className="header">
      <nav className="navbar">
        <Link
          to="intro"
          className="logo"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          style={{ cursor: "pointer" }}
        >
          <img src={logo} alt="logo" />
        </Link>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="intro"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              style={{ cursor: "pointer" }}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              style={{ cursor: "pointer" }}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              style={{ cursor: "pointer" }}
              onClick={closeMenu}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              style={{ cursor: "pointer" }}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link
              style={{ cursor: "pointer" }}
              onClick={() => window.open(resume, "_blank")}
            >
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
