import AboutData from "./aboutData";
import "./about.css";

const skills = [
  "React Native",
  "TypeScript",
  "JavaScript",
  "React",
  "Node.js",
  "Java",
  "Git",
  "CI/CD",
  "MongoDB",
  "MySQL",
];

export default function Work() {
  return (
    <section className="section work" id="work">
      <div className="section-head">
        <span className="eyebrow">02</span>
        <h2>Work</h2>
        <span className="count">{AboutData.experiences.length} roles</span>
      </div>

      <ol className="timeline">
        {AboutData.experiences.map((job, i) => (
          <li className="entry" key={i}>
            <div className="entry-meta">
              <span className="entry-date">{job.date}</span>
            </div>
            <div className="entry-body">
              <h3 className="entry-title">{job.title}</h3>
              {job.organization && (
                <p className="entry-org">{job.organization}</p>
              )}
              {job.description && (
                <p className="entry-desc">{job.description}</p>
              )}
            </div>
          </li>
        ))}
      </ol>

      <div className="skills">
        <span className="eyebrow">Toolkit</span>
        <ul className="skill-tags">
          {skills.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
