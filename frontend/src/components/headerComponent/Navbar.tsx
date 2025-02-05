import React, { useState } from "react";
import categories from "../../data/categories";
import { Link } from "react-router-dom";
import MegaMenu from "./MegaMenu";
import { IoCartOutline } from "react-icons/io5";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Navbar: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(
    null
  );

  return (
    <div className="relative z-0 border-t-1 border-b-1 border-gray-300">
      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center justify-center gap-3 text-center p-1">
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
      <div className="md:hidden flex items-center justify-between p-4 bg-gray-200">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-2xl text-gray-700"
        >
          &#9776;
        </button>
      </div>

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

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 left-0 w-2/3 h-full bg-gray-800 text-white transition-transform duration-500 ease-in-out ${
          isSidebarOpen
            ? "transform translate-x-0"
            : "transform -translate-x-full"
        } md:hidden`}
      >
        <div className="p-4 flex items-center justify-between">
          <IoCartOutline size={30} color="red" />
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="text-white text-2xl"
          >
            &#10005; {/* Close Icon */}
          </button>
        </div>
        <div className="space-y-4 p-4 overflow-y-auto h-full">
          {categories?.map((navItem, index) => (
            <div key={index} className="space-y-2">
              <div>
                <button
                  className="flex items-center justify-between text-lg font-semibold hover:text-gray-400 w-full text-left transition-all duration-500"
                  onClick={() =>
                    setActiveCategory(
                      activeCategory === navItem.categoryTitle
                        ? null
                        : navItem.categoryTitle
                    )
                  }
                >
                  {navItem?.categoryTitle}{" "}
                  <span
                    className={`transform transition-transform duration-500 ${
                      activeCategory === navItem?.categoryTitle
                        ? "rotate-180"
                        : "rotate-0"
                    }`}
                  >
                    {activeCategory !== navItem?.categoryTitle ? (
                      <MdKeyboardArrowDown />
                    ) : (
                      <MdKeyboardArrowUp />
                    )}
                  </span>
                </button>
              </div>

              {/* Subcategory Dropdown */}
              {activeCategory === navItem.categoryTitle && (
                <div className="pl-4">
                  {navItem.subCategories.map((subCategory) => (
                    <div
                      key={subCategory.subCategoryTitle}
                      className="space-y-2"
                    >
                      <button
                        onClick={() =>
                          setActiveSubCategory(
                            activeSubCategory === subCategory.subCategoryTitle
                              ? null
                              : subCategory.subCategoryTitle
                          )
                        }
                        className="text-sm text-gray-300 hover:text-gray-400 w-full text-left"
                      >
                        {subCategory.subCategoryTitle}
                      </button>

                      {/* Child Categories */}
                      {activeSubCategory === subCategory.subCategoryTitle && (
                        <div className="pl-4">
                          {subCategory.childCategories.map((childCategory) => (
                            <Link
                              key={childCategory.childCategoryTitle}
                              to={childCategory.childCategoryLink}
                              className="text-xs text-gray-500 hover:text-gray-400 block"
                            >
                              {childCategory.childCategoryTitle}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
