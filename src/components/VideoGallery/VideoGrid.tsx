import React from 'react';
import { motion } from 'framer-motion';
import YouTube from 'react-youtube';

interface VideoGridProps {
  videos: string[];
  platform: 'youtube' | 'instagram';
}

export const VideoGrid: React.FC<VideoGridProps> = ({ videos, platform }) => {
  if (videos.length === 0) return null;

  return (
    <div className="overflow-x-auto pb-6 -mx-4 md:mx-0">
      <div className="flex gap-4 md:gap-6 px-4 md:px-0" style={{ minWidth: 'min-content' }}>
        {videos.map((videoId) => (
          <motion.div
            key={videoId}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-[280px] sm:w-[300px] md:w-[350px] flex-shrink-0"
          >
            <div className="rounded-lg overflow-hidden shadow-lg bg-gray-900 hover:shadow-[#00A3FF]/20 hover:shadow-xl transition-all duration-300">
              {platform === 'youtube' ? (
                <YouTube
                  videoId={videoId}
                  opts={{
                    width: '100%',
                    height: '197',
                    playerVars: {
                      modestbranding: 1,
                      rel: 0,
                      controls: 1
                    }
                  }}
                  className="w-full"
                  onError={(e) => console.error('YouTube Error:', e)}
                />
              ) : (
                <iframe
                  src={`https://www.instagram.com/reel/${videoId}/embed/`}
                  className="w-full aspect-[9/16] md:h-[400px] border-0"
                  allowFullScreen
                  scrolling="no"
                  frameBorder="0"
                />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};