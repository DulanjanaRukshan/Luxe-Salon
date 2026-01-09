import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const galleryImages = [
  { id: 1, category: 'Hair Cuts', src: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80&w=600' },
  { id: 2, category: 'Color', src: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=600' },
  { id: 3, category: 'Interior', src: 'https://images.unsplash.com/photo-1695527081848-1e46c06e6458?auto=format&fit=crop&q=80&w=600' },
  { id: 4, category: 'Hair Cuts', src: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&q=80&w=600' },
  { id: 5, category: 'Color', src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=600' },
  { id: 6, category: 'Interior', src: 'https://plus.unsplash.com/premium_photo-1664048712492-9d395c204e37?auto=format&fit=crop&q=80&w=600' },
  { id: 7, category: 'Hair Cuts', src: 'https://images.unsplash.com/photo-1633681138600-295fcd688876?auto=format&fit=crop&q=80&w=600' },
  { id: 8, category: 'Color', src: 'https://plus.unsplash.com/premium_photo-1664048713258-a1844e3d337f?auto=format&fit=crop&q=80&w=600' },
];

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImg, setSelectedImg] = useState(null);

  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const categories = ['All', 'Hair Cuts', 'Color', 'Interior'];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold font-bold tracking-widest uppercase text-sm"
          >
            Portfolio
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-dark mt-2"
          >
            Our Masterpieces
          </motion.h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-6 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-lg font-medium transition-colors relative
                ${filter === cat ? 'text-gold' : 'text-gray-400 hover:text-dark'}
              `}
            >
              {cat}
              {filter === cat && (
                <motion.div 
                  layoutId="underline" 
                  className="absolute -bottom-2 left-0 w-full h-0.5 bg-gold" 
                />
              )}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                layout
                key={img.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="relative group cursor-pointer overflow-hidden rounded-xl h-64 md:h-80"
                onClick={() => setSelectedImg(img.src)}
              >
                <img 
                  src={img.src} 
                  alt={img.category} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white">
                    <ZoomIn size={24} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal (Full Screen View) */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-6 right-6 text-white hover:text-gold">
              <X size={40} />
            </button>
            <motion.img 
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              src={selectedImg} 
              alt="Full screen" 
              className="max-h-[90vh] max-w-[95vw] rounded-lg shadow-2xl border-4 border-dark"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            />
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Gallery;