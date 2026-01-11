import React from 'react';

const brands = [
  { name: "L'Oreal", url: "https://logos-world.net/wp-content/uploads/2020/05/Loreal-Logo.jpg" },
  { name: "Kerastase", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXqOVKmsE4fA6tA308d15C3SXRMTS_Yk3e2A&s" },
  { name: "Olaplex", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ01-4z6sJJSsyeLD8Q2hE_LtDblje_tvC4lg&s" },
  { name: "Redken", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2m86Sgd2xfRTifinxX8Of4ZHrs50M0oPRsg&s" },
  { name: "Moroccanoil", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6zA2ZXBZwQo2fWlGcNNSTTa5AJD-GQfHvZA&s" },
  { name: "Aveda", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv865ii_rZe9YAzxRRJhCaa7XwYI5QW0kgjw&s" }
];

const Brands = () => {
  return (
    <section className="py-12 bg-gray-50 border-b border-gray-100">
      <div className="container mx-auto px-6">
        <p className="text-center text-gray-400 text-xs font-bold tracking-[0.3em] uppercase mb-10">
          Trusted by Premium Brands
        </p>

        {/* Logo Grid */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {brands.map((brand, index) => (
            <div key={index} className="group cursor-pointer">
              <img
                src={brand.url}
                alt={brand.name}
                className="h-8 md:h-12 w-auto object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;