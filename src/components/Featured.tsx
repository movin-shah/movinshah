import React from 'react';
import { motion, useInView } from 'framer-motion';
import YouTube from 'react-youtube';
import { Youtube } from 'lucide-react';

const featuredVideos = [
  {
    id: 'QfPCRdk9ynw',
    title: 'Breaking News Short',
    description: 'Fast-paced news coverage in short format',
    type: 'short'
  },
  {
    id: 'z-LA1Qsz9Co',
    title: 'News Coverage',
    description: 'In-depth news analysis and editing',
    type: 'video'
  }
];

const Featured = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <section id="featured" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#00A3FF] to-[#8A2BE2] text-transparent bg-clip-text"
          >
            Featured Work
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="rounded-xl overflow-hidden bg-gray-900 shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#00A3FF]/20">
                  <div className="relative">
                    <YouTube
                      videoId={video.id}
                      className="w-full aspect-video"
                      opts={{
                        width: '100%',
                        height: '100%',
                        playerVars: {
                          modestbranding: 1,
                          rel: 0,
                          controls: 1
                        }
                      }}
                    />
                    {video.type === 'short' ? (
                      <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full flex items-center gap-2 text-sm font-medium">
                        <Youtube size={16} />
                        Short
                      </div>
                    ) : (
                      <div className="absolute top-4 right-4 bg-white text-red-600 px-3 py-1 rounded-full flex items-center gap-2 text-sm font-medium">
                        <Youtube size={16} />
                        Video
                      </div>
                    )}
                  </div>
                  <div className="p-6 bg-gradient-to-b from-gray-900/50 to-gray-900">
                    <h3 className="text-xl font-bold text-white mb-2">{video.title}</h3>
                    <p className="text-gray-400">{video.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Featured;