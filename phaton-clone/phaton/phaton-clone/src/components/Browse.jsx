import React from "react";

const promoItems = [
  {
    id: 1,
    title: "E-Books Collection",
    desc: "Learn with curated digital books",
    image: "https://www.ebsco.com/sites/default/files/acquiadam-assets/Finding-Your-Favorite-Featured-Collections-blog-image-780.jpg",
  },
  {
    id: 2,
    title: "iPhone Exclusive Tools",
    desc: "Boost productivity with premium tools",
    image: "https://ivenus.in/wp-content/uploads/2025/04/1-768x768.jpeg",
  },
];

export default function Browse() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
     
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-sm font-bold uppercase border border-gray-300 rounded-full px-4 py-1 tracking-wide">
          FEATURED PROMOS
        </h2>
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {promoItems.map((item) => (
          <div
            key={item.id}
            className="relative bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-96 overflow-hidden object-cover rounded-xl group transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
            />
            
            <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur px-4 py-2 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
