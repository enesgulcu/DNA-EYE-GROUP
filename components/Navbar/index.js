"use client";
import { useState , useEffect} from "react";
import React from "react";
import Link from "next/link";
import AnimatedHamburgerButton from "./AnimatedHamburgerButton";
import { MobileMenu } from "./MobileMenu";

function Navbar() {
  // Menü öğeleri listesi
  const menuItems = [
    {
      id: 1,
      name: "Home",
      linkPath:"/"
    },
    {
      id: 2,
      name: "About",
      linkPath:"/about"
    },
    {
      id: 3,
      name: "Team",
      linkPath:"/team"
    },
    {
      id: 4,
      name: "Reviews",
      linkPath:"/reviews"
    },
  ];
  

  
  let sessionItem ;
  useEffect(()=> {
    sessionItem =  sessionStorage.getItem("selectedItem") 
  },[])
   

  const [selectedItem, setSelectedItem] = useState(); 
  useEffect(() => {
    
   if (sessionItem) {setSelectedItem(sessionItem)} else{setSelectedItem("Home")}
 }, []);
  const [active, setActive]= useState(false)


  


  const handleClickSessionItem = (item) => {
    setSelectedItem(item);
    sessionStorage.setItem("selectedItem", item);
  };


  const phoneNumber = "+18774362393";
  const call = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  const message = () => {
    window.location.href = `https://wa.me/${phoneNumber}`;
  };

  return (
    <div className="flex justify-center h-20 bg-white  ">
      <div className="flex relative justify-between  px-5 items-center md:w-full w-[90%]   bg-white   sm:px-6 mt-2 md:mt-0  ">
        <div className="flex items-center w-[20%]  "></div>
        <div className=" sm:flex space-x-5 ">
          {menuItems.map((item) => (
            <Link href={item.linkPath} key={item.linkPath} >
             <span
              
              className={`text-grayHead cursor-pointer md:block hidden scale-90 hover:scale-100 hover:duration-500 duration-300  ${
                selectedItem === item.name ? "border-b-2 pb-2 border-grayHead" : ""
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
        <div className=" flex sm:hidden border  rounded-lg bg-darkRed ">
          {/* Mobil cihazlarda menüyü açma/kapama butonu */}
              <AnimatedHamburgerButton active={active} setActive={setActive}/>
        </div>
        {/* Mobil cihazlarda menü tam ekran olarak açıldığında */}
        {active && (
          <div className="absolute top-0 left-0 mt-20 w-full md:hidden z-50">
           <MobileMenu menuItems={menuItems} selectedItem={selectedItem} setSelectedItem={setSelectedItem} setActive={setActive}/>
          </div>
         
        )}
        {/* Diğer cihazlarda görünen yardım butonu */}
        <div className="md:flex hidden space-x-2 ">
        <Link href="/contact">
        <div
            
            className="hidden sm:flex justify-center cursor-pointer items-center space-x-2 text-grayIcon bg-grayHead border rounded-full px-5 py-2"
          >
            <div className="text-xs scale-90 hover:scale-100 hover:duration-500 duration-300">Schedule Exam</div>
          </div>
        </Link>
          <div
            onClick={call}
            className="hidden sm:flex justify-center cursor-pointer items-center space-x-2 text-grayIcon bg-grayHead border rounded-full px-5 py-2"
          >
            <div className="text-xs scale-90 hover:scale-100 hover:duration-500 duration-300">Call Center</div>
          </div>
          <div
            onClick={message}
            className="hidden sm:flex justify-center cursor-pointer items-center space-x-2 text-grayIcon bg-grayHead border rounded-full px-5 py-2"
          >
            <div className="text-xs scale-90 hover:scale-100 hover:duration-500 duration-300">Chat with us</div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Navbar;
