//ProjectDetail.js
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setProject(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!project) return <p>Loading project details...</p>;

  return (
    <>
      <Helmet>
        <title>
          {project ? `${project.title} | Kajal Kotak Portfolio` : "Loading..."}
        </title>
        <meta
          name="description"
          content={
            project ? project.body : "Project detail page of Kajal Kotak"
          }
        />
      </Helmet>
      <div className="max-w-3xl mx-auto p-5">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <h4 className="mb-4">{project.description}</h4>
        <p className="mb-4">{project.body}</p>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          View Live Project
        </a>
      </div>
    </>
  );
}

export default ProjectDetail;
