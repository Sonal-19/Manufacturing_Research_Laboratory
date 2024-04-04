import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";

function IntroductionSection() {
  return (
    <>
      <div
        className="w-full h-screen bg-indigo-200 relative flex items-center justify-center"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/precision-machinery-shapes-golden-substance-with-robotic-exactitude_91128-4554.jpg?w=1380&t=st=1712097170~exp=1712097770~hmac=2e1efcdcee055e083a04ef2d4fdd9bad2cf02ecdc12f28cd052545cdd83b5895)",
          //backgroundImage:"url(/wall2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          opacity: 1.8,
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

      {/* <div
        className="w-full h-screen bg-indigo-200 relative flex items-center justify-center"
        style={{
          backgroundImage: "url(/wall2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          opacity: 1.8,
        }}
      ></div> */}

      <div className="creativesplanet-box-content-inner">
        <div className="flex flex-col items-center justify-center bg-neutral-800 min-h-screen py-8">
          {" "}
          {/* Added py-8 for equal padding top and bottom */}
          <h2 className="text-3xl font-bold text-white mb-8">Officials</h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <img
                  className="h-full w-100 object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="/head.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h4 className="font-dmserif text-3xl font-bold text-white">
                  Dr.  Sehijpal Singh Khangura (Principal)
                </h4>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                BE (Mechanical) PU, Chandigarh (1991), ME (Mechanical) PU, Chandigarh (1993), PhD - IIT, Roorkee (2002)
                </p>
                <a
                  href="https://gndec.ac.in/faculty/?id=7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
                >
                  Read More
                </a>
              </div>
            </div>

            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <img
                  className="h-full w-100 object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="/hod.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h4 className="font-dmserif text-3xl font-bold text-white">
                  Dr. Jasmaninder Singh Grewal (HOD)
                </h4>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Tribology, Surface Modification, Metal Forming, Engineering
                  Drawing, Strength of Materials and Manufacturing Processes
                </p>
                <a
                  href="https://gndec.ac.in/faculty/?id=370"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
                >
                  Read More
                </a>
              </div>
            </div>

            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="/labincharge.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h4 className="font-dmserif text-3xl font-bold text-white">
                  Dr. Amrinder Singh Pannu (Lab Incharge)
                </h4>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  B Tech (Mechanical) M Tech (Production) PhD (Mechanical),
                  Composite Materials, Designing and fabrication
                </p>
                <a
                  href="https://gndec.ac.in/faculty/?id=154"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
                >
                  Read More
                </a>
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  );
}

export default IntroductionSection;
