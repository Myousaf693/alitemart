import React, { useState } from "react";
import Profile from "../../assets/logoprofile.jpg";
import Logo from "../../assets/logo.png";
import { IoIosSearch } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import { RxCross2, RxDashboard } from "react-icons/rx";
import { RiLuggageCartLine } from "react-icons/ri";

import { Link } from "react-router-dom";
import { Avatar, Divider } from "@mui/material";
import InstantCart from "../cart/InstantCart";
import { IoCartOutline, IoLogOutOutline, IoMapOutline } from "react-icons/io5";
import { MdLockReset } from "react-icons/md";

const MiddleHeader: React.FC = () => {
  const [login, setLogin] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between gap-[4rem] p-2">
        <div className="pl-8 w-[30%]">
          <Link to={"/"}>
            <img src={Logo} width={70} alt="" />
          </Link>
        </div>
        <div className="w-[60%] p-3 flex text-center items-center justify-start gap-4 border-2 border-gray-400 rounded">
          <IoIosSearch size={20} className="w-[5%]" />
          <input
            type="text"
            placeholder="Find anything home..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="outline-none w-[90%]"
          />
          {isFocused && searchTerm && (
            <button
              className="w-[5%]"
              onMouseDown={(e) => {
                e.preventDefault();
                setSearchTerm("");
              }}
            >
              <RxCross2 className="cursor-pointer " size={25} />
            </button>
          )}
        </div>
        <div className=" w-[30%] flex justify-end items-center pr-10 gap-6">
          <div>
            {login ? (
              <div>
                <Link
                  to={"login"}
                  className="flex items-center text-center gap-2"
                >
                  <FaRegCircleUser size={35} />
                  <span className="text-xl font-semibold">Login</span>
                </Link>
                <div></div>
              </div>
            ) : (
              <div className="relative group">
                <div className="">
                  <Avatar alt="Yousaf" src={Profile} />
                </div>
                <div className="absolute z-1 hidden group-hover:block w-[14rem] right-[-6rem] bg-white p-2 border-1 border-gray-300 rounded shadow-md">
                  <div className="flex items-center justify-start gap-1 mb-3">
                    <Avatar alt="Yousaf" src={Profile} />
                    <div className="flex flex-col">
                      <span className="text-md font-bold">M. Yousaf</span>
                      <span className="text-[12px] text-gray-400">
                        Muhammad Yousaf Ali Shah
                      </span>
                    </div>
                  </div>
                  <Divider variant="middle" className="text-gray-500" />
                  <div className="flex flex-col gap-2 w-full justify-start px-2 py-4">
                    <Link
                      to={"/"}
                      className="flex text-center items-center gap-1 text-md w-full hover:bg-gray-100 py-1 px-3 rounded"
                    >
                      <RxDashboard size={20} />
                      Dashbaord
                    </Link>
                    <Link
                      to={"/"}
                      className="flex text-center items-center gap-2 text-md w-full hover:bg-gray-100 py-1 px-3 rounded "
                    >
                      <RiLuggageCartLine size={20} />
                      Orders
                    </Link>
                    <Link
                      to={"/"}
                      className="flex text-center items-center gap-2 text-md w-full hover:bg-gray-100 py-1 px-3 rounded "
                    >
                      <IoCartOutline size={20} />
                      View Cart
                    </Link>
                    <Link
                      to={"/"}
                      className="flex text-center items-center gap-2 text-md w-full hover:bg-gray-100 py-1 px-3 rounded "
                    >
                      <MdLockReset size={20} />
                      Change Password
                    </Link>
                    <Link
                      to={"/"}
                      className="flex text-center items-center gap-2 text-md w-full hover:bg-gray-100 py-1 px-3 rounded"
                    >
                      <IoMapOutline size={20} />
                      Addresse
                    </Link>
                    <p
                      className="cursor-pointer flex text-center items-center gap-2 text-md w-full hover:bg-gray-100 py-1 px-3 rounded"
                      onClick={() => setLogin(!login)}
                    >
                      <IoLogOutOutline size={20} /> Logout
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="relative">
            <div
              onClick={() => setOpenCart(!openCart)}
              className="cursor-pointer relative"
            >
              <IoCartOutline size={40} />
              <span className="text-sm absolute text-whtie bg-red-600 flex text-center items-center justify-center text-white  top-[-10px] right-[-8px] rounded-full w-5 h-5">
                10
              </span>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div
        className={`fixed z-1 top-0 right-0 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          openCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <InstantCart setOpenCart={setOpenCart} />
      </div>
    </>
  );
};

export default MiddleHeader;
