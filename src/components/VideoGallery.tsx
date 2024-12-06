import React from 'react';
import { motion } from 'framer-motion';
import YouTube from 'react-youtube';
import { Youtube, Instagram } from 'lucide-react';

const creators = {
  'Neon Man': {
    videos: [
      'jPuwEiOeuIg',
      'z-LA1Qsz9Co',
      'QfPCRdk9ynw',
      '4BVDBqEdeoE'
    ],
    socialLink: 'https://youtube.com/@NeonManIndia',
    platform: 'youtube'
  },
  'Dattrax Gaming': {
    videos: [],
    socialLink: 'https://youtube.com/@DattraxGaming',
    platform: 'youtube'
  },
  'Shilladitya': {
    videos: [
      'DAVxCMLyDNQ',
      'DCYixg0SI-3',
      'DA6YwyTIpty'
    ],
    socialLink: 'https://instagram.com/shilladitya',
    platform: 'instagram'
  }
};

const VideoGallery = () => {
  return (
    <section className="py-20 bg-black">
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
            <motion.div
              key={creator}
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

              {data.platform === 'youtube' && data.videos.length > 0 && (
                <div className="overflow-x-auto pb-6 -mx-4 md:mx-0">
                  <div className="flex gap-4 md:gap-6 px-4 md:px-0" style={{ minWidth: 'min-content' }}>
                    {data.videos.map((videoId) => (
                      <motion.div
                        key={videoId}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-[280px] sm:w-[300px] md:w-[350px] flex-shrink-0"
                      >
                        <div className="rounded-lg overflow-hidden shadow-lg bg-gray-900 hover:shadow-[#00A3FF]/20 hover:shadow-xl transition-all duration-300">
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
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {data.platform === 'instagram' && data.videos.length > 0 && (
                <div className="overflow-x-auto pb-6 -mx-4 md:mx-0">
                  <div className="flex gap-4 md:gap-6 px-4 md:px-0" style={{ minWidth: 'min-content' }}>
                    {data.videos.map((videoId) => (
                      <motion.div
                        key={videoId}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-[280px] sm:w-[300px] md:w-[350px] flex-shrink-0"
                      >
                        <div className="rounded-lg overflow-hidden shadow-lg bg-gray-900 hover:shadow-[#00A3FF]/20 hover:shadow-xl transition-all duration-300">
                          <iframe
                            src={`https://www.instagram.com/reel/${videoId}/embed/`}
                            className="w-full aspect-[9/16] md:h-[400px] border-0"
                            allowFullScreen
                            scrolling="no"
                            frameBorder="0"
                          ></iframe>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;