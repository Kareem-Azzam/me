import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";

const PrimaryButton = ({ text, to, typ }) => {
    const [btnType, setBtnType] = useState("");

    useEffect(() => {
        switch (typ) {
            case 'light':
                setBtnType("hover:bg-primaryColor hover:text-white");
                break;
            case 'dark':
                setBtnType("bg-primaryColor text-white hover:bg-blue-800");
                break;
            case 'outline':
                setBtnType("hover:text-blue-800");
                break;
            default:
                setBtnType("hover:bg-primaryColor hover:text-white");
        }
    }, [typ])

    return (
        <NavLink
            className={`${btnType} transition-colors font-typeFont w-auto text-base align-center border-blue-700 border  focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg px-5 py-2 text-center`}
            to={`/${to}`}>
            {text}
        </NavLink>

    )
}

export default PrimaryButton