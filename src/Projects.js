//Projects.js

import React, { useState, useEffect } from "react";

import ProjectCard from "./ProjectCard";

function Projects(theme) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts") //example API
      .then((response) => response.json())
      .then((data) => setProjects(data.slice(0, 5))) // take first 5 post  as projects
      .catch((error) => console.error("error fetching data:", error));
  }, []);
  return (
    <section
      className={`${
        theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
      } p-1 text-center  w-full py-20 px-5`}
    >
      <div
        className={`${
          theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
        } p-10 text-center max-w-6xl mx-auto text-center`}
      >
        <h2
          className={`${
            theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
          } p-10 text-center text-4xl font-bold  mb-10`}
        >
          My Projects
        </h2>

        {projects.length === 0 ? (
          <p>Loading projects....</p>
        ) : (
          projects.map((project) => (
            <div
              key={project.id}
              className={`${
                theme === "light"
                  ? "bg-white text-black"
                  : "bg-gray-800 text-white"
              } p-10 text-center mb-5 p-5 border rounded-lg shadow-md`}
            >
              <h3
                className={`${
                  theme === "light"
                    ? "bg-white text-black"
                    : "bg-gray-800 text-white"
                } p-10 text-center text-2xl font-semibold`}
              >
                {project.title}
              </h3>
              <p
                className={`${
                  theme === "light"
                    ? "bg-white text-black"
                    : "bg-gray-800 text-white"
                } p-10 text-center`}
              >
                {project.body}
              </p>
            </div>
          ))
        )}

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) =>(
            <ProjectCard key={index} title={project.title} description={project.description} />
          ))}
        </div> */}
      </div>
    </section>
  );
}

export default Projects;
