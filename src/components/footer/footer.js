import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./footer.css";

export default function Footer() {
  const github = "https://github.com/kepegram";
  const linkedin = "https://www.linkedin.com/in/kadin-pegram-15982118b/";

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>© {new Date().getFullYear()} Kadin Pegram.</p>
        <div className="footer-links">
          <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
