import React from "react";
import Intro from "./components/intro/intro";
import Navbar from "./components/nav/navbar";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
