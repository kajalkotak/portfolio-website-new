//Hero.js

function Hero({name}){
  return(
    <header className="text-center p-10 bg-gray-800 text-white w-full">
        <h1 className="text-5xl font-extrabold text-blue-400 mb-5">
          Hello, I am {name}!
        </h1>
        <p className="text-white text-lg">Welcome to my Portfolio Website.</p>
        <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          View My Work
        </button>
      </header>
  );
}

export default Hero;