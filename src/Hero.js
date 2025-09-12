//Hero.js

import Contact2 from "./contact2";

function Hero({ name, theme }) {
  return (
    <header
      className={`${
        theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
      } p-1 text-center`}
    >
      <h1 className="text-5xl font-extrabold mb-5">Hello, I am {name}!</h1>
      <p>Welcome to my portfolio website.</p>
      <button
        className={`${
          theme === "light"
            ? "bg-blue-600 text-white"
            : "bg-blue-400 text-black"
        } mt-8 px-6 py-3 rounded-lg hover:opacity-80 transition`}
      >
        View My Work
      </button>
      <h1>Hello</h1>
      <Contact2 />
    </header>
  );
}
export default Hero;
