"use client"
import React from 'react';
import { IoIosStar } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import datas from "@/public/assets/data/section7.json";
import "./bullet.css";
import styles from "./styles.module.css";

function Reviews() {
  // Yorumları 10'lu gruplara ayır
  const chunkedData = [];
  const chunkSize = 10;
  for (let i = 0; i < datas.length; i += chunkSize) {
    chunkedData.push(datas.slice(i, i + chunkSize));
  }

  return (
    <div className='pt-[50px] overflow-hidden bg-gray-50'>
      <div className="flex justify-center text-[30px] md:text-[60px] font-[500] mt-20">
        <h1 className="flex flex-col text-darkRed font-libre-bodoni">
          <span>Reviews</span>
        </h1>
      </div>

      {chunkedData.map((chunk, index) => (
        <div key={index} className={`  pl-10   mt-10 md:ml-20 overflow-x-auto ${styles.scrollYOff}`}>
          <Swiper
          breakpoints={{
            340:{
              slidesPerView:1,
              spaceBetween:15
            },
            700:{
              slidesPerView:3,
              spaceBetween:15
            }
          }}
            freeMode={true}
            pagination={{ clickable: true, }}
      
            
           
          >
            {chunk.map((data, dataIndex) => (
              <SwiperSlide key={dataIndex} >
                <div className="bg-grayIcon border p-5 min-h-52 h-full items-center rounded-2xl">
                  <div className="flex w-full relative items-center">
                    <div className="mr-5">
                      <img src={data.profileImage} className="w-12 h-10 rounded-full" alt="" />
                    </div>
                    <div className="w-full">
                      <div className="text-darkRed font-[500] uppercase text-md"><span className="font-lexend">{data.name}</span></div>
                      <div className="flex space-x-8">
                        <div className="flex space-x-1 text-2xl text-starYellow">
                          {[...Array(Number(data.numberOfStars))].map((_, i) => (
                            <IoIosStar key={i} />
                          ))}
                        </div>
                        <div className="text-commentTimeText text-sm">4 hour ago</div>
                      </div>
                    </div>
                    <div className="absolute top-0 right-0 mr-[-15px]">
                      <img src="/assets/images/googleIcon.png" alt="google icon" className="w-12" />
                    </div>
                  </div>
                  <div className={`overflow-x-auto max-h-24 text-sm mt-4 text-commetTxt ${styles.scrollStyle}`}>
                    <p>{data.comment}</p>
                  </div>
                </div>
              </SwiperSlide>
              
            ))}
          </Swiper>
          <hr className='mt-10 w-[98%]'/>
        </div>
      ))}
    </div>
  );
}

export default Reviews;
