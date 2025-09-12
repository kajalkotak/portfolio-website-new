//ProjectCard.js

function ProjectCard({ title, description, theme }) {
  return (
    <div
      className={`${
        theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
      } p-10 text-center rounded-lg shadow-lg p-5`}
    >
      <h3
        className={`${
          theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
        } p-10 text-center text-2xl font-semibold mb-3`}
      >
        {title}
      </h3>
      <p
        className={`${
          theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
        } p-10 text-center`}
      >
        {description}
      </p>
    </div>
  );
}

export default ProjectCard;


