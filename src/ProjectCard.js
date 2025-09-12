//ProjectCard.js

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ProjectCard({ id, title, description, theme }) {
  return (
    <Link to={`/projects/${id}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={`${
          theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
        } p-5 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer`}
      >
        <h3 className="text-2xl font-semibold mb-3">{title}</h3>
        <p>{description}</p>
      </motion.div>
    </Link>
  );
}

export default ProjectCard;
