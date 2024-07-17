"use client"
import React,{useEffect} from "react";
import { data } from "./data";
import Link from "next/link";
import Aos from "aos";
import 'aos/dist/aos.css'

function Contact() {
  useEffect(()=> {
    Aos.init()
  },[])
  
  return (
    <div className="mt-[100px] flex flex-col justify-center items-center overflow-hidden">
      <div className=" text-4xl text-darkRed font-[500] mb-32">
        <span>Contact Us</span>
      </div>
      <div className=" grid md:grid-cols-3 grid-cols-1 font-libre-bodoni   gap-4 w-[90%]">
        {data.map((item) => (
          <div key={item.id} className=" p-3">
            <div data-aos="zoom-in" className="w-full h-96">
              <iframe
                className="w-full h-full"
                src={item.mapPath}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div data-aos="fade-right" className="text-center md:mt-2 mt-10 text-2xl font-[500]">
              <span>{item.title}</span>
            </div>
            <Link href={item.linkPath}>
              <div data-aos="fade-left" className="text-center mt-2 hover:underline h-16">
                <span className="max-w-screen-sm break-words text-xl ">
                  {item.adress}
                </span>
              </div>
            </Link>
          <Link href={item.bookLink}>
          <div data-aos="fade-up" className="  h-14 flex items-center justify-center mt-2">
              <button className=" px-4 py-2 rounded-full bg-redTitle bg-opacity-90 hover:bg-opacity-100 text-white">
                Schedule Exam
              </button>
            </div>
          </Link>
            
            <div data-aos="fade-up" className="mt-2 text-center hover:underline cursor-pointer">
              Phone:<span>{item.phone}</span>
            </div>
            {item.fax && (
              <div data-aos="fade-up" className="mt-2 text-center hover:underline cursor-pointer">
                Fax:<span>{item.fax}</span>
              </div>
            )}
            <div data-aos="fade-up" className=" flex justify-center items-center mt-8">
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
      <div class="relative flex flex-col md:flex-row  justify-center items-center md:space-x-16 bg-cover bg-center h-[302px] mt-20  bg-[url('/assets/images/contactImage.jpeg')]  w-full ">
        <div className="absolute top-0 right-0 w-full h-full bg-blackBg bg-opacity-30" />
        <div className="z-30  text-white  text-center">
          <h1 data-aos="fade-right" className="text-4xl mb-3 font-[500]">Before your appointment</h1>
          <h4 data-aos="fade-left" className="font-[400] mb-5 md:mb-0">
            Please download and fill out an intake form.
          </h4>
        </div>
        <div data-aos="zoom-in" className=" z-30 p-4 rounded-full text-white bg-redTitle bg-opacity-70 hover:bg-opacity-100 cursor-pointer">
          <button>Download Intake Form</button>
        </div>
      </div>

      <div className=" py-20 mb-20  bg-grayBg w-full flex justify-center items-center  ">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 justify-center items-center  w-[70%]">
          <div >
            
            <div data-aos="fade-right" className="text-black md:text-4xl text-2xl">
              <span>
                Feel free to call or email us with any questions/comments you may have
              </span>
            </div>
            <div data-aos="fade-left" className="text-grayHead md:text-xl text-lg mt-5">
              <span>
                 Please don’t submit sensitive medical information, we’ll
                get that when we talk to you.
              </span>
            </div>
          </div>

          {/* FORM */}
          <div >
            <form className="max-w-md mx-auto">
              {/* Name */}
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-redTitle peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_first_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-redTitle peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Name
                </label>
              </div>

              {/* Email */}

              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-redTitle peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-redTitle  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
              </div>

              {/* Phone Number */}

              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  name="floating_phone"
                  id="floating_phone"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-redTitle peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_phone"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-redTitle peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone number
                </label>
              </div>
              {/* Message textarea */}
              <div className="relative z-0 w-full mb-5 group">
                <label
                  for="message"
                  className="block  mb-2 text-sm text-gray-500 "
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 focus:ring-redTitle focus:border-redTitle  "
                  placeholder="Enter your message..."
                ></textarea>
              </div>
              {/* CheckBox */}
              <div className="flex items-center mb-4">
                <input
                  id="checkbox-2"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-redTitle  border-gray-300 rounded focus:ring-redTitle focus:ring-2"
                />
                <label
                  for="checkbox-2"
                  className="ms-2 text-sm font-medium text-gray-500 "
                >
                I allow this website to store my submission so they can respond to my inquiry.
                </label>
              </div>
              {/* Button */}

              <button
                type="submit"
                className="text-white bg-redTitle bg-opacity-90 hover:bg-opacity-100 focus:ring-4 focus:outline-none focus:ring-redTitle font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mb-5 "
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
