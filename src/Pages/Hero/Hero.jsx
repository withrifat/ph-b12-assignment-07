import React from 'react';

const Hero = () => {
  return (
    <div className="mx-auto px-4 mt-10">
      <div className="container mx-auto flex flex-col">
        <div className="flex-1 space-y-6 mt-10 text-center items-center mb-5">
          <h1 className="text-5xl lg:text-7xl font-extrabold">
            We Build <br /> <span className="text-main-g">Productive</span> Apps
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-500 text-base lg:text-lg text-center">
              At WithRifat, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
              Our goal is to turn your ideas into digital experiences that truly make an impact.
            </p>
          </div>
          <div className="flex gap-6 mt-4 justify-center">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:bg-gray-200 px-5 py-4 rounded-lg shadow border-gray-300 border "
            >
              <img src="/plays.png" alt="Google Play" className="w-6 h-6" />
              <span className="font-semibold">Google Play</span>
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:bg-gray-200 px-5 py-4 rounded-lg shadow border-gray-300 border "
            >
              <img src="/apps.png" alt="App Store" className="w-6 h-6" />
              <span className="font-semibold">App Store</span>
            </a>
          </div>
        </div>
        <div className="flex-1">
          <img src="/hero.png" alt="Hero" className="w-[80%] mx-auto h-auto object-cover rounded-lg" />
        </div>
      </div>
      {/* Testimonial */}
      <div className="relative w-screen left-1/2 -translate-x-1/2 bg-main-g text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10">
            Trusted by Millions, Built for You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <p className="text-sm sm:text-lg md:text-xl lg:text-2xl">Total Downloads</p>
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mt-2">29.6M</h3>
              <p className="text-xs sm:text-base md:text-lg lg:text-xl mt-1">21% more than last month</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-sm sm:text-lg md:text-xl lg:text-2xl">Total Reviews</p>
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mt-2">906K</h3>
              <p className="text-xs sm:text-base md:text-lg lg:text-xl mt-1">46% more than last month</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-sm sm:text-lg md:text-xl lg:text-2xl">Active Apps</p>
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mt-2">132+</h3>
              <p className="text-xs sm:text-base md:text-lg lg:text-xl mt-1">31 more will launch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
