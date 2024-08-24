import React from "react";
import "./contact.css";

export default function Contact() {
  const url =
    "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=kepegram1@gmail.com";

  return (
    <div className="c" id="contact">
      <h1
        className="c-title"
        role="button"
        onClick={() => window.open(url, "_blank")}
        style={{ cursor: "pointer" }}
      >
        contact
      </h1>
    </div>
  );
}
