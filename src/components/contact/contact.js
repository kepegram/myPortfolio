import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Grid, Typography } from "@mui/material";
import { SERVICE_ID } from "../../keys";
import { TEMPLATE_ID } from "../../keys";
import { PUBLIC_KEY } from "../../keys";
import AboutData from "../about/aboutData";
import "./contact.css";
import gmail from "../../assets/imgs/gmail.png";

export default function Contact() {
  const url =
    "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=kepegram1@gmail.com";
  const form = useRef();
  const [sending, setSending] = React.useState(false);
  const [formStatus, setFormStatus] = React.useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const sendEmail = async (e) => {
    setSending(true);
    setFormStatus("sending");

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      });

      setFormStatus("success");
      document.getElementById("form").reset();
      setTimeout(() => setFormStatus(""), 5000);
    } catch (error) {
      console.log("FAILED...", error.text);
      setFormStatus("error");
      setTimeout(() => setFormStatus(""), 5000);
    }

    setSending(false);
  };

  const check = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      setFormStatus("incomplete");
      setTimeout(() => setFormStatus(""), 3000);
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFormStatus("invalid-email");
      setTimeout(() => setFormStatus(""), 3000);
      return;
    }

    sendEmail();
  };

  const getStatusMessage = () => {
    switch (formStatus) {
      case "sending":
        return "Sending...";
      case "success":
        return "Message sent successfully!";
      case "error":
        return "Failed to send message. Please try again.";
      case "incomplete":
        return "Please fill in all fields.";
      case "invalid-email":
        return "Please enter a valid email address.";
      default:
        return "";
    }
  };

  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <div className="c" id="contact">
      <div
        className="c-title-container"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseMove={handleMouseMove}
      >
        <h1
          className="c-title"
          role="button"
          onClick={() => window.open(url, "_blank")}
        >
          Contact
        </h1>
        {isHovering && (
          <div
            className="c-gmail-container"
            style={{
              position: "fixed",
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`,
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
            }}
          >
            <img src={gmail} alt="Gmail" className="c-gmail-icon" />
          </div>
        )}
      </div>
      <div className="divider"></div>

      <div className="c-info-container">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography className="c-info-item">
              <span>Location:</span> {AboutData.location}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className="c-info-item">
              <span>Phone:</span> {AboutData.phone}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className="c-info-item">
              <span>E-mail:</span> {AboutData.email}
            </Typography>
          </Grid>
        </Grid>
      </div>

      <div className="c-form-container">
        <form ref={form} onSubmit={(e) => e.preventDefault()} id="form">
          <label>Name</label>
          <input
            name="user_name"
            id="name"
            placeholder="Enter your name"
            disabled={sending}
          />
          <label>Email</label>
          <input
            name="user_email"
            id="email"
            type="email"
            placeholder="Enter your email"
            disabled={sending}
          />
          <label>Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Write your message here..."
            disabled={sending}
          />
          <button
            type="button"
            className="p-button"
            onClick={check}
            disabled={sending}
            style={{ opacity: sending ? 0.7 : 1 }}
          >
            {sending ? "Sending..." : "Send Message"}
          </button>
          {formStatus && (
            <Typography
              style={{
                marginTop: "1rem",
                color:
                  formStatus === "success"
                    ? "#4CAF50"
                    : formStatus === "error"
                    ? "#f44336"
                    : "#4a90e2",
                textAlign: "center",
                fontWeight: 500,
              }}
            >
              {getStatusMessage()}
            </Typography>
          )}
        </form>
      </div>
    </div>
  );
}
