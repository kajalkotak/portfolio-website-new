import React from "react";
import logo from "./logo.svg";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  const myName = "kajal";
  const myBio =
    "I am Kajal, a passionate web developer learning React and Tailwind CSS. I love creating beautiful and responsive websites.";

  const myProjects = [
    { title: "Project One", description: "Built with React and Tailwind CSS." },
    { title: "Project Two", description: "Built with React and Tailwind CSS." },
    {
      title: "Project Three",
      description: "Built with React and Tailwind CSS.",
    },
  ];

  return (
    <div className="bg-gray-100">
      <Navbar />
      <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center"
      >
        <Hero name={myName} />
      </section>

      <section id="about">
        <About bio={myBio} />
      </section>

      <section id="projects">
        <Projects projects={myProjects} />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;
