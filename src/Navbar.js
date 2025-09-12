//Navbar.js

import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./AppContext";

function Navbar() {
  const { theme, toggleTheme, user } = useContext(AppContext);
  return (
    <nav
      className={`${
        theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
      } p-10 text-center p-5 flex justify-between items-center`}
    >
      <h1
        className={`${
          theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
        } p-10 text-center`}
      >
        Welcome, {user.name}
      </h1>

      <ul
        className={`${
          theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
        } p-10 text-center flex space-x-6`}
      >
        <li>
          <Link to="/" className= {`${
        theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
      } p-10 text-center hover:text-blue-400`}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className= {`${
        theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
      } p-10 text-center hover:text-blue-400`}>
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" className= {`${
        theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
      } p-10 text-center hover:text-blue-400`}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" className= {`${
        theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
      } p-10 text-center hover:text-blue-400`}>
            Contact
          </Link>
        </li>
      </ul>

      <button onClick={toggleTheme} className="bg-blue-500 px-4 py-2 rounded">
        Toggle Theme
      </button>
    </nav>
  );
}
export default Navbar;
