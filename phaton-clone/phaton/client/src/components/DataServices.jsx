import React, { useState } from "react";

export default function dataServices({
  title,
  items,
  sliceCount = 6,
  showPrice = true,  
  rounded = "rounded-xl",
  gridCols = "grid-cols-2 sm:grid-cols-3 md:grid-cols-5",
}) {
  const [showAll, setShowAll] = useState(false);
  const [liked, setLiked] = useState({});
  const toggleLike = (id) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const displayedItems = showAll ? items : items.slice(0, sliceCount);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-sm font-bold uppercase tracking-wide">{title}</h2>
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-gray-700 hover:underline text-sm"
        >
          {showAll ? "See less..." : "See more..."}
        </button>
      </div>

     
      <div className={`grid ${gridCols} gap-6`}>
        {displayedItems.map((item) => (
          <div
            key={item.id}
            className={`bg-white ${rounded} shadow-sm hover:shadow-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105`}
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover rounded-lg group"
              />

              <button
                onClick={() => toggleLike(item.id)}
                className="absolute top-2 left-2 bg-white p-1 rounded-full shadow"
              >
                {liked[item.id] ? "❤️" : "🤍"}
              </button>

              {showPrice && item.price && (
                <span className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
                  {item.price}
                </span>
              )}
            </div>

            <div className="p-3 text-center mt-2">
              <h3 className="text-sm font-semibold text-gray-950">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}