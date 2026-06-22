import React from "react";
import Nav from "./components/nav/navbar";
import Hero from "./components/intro/intro";
import Work from "./components/about/about";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import "./app.css";

export default function App() {
  return (
    <>
      <Nav />
      <main className="shell">
        <Hero />
        <Work />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
