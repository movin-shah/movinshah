import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Featured from './components/Featured';
import VideoGallery from './components/VideoGallery';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navigation />
      <Hero />
      <Featured />
      <VideoGallery />
      <About />
      <Contact />
    </div>
  );
}

export default App;