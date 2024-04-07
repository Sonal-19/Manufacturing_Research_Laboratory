import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { MailIcon, LocationMarkerIcon, PhoneIcon } from "@heroicons/react/outline"; // Add PhoneIcon
import { MenuIcon, XIcon, ChevronDownIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [activeNavLink, setActiveNavLink] = useState("Home");
  const [isTestingFacilitiesOpen, setIsTestingFacilitiesOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/", current: activeNavLink === "Home" },
    { name: "About Us", href: "/about", current: activeNavLink === "About Us" },
    { name: "Services", href: "/testing", current: activeNavLink === "Services" },
    { name: "News & Events", href: "/news-events", current: activeNavLink === "News & Events" },
    { name: "Contact Us", href: "/contact", current: activeNavLink === "Contact Us" },
  ];

  const testingFacilities = [
    "Differential Scanning Calorimetry (DSC)",
    "Fourier Transmission Infra Red Spectroscopy (FTIR)",
    "Twin Screw Extruder (HAAKE Mini CTW Micro)",
    "Micro Vicker Hardness Tester",
    "Tribometer (Pin on Disk)",
    "Single Screw Extruder",
    "Cryo Mill",
    "Universal Milling Machine",
    "Digital Shore Hardness Tester",
    "3d Printer (U Print SE)",
    "3d Printer CADx Arya Pro",
  ];

  const handleNavLinkClick = (name) => {
    setActiveNavLink(name);
  };

  const toggleTestingFacilities = () => {
    setIsTestingFacilitiesOpen(!isTestingFacilitiesOpen);
  };

  return (
    <Disclosure as="nav" className="bg-white fixed left-0 right-0 top-0 z-50 shadow-lg"
    // style={{
    //   backgroundImage: "url(/b1.jpg)",
    //   backgroundSize: "cover",
    //   backgroundPosition: "center center",
    //   opacity: 1.9,
    // }}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-9xl px-2 lg:py-6 xs:py-3 sm:px-6 lg:px-8 relative z-10">
            {/* Contact Info */}
            <div className="hidden sm:flex justify-end items-center absolute top-0 lg:ms-20 left-80 pr-4 py-2 text-sm text-red-900">
              <div className="flex items-center me-4">
                <MailIcon className="h-5 w-5 mr-1" />
                <p className="mr-4">mrlabgndec@gmail.com</p>
              </div>
              <div className="flex items-center me-4">
                <LocationMarkerIcon className="h-5 w-5 mr-1" />
                <p className="mr-4">GNDEC, Ludhiana, Punjab</p>
              </div>
              <div className="flex items-center me-2">
                <PhoneIcon className="h-5 w-5 mr-1" /> 
                <p className="mr-4">0161 5064709</p>
              </div>
            </div>
            {/* Logo */}
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex flex-1 items-center">
                <a href="/" className="mr-2">
                  <img className="h-16 w-auto lg:me-1 lg:h-111 lg:w-35" src="/lg3.png" alt="Your Company" />
                </a>
                <a href="/" className="mr-2">
                  <img className="h-16 w-auto lg:me-6 lg:h-94 lg:w-auto" src="/mrl3.png" alt="Your Company" />
                </a>
              </div>
              {/* Navigation */}
              <div className="hidden sm:flex flex-grow justify-center font-semibold items-center ml-12 lg:mt-5">
                <div className="flex gap-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => handleNavLinkClick(item.name)}
                      className={classNames(
                        item.current ? "text-red-600 underline" : "text-black-600 hover:text-red-600 hover:underline",
                        "px-2 py-4 text-lg font-serif"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                {/* Testing Facilities Dropdown - Desktop Size */}
                <div className="relative inline-block ms-3 text-left">
                  <button
                    onClick={toggleTestingFacilities}
                    className="text-black-600 hover:text-red-600 hover:underline text-lg font-serif flex items-center"
                  >
                    <span>Testing Facilities</span>
                    <ChevronDownIcon className="w-5 h-5 ml-1" aria-hidden="true" />
                  </button>
                  {isTestingFacilitiesOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-56 h-96 overflow-y-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        {testingFacilities.map((facility, index) => (
                          <a
                            key={index}
                            href={`/${facility.split(" ").join("-").toLowerCase()}`}
                            className={classNames(
                              "block px-4 py-2 text-sm border-b border-gray-200 hover:bg-gray-100"
                            )}
                          >
                            {facility}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/* Query Button - Only for Desktop */}
              <div className="hidden sm:block font-semibold">
                <a href="/queryform">
                  <button className="bg-green-500 text-white rounded-md px-6 py-2 text-lg font-serif mt-5 mb-2">
                    {/* Get A Quote › */} 
                    query
                  </button>
                </a>
              </div>
              {/* Mobile Menu Button */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Disclosure.Button className="sm:hidden relative inline-flex items-center justify-center rounded-md p-2 text-indigo-600 hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-10 w-10" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-10 w-10" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          {/* Mobile Menu Content */}
          <Disclosure.Panel className="sm:hidden ">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <div className="flex flex-col items-center w-full">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => handleNavLinkClick(item.name)}
                    className={classNames(
                      item.current ? "text-blue-500 underline" : "text-black-600 hover:text-indigo-400 hover:underline",
                      "block px-1 py-2 text-lg font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
                {/* Dropdown for Testing Facilities (Mobile) */}
                <div className="relative inline-block text-left">
                  <button
                    onClick={toggleTestingFacilities}
                    className="text-black-600 hover:text-indigo-400 hover:underline px-3 py-3 text-lg font-medium flex items-center"
                  >
                    <span>Testing Facilities</span>
                    <ChevronDownIcon className="w-5 h-5 ml-1" aria-hidden="true" />
                  </button>
                  {isTestingFacilitiesOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-56 h-96 overflow-y-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        {testingFacilities.map((facility, index) => (
                          <a
                            key={index}
                            href={`/${facility.split(" ").join("-").toLowerCase()}`}
                            className={classNames(
                              "block px-4 py-2 text-sm border-b border-gray-200 hover:bg-gray-100"
                            )}
                          >
                            {facility}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}