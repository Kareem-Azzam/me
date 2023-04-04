import React, { useState } from 'react'
import PrimaryButton from '../../components/PrimaryButton'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [toggle, setToggle] = useState(true);
    return (
        <header>
            <nav className="flex flex-wrap items-center justify-between w-full  py-2.5  text-lg bg-white absolute border-b border-gray-200">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <div>
                        <NavLink to={"/"} className="flex items-center hover:text-blue-500">
                            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white font-typeFont">kareemazzam.de</span>
                        </NavLink>
                    </div>

                    <svg
                        onClick={() => { setToggle(!toggle) }}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 cursor-pointer md:hidden block hover:text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>

                    <div className={`${toggle ? "hidden" : ""} w-full md:flex md:items-center md:w-auto`}>
                        <ul className="pt-4 text-base md:flex md:justify-between md:pt-0" >
                            <li>
                                <NavLink className="md:p-4 py-2 block hover:text-blue-500 border-b md:border-0" to={"/contact"}>Contact</NavLink>
                            </li>
                            <li className=''>
                                <div className="md:p-4 py-2 pt-4 block">
                                    <PrimaryButton text={"Contact me"} to={"contact"} typ="dark" />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

    )
}

export default Navbar