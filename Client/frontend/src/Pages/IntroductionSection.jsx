import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";

function IntroductionSection() {
  return (
    <div
      className="w-full h-screen bg-indigo-200 relative flex items-center justify-center"
      style={{ 
        //backgroundImage: "url(https://img.freepik.com/free-photo/precision-machinery-shapes-golden-substance-with-robotic-exactitude_91128-4231.jpg?t=st=1712096642~exp=1712100242~hmac=480e7a00b014649abe0b7aa341d021bdb190dcbdddc211d0f657cda64553e67b&w=1380)",
        backgroundImage: "url(https://img.freepik.com/free-photo/precision-machinery-shapes-golden-substance-with-robotic-exactitude_91128-4554.jpg?w=1380&t=st=1712097170~exp=1712097770~hmac=2e1efcdcee055e083a04ef2d4fdd9bad2cf02ecdc12f28cd052545cdd83b5895)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        opacity: 1.8 
      }}
    >
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl lg:text-7xl text-white  font-medium mb-4">
          Welcome to our
        </h1>
        <h1 className="text-4xl md:text-6xl lg:text-8xl text-center text-white font-medium mb-8">
          Manufacturing Research Lab
        </h1>
        <a
          className="text-white font-medium border-2 border-white bg-none hover:bg-white
          hover:text-indigo-900 rounded-md px-6 py-2 text-xl md:text-2xl lg:text-3xl transition-all"
          href="#about-page"
        >
          Explore Now
        </a>
      </div>
    </div>
  );
}

export default IntroductionSection;
