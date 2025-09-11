import React from "react";
import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  // const myName = "kajal Kotak";
  // const myBio =
  //   "I am Kajal, a passionate web developer learning React and Tailwind CSS. I love creating beautiful and responsive websites.";

  // const myProjects = [
  //   { title: "Project One", description: "Built with React and Tailwind CSS." },
  //   { title: "Project Two", description: "Built with React and Tailwind CSS." },
  //   {
  //     title: "Project Three",
  //     description: "Built with React and Tailwind CSS.",
  //   },
  // ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero name="kajal" />} />
        <Route
          path="/about"
          element={<About bio="I am Kajal, passionate about React." />}
        />
        <Route
          path="/projects"
          element={
            <Projects
              projects={[
                { title: "Project One", description: "React + Tailwind CSS" },
                {
                  title: "Project Two",
                  description: "React + API Integration",
                },
              ]}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <section
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
      </section>*/}
    </div>
  );
}

export default App;
