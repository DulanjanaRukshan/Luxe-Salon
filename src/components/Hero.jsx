import React from 'react';
import Slider from 'react-slick';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Custom "Next" Arrow
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 z-20 -translate-y-1/2 p-3 rounded-full border-2 border-white/30 text-white hover:bg-gold hover:border-gold transition-all duration-300 group"
  >
    <ChevronRight size={28} className="group-hover:scale-110 transition-transform" />
  </button>
);

// Custom "Previous" Arrow
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-4 top-1/2 z-20 -translate-y-1/2 p-3 rounded-full border-2 border-white/30 text-white hover:bg-gold hover:border-gold transition-all duration-300 group"
  >
    <ChevronLeft size={28} className="group-hover:scale-110 transition-transform" />
  </button>
);

const Hero = () => {
  // 1. ADDED: Function to scroll to Services section
  const handleViewServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
    cssEase: 'linear',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: dots => (
      <div style={{ bottom: "30px" }}>
        <ul className="m-0"> {dots} </ul>
      </div>
    ),
  };

  const slides = [
    { 
      type: 'image', 
      src: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&q=80&w=1920', 
      title: 'Redefine Your Beauty', 
      sub: 'Experience the art of hair styling.' 
    },
    { 
      type: 'image', 
      src: 'https://plus.unsplash.com/premium_photo-1683121230718-3256f14d08ac?auto=format&fit=crop&q=80&w=1920', 
      title: 'A Sanctuary of Style', 
      sub: 'Relax in our modern, luxurious space.' 
    },
    { 
      type: 'image', 
      src: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&q=80&w=1920', 
      title: 'Expert Care', 
      sub: 'Precision cuts tailored specifically for you.' 
    }
  ];

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden bg-dark">
      <Slider {...settings} className="h-full hero-slider">
        {slides.map((slide, i) => (
          <div key={i} className="relative h-screen w-full focus:outline-none overflow-hidden">
            
            {/* Repeating Zoom Animation */}
            <motion.img
              src={slide.src}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ scale: 1.2 }} 
              animate={{ scale: 1 }}   
              transition={{ 
                duration: 10,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse"
              }} 
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 z-10">
              <AnimatePresence mode='wait'>
                <div key={i}>
                   <motion.h1 
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="text-5xl md:text-8xl font-serif font-bold mb-6 drop-shadow-xl"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p 
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    transition={{ delay: 0.3 }}
                    className="text-xl md:text-3xl font-light mb-10 text-gray-200 max-w-2xl mx-auto tracking-wide"
                  >
                    {slide.sub}
                  </motion.p>
                   
                   {/* 2. UPDATED: Button with onClick Handler */}
                   <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                   >
                    <motion.button
                        onClick={handleViewServices} // <--- Added Click Handler
                        whileHover={{ scale: 1.05, backgroundColor: "#D4AF37", borderColor: "#D4AF37", color: "#000" }}
                        className="backdrop-blur-sm border-2 border-white px-10 py-4 text-lg font-semibold tracking-[0.2em] text-white transition-all duration-300 ease-out cursor-pointer"
                    >
                        VIEW SERVICES
                    </motion.button>
                   </motion.div>
                </div>
              </AnimatePresence>
            </div>
          </div>
        ))}
      </Slider>

      <style jsx global>{`
        .hero-slider .slick-dots li button:before {
          font-size: 12px;
          color: white;
          opacity: 0.5;
          transition: all 0.3s ease;
        }
        .hero-slider .slick-dots li.slick-active button:before {
          color: #D4AF37 !important;
          opacity: 1;
          font-size: 14px;
        }
      `}</style>
    </section>
  );
};

export default Hero;