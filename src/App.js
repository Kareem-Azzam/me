import React from "react";
import "./index.css";


import LandingPage from "./layout/Pages/LandingPage";
import Contact from "./layout/Pages/Contact.jsx";

import Header from "./layout/Sections/Header";
import Footer from "./layout/Sections/Footer";

import NoMatch from "./components/NoMatch";

import { Routes, Route } from "react-router-dom";

function App() {

  return (<>
    <div className="h-screen">
      <Header />
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />

    </div>
  </>
  );
}

export default App;
