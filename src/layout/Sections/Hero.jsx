import React from "react";

const Header = () => {
  return (
    <div className="bg-primaryBG w-full border-b border-gray-200 h-screen">
      <div className="container h-full">
        <div className="flex flex-col justify-center items-center gap-6 h-full">
          <div className="sticky top-24">
            <h1 className="mb-4 text-4xl sm:text-6xl font-extrabold leading-none tracking-tight text-gray-900">
              Hello! This is{" "}
              <span className="text-blue-600 dark:text-blue-500">Kareem</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-900">
              Herzlich Willkommen auf meinem Portfolio!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
