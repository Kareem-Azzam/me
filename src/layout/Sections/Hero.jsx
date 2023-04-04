import React from "react";


const Header = () => {
  return (
    <div className="bg-primaryBG py-2.5 w-full border-b border-gray-200">
      <div className="py-28 container mx-auto text-center">
        <div className="flex flex-col justify-center items-center md:py-24 px-0 gap-6">
          <div className="flex flex-col justify-center items-center py-11 px-0 gap-4">
            <h1 className="mb-4 text-4xl sm:text-6xl font-extrabold leading-none tracking-tight text-gray-900">Hello! This is <span className="text-blue-600 dark:text-blue-500">Kareem</span></h1>
            <p className="text-lg sm:text-xl font-body">Herzlich Willkommen auf meinem Portfolio!</p>
          </div>
        </div>

      </div>
    </div>
  );

};

export default Header;
