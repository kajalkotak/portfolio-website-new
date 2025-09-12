//About.js

function About({ bio, theme }) {
  return (
    <section
      className={`${
        theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
      } p-10 text-center w-full py-20 px-5`}
    >
      <div
        className={`${
          theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
        } p-10 text-center max-w-4xl mx-auto text-center`}
      >
        <h2
          className={`${
            theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
          } p-10 text-center text-4xl font-bold mb-5`}
        >
          About Me
        </h2>
        <p
          className={`${
            theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
          } p-10 text-center text-lg`}
        >
          {bio}
        </p>
      </div>
    </section>
  );
}

export default About;
