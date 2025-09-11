//Navbar.js

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white w-full p-5 fixed top-0 left-0 shadow-md z-10">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Kajal Portfolio</h1>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-blue-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-blue-400">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-400">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
