import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00A3FF]/10 pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-[#00A3FF] to-[#8A2BE2] text-transparent bg-clip-text">
            Let's Connect
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.a
              href="https://wa.me/919103093170"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-[#25D366]/20 to-[#128C7E]/20 border border-[#25D366]/30 flex flex-col items-center text-center group hover:shadow-lg hover:shadow-[#25D366]/20 transition-all duration-300"
            >
              <MessageSquare className="w-12 h-12 text-[#25D366] mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">WhatsApp</h3>
              <p className="text-gray-400 mb-4">Quick Response Guaranteed</p>
              <span className="text-[#25D366] font-medium">+91 9103093170</span>
            </motion.a>

            <motion.a
              href="mailto:techmovin313@gmail.com"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-[#00A3FF]/20 to-[#8A2BE2]/20 border border-[#00A3FF]/30 flex flex-col items-center text-center group hover:shadow-lg hover:shadow-[#00A3FF]/20 transition-all duration-300"
            >
              <Mail className="w-12 h-12 text-[#00A3FF] mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Email</h3>
              <p className="text-gray-400 mb-4">Professional Inquiries</p>
              <span className="text-[#00A3FF] font-medium">techmovin313@gmail.com</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;