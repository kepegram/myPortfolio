import { Grid } from "@mui/material";
import { MdOutlineHorizontalRule } from "react-icons/md";
import AboutData from "./aboutData";
import "./about.css";

export default function About() {
  return (
    <div className="a" id="about">
      <h1 className="a-title">About Me</h1>
      <MdOutlineHorizontalRule />
      <p className="a-quote">{AboutData.quote}</p>
      <div className="a-timeline">
        {AboutData.experiences.map((experience) => (
          <div className={experience.side}>
            <div className="a-content">
              <h2>{experience.title}</h2>
              <h4>{experience.organization}</h4>
              <h5>{experience.date}</h5>
              <p>{experience.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Technologies */}
      <div className="a-stack-container">
        <Grid container spacing={3} justify="space-around">
          {AboutData.stack.map((techStack) => (
            <Grid item xs={12} sm={6} md={3}>
              <div className="a-stack">
                <div className="a-stack-icon">{techStack.icon}</div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
