import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Youtube, TrendingUp } from 'lucide-react';

const projects = [
  {
    client: 'Neon Man',
    thumbnail: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800',
    metrics: { views: '10M+', growth: '200%' },
    description: 'Transformed content strategy leading to channel growth'
  },
  {
    client: 'Dattrax Gaming',
    thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800',
    metrics: { views: '5M+', growth: '150%' },
    description: 'Gaming content optimization and storytelling'
  },
  {
    client: 'Shilladitya',
    thumbnail: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=800',
    metrics: { views: '8M+', growth: '180%' },
    description: 'Educational content with engaging edits'
  }
];

const PortfolioItem = ({ project, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group relative overflow-hidden rounded-xl bg-gray-900"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.client}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 p-6 w-full">
          <h3 className="text-2xl font-bold text-white mb-2">{project.client}</h3>
          <p className="text-gray-300 mb-4">{project.description}</p>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Youtube size={20} className="text-[#00A3FF]" />
              <span className="text-white">{project.metrics.views}</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp size={20} className="text-[#8A2BE2]" />
              <span className="text-white">{project.metrics.growth}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <section id="work" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white mb-12 text-center bg-gradient-to-r from-[#00A3FF] to-[#8A2BE2] text-transparent bg-clip-text"
        >
          Featured Work
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <PortfolioItem key={project.client} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;