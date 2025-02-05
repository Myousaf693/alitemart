import React, { useState } from "react";
import categories from "../../data/categories"; // Ensure this imports the correct data
import { Link } from "react-router-dom";
import MegaMenu from "./MegaMenu";

const Navbar: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div className="relative z-0 border-t-1 border-b-1 border-gray-300">
      {/* Navbar */}
      <div className="flex items-center justify-center gap-3 text-center p-1">
        {categories?.map((navItem, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setActiveCategory(navItem?.categoryTitle)}
            onMouseLeave={() => setActiveCategory(null)}
          >
            <Link to={navItem?.categoryLink} className="text-sm">
              {navItem?.categoryTitle}
            </Link>
          </div>
        ))}
      </div>

      {/* MegaMenu with Animation */}
      <div
        className={`absolute top-7 left-0 w-full h-[80vh] bg-white shadow-lg 
          transition-all duration-500 ease-in-out transform origin-top 
          ${
            activeCategory
              ? "opacity-100 scale-y-100"
              : "opacity-0 scale-y-0 pointer-events-none"
          }`}
        onMouseEnter={() => setActiveCategory(activeCategory)}
        onMouseLeave={() => setActiveCategory(null)}
      >
        {/* Pass subCategories to MegaMenu based on the activeCategory */}
        {activeCategory && (
          <MegaMenu
            subCategories={
              categories.find(
                (category) => category.categoryTitle === activeCategory
              )?.subCategories || []
            }
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
