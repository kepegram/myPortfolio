import { FiSun, FiMoon } from "react-icons/fi";
import resume from "../../assets/resumes/Kadin_Pegram_2025_Resume.pdf";
import useTheme from "../../useTheme";
import "./navbar.css";

const links = [
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-mark" aria-label="Back to top">
          Pegram<span className="nav-dot">.</span>
        </a>
        <nav className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
          <a
            className="nav-resume"
            href={resume}
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
          <button
            type="button"
            className="nav-theme"
            onClick={toggle}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            aria-pressed={isDark}
          >
            {isDark ? <FiSun /> : <FiMoon />}
          </button>
        </nav>
      </div>
    </header>
  );
}
