//ProjectCard.js

function ProjectCard({ title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-5">
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default ProjectCard;
