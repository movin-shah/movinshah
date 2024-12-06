import React from 'react';
import { motion } from 'framer-motion';

interface ScrollProgressProps {
  isAutoScrolling: boolean;
  currentSection: string;
}

const ScrollProgress = ({ isAutoScrolling, currentSection }: ScrollProgressProps) => {
  if (!isAutoScrolling) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed left-8 bottom-8 z-50 bg-black/80 backdrop-blur-sm rounded-lg p-4 text-white"
    >
      <div className="text-sm font-medium">
        Auto-scrolling through:
        <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-[#00A3FF] to-[#8A2BE2]">
          {currentSection.charAt(0).toUpperCase() + currentSection.slice(1)}
        </span>
      </div>
    </motion.div>
  );
};

export default ScrollProgress;