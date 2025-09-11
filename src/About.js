//About.js

function About({ bio }) {
  return (
    <section className="bg-white w-full py-20 px-5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-5">About Me</h2>
        <p className="text-gray-600 text-lg">{bio}</p>
      </div>
    </section>
  );
}

export default About;
