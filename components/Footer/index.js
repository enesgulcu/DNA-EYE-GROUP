"use client"
import React, { useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

import ApplicationModal from "./ApplicationModal";
import Link from "next/link";

function Footer() {
  const [openApplicationModal, setOpenApplicationModal] = useState(false)

  const handleOpenModalClick = () => {
    setOpenApplicationModal(!openApplicationModal)
  }
  return (
    <>
     <div className={`relative  bg-footer-bg-mobile md:bg-footer-bg bg-cover  h-[613px]  md:mt-32 ${openApplicationModal ? "blur-md":""}`}>
     
      <div className=" absolute bg-grayHead bg-opacity-5 rounded-full md:p-10 w-28 h-28 md:w-80 md:h-80 flex justify-center items-center md:right-14 top-0 right-[34%]  mt-[-50px] md:mt-[-110px]">
        <div className="absolute bg-grayHead bg-opacity-10 rounded-full md:p-10 w-24 h-24 md:w-72 md:h-72 flex justify-center items-center ">
          <div className="absolute bg-grayIcon rounded-full p-4 md:p-10 w-20 h-20 md:w-64 md:h-64 flex justify-center items-center ">
            {/* Logo-03 sadece mobilde görüntülenecek */}
            <img
              src="/assets/images/logo/logo-05.png"
              alt=""
              className="hidden md:block"
            />

            {/* Logo-04 sadece masaüstü ve tabletlerde görüntülenecek */}

            <img
              src="/assets/images/logo/logo-03.png"
              alt=""
              className="block md:hidden"
            />
          </div>
        </div>
      </div>

      <div className=" hidden md:block absolute md:left-32 md:top-32 top-20 left-10 text-sm md:text-base text-grayIcon">
        <div className="flex space-x-8 ">
          <div>
            <h1>REACH OUT</h1>
          </div>
          <div className=" flex flex-col justify-between">
    <p className="mb-2 ">dnaeyegroup@gmail.com</p>
    <p className="mb-2  flex justify-between cursor-pointer"><span>Phone:</span> <span className="underline hover:text-darkRed">(480) 726-7009</span></p>
    <p className=" flex justify-between cursor-pointer"><span>Fax:</span> <span className="underline hover:text-darkRed">(480) 786-9684</span></p>
</div>

        </div>
        <div className="flex space-x-8 mt-12 ">
          <div>
            <h1>ABOUT US </h1>
          </div>
          <div >
          <Link href="/about"> <p className="cursor-pointer hover:underline hover:text-darkRed">About</p></Link>
          <Link href="/team"> <p className="cursor-pointer hover:underline hover:text-darkRed">Team</p></Link>
          <Link href="/reviews"><p className="cursor-pointer hover:underline hover:text-darkRed">Reviews</p></Link>
           
           
            
          </div>
        </div>
        <div onClick={handleOpenModalClick} className="mt-10 p-3 border rounded-full bg-redTitle bg-opacity-40 hover:bg-opacity-100 cursor-pointer text-center w-56">
          
            Carrier Opportunuties
          
        </div>
        <div className="flex space-x-3 mt-28 text-lg">
          <Link href="https://facebook.com/" target="_blank">
            <FaFacebook className="scale-110 duration-500 hover:scale-150 cursor-pointer" />
          </Link >
          <Link href="https://instagram.com/" target="_blank">
            <FaInstagram className="scale-110 duration-500 hover:scale-150 cursor-pointer" />
          </Link >
          <Link href="https://twitter.com/" target="_blank">
            <BsTwitterX className="scale-110 duration-500 hover:scale-150 cursor-pointer"  />
          </Link >
        </div>
      </div>
      <div className="md:hidden absolute    w-full flex flex-col justify-center items-center top-32">
        <div>
          <h1 className="uppercase font-[300] text-lg  text-grayIcon">
            connect
          </h1>
        </div>
        <div className="text-grayIcon text-center text-sm mt-5 space-y-3">
          <div>fax:(480) 786-9684</div>
          <div>Phone:(480) 726-7009</div>
        </div>
        <div className="mt-6 ">
        <Link href="https://www.linkedin.com/">
           <div className="flex bg-linkedinLogo p-2 mb-4 text-grayIcon  space-x-1 rounded ">
              <div className="mr-3">
                {" "}
                <img src="/assets/images/footerLinkedin.png" alt="" />{" "}
              </div>
              
              <div className="text-sm font-[200] border-l pl-3  border-solid border-commentTimeText ">
                Linkedin
              </div>
            </div>
        </Link>
        <Link href="https://www.facebook.com">
         <div className="flex bg-facebookLogo p-2 text-grayIcon  space-x-1 rounded ">
            <div className="mr-2">
              {" "}
              <img src="/assets/images/footerFacebook.png" alt="" />{" "}
            </div>
            <div className="text-sm font-[200] border-l pl-3 border-solid border-commentTimeText ">
              Facebook
            </div>
          </div>
        </Link>
        <div onClick={handleOpenModalClick} className="mt-3  p-3 border rounded bg-redTitle bg-opacity-40 text-grayIcon cursor-pointer text-center w-56">
          
            Carrier Opportunuties
          
        </div>
         
         
        </div>
      </div>
    </div>
    <ApplicationModal openApplicationModal={openApplicationModal} setOpenApplicationModal={setOpenApplicationModal}/>
    </>
   
  );
}

export default Footer;
