import { Fragment, React, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [activeNavLink, setActiveNavLink] = useState(null);

  const navigation = [
    { name: "Home", href: "#", current: activeNavLink === "Home" },
    { name: "About Us", href: "#about-page", current: activeNavLink === "About Us" },
    { name: "News & Events", href: "#contact-form", current: activeNavLink === "News & Events" },
    { name: "Contact Us", href: "#contact-form", current: activeNavLink === "Contact Us" },
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

  return (
    <Disclosure as="nav" className="bg-white fixed left-0 right-0 top-0 z-50 shadow-lg">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 lg:py-6 xs:py-3 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                {/* Logo */}
                <img className="h-12 w-auto" src="/gne_logo.png" alt="Your Company" />
                <img className="h-12 w-auto" src="/mrl2.png" alt="Your Company" />
              </div>
              <div className="hidden sm:flex flex-grow justify-center items-center">
                <div className="flex justify-center w-full sm:w-2/3">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setActiveNavLink(item.name)}
                      className={classNames(
                        item.current
                          ? "text-blue-500 underline"
                          : "text-black-600 hover:text-indigo-400 hover:underline",
                        "px-3 py-3 text-lg font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="text-black-600 hover:text-indigo-400 hover:underline px-3 py-3 text-lg font-medium">
                        Testing Facilities
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 h-96 overflow-y-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          {testingFacilities.map((facility, index) => (
                            <Menu.Item key={index}>
                              {({ active }) => (
                                <a
                                  href={`/${facility.split(" ").join("-").toLowerCase()}`}
                                  className={classNames(
                                    active ? 'bg-indigo-100 text-indigo-900' : 'text-gray-900',
                                    'block px-4 py-2 text-sm border-b border-gray-200 hover:bg-gray-100'
                                  )}
                                >
                                  {facility}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Disclosure.Button className="sm:hidden relative inline-flex items-center justify-center rounded-md p-2 text-indigo-600 hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-10 w-10" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-10 w-10" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden ">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <div className="flex flex-col items-center w-full">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    onClick={() => setActiveNavLink(item.name)}
                    className={classNames(
                      item.current
                        ? "text-blue-500 underline"
                        : "text-black-600 hover:text-indigo-400 hover:underline",
                      "block px-1 py-2 text-lg font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="text-black-600 hover:text-indigo-400 hover:underline px-3 py-3 text-lg font-medium">
                      Testing Facilities
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 h-96 overflow-y-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        {testingFacilities.map((facility, index) => (
                          <Menu.Item key={index}>
                            {({ active }) => (
                              <a
                                href={`/${facility.split(" ").join("-").toLowerCase()}`}
                                className={classNames(
                                  active ? 'bg-indigo-100 text-indigo-900' : 'text-gray-900',
                                  'block px-4 py-2 text-sm border-b border-gray-200 hover:bg-gray-100'
                                )}
                              >
                                {facility}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
