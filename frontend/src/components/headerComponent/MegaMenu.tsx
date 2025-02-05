import React from "react";
import { Link } from "react-router-dom";

interface ChildCategory {
  childCategoryTitle: string;
  childCategoryLink: string;
}

interface SubCategory {
  subCategoryTitle: string;
  subCategoryLink: string;
  childCategories: ChildCategory[];
}

interface MegaMenuProps {
  subCategories: SubCategory[]; // Accepts an array of subcategories
}

const MegaMenu: React.FC<MegaMenuProps> = ({ subCategories }) => {
  return (
    <div className="w-full h-[90%] p-4 shadow-lg flex justify-center items-start">
      <div className="grid grid-cols-3 gap-6">
        {subCategories.map((subCategory) => (
          <div key={subCategory.subCategoryTitle} className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-700">
              {subCategory.subCategoryTitle}
            </h2>
            <ul className="space-y-2">
              {subCategory.childCategories.map((childCategory) => (
                <li key={childCategory.childCategoryTitle}>
                  <Link
                    to={childCategory.childCategoryLink}
                    className="text-gray-500 hover:text-gray-700 transition"
                  >
                    {childCategory.childCategoryTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;
