"use client"
import React,{useEffect} from "react";
import { data } from "./data";
import Aos from "aos";
import 'aos/dist/aos.css'


function Section1() {

  useEffect(()=> {
    Aos.init()
  },[])
  
  return (
    <div  >
      <div className="relative  md:p-0">
      <div className="p-4  flex justify-center  items-center pt-10 md:mt-0 md:p-0 md:overflow-hidden">
       <img
          src="/assets/images/newhead.png"
          alt=""
          className="md:w-full w-[95%] h-auto md:rounded-none rounded-2xl"
        />

        <div className="absolute  right-0 top-0 md:mr-8 md:mt-2 mr-8 mt-10 ">
          <img src="/assets/images/head2.png" alt="" className="w-12 md:w-48" />
        </div>
        <div className=" absolute top-0 left-0 md:mt-2 mt-10 ml-6  z-10 bg-grayHead bg-opacity-5 rounded-full w-20 h-20 md:w-72 md:h-72 flex justify-center items-center  ">
          <div className=" bg-grayHead bg-opacity-10 rounded-full w-16 h-16 md:w-64 md:h-64 flex justify-center items-center ">
            <div className=" bg-white/90 backdrop-brightness-200      rounded-full p-2 w-12 h-12 md:w-56 md:h-56 flex justify-center items-center ">
            
              {/* Logo */}
              <img src="./assets/images/logo/logo-05.png " className="hidden md:block" alt="Logo" />
              <img src="./assets/images/logo/logo-02.png "  className="block md:hidden w-7" alt="Logo" />


            </div>
          </div>
        </div>
      </div>
       
        <div className=" flex flex-col justify-center items-center  md:mt-[-100px]  w-full">
          <div  className=" md:flex    justify-center  md:justify-around    md:w-[80%]  w-[90%]   ">
          
           {data.map((data, index) => (
              <>
                <div  key={index} data-aos="zoom-in-up">
                  <div  className="md:space-x-5  flex flex-col justify-center items-center space-y-5  ">
                    <div 
                      className={` ${data.bgClass} hidden  bg-cover bg-center shadow-lg opacity-90 shadow-grayHead w-28 h-28  md:w-56 md:h-56 rounded-full md:flex justify-center items-center datas-center `}
                    >
                      <img src={data.imagePath} alt="" className="w-24 h-24" />
                    </div>
                    <div className=" hidden md:flex mt-4 justify-center   ">
                      <p className="font-[500] ">{data.text}</p>
                    </div>
                    <div className=" hidden md:flex justify-center mt-6">
                      <img src="/assets/images/vector.png" alt="" className="w-16" />
                    </div>
                    
                      <div  data-aos ="fade-up" className="shadow-2xl   hover:cursor-pointer  rounded-2xl  p-4">
                        <img className="mb-5 rounded-lg" src={data.cardImage} alt="" />
                        <span className="hidden md:block">{data.cardText}</span>
                        <span className="block md:hidden text-center">{data.text}</span>
                      </div>
                    
                  </div>
                  
                </div>
              </>
            ))}
          
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
