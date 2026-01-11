import React, { useState, useEffect } from 'react';
import { Menu, X, Scissors } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookNow = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const menuItems = ['Home', 'Services', 'About', 'Team', 'Gallery', 'Contact'];

  // 1. FASTER LOAD ANIMATION (Was 0.8s -> Now 0.5s)
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: {
      opacity: 1,
      x: 0,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 } // Faster Stagger
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <motion.nav
      // Removed initial/animate props to eliminate start-up lag
      // 2. FASTER SCROLL TRANSITION (Was duration-500 -> Now duration-300)
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out
        ${scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3 text-dark'
          : 'bg-transparent py-4 md:py-6 text-white'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group cursor-pointer">
          <motion.div
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.3 }} // Faster Rotate
          >
            <Scissors className="text-gold h-8 w-8" />
          </motion.div>
          <div className="font-serif text-2xl font-bold tracking-wider">
            LUXE<span className="text-gold">SALON</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group font-medium text-sm tracking-wide transition-colors duration-200 hover:text-gold" // Faster Hover
            >
              {item.toUpperCase()}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gold transition-all duration-200 group-hover:w-full" />
            </a>
          ))}

          <motion.button
            onClick={handleBookNow}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-2.5 rounded-full font-semibold text-sm tracking-wider transition-all duration-300
              ${scrolled
                ? 'bg-dark text-white hover:bg-gold'
                : 'bg-white text-dark hover:bg-gold hover:text-white'
              }`}
          >
            BOOK NOW
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-50 relative focus:outline-none"
        >
          {isOpen ? <X size={32} className="text-dark" /> : <Menu size={32} className={scrolled ? 'text-dark' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center h-screen w-full md:hidden"
          >
            <div className="flex flex-col space-y-8 text-center">
              {menuItems.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  variants={itemVariants}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-serif font-bold text-dark hover:text-gold transition-colors py-2"
                >
                  {item}
                </motion.a>
              ))}

              <motion.button
                variants={itemVariants}
                onClick={handleBookNow}
                className="bg-gold text-white px-10 py-4 rounded-full text-xl font-bold shadow-xl mx-auto mt-4"
              >
                Book Appointment
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;