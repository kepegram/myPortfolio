import React from "react";
import { Grid, Typography } from "@mui/material";
import AboutData from "../about/aboutData";
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
        Contact
      </h1>
      <Grid item xs={12} lg={5}>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12}>
              <Typography className="c-info-item">
                <span>Address: </span> {AboutData.address}
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
    </div>
  );
}
