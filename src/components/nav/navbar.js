import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import resume from "../../assets/resumes/Kadin_Pegram_2025_Resume.pdf";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Prevent background scrolling when menu is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { to: "intro", text: "Home", offset: -60 },
    { to: "about", text: "About", offset: -40 },
    { to: "projects", text: "Projects", offset: -40 },
    { to: "contact", text: "Contact", offset: 40 },
  ];

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <nav className="navbar">
        <Link
          to="intro"
          className="logo"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
        >
          <span className="logo-text">Pegram</span>
          <span className="logo-dot"></span>
        </Link>

        <button
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <div
          className={`nav-overlay ${isOpen ? "active" : ""}`}
          onClick={closeMenu}
        />

        <div className={`nav-drawer ${isOpen ? "active" : ""}`}>
          <ul className="nav-menu">
            {navItems.map((item) => (
              <li className="nav-item" key={item.to}>
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={item.offset}
                  duration={500}
                  activeClass="active"
                  onClick={closeMenu}
                  spyThrottle={500}
                >
                  {item.text}
                </Link>
              </li>
            ))}
            <li className="nav-item">
              <Link onClick={() => window.open(resume, "_blank")}>Resume</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
