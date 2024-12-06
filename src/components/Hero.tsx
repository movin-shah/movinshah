import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const handleWorkClick = () => {
    const featuredSection = document.getElementById('featured');
    if (featuredSection) {
      featuredSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40"
          poster="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=1920"
        >
          <source src="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl sm:text-7xl md:text-8xl font-bold relative inline-block"
          >
            <span className="absolute -inset-2 blur-lg bg-gradient-to-r from-[#00A3FF]/10 to-[#8A2BE2]/10 opacity-30" />
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#00A3FF] to-[#8A2BE2] [text-shadow:0_0_5px_rgba(0,163,255,0.2)]">
              Movin Shah
            </span>
          </motion.h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-2xl mx-auto font-light"
        >
          Crafting Visual Stories Through Expert Video Editing
        </motion.p>
        
        <motion.button
          onClick={handleWorkClick}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-12 px-8 py-4 bg-gradient-to-r from-[#00A3FF] to-[#8A2BE2] text-white rounded-full flex items-center gap-2 mx-auto hover:shadow-lg hover:shadow-[#00A3FF]/20 transition-all duration-300 group"
        >
          View Work
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;