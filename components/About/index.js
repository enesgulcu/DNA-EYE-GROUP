"use client"
import React,{useEffect} from "react";
import {data} from "./data"
import Aos from "aos";
import 'aos/dist/aos.css'
function About() {
  useEffect(()=> {
    Aos.init()
  },[])
  
  return (
    <div >
        <div className=' relative flex justify-center items-center h-96 bg-center bg-cover   bg-about-bg  '>
        <div className="absolute top-0 right-0 w-full h-full bg-blackBg bg-opacity-30" />
              <div className='flex flex-col  text-center justify-center items-center text-white z-30'>
                 <span data-aos="fade-down" className='font-[500]  mb-5'>Your eyes deserve the best</span>
                 <span data-aos="fade-left" className='md:text-5xl text-3xl font-libre-bodoni'>We will be there every step of the way</span>
              </div>
        </div>
        <div className='flex justify-center items-center mt-20'>
        <div className='grid  md:grid-cols-2  grid-cols-1   w-[90%] md:w-[70%] md:px-10 md:space-y-0 space-y-16'>
          <div className=' font-libre-bodoni'>
            <h4 className='text-grayHead text-lg font-[400]'>{data.title1}</h4>
            <h2 className='text-4xl mt-2'>{data.title2}</h2>
            {

              data.desc.map((item,index) => (
                <p key={index} className='mt-3 text-grayHead text-xl font-[400] '>{item.desc1}</p>
              ))

            }
          </div>
          <div data-aos="flip-right" data-aos-duration="1500" className='  aspect-square md:ml-10   '>
            <img src="/assets/images/about1.jpg" alt=""  />
          </div>
        </div>
        </div>
        <div className=' relative mt-20 h-[500px] bg-about1-bg bg-cover bg-center'>
        <div className="absolute top-0 right-0 w-full h-full bg-blackBg bg-opacity-35" />

        <div className=' flex  justify-center items-center h-full'>
            <div className='md:w-[50%] flex flex-col  z-30 text-center font-libre-bodoni'>
                <span data-aos="fade-down" className='text-white text-lg font-[700] '>{data.title3}</span>
                <span data-aos="fade-up" className='text-white md:text-5xl text-2xl mt-5'>{data.title4}</span>
                <div data-aos="zoom-in" data-aos-duration="1000">
                 <button className='mt-10 border p-3 rounded-full bg-blueEye bg-opacity-80 hover:bg-opacity-100 cursor-pointer text-white'>Book an Appointment</button>
                </div>
               
            </div>
        </div>
        
        </div>
        
    
    </div>
  )
}

export default About