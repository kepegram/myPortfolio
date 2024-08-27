import { Grid, Paper, Typography } from "@mui/material";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";
import CustomTimeline, {
  CustomTimelineSeparator,
} from "../../components/timeline/timeline";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import AboutData from "./aboutData";

import "./about.css";

export default function About() {
  return (
    <div className="a" id="about">
      <h1 className="a-title">About Me</h1>
      <p className="a-text">{AboutData.about}</p>

      {/* Education and experiences */}
      <Grid item xs={12}>
        <Grid container className="a-timeline">
          <Grid item sm={12} md={6}>
            <CustomTimeline title="Work Experience" icon={<WorkIcon />}>
              {AboutData.experiences.map((experience) => (
                <TimelineItem>
                  <CustomTimelineSeparator />
                  <TimelineContent className="a-timeline-content">
                    <Typography className="a-timeline-title">
                      {experience.title}
                    </Typography>
                    <Typography variant="caption" className="a-timeline-date">
                      {experience.date}
                    </Typography>
                    <Typography
                      variant="body2"
                      className="a-timeline-description"
                    >
                      {experience.description}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </CustomTimeline>
          </Grid>

          {/* Education */}
          <Grid item sm={12} md={6}>
            <CustomTimeline title="Education" icon={<SchoolIcon />}>
              {AboutData.educations.map((education) => (
                <TimelineItem>
                  <CustomTimelineSeparator />
                  <TimelineContent className="a-timeline-content">
                    <Typography className="a-timeline-title">
                      {education.title}
                    </Typography>
                    <Typography variant="caption" className="a-timeline-date">
                      {education.date}
                    </Typography>
                    <Typography
                      variant="body2"
                      className="a-timeline-description"
                    >
                      {education.description}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </CustomTimeline>
          </Grid>
        </Grid>
      </Grid>

      {/* Technologies */}
      <h1 className="a-stack-title">My Stack</h1>
      <Grid item xs={12}>
        <Grid container spacing={3} justify="space-around">
          {AboutData.stack.map((techStack) => (
            <Grid item xs={12} sm={6} md={3}>
              <div className="a-stack">
                <div className="a-stack-icon">{techStack.icon}</div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>

      {/* Skills */}
      <h1 className="a-stack-title">Skills</h1>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {AboutData.skills.map((skill) => (
            <Grid item xs={12} sm={6} md={3}>
              <Paper elevation={0} className="a-skill">
                <Typography variant="h6" className="a-skill-title">
                  {skill.title}
                </Typography>
                {skill.description.map((element) => (
                  <Typography variant="body2" className="a-skill-description">
                    <TimelineDot
                      variant={"outlined"}
                      className="a-timeline-dot"
                    />
                    {element}
                  </Typography>
                ))}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
