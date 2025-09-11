//Navbar.js

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white w-full p-5 fixed top-0 left-0 shadow-md z-10">
      <div className="max-wl-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Kajal Portfolio</h1>
        <ul className="flex space-x-6">
          <li>
            <a href="#hero" className="hover:text-blue-400">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-400">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
