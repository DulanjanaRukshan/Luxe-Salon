import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Calendar, CheckCircle, Loader2 } from 'lucide-react';

const Contact = () => {
  // 1. STATE: To hold form data
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  // 2. STATE: To handle Loading/Success/Error status
  const [status, setStatus] = useState(null); // 'idle', 'loading', 'success', 'error'

  // 3. FUNCTION: Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 4. FUNCTION: Send Data to Backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Connect to your Node.js Backend
      const response = await fetch('https://luxe-salon-backend.onrender.com/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', service: '', date: '', message: '' }); // Clear form
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Connection Error:", error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        
        {/* Main Card Container */}
        <div className="flex flex-col lg:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden min-h-[700px]">
          
          {/* --- LEFT SIDE: Info & Map (Visual Only) --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-5/12 bg-dark text-white p-10 md:p-14 flex flex-col justify-between relative"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div>
              <h3 className="text-3xl font-serif font-bold mb-2">Get in Touch</h3>
              <p className="text-gray-400 mb-10">Have questions or need a consultation? We are here to help.</p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg text-gold"><MapPin size={24} /></div>
                  <div>
                    <h5 className="font-bold text-lg">Visit Us</h5>
                    <p className="text-gray-400">123 Luxury Avenue, Suite 100<br/>Beverly Hills, CA 90210</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg text-gold"><Phone size={24} /></div>
                  <div>
                    <h5 className="font-bold text-lg">Call Us</h5>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                    <p className="text-gray-500 text-sm">Mon-Fri from 8am to 5pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg text-gold"><Mail size={24} /></div>
                  <div>
                    <h5 className="font-bold text-lg">Email Us</h5>
                    <p className="text-gray-400">concierge@luxesalon.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="mt-10 h-48 w-full rounded-xl overflow-hidden border border-white/10 relative z-10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26456.14660837657!2d-118.406977!3d34.072555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147cf%3A0x2948c3f87b858cf3!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                width="100%" height="100%" 
                style={{ border: 0, filter: "grayscale(100%) invert(90%)" }} 
                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          {/* --- RIGHT SIDE: Booking Form (Logic Connected) --- */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-7/12 bg-white p-10 md:p-14"
          >
            <div className="flex justify-between items-end mb-8">
              <div>
                 <h3 className="text-3xl font-serif font-bold text-dark">Book an Appointment</h3>
                 <p className="text-gray-500 mt-2">Fill out the form below and we will contact you to confirm.</p>
              </div>
              <Clock className="text-gold w-10 h-10 hidden md:block" />
            </div>

            {/* CONDITIONAL RENDERING: Success Message or Form */}
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 text-green-800 p-8 rounded-xl text-center flex flex-col items-center justify-center h-64"
              >
                <div className="bg-green-100 p-4 rounded-full mb-4">
                  <CheckCircle size={48} className="text-green-600" />
                </div>
                <h4 className="text-2xl font-bold mb-2">Request Received!</h4>
                <p className="text-green-700">Your appointment request has been saved to our database.</p>
                <button onClick={() => setStatus('idle')} className="mt-6 text-green-700 font-bold hover:underline">
                  Book Another Appointment
                </button>
              </motion.div>
            ) : (
              /* The Form */
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Full Name</label>
                    <input 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                    <input 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      required 
                      type="tel" 
                      placeholder="(555) 000-0000" 
                      className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all" 
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Service Category</label>
                    <select 
                      name="service" 
                      value={formData.service} 
                      onChange={handleChange} 
                      required
                      className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-gray-600"
                    >
                      <option value="">Select a Service</option>
                      <option value="Hair Styling & Cut">Hair Styling & Cut</option>
                      <option value="Hair Coloring">Hair Coloring</option>
                      <option value="Spa Treatment">Spa Treatment</option>
                      <option value="Bridal Package">Bridal Package</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Preferred Date</label>
                    <div className="relative">
                      <input 
                        name="date" 
                        value={formData.date} 
                        onChange={handleChange} 
                        required
                        type="date" 
                        className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-gray-600" 
                      />
                      <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Message (Optional)</label>
                  <textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    rows="4" 
                    placeholder="Any specific requests or stylist preference?" 
                    className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                {status === 'error' && (
                  <p className="text-red-500 text-center font-bold">Something went wrong. Is the server running?</p>
                )}

                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full bg-gold text-white font-bold py-5 rounded-xl text-lg hover:bg-dark transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>Sending Request <Loader2 className="animate-spin" /></>
                  ) : (
                    <>CONFIRM BOOKING REQUEST <Send size={20} /></>
                  )}
                </button>
              </form>
            )}

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;