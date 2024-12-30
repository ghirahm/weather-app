import React from "react";

import Logo from '../resources/logo.png'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="mx-auto p-12">
        <div className="flex items-center justify-center md:justify-between">
          <Link to='/team'
            className="flex items-center"
          >
            <img
              src={Logo}
              className="h-8 mr-3"
              alt="Weather Logo"
            />
            <h1 className="self-center whitespace-nowrap text-[#323368] text-xl font-bold">
              Weather Control
            </h1>
          </Link>
          <ul className="hidden md:flex md:flex-wrap md:items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link to="/about" className="hover:underline mr-6 ">
                About
              </Link>
            </li>
            <li>
              <Link to="/team" className="hover:underline mr-6 ">
                Team
              </Link>
            </li>
            <li>
              <Link to="https://wa.me/6281807362365" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 mx-auto" />
        <span className="block text-[0.6rem] md:text-sm text-gray-500 text-center">
          Weather Control from <span className="font-bold">Open Weather API</span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
