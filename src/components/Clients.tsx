import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, Award } from 'lucide-react';

const testimonials = [
  {
    name: 'Neon Man',
    role: 'News YouTuber',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
    quote: "Movin's editing skills transformed my content quality. The engagement metrics speak for themselves!",
    metrics: {
      subscribers: '1.2M',
      growth: '200%',
      engagement: '25%'
    }
  },
  {
    name: 'Dattrax',
    role: 'Gaming Creator',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=400',
    quote: "Working with Movin has been incredible. His understanding of gaming content is unmatched.",
    metrics: {
      subscribers: '800K',
      growth: '150%',
      engagement: '20%'
    }
  }
];

const Clients = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white mb-12 text-center bg-gradient-to-r from-[#00A3FF] to-[#8A2BE2] text-transparent bg-clip-text"
        >
          Client Success Stories
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-900 rounded-xl p-6 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#00A3FF] to-[#8A2BE2] opacity-10 rounded-bl-full" />
              
              <div className="flex items-start gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              
              <blockquote className="text-gray-300 mb-6">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <Users className="w-6 h-6 text-[#00A3FF] mx-auto mb-2" />
                  <div className="text-xl font-bold text-white">{testimonial.metrics.subscribers}</div>
                  <div className="text-sm text-gray-400">Subscribers</div>
                </div>
                <div className="text-center">
                  <Award className="w-6 h-6 text-[#8A2BE2] mx-auto mb-2" />
                  <div className="text-xl font-bold text-white">{testimonial.metrics.growth}</div>
                  <div className="text-sm text-gray-400">Growth</div>
                </div>
                <div className="text-center">
                  <Star className="w-6 h-6 text-[#00A3FF] mx-auto mb-2" />
                  <div className="text-xl font-bold text-white">{testimonial.metrics.engagement}</div>
                  <div className="text-sm text-gray-400">Engagement</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;