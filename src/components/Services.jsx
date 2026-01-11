import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scissors, Sparkles, User, Palette, Clock, CheckCircle } from 'lucide-react';

// 1. Expanded Data with Categories, Prices, and Duration
const allServices = [
  // HAIR Services
  {
    id: 1,
    category: 'Hair',
    title: "Signature Precision Cut",
    price: "$65+",
    time: "45 min",
    desc: "Includes consultation, shampoo, massage, cut, and professional blowout.",
    icon: <Scissors className="w-6 h-6" />
  },
  {
    id: 2,
    category: 'Hair',
    title: "Balayage & Highlights",
    price: "$150+",
    time: "120 min",
    desc: "Hand-painted dimensional color for a natural, sun-kissed look.",
    icon: <Palette className="w-6 h-6" />
  },
  {
    id: 3,
    category: 'Hair',
    title: "Keratin Treatment",
    price: "$200+",
    time: "180 min",
    desc: "Smoothing therapy that eliminates frizz and improves hair health.",
    icon: <Sparkles className="w-6 h-6" />
  },

  // SKIN Services
  {
    id: 4,
    category: 'Skin',
    title: "HydraFacial Glow",
    price: "$120",
    time: "60 min",
    desc: "Deep cleansing, exfoliation, extraction, and hydration.",
    icon: <User className="w-6 h-6" />
  },
  {
    id: 5,
    category: 'Skin',
    title: "Anti-Aging Peel",
    price: "$140",
    time: "50 min",
    desc: "Advanced chemical peel to reduce fine lines and improve texture.",
    icon: <Sparkles className="w-6 h-6" />
  },

  // SPA Services
  {
    id: 6,
    category: 'Spa',
    title: "Aromatherapy Massage",
    price: "$90",
    time: "60 min",
    desc: "Relaxing full-body massage using essential oils of your choice.",
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    id: 7,
    category: 'Spa',
    title: "Deep Tissue Therapy",
    price: "$110",
    time: "60 min",
    desc: "Intensive massage targeting chronic muscle tension.",
    icon: <User className="w-6 h-6" />
  },

  // BRIDAL Services
  {
    id: 8,
    category: 'Bridal',
    title: "Bridal Hair & Makeup",
    price: "$350",
    time: "180 min",
    desc: "Includes trial session, day-of styling, and lash application.",
    icon: <User className="w-6 h-6" />
  }
];

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('Hair');

  // Filter services based on active tab
  const filteredServices = allServices.filter(service => service.category === activeCategory);

  const categories = ['Hair', 'Skin', 'Spa', 'Bridal'];

  return (
    <section id="services" className="py-20 md:py-24 bg-gray-50 relative overflow-hidden w-full">
      {/* Background Decorative Blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-200/50 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold font-bold tracking-widest uppercase text-sm"
          >
            Our Menu
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-dark mt-2 mb-6"
          >
            Curated Services
          </motion.h2>
          <p className="text-gray-500 text-lg">
            Experience our wide range of premium treatments designed to rejuvenate your body and style.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 border border-transparent
                ${activeCategory === cat
                  ? 'bg-dark text-white shadow-lg scale-105'
                  : 'bg-white text-gray-500 hover:border-gold hover:text-gold shadow-sm'
                }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Service Grid with Animation */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredServices.map((service) => (
              <motion.div
                layout
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
              >
                {/* Hover Effect Background */}
                <div className="absolute top-0 left-0 w-1 h-full bg-gold transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />

                {/* Top Row: Icon & Price */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-gray-50 rounded-xl text-dark group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <div className="text-right">
                    <span className="block text-2xl font-serif font-bold text-dark">{service.price}</span>
                    <div className="flex items-center gap-1 text-xs text-gray-400 mt-1 justify-end">
                      <Clock size={12} />
                      {service.time}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>

                {/* Bottom Action */}
                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Book Online</span>
                  <button className="text-gold font-bold text-sm flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                    Reserve <CheckCircle size={16} />
                  </button>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;