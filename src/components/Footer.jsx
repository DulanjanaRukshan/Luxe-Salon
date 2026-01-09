import React, { useState } from 'react';
import { Facebook, Instagram, Twitter, Scissors, ArrowUp, Mail, Phone, MapPin, Loader2, Check } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error', 'exists'

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle Newsletter Subscribe
  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');

    try {
      const response = await fetch('https://luxe-salon-backend.onrender.com/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setEmail('');
        setTimeout(() => setStatus('idle'), 3000); // Reset after 3 seconds
      } else if (response.status === 400) {
        setStatus('exists');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <footer className="bg-black text-gray-300 relative border-t border-gray-900">
      
      {/* Back to Top Button */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <button 
          onClick={scrollToTop}
          className="bg-gold text-white p-3 rounded-full shadow-lg hover:bg-white hover:text-gold transition-all duration-300 group"
        >
          <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

      <div className="container mx-auto px-6 pt-20 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-2xl font-serif font-bold text-white">
              <Scissors className="text-gold" /> LUXE<span className="text-gold">SALON</span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Elevating beauty through precision and passion. We provide a sanctuary where style meets relaxation.
            </p>
            <div className="flex space-x-4 pt-2">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gold hover:text-white transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              {['Home', 'About Us', 'Services', 'Gallery', 'Book Appointment'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-gold hover:translate-x-2 inline-block transition-all duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold mt-1 min-w-[18px]" />
                <span>123 Luxury Avenue, Suite 100<br/>Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold min-w-[18px]" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold min-w-[18px]" />
                <span>concierge@luxesalon.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter (UPDATED) */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe for latest trends and exclusive offers.</p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email Address" 
                required
                className="bg-gray-900 text-white px-4 py-3 rounded-lg border border-gray-800 focus:border-gold outline-none transition-colors text-sm"
              />
              <button 
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className={`text-dark font-bold py-3 rounded-lg transition-all text-sm flex justify-center items-center gap-2
                  ${status === 'success' ? 'bg-green-500 text-white' : 'bg-gold hover:bg-white'}
                `}
              >
                {status === 'loading' && <Loader2 size={18} className="animate-spin" />}
                {status === 'success' && <>Subscribed <Check size={18} /></>}
                {status === 'idle' && 'SUBSCRIBE'}
                {status === 'exists' && 'Already Subscribed'}
                {status === 'error' && 'Retry'}
              </button>
            </form>
            {/* Error/Exists Message */}
            {status === 'exists' && <p className="text-orange-400 text-xs mt-2">You are already on our list!</p>}
            {status === 'error' && <p className="text-red-400 text-xs mt-2">Something went wrong. Try again.</p>}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2024 LuxeSalon. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gold transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;