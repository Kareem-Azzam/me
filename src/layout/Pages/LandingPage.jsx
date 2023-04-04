import React from "react";


import Hero from "../Sections/Hero";
import Card from "../../Elements/Card";


import PrimaryButton from "../../components/PrimaryButton";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardList } from '@fortawesome/free-solid-svg-icons'

const libArr = [
  {
    icon: faClipboardList,
    bgColor: "bg-accentColor-100",
    title: "magna Dolore",
    desc: "Est Lorem"
  }, {
    icon: faClipboardList,
    bgColor: "bg-accentColor-200",
    title: "Erat magna",
    desc: "aliquyam"
  }, {
    icon: faClipboardList,
    bgColor: "bg-accentColor-300",
    title: "Dolore magna",
    desc: "aliquyam"
  }, {
    icon: faClipboardList,
    bgColor: "bg-accentColor-400",
    title: "Quis nostrud",
    desc: "exerci tation"
  }, {
    icon: faClipboardList,
    bgColor: "bg-accentColor-500",
    title: "nostrud Quis",
    desc: "Est Lorem"
  }
]


const Experiences = [
  {
    date: [{
      start: "10.2015",
      end: "08.2018"
    }],
    title: 'Abitur',
    description: 'Allgemeine Sekundarschule, Wissenschaftliche Fachrichtung',
    company: "Al Hikma Secondary School",
    location: "Sweida / Syrien"
  }, {
    date: [{
      start: "10.2018",
      end: "12.2022"
    }],
    title: 'Studium - Information Technology Engineering (ITE)',
    description: '',
    company: "SVU - Syrian Virtual University",
    location: "Damascus / Syrien"
  }, {
    date: [{
      start: "01.2023",
      end: "Heute"
    }],
    title: 'Deutsch Sprachkurse',
    description: '',
    company: "Volkshochschule Dresden: vhs Dresden e.V.",
    location: "Dresden / Deutschland"
  }
]

const Goals = [
  {
    date: [{
      start: "10.2023",
      end: "10.2026"
    }],
    title: 'Bachelor - Medieninformatik',
    description: 'Medieninformatik Studium',
    company: "BA Dresden | Staatliche Studienakademie Dresden",
    location: "Dresden / Deutschland"
  }, {
    date: [{
      start: "10.2026",
      end: "10.2028"
    }],
    title: 'Karriere in der Medienbranche',
    description: 'Medieninformatik Studium',
    company: "BA Dresden | Staatliche Studienakademie Dresden",
    location: "Dresden / Deutschland"
  },
  {
    date: [{
      start: "10.2026",
      end: "10.2028"
    }],
    title: 'Gründung eines eigenen Unternehmens',
    description: 'Medieninformatik Studium',
    company: "BA Dresden | Staatliche Studienakademie Dresden",
    location: "Dresden / Deutschland"
  }


]



const expertisesArray = [
  {
    title: "JavaScript",
    desc: "Verschiedene Projekte aus dem Studium und der Arbeit mit der Verwendung von:",
    tags: ["React", "JQuery"]
  },
  {
    title: "HTML5 | CSS3 | Sass",
    desc: "Verschiedene Projekte aus dem Studium und der Arbeit mit der Verwendung von:",
    tags: ["Tailwind CSS", "Bootstrap 5", "StyledComponent", "Semantic UI", "Font Awesome 6"]
  }, {
    title: "UI/UX-Design",
    desc: "Verschiedene Projekte aus dem Studium und der Arbeit mit der Verwendung von:",
    tags: ["Adobe XD", "Figma"]
  }, {
    title: "Backend",
    desc: "Verschiedene Projekte aus dem Studium und der Arbeit mit der Verwendung von:",
    tags: ["PHP", "MySQL"]
  },
  {
    title: "Weitere Programmiersprachen",
    desc: "Verschiedene Projekte aus dem Studium und der Arbeit mit der Verwendung von:",
    tags: ["C++", "C#"]
  }
]


