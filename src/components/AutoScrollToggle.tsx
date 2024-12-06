import React from 'react';
import { Play, Pause } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AutoScrollToggleProps {
  isAutoScrolling: boolean;
  onToggle: () => void;
}

const AutoScrollToggle = ({ isAutoScrolling, onToggle }: AutoScrollToggleProps) => {
  return (
    <motion.button
      id="auto-scroll-toggle"
      onClick={onToggle}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-[#00A3FF] to-[#8A2BE2] p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
      aria-label={isAutoScrolling ? 'Pause auto-scroll' : 'Start auto-scroll'}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={isAutoScrolling ? 'pause' : 'play'}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {isAutoScrolling ? (
            <Pause className="w-6 h-6 text-white" />
          ) : (
            <Play className="w-6 h-6 text-white" />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
};

export default AutoScrollToggle;