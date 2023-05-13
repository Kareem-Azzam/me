import React from "react";
import PrimaryButton from "../../components/PrimaryButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckDouble,
  faCheck,
  faWalking,
} from "@fortawesome/free-solid-svg-icons";

const Experiences = () => {
  const Experiences = [
    {
      date: [
        {
          start: "10.2015",
          end: "08.2018",
        },
      ],
      title: "Abitur",
      description: "Allgemeine Sekundarschule, Wissenschaftliche Fachrichtung",
      company: "Al Hikma Secondary School",
      location: "Sweida / Syrien",
    },
    {
      date: [
        {
          start: "10.2018",
          end: "12.2022",
        },
      ],
      title: "Studium - Information Technology Engineering (ITE)",
      description: "",
      company: "SVU - Syrian Virtual University",
      location: "Damascus / Syrien",
    },
    {
      date: [
        {
          start: "01.2023",
          end: "Heute",
        },
      ],
      title: "Deutsch Sprachkurse",
      description: "",
      company: "Volkshochschule Dresden: vhs Dresden e.V.",
      location: "Dresden / Deutschland",
    },
  ];

  const Goals = [
    {
      date: [
        {
          start: "10.2023",
          end: "10.2026",
        },
      ],
      title: "Bachelor - Medieninformatik",
      description: "Medieninformatik Studium",
      company: "BA Dresden | Staatliche Studienakademie Dresden",
      location: "Dresden / Deutschland",
    },
    {
      date: [
        {
          start: "10.2026",
          end: "10.2028",
        },
      ],
      title: "Karriere in der Medienbranche",
      description: "Medieninformatik Studium",
      company: "BA Dresden | Staatliche Studienakademie Dresden",
      location: "Dresden / Deutschland",
    },
    {
      date: [
        {
          start: "10.2026",
          end: "10.2028",
        },
      ],
      title: "Gründung eines eigenen Unternehmens",
      description: "Medieninformatik Studium",
      company: "BA Dresden | Staatliche Studienakademie Dresden",
      location: "Dresden / Deutschland",
    },
  ];

  return (
    <div className="bg-white dark:bg-darkBlue py-2.5 w-full border-b  border-blue-900/30">
      <div className="py-28 container mx-auto flex flex-col lg:flex-row gap-10">
        <div className="basis-1/2 text-left">
          <div className="sticky top-0">
            <p className="mb-4 text-base dark:bg-blue-900/50 dark:text-gray-200 font-bold inline-block p-2 rounded-xl">
              Berufserfahrung
            </p>
            <h2 className="mb-4 text-4xl md:text-6xl font-extrabold tracking-tight  ">
              Praxiserfahrung während der Studienzeit
            </h2>
            {/* <PrimaryButton
              text={"Projekte Anschauen"}
              to={"projects"}
              typ="dark"
            /> */}
          </div>
        </div>

        <div className="basis-1/2 ml-8 md:ml-0">
          <ol className="relative border-l border-gray-200 ">
            {Experiences.map((ex, i) => {
              return (
                <li key={i.title} className="mb-24 ml-8">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                    <FontAwesomeIcon
                      icon={faCheckDouble}
                      className="text-green-500 dark:text-green-400"
                    />
                  </span>
                  <span className="mr-1 font-light">
                    {ex.date[0].start} bis
                  </span>
                  <span className="font-light">{ex.date[0].end}</span>
                  <h3 className="leading-tight font-semibold text-xl sm:text-2xl font-typeFont">
                    {ex.title}
                  </h3>
                  <p className="text-base">{ex.company}</p>
                  <p className="text-base">{ex.description}</p>
                  <p className="text-base text-blue-600">{ex.location}</p>
                </li>
              );
            })}
            <li className="mb-24 ml-8">
              <span className="absolute overflow-hidden flex items-center justify-center w-10 h-10 border-blue-500 bg-white dark:bg-darkBlue  border-b-4 -left-5 dark:ring-gray-900 ">
                <div className="person">
                  <div className="personFace"></div>
                  <div className="body">
                    <div className="leftArm"></div>
                    <div className="overBody"></div>
                    <div className="rightArm"></div>
                    <div className="LeftLeg">
                      <div className="LowerLegLeft"></div>
                    </div>
                    <div className="RightLeg">
                      <div className="LowerLegRight"></div>
                    </div>
                  </div>
                </div>
              </span>
              <h3 className="leading-tight font-semibold text-xl sm:text-2xl font-typeFont">
                Heute
              </h3>
            </li>
            {Goals.map((ex, i) => {
              return (
                <li key={i} className="mb-24 ml-8">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-gray-500 dark:text-green-400"
                    />
                  </span>
                  <h3 className="leading-tight font-semibold text-xl sm:text-2xl font-typeFont">
                    {ex.title}
                  </h3>
                  <p className="text-base">{ex.company}</p>
                  <p className="text-base">{ex.description}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