const LandingPage = () => {

  return (
    <div >
      <Hero />


      {/* ABOUT ME SECTION */}
      <div className="bg-primaryBG py-2.5 w-full border-b border-gray-200">
        <div className="py-28 container mx-auto flex flex-col gap-10">
          <div className="text-left">
            <p className="mb-4 text-base bg-blue-200 font-bold inline-block p-2 rounded-xl">about me</p>
            <h2 className="mb-4 text-4xl md:text-6xl font-extrabold leading-none tracking-tight text-gray-900">Hier möchte ich mich gerne vorstellen!</h2>
          </div>

          <div className="flex flex-col md:flex-row gap-10 ">
            <div className="basis-1/2 flex justify-center">
              <img className="rounded-full w-80 h-80" src="https://source.unsplash.com/random" alt="" />
            </div>
            <div className="basis-1/2 ">
              <p className="text-lg">
                Ich bin 22 Jahre alt und komme aus der südsyrischen Stadt Sweida.
                Nachdem ich drei Jahre IT studiert habe, möchte ich nun mein Studium in Deutschland fortsetzen.
                Webentwicklung und -design begeistern mich schon seit langem. Ich bin kreativ, lernbereit und arbeite gerne an anspruchsvollen Projekten.
                In meiner Freizeit beschäftige ich mich mit neuen Technologien und verbessere meine Kenntnisse in Programmierung, Design und User Experience.
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* EXPERTISE SECTION */}
      <div className="bg-primaryBG py-2.5 w-full border-b border-gray-200">
        <div className="py-28 container mx-auto flex flex-col gap-10">
          <div className="text-left">
            <p className="mb-4 text-base bg-blue-200 font-bold inline-block p-2 rounded-xl">meine kenntnisse</p>
            <h2 className="mb-4 text-4xl md:text-6xl font-extrabold leading-none tracking-tight text-gray-900">Folgende Programmier-, Auszeichnungs- und Skript- sprachen, die ich durch mein Studium und Arbeit erworben habe.</h2>
          </div>

          <div className="flex flex-col md:flex-row gap-10 flex-wrap">
            {
              expertisesArray.map((e, i) => {
                return (
                  <Card key={i} title={e.title} desc={e.desc} tags={e.tags} />
                )
              })
            }
          </div>
        </div>
      </div>

      {/* BERUFSERFAHRUNG SECTION */}
      <div className="bg-primaryBG py-2.5 w-full border-b border-gray-200">
        <div className="py-28 container mx-auto flex flex-col lg:flex-row gap-10">
          <div className="basis-1/2 text-left">
            <div className="sticky top-0">
              <p className="mb-4 text-base bg-blue-200 font-bold inline-block p-2 rounded-xl">Berufserfahrung</p>
              <h2 className="mb-4 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">Praxiserfahrung während der Studienzeit</h2>
              <PrimaryButton text={"Projekte Anschauen"} to={"projects"} typ="dark" />
            </div>
          </div>

          <div className="basis-1/2 ml-8 md:ml-0">
            <ol className="relative border-l border-gray-200 ">
              {
                Experiences.map((ex, i) => {
                  return (
                    <li key={i.title} className="mb-24 ml-8">
                      <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                        <svg aria-hidden="true" className="w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                      </span>
                      <span className="mr-1 font-light">{ex.date[0].start} bis</span>
                      <span className="font-light">{ex.date[0].end}</span>
                      <h3 className="leading-tight font-semibold text-xl sm:text-2xl font-typeFont">{ex.title}</h3>
                      <p className="text-base">{ex.company}</p>
                      <p className="text-base">{ex.description}</p>
                      <p className="text-base text-blue-600">{ex.location}</p>
                    </li>
                  )
                })
              }
              {
                Goals.map((ex, i) => {
                  return (
                    <li key={i.title} className="mb-24 ml-8">
                      <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                      </span>
                      <h3 className="leading-tight font-semibold text-xl sm:text-2xl font-typeFont">{ex.title}</h3>
                      <p className="text-base">{ex.company}</p>
                      <p className="text-base">{ex.description}</p>

                    </li>
                  )
                })
              }
            </ol>
          </div>
        </div>
      </div>
      {/* 
      <div className="container mx-auto text-center py-11">
        <div className="flex flex-col justify-center items-center px-0 gap-4">
          <h1 className="mb-4 text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 ">Sadipscing elitr Consetetur</h1>
          <p className="text-lg sm:text-xl">Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</p>
        </div>

        <div className="flex flex-row justify-center items-center py-5 md:py-11 px-0 gap-8 flex-wrap">
          {libArr?.map((lib, i) => {
            return (
              <div key={i} className="flex flex-col items-center pb-10">
                <div className={`cursor-pointer relative inline-flex items-center justify-center w-32 h-32 overflow-hidden ${lib.bgColor} rounded-full border hover:border-primaryColor`}>
                  <span className="font-medium text-blue-600 dark:text-gray-300">
                    <FontAwesomeIcon icon={lib.icon} className="text-primaryColor fa-4x " />
                  </span>
                </div>
                <h5 className="mb-1 text-lg sm:text-xl font-medium text-gray-900  dark:text-white font-typeFont">{lib.title}</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">{lib.desc}</span>
              </div>
            )
          })}

        </div>
      </div> */}
    </div >
  );
};

export default LandingPage;
