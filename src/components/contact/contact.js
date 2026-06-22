import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from "../../keys";
import AboutData from "../about/aboutData";
import "./contact.css";

const STATUS_COPY = {
  sending: "Sending…",
  success: "Sent. I'll get back to you soon.",
  error: "Something went wrong. Try again, or email me directly.",
  incomplete: "Please fill in every field.",
  "invalid-email": "That email doesn't look right.",
};

export default function Contact() {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const flash = (s, ms = 4000) => {
    setStatus(s);
    if (s !== "sending") setTimeout(() => setStatus(""), ms);
  };

  const send = async () => {
    setSending(true);
    flash("sending");
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      });
      form.current.reset();
      flash("success");
    } catch (err) {
      flash("error");
    }
    setSending(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(form.current);
    const name = (data.get("user_name") || "").trim();
    const email = (data.get("user_email") || "").trim();
    const message = (data.get("message") || "").trim();

    if (!name || !email || !message) return flash("incomplete", 3000);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return flash("invalid-email", 3000);
    send();
  };

  return (
    <section className="section contact" id="contact">
      <div className="section-head">
        <span className="eyebrow">04</span>
        <h2>Get in touch</h2>
      </div>

      <div className="contact-grid">
        <dl className="contact-info">
          <div>
            <dt className="eyebrow">Email</dt>
            <dd>
              <a href={`mailto:${AboutData.email}`}>{AboutData.email}</a>
            </dd>
          </div>
          <div>
            <dt className="eyebrow">Location</dt>
            <dd>{AboutData.location}</dd>
          </div>
          <div>
            <dt className="eyebrow">Phone</dt>
            <dd>{AboutData.phone}</dd>
          </div>
        </dl>

        <form ref={form} className="contact-form" onSubmit={handleSubmit}>
          <label>
            <span>Name</span>
            <input name="user_name" type="text" disabled={sending} />
          </label>
          <label>
            <span>Email</span>
            <input name="user_email" type="email" disabled={sending} />
          </label>
          <label>
            <span>Message</span>
            <textarea name="message" rows="5" disabled={sending} />
          </label>
          <button type="submit" disabled={sending}>
            {sending ? "Sending…" : "Send message"}
          </button>
          {status && (
            <p
              className={`form-status ${
                status === "success" ? "ok" : status === "error" ? "bad" : ""
              }`}
            >
              {STATUS_COPY[status]}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
