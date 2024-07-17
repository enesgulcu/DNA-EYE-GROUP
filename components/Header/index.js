"use client"
import React   from 'react'
import { FaFacebookSquare,FaInstagram } from "react-icons/fa";
import { MdContactSupport } from "react-icons/md";

import { BsTwitterX } from "react-icons/bs";
import Link from 'next/link';



function Header() {

  const phoneNumber = "+14807267009";
  const call = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  const message = () => {
    window.location.href = `https://wa.me/${phoneNumber}`;
  };
 
  return (
    <div className='bg-grayHead text-grayIcon flex  justify-center md:justify-end items-center  space-x-3 text-xl md:pr-7 h-[48px]'>


            <div className='flex justify-between items-center w-full px-3  '>
            <div className='flex md:hidden space-x-3'>
              <img src="/assets/images/messageIcon.png" alt="" onClick={message} />
                <img src="/assets/images/phoneIcon.png" alt="" onClick={call} />
                
                 
                 <Link href="/team">
               <MdContactSupport className='text-grayIcon text-2xl'/>
               </Link>
              
                
              
            </div>
              <div className='flex justify-end w-full text-lg space-x-2 '>
              <Link target='_blank' href="https://twitter.com/">
               <BsTwitterX className='hidden md:block scale-90 duration-500 hover:scale-125 cursor-pointer '/>
              </Link>
              <Link href="https://www.instagram.com/" target='_blank'>
                <FaInstagram  className='hidden md:block scale-90 duration-500 hover:scale-125 cursor-pointer' />
              </Link>
             <Link href="https://www.facebook.com/" target='_blank'>
             <FaFacebookSquare className='md:scale-90 md:duration-500 md:hover:scale-125 cursor-pointer'/>
             </Link>
               
              </div>

               
            </div>
            
    </div>
  )
}

export default Header