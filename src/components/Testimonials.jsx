import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Emily Watson",
    role: "Regular Client",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    text: "I have never felt more confident. The balayage expert here is a true artist! The atmosphere is so relaxing, it feels like a mini-vacation every time I visit.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Bridal Package",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
    text: "They made my wedding day perfect. The team arrived on time, was incredibly professional, and my hair and makeup stayed flawless all night long.",
    rating: 5
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "VIP Member",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    text: "Best grooming experience in the city. The private suite is a game changer for privacy. Highly recommend the deep tissue massage as well.",
    rating: 5
  },
  {
    id: 4,
    name: "Jessica Lee",
    role: "Model",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
    text: "I trust no one else with my hair. Whether it's a trim or a complete color change, the results are always consistent and absolutely stunning.",
    rating: 5
  }
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section id="testimonials" className="py-24 bg-dark text-white relative overflow-hidden">
      
      {/* --- ARTISTIC BACKGROUND ELEMENTS --- */}
      
      {/* 1. Large Watermark Quote */}
      <div className="absolute top-10 left-10 text-gold opacity-5 pointer-events-none select-none">
        <Quote size={300} strokeWidth={1} />
      </div>

      {/* 2. Golden Gradient Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-900/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      {/* 3. Geometric Pattern Overlay (SVG) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-4"
          >
            <div className="p-3 border border-gold/30 rounded-full">
               <Quote className="text-gold w-6 h-6" />
            </div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-4 bg-gradient-to-r from-white via-gold to-white bg-clip-text text-transparent"
          >
            Voices of Elegance
          </motion.h2>
          
          <motion.p
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="text-gray-400 max-w-xl mx-auto"
          >
             Hear from those who have experienced our artistry firsthand.
          </motion.p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Slider {...settings} className="testimonial-slider pb-12">
            {testimonials.map((item) => (
              <div key={item.id} className="px-4 py-4">
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-tr-3xl rounded-bl-3xl rounded-tl-lg rounded-br-lg h-full hover:border-gold/50 transition-all duration-500 group relative overflow-hidden"
                >
                  
                  {/* Decorative Corner Flash */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#D4AF37" className="text-gold drop-shadow-lg" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-300 font-light italic mb-8 leading-loose text-lg relative z-10">
                    "{item.text}"
                  </p>

                  {/* User Profile */}
                  <div className="flex items-center gap-4 border-t border-white/10 pt-6 mt-auto">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gold rounded-full blur opacity-40 group-hover:opacity-70 transition-opacity"></div>
                      <img 
                        src={item.img} 
                        alt={item.name} 
                        className="w-14 h-14 rounded-full object-cover border-2 border-white/20 relative z-10" 
                      />
                    </div>
                    <div>
                      <h4 className="font-serif text-xl text-white flex items-center gap-2">
                        {item.name}
                        <CheckCircle size={14} className="text-gold" />
                      </h4>
                      <span className="text-xs text-gold/80 uppercase tracking-widest font-semibold">{item.role}</span>
                    </div>
                  </div>

                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Custom Styles for Dots */}
      <style jsx global>{`
        .testimonial-slider .slick-dots {
            bottom: -20px;
        }
        .testimonial-slider .slick-dots li button:before {
          color: white;
          opacity: 0.2;
          font-size: 10px;
        }
        .testimonial-slider .slick-dots li.slick-active button:before {
          color: #D4AF37 !important;
          opacity: 1;
          font-size: 14px;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;