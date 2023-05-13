import React from "react";
import Card from "../../Elements/Card";

const Expertise = () => {
  const expertisesArray = [
    {
      title: "JavaScript",
      desc: `Ich habe im Studium und in meiner Arbeit viele Projekte mit ReactJS umgesetzt. 
      Zu den Projekten, die ich mit ReactJS umgesetzt habe, gehören z.B. die Entwicklung von komplexen Formularen, 
      die Integration von APIs und die Entwicklung von Dashboards. 
      Durch meine Arbeit mit ReactJS habe ich ein tiefes Verständnis für die Entwicklung von Webanwendungen erlangt und bin in der Lage, komplexe Projekte umzusetzen.`,
      tags: ["React", "JQuery", "Node.js"],
    },
    {
      title: "HTML5 | CSS3",
      desc: `Ich habe im Rahmen meiner Projekte umfangreiche Erfahrung in der Verwendung von HTML5, CSS3 gesammelt. 
      Ich habe diese Technologien eingesetzt, um ansprechende und benutzerfreundliche Webanwendungen zu entwickeln, die auf verschiedenen Geräten und Plattformen funktionieren.`,
      tags: [
        "Tailwind CSS",
        "Bootstrap 5",
        "StyledComponent",
        "Semantic UI",
        "Font Awesome 6",
      ],
    },
    {
      title: "UI/UX-Design",
      desc: `Durch mein Studium und meine Arbeit habe ich umfangreiche Kenntnisse in den Bereichen UI-Design und UX-Design erworben. 
      Ich habe verschiedene Tools und Technologien wie Adobe XD und Figma verwendet, um Benutzeroberflächen zu entwerfen und Prototypen zu erstellen. 
      Ich habe auch Erfahrung in der Arbeit mit verschiedenen Plattformen wie Web, Mobile und Desktop.`,
      tags: ["Adobe XD", "Figma", "Web-Design"],
    },
    {
      title: "SQL Datenbankentwicklung",
      desc: ` Ich habe umfangreiche Erfahrung in der Arbeit mit SQL-Datenbanken und deren Entwicklung gesammelt. 
      Ich habe SQL bei der Erstellung von Datenbanken für verschiedene Anwendungen verwendet und dabei verschiedene Technologien wie MySQL und Microsoft SQL Server eingesetzt. 
      Ich habe auch Erfahrung in der Abfrage von Daten und in der Verwendung von SQL in Verbindung mit PHP.`,
      tags: ["MySQL", "Datenbank-Management", "SQL-Abfragen"],
    },
    {
      title: "PHP",
      desc: `Während meines Studiums habe ich PHP gelernt und verfüge über umfangreiche Kenntnisse in der PHP-Programmierung. Außerdem habe ich mehrere Projekte mit PHP durchgeführt,
      In diesen Projekten war ich für die Entwicklung der Backend-Logik verantwortlich, einschließlich der Verbindung mit Datenbanken wie MySQL.`,
      tags: [
        "MySQL",
        "Backend",
      ],
    },
    {
      title: "C#",
      desc: `Während meines Studiums habe ich C# gelernt und meine Kenntnisse durch die Entwicklung von kleinen Anwendungen wie einfache Algorithmen vertieft. 
      Ich habe auch C# im Zusammenhang mit Datenstrukturen und Algorithmen verwendet.`,
      tags: ["Algorithmen",
      "Datenstrukturen",
      "Objektorientierte Programmierung",
      ],
    },
  ];

  return (
    <div className=" py-2.5 w-full border-b  border-blue-900/30 ">
      <div className="py-28 container mx-auto flex flex-col gap-10">
        <div className="text-left">
          <p className="mb-4 text-base dark:bg-blue-900/50 dark:text-gray-200 font-bold inline-block p-2 rounded-xl">
            meine kenntnisse
          </p>
          <h2 className="mb-4 text-4xl md:text-5xl font-extrabold leading-none tracking-tight  ">
            Folgende Programmier-, Auszeichnungs- und Skript- sprachen, die ich
            durch mein Studium und Arbeit erworben habe.
          </h2>
        </div>

        <div className="box-border max-w-7xl sm:columns-1 md:columns-2 lg:columns-3 xl:columns-3">
          {expertisesArray.map((e, i) => {   
            return<Card key={i} title={e.title} desc={e.desc} tags={e.tags} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Expertise;
