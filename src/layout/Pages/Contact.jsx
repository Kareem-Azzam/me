import React from "react";

const Contact = () => {
  return (
    <div className="flex bg-primaryBG justify-center items-center h-full">
      <div className="container">
        <div className="border bg-blue-100 p-3 w-full">
          <div>
            <h1 className="text-2xl font-bold">Contact</h1>
            <hr />
          </div>
          <div className="card-body">
            <a
              href="mailto:kareem.azzam@outlook.de"
              className="hover:text-blue-500"
            >
              kareem.azzam@outlook.de
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
