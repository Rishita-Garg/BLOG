import React from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import BlogList from './components/BlogList';
import AboutMe from './components/AboutMe';

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="pt-16 grid grid-cols-12 gap-4 p-4">
        {/* Left Column */}
        <div className="col-span-12 md:col-span-8 lg:col-span-6 space-y-4">
          <BlogList />
        </div>

        {/* Right Column */}
        <div className="col-span-12 md:col-span-4 lg:col-span-3 space-y-4">
          <Carousel />
          <AboutMe />
        </div>
      </div>
    </div>
  );
};

export default App;
