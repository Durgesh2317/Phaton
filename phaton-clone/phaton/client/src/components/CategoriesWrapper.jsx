import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import OnlineCourses from "./OnlineCourses";
import ToolsSection from "./ToolsSection";
import GraphicDesignSection from "./GraphicDesignSection";
import HotItems from "./HotItems";
import Ebooks from "./Ebooks";
import LearnInMinutes from "./LearnInMinutes";
import Saas from "./Saas";
import Creators from "./Creators";
import Browse from "./Browse";

export default function CategoriesWrapper() {
  const categories = [
    "All","Ebooks","Courses","Design","Creators",
    "Workbooks","Hot","Tools","SaaS","Learn","etc.",
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat);
    // if (cat === "All") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const slideVariants = {
    hidden: { opacity: 0, x: 120 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit:   { opacity: 0, x: -120, transition: { duration: 0.35, ease: "easeIn" } },
  };

  const renderContent = () => {
    if (activeCategory === "etc.") {
      return <Browse />;
    }

    switch (activeCategory) {
      case "Ebooks": return <Ebooks />;
      case "Courses": return <OnlineCourses />;
      case "Design": return <GraphicDesignSection />;
      case "Creators": return <Creators />;
      case "Workbooks": return <LearnInMinutes />;
      case "Hot": return <HotItems />;
      case "Tools": return <ToolsSection />;
      case "SaaS": return <Saas />;
      case "Learn": return <LearnInMinutes />;
      case "etc.": return <Browse />;
      case "All":
      default:
        return (
          <>
            <OnlineCourses />
            <Ebooks />
            <GraphicDesignSection />
            <Creators />
            <ToolsSection />
            <HotItems />
            <LearnInMinutes />
            <Saas />
            <Browse />
          </>
        );
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
     
      <div className="flex flex-wrap gap-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            className={`px-5 py-2 rounded-full font-medium border transition ${
              activeCategory === cat
                ? "bg-black text-white border-black"
                : "bg-gray-100 hover:bg-gray-200 border-gray-300 text-gray-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      
      <div className="relative">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={`panel-${activeCategory}`}
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
