import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clapperboard, Gauge } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: <Clapperboard className="w-8 h-8 text-[#00A3FF]" />,
      value: "100+",
      label: "Videos Edited"
    },
    {
      icon: <Gauge className="w-8 h-8 text-[#8A2BE2]" />,
      value: "500K+",
      label: "Total Views"
    },
    {
      icon: <Award className="w-8 h-8 text-[#00A3FF]" />,
      value: "20+",
      label: "Happy Clients"
    }
  ];

  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-[#00A3FF] to-[#8A2BE2] text-transparent bg-clip-text">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 text-center transform hover:scale-105 transition-transform duration-300"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#00A3FF] to-[#8A2BE2] text-transparent bg-clip-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 text-gray-300 text-lg leading-relaxed backdrop-blur-sm bg-gray-900/30 rounded-xl p-8"
          >
            <p>
              Hey there! I’m Movin, a video editor with over three years of experience. My journey began with creating Instagram reels, and now I’ve mastered the art of long-form content.
            </p>
            <p>
              I’ve had the privilege of working with some of the biggest creators out there, helping them bring their vision to life. My work is fast, efficient, and high-quality. Need a 20-minute video edited? I’ve got it done in a day.        </p>
            <p>
              Whether it's gaming content, educational videos, or lifestyle vlogs, I bring a unique perspective and technical expertise to every project, ensuring each video not only meets but exceeds expectations.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;