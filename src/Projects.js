//Projects.js

import ProjectCard from "./ProjectCard";  

function Projects({projects}){
  return(
    <section className="bg-gray-100 w-full py-20 px-5">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) =>(
            <ProjectCard key={index} title={project.title} description={project.description} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;