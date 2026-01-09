import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Services from './components/Services';
import About from './components/About';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="bg-white text-dark font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <Brands />
      <About />
      <Services />
      <Team />
      <Testimonials />
      <FAQ />
      <Gallery />
      <Contact />
      <Footer />

      <WhatsAppButton />
    </div>
  );
}

export default App;