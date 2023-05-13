import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGaugeMed } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="flex  justify-center items-center h-full">
      <div className="container">
        <div className="min-h-screenflex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white dark:bg-blue-900/30 py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold   sm:text-4xl">
                  Contact me
                </h2>
                <p className="mt-2  text-gray-500">
                  Sie können mir eine E-Mail senden an {""}
                  <a
                    href="mailto:kareem.azzam@outlook.de"
                    className="text-blue-500 hover:text-blue-600"
                  >
                    kareem.azzam@outlook.de
                  </a>
                </p>
                <p className="mt-2  text-gray-500">Oder finden Sie mich auf:</p>
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
                    href="linkedin.com/in/kareem-azzam-79b641197"
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
