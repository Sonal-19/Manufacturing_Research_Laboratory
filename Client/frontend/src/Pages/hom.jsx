import React, { useState, useEffect } from 'react';
import { IoChevronBack } from 'react-icons/io5';
import { IoChevronForward } from 'react-icons/io5';
import { RxDotFilled } from 'react-icons/rx';

function IntroductionSection() {
  const slides = [
    {
      url: '/test.jpg',
    },
    {
      url: '/test1.jpg',
    },
    {
      url: '/lab3.jpg',
    },
    {
      url: '/lab4.jpg',
    },
    {
      url: '/lab5.jpg',
    },
   
  ];
  // const slides = [
  //   {
  //     url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
  //   },
  //   {
  //     url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
  //   },
  //   {
  //     url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
  //   },
  //   {
  //     url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
  //   },
  //   {
  //     url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
  //   },
  // ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex]); // Run effect when currentIndex changes

  return (
    <>
      {/* <div
        className="w-full h-screen bg-indigo-200 relative flex items-center justify-center"
        style={{
          backgroundImage: "url(/lab1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          opacity: 1.8,
        }}
      >
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl lg:text-7xl text-white font-medium mb-4">
            Welcome to our
          </h1>
          <h1 className="text-4xl md:text-6xl lg:text-8xl text-center text-white font-medium mb-8">
            Manufacturing Research Lab
          </h1>
          <a
            className="text-white font-medium border-2 border-white bg-none hover:bg-white hover:text-indigo-900 rounded-md px-6 py-2 text-xl md:text-2xl lg:text-3xl transition-all"
            href="#about-page"
          >
            Explore Now
          </a>
        </div>
      </div> */}

      {/* <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'> */}
      <div className='w-full h-screen m-auto py-16 relative group'>
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className='w-full h-full  rounded-2xl bg-center bg-cover duration-500'
        > 

          {/* welcome Message */}
        <div className="text-center mt-10 py-12">
          <h1 className="text-3xl md:text-5xl lg:text-7xl mt-5 text-white font-medium mb-4">
            Welcome to our
          </h1>
          <h1 className="text-4xl md:text-6xl lg:text-8xl text-center text-white font-medium mb-8">
            Manufacturing Research Lab
          </h1>
          <a
            className="text-white font-medium border-2 border-white bg-none hover:bg-white hover:text-indigo-900 rounded-md px-6 py-2 text-xl md:text-2xl lg:text-3xl transition-all"
            href="#about-page"
          >
            Explore Now
          </a>
        </div>
        
        </div>
        {/* Left Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <IoChevronBack onClick={prevSlide} size={30} />
        </div>

        

        {/* Right Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <IoChevronForward onClick={nextSlide} size={30} />
        </div>
        <div className='flex top-4 justify-center py-2'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className='text-2xl cursor-pointer'
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>

      <div className="creativesplanet-box-content-inner">
        <div className="flex flex-col items-center justify-center bg-neutral-800 h-full py-8">
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