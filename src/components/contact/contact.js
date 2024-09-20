import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Grid, Typography } from "@mui/material";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { SERVICE_ID } from "../../keys";
import { TEMPLATE_ID } from "../../keys";
import { PUBLIC_KEY } from "../../keys";
import AboutData from "../about/aboutData";
import "./contact.css";

export default function Contact() {
  const url =
    "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=kepegram1@gmail.com";
  const form = useRef();

  const sendEmail = (e) => {
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message sent successfully!");
          document.getElementById("form").reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message." + error.text);
        }
      );
  };

  function check(e) {
    e.preventDefault();
    e.stopPropagation();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    if (!name || !email || !message) {
      alert("Please fill in all fields");
      return;
    } else {
      sendEmail();
    }
  }

  return (
    <div className="c" id="contact">
      <h1
        className="c-title"
        role="button"
        onClick={() => window.open(url, "_blank")}
        style={{ cursor: "pointer" }}
      >
        Contact
      </h1>
      <MdOutlineHorizontalRule color="#007bff" />
      <Grid item xs={12} lg={5}>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12}>
              <Typography className="c-info-item">
                <span>Location: </span> {AboutData.location}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className="c-info-item">
                <span>Phone: </span> {AboutData.phone}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className="c-info-item">
                <span>E-mail: </span> {AboutData.email}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div className="c-form-container">
        <form ref={form} onSubmit={sendEmail} id="form">
          <label>Name</label>
          <input name="user_name" id="name" placeholder="Your Name" />
          <label>Email</label>
          <input name="user_email" id="email" placeholder="Your Email" />
          <label>Message</label>
          <textarea name="message" id="message" placeholder="Message" />
          <button type="button" className="p-button" onClick={check}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
