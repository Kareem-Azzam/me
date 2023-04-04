import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="px-2 sm:px-4 py-2.5 w-full bg-primaryBG">
        <div className="container bg-white rounded-lg my-8">
          <ul className="text-lg flex gap-5 justify-end">
            <li>
              <NavLink to={"/"} className="md:p-4 py-2 font-typeFont  block hover:text-blue-200">Kareemazzam.de</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"} className="md:p-4 py-2 block font-typeFont hover:text-blue-200">Contact</NavLink>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
