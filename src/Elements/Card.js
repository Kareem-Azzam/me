import React from "react";

function Card({ title, desc, tags }) {
  return (
    <div className="mb-4 break-inside p-6 rounded-xl bg-white dark:bg-slate-800 flex flex-col bg-clip-border shadow-md">
      <h2 className="text-2xl font-extrabold dark:text-white break-words">
        {title}
      </h2>
      <p className="py-4 dark:text-slate-200 text-justify">{desc}</p>
      <div className="py-4">
        <div className="flex gap-1 mb-1 flex-wrap">
          {tags.map((tag, i) => {
            return (
              <p
                key={i}
                className="flex flex-grow rounded-tl-lg border rounded-lg shadow-sm p-2 bg-blue-200 hover:bg-blue-300 cursor-pointer"
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
