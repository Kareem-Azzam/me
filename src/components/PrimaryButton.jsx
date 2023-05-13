import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const PrimaryButton = ({ text, to, typ }) => {
  const [btnType, setBtnType] = useState("");

  useEffect(() => {
    switch (typ) {
      case "light":
        setBtnType("hover:bg-primaryColor hover:text-white");
        break;
      case "dark":
        setBtnType("bg-primaryColor text-white hover:bg-blue-800");
        break;
      case "outline":
        setBtnType("hover:text-blue-800");
        break;
      default:
        setBtnType("hover:bg-primaryColor hover:text-white");
    }
  }, [typ]);

  return (
    <NavLink
      className={`${'ss'} block w-fit  px-4 py-2 font-semibold text-sm bg-blue-600 text-white rounded-md shadow-sm hover:scale-125 ease-in-out duration-700`}
      to={`/${to}`}
    >
      {text}
    </NavLink>
  );
};

export default PrimaryButton;
