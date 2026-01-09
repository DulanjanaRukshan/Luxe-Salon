import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  // REPLACE THIS WITH YOUR REAL PHONE NUMBER (International format without +)
  // Example: 15551234567 for US (+1) or 447700900000 for UK (+44)
  const phoneNumber = "94767682591"; 
  const message = "Hello! I would like to book an appointment at LuxeSalon.";

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, rotate: 180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.1, rotate: 10 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-2xl cursor-pointer group"
      style={{ boxShadow: "0px 4px 20px rgba(37, 211, 102, 0.4)" }}
    >
      {/* Pulse Effect */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-20 animate-ping group-hover:hidden"></span>
      
      {/* Icon */}
      <MessageCircle size={32} className="text-white fill-white" />

      {/* Hover Tooltip */}
      <span className="absolute right-full mr-4 bg-white text-dark px-4 py-2 rounded-lg font-bold text-sm shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Chat with us
        {/* Little triangle arrow for tooltip */}
        <span className="absolute top-1/2 -right-1 -mt-1 border-4 border-transparent border-l-white"></span>
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;