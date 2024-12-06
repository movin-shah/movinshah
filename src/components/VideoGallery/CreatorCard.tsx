import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, Instagram } from 'lucide-react';
import { VideoGrid } from './VideoGrid';
import { Creator } from './types';

interface CreatorCardProps {
  creator: string;
  data: Creator;
}

export const CreatorCard: React.FC<CreatorCardProps> = ({ creator, data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="flex items-center gap-3 mb-8">
        <motion.a
          href={data.socialLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="text-xl md:text-2xl lg:text-3xl font-bold hover:text-[#00A3FF] transition-colors flex items-center gap-2"
        >
          {creator}
          {data.platform === 'youtube' ? (
            <Youtube className="text-red-600 w-6 h-6 md:w-8 md:h-8" />
          ) : (
            <Instagram className="text-pink-600 w-6 h-6 md:w-8 md:h-8" />
          )}
        </motion.a>
      </div>

      <VideoGrid videos={data.videos} platform={data.platform} />
    </motion.div>
  );
};