import React from "react";
import IntroductionSection from "./IntroductionSection";
import Contact from "./Contact";
import About from "./About";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import TestingFacilities from "./TestingFacilities";

function Home() {
  const title = "Manufacturing Research Laboratory";
  return (
    <div>
      <Navbar title={title}/>
      <IntroductionSection title={title} />
      <About title={title} />
      <TestingFacilities />
      <Contact />
      <Footer title={title} />
    </div>
  );
}

export default Home;
