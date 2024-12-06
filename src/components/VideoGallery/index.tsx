import React from 'react';
import { motion } from 'framer-motion';
import { creators } from './data';
import { CreatorCard } from './CreatorCard';

const VideoGallery = () => {
  return (
    <section id="creator-showcase" className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center bg-gradient-to-r from-[#00A3FF] to-[#8A2BE2] text-transparent bg-clip-text mb-16"
        >
          Creator Showcase
        </motion.h2>

        <div className="space-y-16">
          {Object.entries(creators).map(([creator, data]) => (
            <CreatorCard key={creator} creator={creator} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;