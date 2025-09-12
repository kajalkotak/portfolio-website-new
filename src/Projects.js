//Projects.js

import React, { useState, useEffect } from "react";

import ProjectCard from "./ProjectCard";

function Projects(theme) {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts") //example API
      .then((response) => response.json())
      .then((data) => {
        const firstFive = data.slice(0, 10).map((project, index) => ({
          ...project,
          category: index % 2 === 0 ? "Web App" : "Mobile App",
        }));
        setProjects(firstFive);
        setFilteredProjects(firstFive);
      })
      .catch((error) => console.error("error fetching data:", error));
  }, []);

  // ✅ Filter projects based on search term

  useEffect(() => {
    let filtered = projects.filter((project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (category) {
      filtered = filtered.filter((project) => project.category === category);
    }
    setFilteredProjects(filtered);
  }, [searchTerm, category, projects]);

  return (
    <section className={"bg-white text-black py-20 px-5"}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">My Projects</h2>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-3 rounded border mb-5"
        >
          <option value="">All Category</option>
          <option value="Web App">Web App</option>
          <option value="Mobile App">Mobile App</option>
        </select>

        <input
          type="text"
          placeholder="search projects by title...."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-3 rounded border w-full max-w md mb-10"
        />

        {filteredProjects.length === 0 ? (
          <p>No Projects Found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id} // important for dynamic route
                title={project.title}
                description={project.body}
                theme={theme}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
