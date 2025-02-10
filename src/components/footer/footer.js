import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import "./footer.css";

export default function Footer() {
  const githubUrl = "https://github.com/kepegram";
  const linkedinUrl = "https://www.linkedin.com/in/kadin-pegram-15982118b/";

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-text">
          <p className="f-title">© 2024 Pegram Portfolio</p>
          <p className="f-subtxt">Designed & Built by Kadin Pegram</p>
        </div>
        <div className="social-links">
          <FaLinkedin
            className="f-app-icon"
            onClick={() => window.open(linkedinUrl, "_blank")}
            aria-label="LinkedIn Profile"
          />
          <FaGithubSquare
            className="f-app-icon"
            onClick={() => window.open(githubUrl, "_blank")}
            aria-label="GitHub Profile"
          />
        </div>
      </div>
    </footer>
  );
}
