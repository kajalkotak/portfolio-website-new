//my-projects.js

function MyProjects() {
  const projectList = [
    {
      title: "Portfolio Website",
      description: "My personal portfolio built using React and Tailwind CSS.",
      link: "https://portfolio-website-new-jade.vercel.app/",
    },
    {
      title: "React Note App",
      description: "A simple Note App to manage daily tasks using React.",
      link: "https://react-notes-app-e89t.vercel.app/",
    },
    {
      title: "React To Do App",
      description: "A To-Do App with React featuring categories, search, pagination, notifications, and local storage.",
      link: "https://react-to-do-app-alpha-three.vercel.app/",
    },
  ];

  return (
    <section className="bg-gray-100 py-20 px-5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">My Projects</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {projectList.map((project, index) => (
            <div key={index} className="bg-white p-5 rounded shadow">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MyProjects;
