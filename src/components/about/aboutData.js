import React from "react";
import { SiReact } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJenkins } from "react-icons/si";
import { SiAppium } from "react-icons/si";
import { SiCucumber } from "react-icons/si";

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
        "Used JavaScript/TypeScript to build a mobile SDK from scratch. " +
        "This SDK allowed for developers to use remote commands to control/monitor various aspects of the car from your myBrand mobile app. " +
        "To test the functionality, React Native was used to build a test/demo app that utilized our SDK. " +
        "Also reestablished an old feature (Trusted Device) within a new mono repo. " +
        "Collaborated with the team and built a “new Trusted Device” from scratch using React Native & TypeScript methodologies working closely with UI teams to match features to Figma diagrams/designs.",
    },
    {
      side: "a-container right",
      title: "Software Automation Engineer",
      organization: "General Motors",
      date: "Aug 2022 - Present",
      description:
        "Using cucumber, TestNG, and gherkin format, I helped develop an automation test suite to test our mobile app feature (Trusted Device). " +
        "I ran daily automation tests using Jenkins and monitored/shared results. " +
        "Created automation scripts using Appium to target application TestIds/locators. " +
        "Executed bi-weekly regression testing on test cases and provided test results. " +
        "Utilizing Perfecto, I created/reviewed test results and communicated with the release team regarding bugs and defects found. " +
        "Using Charles Proxy to mock/overview network traffic to test certain mobile application features.",
    },
    {
      side: "a-container left",
      title: "Student Computing Services Manager",
      organization: "Towson University",
      date: "Aug 2019 - May 2022",
      description:
        "Created shell scripts that check various computer defects such as disk usage and network status. " +
        "Dual-booted computers to Linux OS to further diagnose found issues. " +
        "Handled name changes and student terminations in the database. " +
        "Collaborated with management to install security scripts on all student desktop computers. ",
    },
    {
      side: "a-container right",
      title: "Towson University",
      date: "Aug 2018 - May 2022",
      description: "Bachelor in Computer Science",
    },
  ],

  stack: [
    {
      icon: <SiReact />,
    },
    {
      icon: <SiJavascript />,
    },
    {
      icon: <SiTypescript />,
    },
    {
      icon: <SiHtml5 />,
    },
    {
      icon: <SiCss3 />,
    },
    {
      icon: <SiAppium />,
    },
    {
      icon: <SiJenkins />,
    },
    {
      icon: <SiCucumber />,
    },
  ],

  skills: [
    {
      title: "Front-End",
      description: [
        "React",
        "React Native",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
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
