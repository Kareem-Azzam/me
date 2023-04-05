import React from "react";

import Hero from "../Sections/Hero";
import About from "../Sections/About";
import Expertise from "../Sections/Expertise";
import Experiences from "../Sections/Experiences";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Expertise />
      <Experiences />
    </div>
  );
};

export default LandingPage;
