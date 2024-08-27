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
  address: "Austin, Texas",
  birthday: "August 5, 2000",
  email: "kepegram1@gmail.com",
  phone: "(609)-949-3117",

  about:
    '"When you are not practicing, someone else is getting better". \n -Allen Iverson',

  experiences: [
    {
      title: "React Native Developer",
      date: "Jan 2024 - Present",
      description:
        "",
    },
    {
      title: "Software Automation Engineer",
      date: "Aug 2022 - Jan 2024",
      description:
        "",
    },
    {
      title: "Student Computing Services Manager",
      date: "Aug 2019 - May 2022",
      description:
        "",
    },
  ],

  educations: [
    {
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
      title: "FRONT-END",
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
      title: "BACK-END",
      description: ["NodeJS", "Java"],
    },
    {
      title: "DATABASES",
      description: ["MySQL", "MongoDB"],
    },
    {
      title: "SOURCE CONTROL",
      description: ["Git", "GitHub"],
    },
  ],
};

export default AboutData;
