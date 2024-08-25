import React, { useState } from "react";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import "./contact.css";

export default function Contact() {
  const url =
    "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=kepegram1@gmail.com";
  const githubUrl = "https://github.com/kepegram";
  const linkedinUrl = "https://www.linkedin.com/in/kadin-pegram-15982118b/";

  const [hidden, setHidden] = useState(false);

  return (
    <div className="c" id="contact">
      <h1
        className="c-title"
        role="button"
        onClick={() => window.open(url, "_blank")}
        style={{ cursor: "pointer" }}
      >
        {hidden ? "contact" : "connect"}
      </h1>
      <div
        className="c-app-imgs"
        onMouseEnter={() => setHidden(false)}
        onMouseLeave={() => setHidden(true)}
      >
        <img
          src={linkedin}
          alt="linkedin"
          className="c-apps"
          style={{ cursor: "pointer" }}
          onClick={() => window.open(linkedinUrl, "_blank")}
        />
        <img
          src={github}
          alt="github"
          className="c-apps"
          style={{ cursor: "pointer" }}
          onClick={() => window.open(githubUrl, "_blank")}
        />
      </div>
    </div>
  );
}
