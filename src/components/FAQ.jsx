import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, MessageCircle } from 'lucide-react';

const faqData = {
  General: [
    { q: "Where are you located?", a: "We are located at 123 Luxury Avenue, Suite 100, Beverly Hills. We have complimentary valet parking available for all clients." },
    { q: "What are your opening hours?", a: "We are open Monday through Saturday from 9:00 AM to 8:00 PM. Sundays are reserved for private VIP bookings only." },
    { q: "Do you sell gift cards?", a: "Yes! We offer digital and physical gift cards starting from $50. They make the perfect gift for any occasion." },
  ],
  Services: [
    { q: "Do I need to book in advance?", a: "We highly recommend booking at least 48 hours in advance to ensure your preferred stylist is available. Walk-ins are welcome but subject to availability." },
    { q: "Do you use organic products?", a: "Yes, we exclusively use premium, sulfate-free, and organic products like Aveda and Olaplex to ensure the health of your hair and skin." },
    { q: "Do you offer bridal packages?", a: "Absolutely. Our 'Bridal Glow' package includes a trial session, day-of hair & makeup, and a glass of champagne. Please contact us for a quote." },
  ],
  Policies: [
    { q: "What is your cancellation policy?", a: "We respectfully request at least 24 hours notice for cancellations. Cancellations made within 24 hours will incur a 50% service fee." },
    { q: "What payment methods do you accept?", a: "We accept all major credit cards (Visa, MasterCard, Amex), Apple Pay, and Cash. We do not accept personal checks." },
  ]
};

const FAQ = () => {
  const [activeTab, setActiveTab] = useState('General');
  const [activeIndex, setActiveIndex] = useState(null);

  const tabs = ['General', 'Services', 'Policies'];

  return (
    <section id="faq" className="pt-24 pb-12 bg-white">
      <div className="container mx-auto px-6">

        <div className="flex flex-col lg:flex-row gap-16">

          {/* Left Side: Content */}
          <div className="lg:w-1/2">
            <div className="mb-10">
              <span className="text-gold font-bold tracking-widest uppercase text-sm">Support</span>
              <h2 className="text-4xl font-serif font-bold text-dark mt-2">Frequently Asked Questions</h2>
            </div>

            {/* Category Tabs */}
            <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => { setActiveTab(tab); setActiveIndex(null); }}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border
                    ${activeTab === tab
                      ? 'bg-dark text-white border-dark'
                      : 'bg-white text-gray-500 border-gray-200 hover:border-gold hover:text-gold'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Accordion Questions */}
            <div className="space-y-4">
              <AnimatePresence mode='wait'>
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  {faqData[activeTab].map((item, index) => (
                    <div key={index} className="border-b border-gray-100 last:border-0 mb-4">
                      <button
                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                        className="w-full flex justify-between items-center py-4 text-left focus:outline-none group"
                      >
                        <span className={`font-medium text-lg transition-colors duration-300 ${activeIndex === index ? 'text-gold' : 'text-dark group-hover:text-gold'}`}>
                          {item.q}
                        </span>
                        <div className={`p-2 rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-gold text-white rotate-180' : 'bg-gray-100 text-gray-400 group-hover:bg-gold/10 group-hover:text-gold'}`}>
                          {activeIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                        </div>
                      </button>

                      <AnimatePresence>
                        {activeIndex === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <p className="pb-6 text-gray-500 leading-relaxed text-sm">
                              {item.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* CTA Box */}
            <div className="mt-6 bg-gray-50 p-6 rounded-2xl flex items-center gap-4 border border-gray-100">
              <div className="bg-white p-3 rounded-full shadow-sm text-gold">
                <HelpCircle size={24} />
              </div>
              <div>
                <h4 className="font-bold text-dark">Still have questions?</h4>
                <p className="text-gray-500 text-sm">Can't find the answer you're looking for? Chat with our team.</p>
              </div>
            </div>

          </div>

          {/* Right Side: Sticky Image */}
          <div className="lg:w-1/2 hidden lg:block relative">
            <div className="sticky top-32">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800"
                  alt="Salon Support"
                  className="w-full h-[600px] object-cover"
                />
                {/* Overlay Content */}
                <div className="absolute inset-0 bg-black/20 flex items-end p-10">
                  <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl w-full">
                    <p className="text-gold font-bold text-xs uppercase tracking-wider mb-2">Need Immediate Help?</p>
                    <div className="flex items-center gap-3">
                      <MessageCircle className="text-dark" size={20} />
                      <span className="text-dark font-bold text-lg">+1 (555) 123-4567</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Circle */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold/20 rounded-full blur-2xl -z-10" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;