"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import AnimatedHamburgerButton from "./AnimatedHamburgerButton";
import { MobileMenu } from "./MobileMenu";

function Navbar() {
  const menuItems = [
    { id: 1, name: "Home", linkPath: "/" },
    { id: 2, name: "About", linkPath: "/about" },
    { id: 3, name: "Team", linkPath: "/team" },
    { id: 4, name: "Reviews", linkPath: "/reviews" },
    { id: 5, name: "Contact Lens", linkPath: "/contact-lens" },
  ];

  const sessionItemRef = useRef();
  useEffect(() => {
    sessionItemRef.current = sessionStorage.getItem("selectedItem");
  }, []);

  const [selectedItem, setSelectedItem] = useState();
  useEffect(() => {
    if (sessionItemRef.current) {
      setSelectedItem(sessionItemRef.current);
    } else {
      setSelectedItem("Home");
    }
  }, []);
  const [active, setActive] = useState(false);

  const handleClickSessionItem = (item) => {
    setSelectedItem(item);
    sessionStorage.setItem("selectedItem", item);
  };

  // const phoneNumber = "+18774362393";
  // const call = () => {
  //   window.location.href = `tel:${phoneNumber}`;
  // };

  return (
    <div className="flex justify-center items-center h-20 bg-white">
      <div className="flex relative justify-between items-center md:w-full w-[90%] lg:gap-1 px-3 sm:px-6 mt-2 md:mt-0">
        {/* Logo added here */}
        <div className="flex items-center w-[20%]">
          <Link href="/">
            <Image
              src="/assets/images/eye-logo.png"
              alt="DNA Eye Group Logo"
              width={40}
              height={40}
              className="cursor-pointer hidden sm:block" // Hide on extra-small screens if needed
            />
          </Link>
        </div>
        <div className="sm:flex gap-2">
          {menuItems.map((item) => (
            <Link href={item.linkPath} key={item.linkPath}>
              <span
                className={`text-grayHead cursor-pointer md:block hidden scale-90 hover:scale-100 hover:duration-500 duration-300 ${
                  selectedItem === item.name
                    ? "border-b-2 pb-2 border-grayHead"
                    : ""
                }`}
                onClick={() => {
                  handleClickSessionItem(item.name);
                }}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </div>
        <div className="flex sm:hidden border rounded-lg bg-darkRed">
          {/* Mobile menu toggle */}
          <AnimatedHamburgerButton active={active} setActive={setActive} />
        </div>
        {active && (
          <div className="absolute top-0 left-0 mt-20 w-full md:hidden z-50">
            <MobileMenu
              menuItems={menuItems}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              setActive={setActive}
            />
          </div>
        )}
        <div className="md:flex hidden ml-2 gap-1 lg:gap-2">
          <Link href="/contact">
            <div className="hidden sm:flex justify-center cursor-pointer items-center space-x-2 text-grayIcon bg-grayHead border rounded-full px-5 py-2">
              <span className="text-xs scale-90 hover:scale-100 hover:duration-500 duration-300">
                Schedule Exam
              </span>
            </div>
          </Link>
          {/* <div
            onClick={call}
            className="hidden sm:flex justify-center cursor-pointer items-center space-x-2 text-grayIcon bg-grayHead border rounded-full px-5 py-2"
          >
            <div className="text-xs scale-90 hover:scale-100 hover:duration-500 duration-300">
              Call Center
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
