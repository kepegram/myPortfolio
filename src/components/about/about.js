import {
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  LinearProgress,
} from "@mui/material";
import { MdOutlineHorizontalRule } from "react-icons/md";
import AboutData from "./aboutData";
import Timeline from "./timeline/timeline";
import headshot from "../../assets/kadin-headshot.jpeg";
import "./about.css";

export default function About() {
  return (
    <div className="a" id="about">
      <h1 className="a-title">About Me</h1>
      <MdOutlineHorizontalRule color="#007bff" />
      <p className="a-quote">{AboutData.quote}</p>

      {/*Profile and Skills Card */}
      <Grid container justifyContent="center" style={{ marginTop: "20px" }}>
        <Grid item xs={12} md={8}>
          <Card className="profile-card">
            <CardContent>
              {/* Profile Section */}
              <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} md={4}>
                  <Avatar
                    alt="Profile Picture"
                    src={headshot}
                    sx={{ width: 150, height: 150, margin: "auto" }}
                  />
                </Grid>
                <Grid item xs={12} md={8}>
                  <Typography variant="h5" className="profile-name">
                    Kadin Pegram
                  </Typography>
                  <Typography variant="body1" className="profile-info">
                    Mobile/Web Developer | JavaScript Enthusiast
                  </Typography>
                  <Typography variant="body2" className="profile-about">
                    I am a passionate developer with experience in building and
                    maintaining mobile/web applications. I love coding, learning
                    new technologies, and solving problems.
                  </Typography>
                </Grid>
              </Grid>

              {/* Skills Section */}
              <div className="skills-section" style={{ marginTop: "20px" }}>
                <Typography variant="h6" className="skills-title">
                  Skills
                </Typography>

                {/* HTML Skill */}
                <Typography
                  variant="body2"
                  className="skill-name"
                  data-percent="60%"
                >
                  HTML
                </Typography>
                <LinearProgress variant="determinate" value={60} />

                {/* CSS Skill */}
                <Typography
                  variant="body2"
                  className="skill-name"
                  data-percent="70%"
                >
                  CSS
                </Typography>
                <LinearProgress variant="determinate" value={70} />

                {/* JavaScript Skill */}
                <Typography
                  variant="body2"
                  className="skill-name"
                  data-percent="85%"
                >
                  JavaScript
                </Typography>
                <LinearProgress variant="determinate" value={85} />

                {/* TypeScript Skill */}
                <Typography
                  variant="body2"
                  className="skill-name"
                  data-percent="65%"
                >
                  TypeScript
                </Typography>
                <LinearProgress variant="determinate" value={65} />

                {/* React Skill */}
                <Typography
                  variant="body2"
                  className="skill-name"
                  data-percent="75%"
                >
                  React
                </Typography>
                <LinearProgress variant="determinate" value={75} />

                {/* React Native Skill */}
                <Typography
                  variant="body2"
                  className="skill-name"
                  data-percent="90%"
                >
                  React Native
                </Typography>
                <LinearProgress variant="determinate" value={90} />
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Timeline Section */}
      <Timeline experiences={AboutData.experiences} />
    </div>
  );
}
