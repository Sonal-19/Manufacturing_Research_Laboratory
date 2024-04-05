import React from "react";

function About() {
  return (
    <>
      <div
        className="w-full h-80 bg-indigo-200 relative flex items-center justify-center"
        style={{
          backgroundImage: "url(/wall2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          opacity: 1.8,
        }}
      >
        <div className="text-center mt-5">
          <h1 className="text-3xl md:text-5xl lg:text-7xl text-white mt-16 font-medium mb-0">
            About Us
          </h1>
        </div>
      </div>

      <div className="w-full" id="about-page">
        <div className="about flex flex-col bg-slate-300 items-center justify-center py-2 px-2 lg:flex-row lg:px-0">
          <div className="flex-1 flex flex-col items-center justify-center lg:order-1 lg:mr-4 py-2 lg:py-0">
            <p className="text-justify font-medium ms-12 me-12 mb-4 lg:mb-16">
              The Manufacturing Research Lab of Guru Nanak Dev Engineering
              College, Ludhiana is focused towards the research areas in field
              of polymers, alloys, metals, non metals etc. for their utilization
              in various engineering applications. The lab has wide range of
              testing facilities that are procured from various in-house and
              external research projects for the analysis of hard as well as
              soft materials in terms of mechanical, thermal, spectroscopic
              analysis etc. The students and faculty from all the departments of
              institute are using these facilities for the research work to be
              carried out for their academic and professional growth in form of
              UG and PG projects/thesis, paper publications and patents etc.
              Till date many research projects sanctioned from various agencies
              like DST, AICTE, SERB, IEI, BIS, UGC and CSIR etc. were completed
              successfully and some in queue. So overall this lab is equipped
              with all the modern equipments used in testing and analysis of
              materials and further manufacturing of product.
            </p>
          </div>
          <div className="flex-1 flex items-center justify-center lg:order-2 mt-4 lg:mt-0">
            <img
              src="/gndecPng.png"
              alt="MRLogo"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className="creativesplanet-box-content-inner">
        <div className="flex flex-col items-center text-center justify-center bg-neutral-800 h-96 py-0">
          {/* Added py-8 for equal padding top and bottom */}
          <h2 className="text-3xl font-bold text-white mb-8">
            Officials of Manufacturing Research Lab
          </h2>
          <ul className="text-lg text-white">
            <li className="mb-3">Dr. Jasmaninder Singh Grewal (HOD)</li>
            <li className="mb-3">Dr. Amrinder Singh Pannu (Lab Incharge-I)</li>
            <li className="mb-3">Prof. Gulraj Singh (Lab Incharge-II)</li>
            <li className="mb-3">Mr. Puran Singh (Lab Technician)</li>
            <li>Mr. Kulvir Singh (Attendant)</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default About;
