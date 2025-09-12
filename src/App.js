import React from "react";
import logo from "./logo.svg";
import { useContext } from "react";
import { AppContext } from "./AppContext";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  const { theme } = useContext(AppContext);

  // const themeClasses =
  //   theme === "light" ? "bg-gray-100 text-black" : "bg-gray-900 text-white";
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
    <div
      className={`${
        theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
      } p-1 text-center min-h-screen transition-colors duration-500`}
    >
      <Navbar theme={theme} />

      <Routes>
        <Route path="/" element={<Hero theme={theme} name="kajal" />}  />
        <Route
          path="/about"
          element={
            <About theme={theme} bio="I am Kajal, passionate about React." />
          }
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
              theme={theme}
            />
          }
        />
        <Route path="/contact" element={<Contact theme={theme} />} />
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
      {/* <Footer /> */}
    </div>
  );
  <Footer />;
}

export default App;
