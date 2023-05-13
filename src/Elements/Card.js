import React from "react";

function Card({ title, desc, tags }) {
  return (
    <div className="mb-4 break-inside p-6 rounded-lg bg-blue-900/10 backdrop-blur-sm flex flex-col bg-clip-border shadow-[0px_1px_8px_0px_rgba(0,0,0,0.3)] shadow-blue-600/70 ">
      <h2 className="text-2xl font-extrabold dark:text-white break-words text-center">
        {title}
      </h2>
      <p className="py-4 dark:text-slate-200 text-justify">{desc}</p>
      <div className="py-4">
        <div className="flex gap-1 mb-1 flex-wrap">
          {tags.map((tag, i) => {
            return (
              <p
                key={i}
                className="flex flex-grow rounded-tl-lg rounded-lg shadow-sm p-2 dark:bg-blue-900/60 dark:text-gray-200 dark:hover:bg-blue-700/50 cursor-pointer"
              >
                {tag}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Card;
