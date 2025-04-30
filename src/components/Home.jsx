import React, { useState } from 'react';
import Navbar from './Navbar';
import ContentSection from './ContentSection';
import Footer from './Footer';
import Hero from './Hero';

const Home = () => {
  

  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <ContentSection />
      <Footer />
    </div>
  );
};

export default Home;