import { Link } from "react-scroll";
import logo from "../../assets/kp-logo.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <Link
          to="intro"
          className="logo"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <img src={logo} alt="logo" />
        </Link>
        <ul className="nav-menu active">
          <li className="nav-item">
            <Link to="intro" spy={true} smooth={true} offset={0} duration={500}>
              home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={10}
              duration={500}
            >
              about
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={10}
              duration={500}
            >
              projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={10}
              duration={500}
            >
              contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
