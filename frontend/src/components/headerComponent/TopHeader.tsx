import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const TopHeader: React.FC = () => {
  return (
    <div className="hidden md:flex text-center items-center p-2 justify-between bg-[#1D1616]">
      <div className="flex items-center text-center ">
        <Link to={"/"} className="flex text-center items-center gap-2">
          <span className="hover:underline text-white">
            take 10% off your order‡ (up to $50) when you join Wayfair Rewards
            NOW - FEB 3
          </span>
          <span>
            <FaArrowRight size={20} className="text-white" />
          </span>
        </Link>
      </div>
      <div className="flex items-center justify-end">
        <Link to={"/"} className="text-white hover:underline">
          Rewards
        </Link>{" "}
        <div className="w-[2px] mx-3 h-4 bg-white"></div>
        <Link to={"/"} className="text-white hover:underline">
          Financing
        </Link>{" "}
        <div className="w-[2px] mx-3 h-4 bg-white"></div>
        <Link to={"/"} className="text-white hover:underline">
          Professional
        </Link>{" "}
        <div className="w-[2px] mx-3 h-4 bg-white"></div>
        <Link to={"/"} className="text-white hover:underline">
          Free & Easy Delivery Over $35*
        </Link>
      </div>
    </div>
  );
};

export default TopHeader;
