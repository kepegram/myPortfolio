import React, { useRef, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  LinearProgress,
} from "@mui/material";
import AboutData from "./aboutData";
import Timeline from "./timeline/timeline";
import headshot from "../../assets/imgs/kadin-headshot.jpeg";
import "./about.css";

export default function About() {
  const skillsRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="a" id="about">
      <div className="a-content">
        <h1 className="a-title">About Me</h1>

        <Grid
          container
          justifyContent="center"
          spacing={4}
          className="profile-container"
        >
          <Grid item xs={12} md={11} lg={10}>
            <Card className="profile-card" elevation={3} ref={cardRef}>
              <CardContent>
                <Grid container spacing={4} alignItems="center">
                  <Grid item xs={12} md={4}>
                    <div className="avatar-container">
                      <Avatar
                        alt="Profile Picture"
                        src={headshot}
                        className="profile-avatar"
                        sx={{
                          width: 200,
                          height: 200,
                          margin: "auto",
                          border: "4px solid rgba(255, 255, 255, 0.1)",
                          boxShadow: "0 8px 32px rgba(31, 38, 135, 0.2)",
                        }}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <div className="profile-content">
                      <Typography variant="h4" className="profile-name">
                        {AboutData.name}
                      </Typography>
                      <Typography variant="h6" className="profile-info">
                        {AboutData.title}
                      </Typography>
                      <Typography variant="body1" className="profile-about">
                        I am a passionate developer with experience in building and
                        maintaining mobile/web applications. I love coding, learning
                        new technologies, and solving complex problems.
                      </Typography>
                    </div>
                  </Grid>
                </Grid>

                <div className="skills-section" ref={skillsRef}>
                  <Typography variant="h5" className="skills-title">
                    Technical Skills
                  </Typography>
                  <Grid container spacing={3}>
                    {AboutData.skills[0].description.map((skill) => (
                      <Grid item xs={12} sm={6} key={skill.name}>
                        <div className="skill-item">
                          <Typography
                            variant="body1"
                            className="skill-name"
                            data-percent={`${skill.proficiency}%`}
                          >
                            {skill.name}
                          </Typography>
                          <LinearProgress
                            variant="determinate"
                            value={skill.proficiency}
                            className="skill-progress"
                          />
                        </div>
                      </Grid>
                    ))}
                  </Grid>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Timeline experiences={AboutData.experiences} />
      </div>
    </div>
  );
}
