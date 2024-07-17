"use client"
import React,{useEffect} from "react";
import { data, data1 } from "./data";
import Aos from "aos";
import 'aos/dist/aos.css'

function Section6() {
  useEffect(()=> {
    Aos.init()
  },[])
  
  return (
    <div className="flex justify-center items-center flex-col  mt-28 h-[900px] bg-grayIcon overflow-hidden">
      <div className="flex justify-center text-[60px] font-[500]">
        <h1 className="flex flex-col font-libre-bodoni">
          <span data-aos="fade-right">Patient</span>{" "}
          <span data-aos="fade-left" className="text-redTitle ml-10 mt-[-20px]">Stories</span>
        </h1>
      </div>
      <div class="hidden md:block container lg:px-32 px-4 py-8 mx-auto items-center ">
        <div class="grid grid-cols-3  max-h-[700px] grid-rows-2 grid-flow-col gap-2">
          {data.map((item, index) => (
            <div data-aos="zoom-in-up"  key={index} class={`${index === 4 ? " row-span-2" : ""}`}>
            <img
              src={item.path}
              class=" h-full w-full object-cover object-center  "
            />
          </div>
          ))}
          
        </div>
      </div>
      <div class="block md:hidden container lg:px-32 px-4 py-8 mx-auto items-center ">
      <div class="grid grid-cols-  max-h-[700px] grid-rows-3 grid-flow-col gap-2">
        {data1.map((item, index) => (
          <div data-aos="zoom-in-up"  key={index} class={` ${index === 2 ? "  col-span-2 h-32" : ""}`}>
          <img
            src={item.path}
            class=" h-full w-full object-cover object-center  "
          />
        </div>
        ))}
        
      </div>
    </div>
    </div>
  );
}

export default Section6;
