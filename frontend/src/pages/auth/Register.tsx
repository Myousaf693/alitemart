import React from "react";
import { Link } from "react-router-dom";

const Register: React.FC = () => {
  return (
    <div className="bg-gray-200 w-full m-h-screen">
      <div>
        <form>
          <div className="form-gourp flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="focus:outline-none border-1 border-gray-400"
              name="name"
              id="name"
            />
          </div>
          <div className="form-gourp flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="focus:outline-none border-1 border-gray-400"
              name="email"
              id="email"
            />
          </div>
          <div className="form-gourp flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="focus:outline-none border-1 border-gray-400"
              name="password"
              id="password"
            />
          </div>
          <div className="form-gourp flex flex-col">
            <label htmlFor="confirm_password">Confirm Password</label>
            <input
              type="password"
              className="focus:outline-none border-1 border-gray-400"
              name="confirm_password"
              id="confirm_password"
            />
          </div>
          <button
            type="submit"
            className="bg-red-500 px-4 py-1 rounded text-white"
          >
            Sign Up
          </button>
        </form>
        <div className="flex text-center items-center gap-2">
          <span>If already have account! </span>
          <Link to={"/login"} className="text-blue-600">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
