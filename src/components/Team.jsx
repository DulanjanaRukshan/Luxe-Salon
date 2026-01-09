import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter } from 'lucide-react';

const team = [
  {
    name: "Elena Rossi",
    role: "Senior Art Director",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    specialty: "Precision Cuts"
  },
  {
    name: "David Kim",
    role: "Color Specialist",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400",
    specialty: "Balayage & Blonde"
  },
  {
    name: "Sarah Jenkins",
    role: "Bridal Expert",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    specialty: "Updos & Makeup"
  },
  {
    name: "Marcus Reid",
    role: "Barber",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    specialty: "Fades & Beards"
  }
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold font-bold tracking-widest uppercase text-sm">The Artists</span>
          <h2 className="text-4xl font-serif font-bold text-dark mt-2">Meet Our Stylists</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl"
            >
              {/* Image */}
              <div className="h-96 w-full overflow-hidden">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                />
              </div>

              {/* Overlay Info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white text-xl font-bold">{member.name}</h3>
                <p className="text-gold text-sm font-medium mb-2">{member.role}</p>
                <p className="text-gray-300 text-xs mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Specialist in {member.specialty}</p>
                
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <Instagram className="text-white w-5 h-5 hover:text-gold cursor-pointer" />
                  <Twitter className="text-white w-5 h-5 hover:text-gold cursor-pointer" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;