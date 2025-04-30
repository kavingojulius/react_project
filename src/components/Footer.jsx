const Footer = () => {
    return (
      <footer className="bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-lg font-semibold text-indigo-400">About TechTrend</h3>
              <p className="mt-2 text-gray-300">
                TechTrend is your partner in innovation, delivering cutting-edge solutions to empower your business.
              </p>
            </div>
            {/* Links Section */}
            <div>
              <h3 className="text-lg font-semibold text-indigo-400">Quick Links</h3>
              <ul className="mt-2 space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-indigo-400">Home</a></li>
                <li><a href="#" className="text-gray-300 hover:text-indigo-400">About</a></li>
                <li><a href="#" className="text-gray-300 hover:text-indigo-400">Services</a></li>
                <li><a href="#" className="text-gray-300 hover:text-indigo-400">Contact</a></li>
              </ul>
            </div>
            {/* Contact Section */}
            <div>
              <h3 className="text-lg font-semibold text-indigo-400">Contact Us</h3>
              <p className="mt-2 text-gray-300">
                Email: <a href="mailto:info@techtrend.com" className="hover:text-indigo-400">info@techtrend.com</a>
              </p>
              <p className="mt-1 text-gray-300">Phone: (123) 456-7890</p>
              <div className="mt-4 flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-indigo-400">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.56v14.88A4.56 4.56 0 0 1 19.44 24H4.56A4.56 4.56 0 0 1 0 19.44V4.56A4.56 4.56 0 0 1 4.56 0h14.88A4.56 4.56 0 0 1 24 4.56zM8.13 19.44h3.06c6.3 0 7.65-4.32 7.65-8.64 0-4.26-3.06-7.62-7.65-7.62H8.13v16.26zm2.94-11.7c2.64 0 4.14 1.62 4.14 3.78 0 2.22-1.5 3.78-4.14 3.78h-1.26V7.74h1.26z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-indigo-400">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.42 3.58 8.06 8.12 9.8.6.12.82-.26.82-.58v-2.28c-3.34.72-4.04-1.62-4.04-1.62-.54-1.38-1.32-1.74-1.32-1.74-1.08-.72.08-.72.08-.72 1.2.06 1.82 1.24 1.82 1.24 1.06 1.82 2.78 1.3 3.46.98.12-.78.42-1.3.76-1.6-2.64-.3-5.42-1.32-5.42-5.88 0-1.3.46-2.36 1.22-3.2-.12-.3-.54-1.5.12-3.12 0 0 1-.3 3.28 1.24a11.5 11.5 0 0 1 3.02-.4c1.02 0 2.04.14 3.02.4 2.28-1.54 3.28-1.24 3.28-1.24.66 1.62.24 2.82.12 3.12.76.84 1.22 1.9 1.22 3.2 0 4.56-2.78 5.58-5.42 5.88.42.36.78 1.08.78 2.16v3.2c0 .32.22.7.82.58A10.02 10.02 0 0 0 22 12.04c0-5.52-4.48-10-10-10z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-6 text-center">
            <p className="text-gray-400">&copy; 2025 TechTrend. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;