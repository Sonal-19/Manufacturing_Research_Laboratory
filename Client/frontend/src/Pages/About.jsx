import React from 'react';

function About() {
  return (
    <div className="w-full" id='about-page'>
      <div className="about flex flex-col bg-slate-300 items-center justify-center py-10 px-4 lg:flex-row lg:px-0">
        <div className='flex-1 flex flex-col items-center justify-center lg:order-1 lg:mr-8 py-4 lg:py-0'>
          <h1 className='text-5xl text-indigo-900 font-medium mb-4 lg:mb-8'>About Us</h1>
          <p className="text-center lg:text-left lg:mx-16">
            The Manufacturing Research Lab of Guru Nanak Dev Engineering College, Ludhiana is focused
            towards the research areas in the field of polymers, alloys, metals, non-metals etc. for their utilization in
            various engineering applications. The lab has a wide range of testing facilities that are procured from
            various in-house and external research projects for the analysis of hard as well as soft materials in
            terms of mechanical, thermal, spectroscopic analysis etc. The students and faculty from all the
            departments of the institute are using these facilities for the research work to be carried out for their
            academic and professional growth in the form of UG and PG projects/thesis, paper publications, and
            patents etc. Till date many research projects sanctioned from various agencies like DST, AICTE, SERB
            etc. were completed successfully and around and were defended successfully by using the research
            facilities of this lab. So overall this lab is equipped with all the modern equipment used in testing
            and analysis of materials and further manufacturing of products.
          </p>
        </div>
        <div className='flex-1 flex items-center justify-center lg:order-2 mt-8 lg:mt-0'>
          <img src="/gndecPng.png" alt="MRLogo" className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

export default About;
