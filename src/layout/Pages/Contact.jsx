import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGaugeMed } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="flex bg-primaryBG justify-center items-center h-full">
      <div className="container">
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Contact Me
                </h2>
                <p className="mt-2  text-gray-500">
                  You can email me at {""}
                  <a
                    href="mailto:kareem.azzam@outlook.de"
                    className="text-blue-500 hover:text-blue-600"
                  >
                    kareem.azzam@outlook.de
                  </a>
                </p>
                <p className="mt-2  text-gray-500">Or find me on:</p>
                <div className="flex justify-center gap-3 mt-4">
                  <a
                    className="text-blue-500 hover:text-blue-600"
                    href="https://www.linkedin.com/in/your-linkedin"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/your-github"
                    className="text-blue-500 hover:text-blue-600"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
