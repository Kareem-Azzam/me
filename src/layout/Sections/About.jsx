import React from "react";

const About = () => {
  return (
    <div className="bg-primaryBG py-2.5 w-full border-b border-gray-200">
      <div className="py-28 container mx-auto flex flex-col gap-20">
        <div className="text-left">
          <p className="mb-4 text-base bg-blue-200 font-bold inline-block p-2 rounded-xl">
            about me
          </p>
          <h2 className="mb-4 text-4xl md:text-6xl font-extrabold leading-none tracking-tight text-gray-900">
            Hier möchte ich mich gerne vorstellen!
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-5 items-center">
          <img
            className="rounded-full w-64 h-64"
            src="https://source.unsplash.com/random"
            alt=""
          />
          <div className="basis-1/2 text-justify">
            <p className="text-lg">
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
