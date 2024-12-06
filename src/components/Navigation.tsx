import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Instagram, Twitter } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <motion.a
              href="#"
              className="text-2xl font-bold bg-gradient-to-r from-[#00A3FF] to-[#8A2BE2] text-transparent bg-clip-text"
              whileHover={{ scale: 1.05 }}
            >
              MS
            </motion.a>

            <div className="hidden md:flex items-center gap-8">
              <NavLinks />
              <SocialLinks />
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-black/95 md:hidden pt-20"
        >
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col items-center gap-6">
              <NavLinks mobile />
              <div className="flex items-center gap-6 mt-6">
                <SocialLinks />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

const NavLinks = ({ mobile = false }) => {
  const links = [
    { name: 'Featured', id: 'featured' },
    { name: 'Creator Showcase', id: 'creator-showcase' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' }
  ];
  
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {links.map((link) => (
        <motion.button
          key={link.name}
          onClick={() => handleClick(link.id)}
          className={`text-gray-300 hover:text-white transition-colors ${
            mobile ? 'text-2xl py-2' : ''
          }`}
          whileHover={{ scale: 1.05 }}
        >
          {link.name}
        </motion.button>
      ))}
    </>
  );
};

const SocialLinks = () => {
  return (
    <>
      <motion.a
        href="https://www.instagram.com/movinnshah/profilecard/?igsh=emNyMWoxajYwcThm"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-[#8A2BE2] transition-colors"
        whileHover={{ scale: 1.1 }}
      >
        <Instagram size={20} />
      </motion.a>
      <motion.a
        href="https://x.com/GamingInsaan69?t=lx1Af9wlbD931QP3flhqXw&s=09"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-[#00A3FF] transition-colors"
        whileHover={{ scale: 1.1 }}
      >
        <Twitter size={20} />
      </motion.a>
    </>
  );
};

export default Navigation;