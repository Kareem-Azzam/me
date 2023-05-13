import React from "react";

const About = () => { 
  let Logo = require('./../../imgs/kareem_photo.jpg');

  return (
    <div className=" py-2.5 w-full border-b   border-blue-900/30">
      <div className="py-28 container mx-auto flex flex-col gap-20">
        <div className="text-left">
          <p className="mb-4 text-base dark:bg-blue-900/50 dark:text-gray-200 font-bold inline-block p-2 rounded-xl">
            about me
          </p>
          <h2 className="mb-4 text-4xl md:text-5xl font-extrabold leading-none tracking-tight">
            Hier möchte ich mich gerne vorstellen! 
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <img
            className="place-self-center rounded-full w-64 shadow-[0px_0px_6px_6px] shadow-blue-600"
            src={Logo}
            alt=""
          />
          <div className="md:col-span-2 text-justify place-self-center">
            <p className="text-lg font-medium ">
              Ich bin 22 Jahre alt und komme aus der südsyrischen Stadt Sweida.
              Nachdem ich drei Jahre IT studiert habe, möchte ich nun mein
              Studium in Deutschland fortsetzen. Webentwicklung und -design
              begeistern mich schon seit langem. Ich bin kreativ, lernbereit und
              arbeite gerne an anspruchsvollen Projekten. In meiner Freizeit
              beschäftige ich mich mit neuen Technologien und verbessere meine
              Kenntnisse in Programmierung, Design und User Experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
