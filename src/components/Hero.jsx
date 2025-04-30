

const Hero = () => {
    return (
      <div className="pt-20 pb-12 bg-gradient-to-r from-gray-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Welcome to <span className="text-indigo-400">TechTrend</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Build the future with cutting-edge technology. Explore innovative solutions and elevate your projects with our expertise.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    );
  };

export default Hero;