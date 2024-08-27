import { Grid } from "@mui/material";
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
      <p className="a-quote">{AboutData.quote}</p>

      {/* Experiences */}
      <div className="a-timeline">
        <CustomTimeline title="Work Experience" icon={<WorkIcon />}>
          {AboutData.experiences.map((experience) => (
            <TimelineItem>
              <CustomTimelineSeparator />
              <TimelineContent className="a-timeline-content">
                <h1 className="a-timeline-title">{experience.title}</h1>
                <h5 className="a-timeline-date">{experience.date}</h5>
                <h6 className="a-timeline-description">
                  {experience.description}
                </h6>
              </TimelineContent>
            </TimelineItem>
          ))}
        </CustomTimeline>

        {/* Education */}
        <CustomTimeline title="Education" icon={<SchoolIcon />}>
          {AboutData.educations.map((education) => (
            <TimelineItem>
              <CustomTimelineSeparator />
              <TimelineContent className="a-timeline-content">
                <h1 className="a-timeline-title">{education.title}</h1>
                <h5 className="a-timeline-date">{education.date}</h5>
                <h6 className="a-timeline-description">
                  {education.description}
                </h6>
              </TimelineContent>
            </TimelineItem>
          ))}
        </CustomTimeline>
      </div>

      {/* Technologies */}
      <div className="a-stack-container">
        <Grid container spacing={3} justify="space-around">
          {AboutData.stack.map((techStack) => (
            <Grid item xs={12} sm={6} md={3}>
              <div className="a-stack">
                <div className="a-stack-icon" onClick={() => console.log("hi")}>
                  {techStack.icon}
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
