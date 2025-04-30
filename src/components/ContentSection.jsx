


const ContentSection = () => {
    return (
      <div className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-400 mb-12">
            Our Innovative Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-700 rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1516321310762-479e93c6e8e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
                alt="AI Technology"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">AI-Powered Tools</h3>
                <p className="mt-2 text-gray-300">
                  Leverage artificial intelligence to automate tasks and gain insights from your data.
                </p>
                <a
                  href="#"
                  className="mt-4 inline-block text-indigo-400 hover:text-indigo-300"
                >
                  Learn More
                </a>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-gray-700 rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
                alt="Cloud Solutions"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">Cloud Integration</h3>
                <p className="mt-2 text-gray-300">
                  Seamlessly scale your applications with our secure and reliable cloud solutions.
                </p>
                <a
                  href="#"
                  className="mt-4 inline-block text-indigo-400 hover:text-indigo-300"
                >
                  Learn More
                </a>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-gray-700 rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551288049-b1f3c3159936?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
                alt="Web Development"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">Web Development</h3>
                <p className="mt-2 text-gray-300">
                  Build modern, responsive websites with our expert development services.
                </p>
                <a
                  href="#"
                  className="mt-4 inline-block text-indigo-400 hover:text-indigo-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default ContentSection;