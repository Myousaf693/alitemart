import { Divider } from "@mui/material";
import React from "react";
import { RxCross2 } from "react-icons/rx";
import { IoCartOutline } from "react-icons/io5";
import Profile from "../../assets/logoprofile.jpg";
import { CiTrash } from "react-icons/ci";

interface InstantCartProps {
  //   openCart: boolean;
  setOpenCart: (open: boolean) => void;
}

interface CartItemType {
  title: string;
  price: string;
  img: string;
  quantity: string;
}
const cartItem: CartItemType[] = [
  { title: "Jacket", price: "$100", img: Profile, quantity: "3" },
  { title: "Jacket", price: "$100", img: Profile, quantity: "3" },
  { title: "Jacket", price: "$100", img: Profile, quantity: "3" },
  { title: "Jacket", price: "$100", img: Profile, quantity: "3" },
  { title: "Jacket", price: "$100", img: Profile, quantity: "3" },
];

const InstantCart: React.FC<InstantCartProps> = ({ setOpenCart }) => {
  return (
    <div className="w-[25rem] h-screen bg-white shadow-md border-1 border-gray-200 rounded ">
      {/* cart heading */}
      <div className="flex justify-between items-center text-center p-4 sticky top-0 bg-white z-10">
        <div className=" flex items-center text-center gap-2">
          <IoCartOutline size={25} />
          <h1 className="text-md">Your Cart</h1>
        </div>
        <div className="cursor-pointer" onClick={() => setOpenCart(false)}>
          <RxCross2 size={30} />
        </div>
      </div>
      <Divider variant="middle" />
      {/* cart body */}
      {cartItem.length > 0 ? (
        <div className="flex flex-grow overflow-y-auto max-h-[30rem] w-[100%] flex-col mt-5 justify-between items-center">
          <div className="flex flex-col w-full gap-4">
            {cartItem.map((item, index) => (
              <div
                key={index}
                className="flex w-[100%] items-center justify-between px-4"
              >
                <div className="flex items-center gap-1 justify-start w-[60%]">
                  <img
                    src={item?.img}
                    alt=""
                    className="w-[3.5rem] object-cover rounded"
                  />
                  <div className="flex flex-col justify-between h-full">
                    <span className="text-sm">{item?.title}</span>
                    <span>$ {item?.price}</span>
                  </div>
                </div>
                <div className="flex items-center justify-center w-[30%]">
                  <button className="rounded-l border-1 bg-gray-300 border-gray-300 border-r-0 w-6">
                    +
                  </button>
                  <input
                    type="text"
                    className="border-t-1 border-b-1 border-gray-300 w-[2.2rem] px-3"
                    value={item?.quantity}
                  />
                  <button className="rounded-r border-1 bg-gray-300 border-gray-300 border-l-0 w-6">
                    -
                  </button>
                </div>
                <div className="w-[10%] flex justify-end">
                  <CiTrash size={20} />
                </div>
              </div>
            ))}
            <Divider variant="middle" />
          </div>
          <div className="mt-4">
            <span>
              <strong>Subtotal:</strong> $1000.99
            </span>
          </div>
          <div className="flex flex-col w-full mt-3">
            <Divider variant="middle" />
            <div className="w-full flex justify-center mt-4 gap-4 items-center">
              <button className="bg-red-500 p-2 text-white rounded-sm w-[40%]">
                View Cart
              </button>
              <button className="bg-red-500 p-2 text-white rounded-sm w-[40%]">
                Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-40">
          <h1>Your cart has no items</h1>
        </div>
      )}
    </div>
  );
};

export default InstantCart;
