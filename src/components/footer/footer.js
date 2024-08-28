import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import "./footer.css";

export default function Footer() {
  const githubUrl = "https://github.com/kepegram";
  const linkedinUrl = "https://www.linkedin.com/in/kadin-pegram-15982118b/";

  return (
    <div className="footer">
      <p className="f-title">2024 Pegram Portfolio</p>
      <p className="f-subtxt">Designed by Kadin Pegram</p>
      <div className="i-apps-container">
        <FaLinkedin
          className="f-app-icon"
          style={{ cursor: "pointer" }}
          onClick={() => window.open(linkedinUrl, "_blank")}
        />
        <FaGithubSquare
          className="f-app-icon"
          style={{ cursor: "pointer" }}
          onClick={() => window.open(githubUrl, "_blank")}
        />
      </div>
    </div>
  );
}
