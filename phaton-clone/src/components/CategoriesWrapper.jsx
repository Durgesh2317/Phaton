import React, { useState } from "react";
import Section from "./Section";
import Browse from "./Browse";
import { gethomepageData } from "../services/DataService";
import { motion, AnimatePresence } from "framer-motion";


export default function CategoriesWrapper() {
  const [activeCategory, setActiveCategory] = useState("all");
  const data = gethomepageData();

   const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };


   const itemVariants = {
    hidden: { opacity: 0, x: -150 }, 
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, x: 150, transition: { duration: 0.4 } }
  };
  

  const categories = ["all", ...Object.keys(data)];

  const renderContent = () => {
  if (activeCategory === "all") {
      return (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="space-y-12"
        >
          {Object.keys(data).map((cat) => {
            const current = data[cat];
            return (
              <motion.div key={cat} variants={itemVariants}>
              <Section
                key={cat}
                title={current.title}
                items={current.items}
                sliceCount={current.sliceCount || 6}
                showPrice={current.showPrice !== false}
              />
              </motion.div>
            );
          })}

          <motion.div variants={itemVariants}>
            <Browse />
          </motion.div>
        </motion.div>
      );
    } else {
      const current = data[activeCategory];
      if (!current) return null;

    return (
      <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
      <motion.div variants={itemVariants}>
      <Section
        title={current.title}
        items={current.items}
        sliceCount={current.sliceCount || 6}
        showPrice={current.showPrice !== false}
      />
      </motion.div>

      <motion.div variants={itemVariants}>
            <Browse />
          </motion.div>
      </motion.div>
    );
   }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-wrap gap-3 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-lg transition ${
              activeCategory === cat
                ? "bg-black text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {cat === "all" ? "All" : data[cat].title}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory} 
          initial="hidden"
          animate="visible"
          exit="exit"
        >
      {renderContent()}
      </motion.div>
      </AnimatePresence>
    </div>
  );
}
