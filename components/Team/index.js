
"use client"
import React,{useEffect} from "react";
import {  doctors } from "./data";
import { CiImageOff } from "react-icons/ci";
import Link from "next/link";
import {data} from "@/components/Contact/data"

import Aos from "aos";
import 'aos/dist/aos.css'

function Team() {
  const sortedDoctors = doctors.sort((a, b) => a.surname.localeCompare(b.surname));
  useEffect(()=> {
    Aos.init()
  },[])
  return (
    <div className="overflow-hidden" >
      <div className="mt-[150px]  mb-[50px]  text-center text-3xl text-darkRed">
        <span>Our Team</span>
      </div>
      <div className="flex  justify-center items-center">
        <div className="grid border-b pb-10 grid-cols-1 w-[70%] justify-center items-center gap-4 ">
          {sortedDoctors.map((doctor, index) => (
            <div
            data-aos={`${index%2 ===0 ? "fade-left" : "fade-right"}`}
            data-aos-duration="1100"
              key={index}
              className={`flex ${
                index % 2 === 0 ? "md:flex-row-reverse flex-col " : "md:flex-row flex-col "
              } items-center mt-10 md:h-96 bg-gray-50 rounded-md shadow-xl`}
            >
              {doctor.imgPath  ? (
                <div className="w-1/2 md:w-1/4  overflow-hidden max-h-96 md:h-80 px-6 py-5 md:py-0  flex justify-center items-center">
                  <img
                    src={doctor.imgPath}
                    alt={doctor.name}
                    className="rounded-md"
                  />
                </div>
              ) : (
                <div className="w-1/2 md:w-1/3  overflow-hidden flex justify-center items-center  h-60 ">
                  <div className="w-[60%] h-full ">
                    <CiImageOff className="w-full h-full opacity-20  text-grayHead" />
                  </div>
                </div>
              )}

              <div className="     md:w-2/3 px-10 font-libre-bodoni  ">
                <h2 className="md:text-2xl  font-semibold">{doctor.name} {doctor.surname} </h2>
                <h2 className="md:text-lg text-sm mb-5 font-semibold text-grayHead">
                  {doctor.location}
                </h2>
                <span className="text-wrap md:text-lg text-xs text-grayHead">
                  {doctor.desc.slice(0, 200)}....
                </span>
                <Link href={`/team/${doctor.id}`}>
                  <div className="mt-6 mb-2">
                    <button className=" p-2 md:text-base text-xs bg-redTitle bg-opacity-90 hover:bg-opacity-100 cursor-pointer rounded-full text-white">
                      Read More
                    </button>
                  </div>
                </Link>
              </div>
              
            </div>
            
          ))}
        </div>
        <div>
        
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
      <div className=" md:w-[70%] flex justify-center items-center flex-col">
      <div className=" md:text-4xl text-xl  text-darkRed font-[500] my-10">
        <span>Our Arizona Locations</span>
      </div>
      <div className=" grid md:grid-cols-3 font-libre-bodoni grid-cols-1 gap-4 w-[90%]">
      
      {data.map((item) => (
        <div data-aos="flip-left" data-aos-duration="1200" key={item.id} className=" p-3">
          <div className="w-full h-96">
            <iframe
              className="w-full h-full"
              src={item.mapPath}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="text-center md:mt-2 mt-5 text-2xl font-[500]">
            <span>{item.title}</span>
          </div>
          <Link href={item.linkPath}>
            <div className="text-center mt-2 hover:underline h-16">
              <span className="max-w-screen-sm break-words text-xl ">
                {item.adress}
              </span>
            </div>
          </Link>
          <Link href={item.bookLink}>
          <div className="  h-14 flex items-center justify-center mt-2">
            <button className=" px-4 py-2 rounded-full bg-redTitle bg-opacity-90 hover:bg-opacity-100 text-white">
              Schedule Exam
            </button>
          </div>
          </Link>

          
          <div className="mt-2 text-center hover:underline cursor-pointer">
            Phone:<span>{item.phone}</span>
          </div>
          {item.fax && (
            <div className="mt-2 text-center hover:underline cursor-pointer">
              Fax:<span>{item.fax}</span>
            </div>
          )}
          <div className=" flex justify-center items-center mt-8">
            <table>
              {item.work_hours.map((day, index) => (
                <tr key={index}>
                  <td className="text-center pr-3">{day.day}:</td>
                  {day.start_time &&
                    (day.end_time && (
                      <td>
                        {day.start_time} - {day.end_time}
                      </td>
                    ))}
                  {day.closed && <td>CLOSED</td>}
                </tr>
              ))}
            </table>
          </div>
        </div>
      ))}
    </div>
      </div>
      </div>
      <div className=' relative mt-20 h-[500px] bg-about1-bg bg-cover bg-center'>
      <div className="absolute top-0 right-0 w-full h-full bg-blackBg bg-opacity-35" />

      <div className=' flex  justify-center items-center h-full'>
          <div className='md:w-[50%] w-[90%] flex flex-col  z-30 text-center font-libre-bodoni'>
              <span data-aos="fade-right" className='text-white md:text-lg  font-[700] '>We are here to help!</span>
              <span data-aos="fade-left" className='text-white md:text-5xl text-2xl mt-5'>We’re a no-judgment zone, so feel free to come to us with any questions or concerns.</span>
              <div data-aos="zoom-in">
               <button className='mt-10 border p-3 rounded-full bg-redTitle bg-opacity-00 hover:bg-opacity-100 cursor-pointer text-white'>Book an Appointment</button>
              </div>
             
          </div>
      </div>
      
      </div>
    </div>
  );
}

export default Team;
