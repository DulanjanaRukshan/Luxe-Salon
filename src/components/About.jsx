import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Users, Award } from 'lucide-react';

const About = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Image Collage */}
          <div className="relative">
            {/* Main Large Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=800" 
                alt="Stylist working" 
                className="rounded-lg shadow-2xl w-4/5" 
              />
            </motion.div>

            {/* Floating Secondary Image */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-12 right-4 w-3/5 z-20"
            >
              <img 
                src="https://plus.unsplash.com/premium_photo-1683121230718-3256f14d08ac?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Salon Interior" 
                className="rounded-lg shadow-2xl border-8 border-white" 
              />
            </motion.div>

            {/* Decorative Gold Box */}
            <div className="absolute top-10 -left-10 w-full h-full border-2 border-gold rounded-lg -z-0 hidden md:block" />
          </div>

          {/* Right Side: Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="mt-16 md:mt-0"
          >
            <motion.span variants={itemVariants} className="text-gold font-bold tracking-widest uppercase text-sm">
              Our Story
            </motion.span>
            
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-serif font-bold text-dark mt-2 mb-6">
              More Than Just a <br/> Hair Salon
            </motion.h2>

            <motion.p variants={itemVariants} className="text-gray-500 text-lg mb-6 leading-relaxed">
              Founded in 2014, LuxeSalon was born from a desire to create a sanctuary where artistry meets relaxation. We believe that self-care is not a luxury, but a necessity.
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-gray-500 text-lg mb-8 leading-relaxed">
              Our team of master stylists travels globally to stay ahead of trends, bringing the fashion of Paris, Milan, and New York directly to your chair.
            </motion.p>

            {/* Features Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 mb-8">
              {[
                "Certified Organic Products",
                "Private VIP Suites",
                "Award-Winning Stylists",
                "Free Consultation"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-gold/10 p-1 rounded-full text-gold">
                    <Check size={16} />
                  </div>
                  <span className="text-dark font-medium text-sm">{item}</span>
                </div>
              ))}
            </motion.div>

            {/* Stats Row */}
            <motion.div 
              variants={itemVariants}
              className="flex gap-8 border-t border-gray-100 pt-8"
            >
              <div>
                <div className="flex items-center gap-2 text-gold mb-1">
                  <Award size={24} />
                  <span className="text-3xl font-serif font-bold">15+</span>
                </div>
                <p className="text-xs text-gray-400 uppercase tracking-wide">Industry Awards</p>
              </div>
              
              <div>
                <div className="flex items-center gap-2 text-gold mb-1">
                  <Users size={24} />
                  <span className="text-3xl font-serif font-bold">12k+</span>
                </div>
                <p className="text-xs text-gray-400 uppercase tracking-wide">Happy Clients</p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;