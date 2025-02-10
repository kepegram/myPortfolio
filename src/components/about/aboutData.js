const AboutData = {
  name: "Kadin Pegram",
  title: "Mobile/Web Developer",
  location: "Austin, Texas",
  email: "kepegram1@gmail.com",
  phone: "(609)-949-3117",

  quote:
    '"When you are not practicing, someone else is getting better". -Allen Iverson',

  experiences: [
    {
      side: "a-container left",
      title: "React Native Developer",
      organization: "General Motors",
      date: "Jan 2023 - Present",
      description:
        "Architected and developed a comprehensive mobile SDK from ground up using JavaScript/TypeScript, enabling seamless integration of vehicle remote commands and monitoring capabilities. " +
        "Engineered a React Native test/demo application to validate SDK functionality and showcase features to stakeholders. " +
        "Led the reimplementation of the Trusted Device feature within a new mono repo architecture, improving maintainability and scalability. " +
        "Collaborated with UI/UX teams to implement pixel-perfect designs from Figma, ensuring high-quality user experience while maintaining strict TypeScript standards.",
    },
    {
      side: "a-container right",
      title: "Software Automation Engineer",
      organization: "General Motors",
      date: "Aug 2022 - Present",
      description:
        "Developed and maintained a robust automation testing framework using Cucumber, TestNG, and Gherkin, achieving 80% test coverage for the Trusted Device feature. " +
        "Implemented CI/CD pipelines in Jenkins for daily automated testing, reducing manual testing effort by 60%. " +
        "Engineered efficient Appium scripts targeting TestIDs/locators, resulting in more reliable and maintainable test suites. " +
        "Conducted comprehensive regression testing bi-weekly, identifying and documenting critical issues early in development. " +
        "Leveraged Perfecto for detailed test analysis and Charles Proxy for network traffic inspection, improving bug detection and resolution time.",
    },
    {
      side: "a-container left",
      title: "Student Computing Services Manager",
      organization: "Towson University",
      date: "Aug 2019 - May 2022",
      description:
        "Developed and implemented automated shell scripts for system diagnostics, monitoring disk usage and network connectivity across 500+ campus computers. " +
        "Managed Linux/Windows dual-boot environments for advanced troubleshooting and system recovery operations. " +
        "Administered user database operations including secure handling of student records and access management. " +
        "Spearheaded the deployment of enhanced security protocols across the university's computer network, improving system security posture.",
    },
    {
      side: "a-container right",
      title: "Towson University",
      date: "Aug 2018 - May 2022",
      description: "Bachelor in Computer Science",
    },
  ],

  skills: [
    {
      title: "Front-End",
      description: [
        { name: "React", proficiency: 50 },
        { name: "React Native", proficiency: 80 },
        { name: "JavaScript", proficiency: 80 },
        { name: "TypeScript", proficiency: 85 },
        { name: "HTML", proficiency: 45 },
        { name: "CSS", proficiency: 55 },
      ],
    },
    {
      title: "Back-End",
      description: ["NodeJS", "Java"],
    },
    {
      title: "Databases",
      description: ["MySQL", "MongoDB"],
    },
    {
      title: "Source Control",
      description: ["Git", "GitHub"],
    },
  ],
};

export default AboutData;
