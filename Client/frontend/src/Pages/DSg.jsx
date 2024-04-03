import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";

function IntroductionSection() {
  return (
    <div
      className="w-full h-screen bg-indigo-200"
      //style={{ background: "url(https://img.freepik.com/free-photo/arrangement-with-microscope-tubes_23-2148882080.jpg?w=900&t=st=1712093968~exp=1712094568~hmac=801c18d6c4ae5949e27a07980bd1eb0b94a13d9b3b1278fe37d4fde80e736404)no-repeat center center/cover" }}
      //style={{ background: "url(https://img.freepik.com/free-photo/production-electronic-components-high-tech-factory_1385-3205.jpg?w=996&t=st=1712096331~exp=1712096931~hmac=0f5def27b2452b34158844a4f530c8a337a38fb9159d9dbe7ea22bbdf79a5ac9)no-repeat center center/cover" }}
      // style={{ background: "url(/image1.jpg)no-repeat center center/cover" }}
     style={{ background: "url(https://img.freepik.com/free-photo/precision-machinery-shapes-golden-substance-with-robotic-exactitude_91128-4231.jpg?t=st=1712096642~exp=1712100242~hmac=480e7a00b014649abe0b7aa341d021bdb190dcbdddc211d0f657cda64553e67b&w=1380)no-repeat center center/cover" }}
      //style={{ background: "url(https://img.freepik.com/free-photo/precision-machinery-shapes-golden-substance-with-robotic-exactitude_91128-4554.jpg?w=1380&t=st=1712097170~exp=1712097770~hmac=2e1efcdcee055e083a04ef2d4fdd9bad2cf02ecdc12f28cd052545cdd83b5895)no-repeat center center/cover" }}
    >
      <div className="flex w-full h-full mt-24">
        <div className="flex-1 flex flex-col justify-center items-center">
          <h1 className="mb-2 text-4xl text-white font-medium">
            Welcome to our
          </h1>
          <h1 className="mb-10 text-7xl text-center text-white font-medium">
            Manufacturing Research Lab
          </h1>
          <a
            className="text-white font-medium border-2 border-white bg-none hover:bg-white
          hover:text-indigo-900 rounded-md px-6 py-2 text-xl transition-all"
            href="#about-page"
          >
            Explore Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default IntroductionSection;
