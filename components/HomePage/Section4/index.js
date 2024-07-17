"use client"
import React,{useEffect} from "react";
import { data } from "./data";
import Aos from "aos";
import 'aos/dist/aos.css'
function Section4() {
  useEffect(()=> {
    Aos.init()
  },[])
  return (
    <div className="overflow-hidden  pb-10">
      <div className="flex justify-center text-[60px] font-[500] ">
        <h1 className="flex flex-col font-libre-bodoni">
          <span data-aos="fade-right">Other</span>{" "}
          <span data-aos="fade-left" className="text-redTitle ml-10 mt-[-20px]">Treatments</span>
        </h1>
      </div>
      <div className="flex  flex-col md:flex-row justify-evenly md:space-x-3 ">
        {data.map((data) => (
          <div
            key={data.id}
            className=" md:mt-20 mt-10  md:p-5  flex justify-center flex-col items-center"
          >
            <div data-aos="zoom-in-down"
              className={`${data.bgClass}  bg-cover bg-center md:w-56 md:h-56 w-16 h-16 rounded-full md:flex hidden justify-center items-center `}
            >
              <img src={data.imagePath} alt="" className="w-16" />
            </div>
            <div data-aos="fade-right" className=" hidden md:flex mt-4 justify-center ">
              <p className="font-[500] text-xs md:text-xl font-lexend">{data.title}</p>
            </div>
            <div data-aos="fade-up" className=" hidden md:flex justify-center mt-11 mb-10">
              <img src="/assets/images/vector.png" alt="" className="w-16 " />
            </div>
              <div data-aos="fade-right" className="md:hidden font-libre-bodoni text-lg mb-3 font-bold text-grayHead">
                {data.title}
              </div>
              <div data-aos="flip-down" className=" shadow-2xl hover:cursor-pointer flex flex-col justify-center p-3   rounded-2xl bg-grayIcon bg-opacity-90 w-[85%] h-72  md:w-80 md:h-80">
              <div className="  flex justify-center overflow-hidden md:max-h-60    items-center">
                <img
                  className=" md:max-h-60 max-h-60  "
                  src={data.cardImg}
                  alt=""
                />
              </div>

              <div
                className={`text-[8px] md:text-sm  overflow-x-auto text-center max-h-10 `}
              >
                {data.cardText}
              </div>
            </div>

          
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section4;
