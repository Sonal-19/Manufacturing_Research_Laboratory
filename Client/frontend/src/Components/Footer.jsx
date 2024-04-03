import React from "react";

function Footer({ title }) {
  const links = [
    {
      id: 1,
      link: "facebook",
      href: "",
    },
    {
      id: 2,
      link: "instagram",
      href: "",
    },
    {
      id: 3,
      link: "linkedin",
      href: "",
    },
  ];

  const backToTop = () =>{
    window.scrollTo({top:0 , behavior : "smooth"})
  }

  return (
    <div className="w-full mt-20">

    <div className="bg-indigo-600 py-3 flex items-center justify-center cursor-pointer" onClick={backToTop}>
        <span className="text-lg text-white">Back to Top</span>
    </div>

      <div className="links py-4 bg-indigo-700">
        <ul className="flex items-center justify-center gap-4 ">
          <li className="px-3 py-1 border-r border-white">
            <a href="#" className="text-white text-lg hover:underline">
              Home
            </a>
          </li>
          <li className="px-3 py-1 border-r border-white">
            <a
              href="#contact-form"
              className="text-white text-lg hover:underline"
            >
              Contact Us
            </a>
          </li>
          <li className="px-3 py-1 border-r border-white">
            <a href="" className="text-white text-lg hover:underline">
              Facilities
            </a>
          </li>
          <li className="px-3 py-1">
            <a
              href="#about-page"
              className="text-white text-lg hover:underline"
            >
              About Us
            </a>
          </li>
        </ul>
      </div>

      <div className="links py-2 bg-indigo-800">
        <ul className="flex items-center justify-center gap-4 ">
          {links.map((item) => {
            return (
              <li className="px-3 py-1 " key={item.id}>
                <a href={item.href} className="text-white">
                  <i className={`fa-brands fa-${item.link} text-2xl`}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex items-center justify-center py-6 bg-indigo-900">
        <span className="text-white text-lg ">
          Copyright @ 2024 {title} GNDEC
        </span>
      </div>
    </div>
  );
}

export default Footer;