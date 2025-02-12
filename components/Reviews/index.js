"use client";
import React from "react";
import { IoIosStar } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import datas from "@/public/assets/data/section7.json";
import "./bullet.css";
import styles from "./styles.module.css";
import Image from "next/image";

function Reviews() {
  // Yorumları 10'lu gruplara ayır
  const chunkedData = [];
  const chunkSize = 10;
  for (let i = 0; i < datas.length; i += chunkSize) {
    chunkedData.push(datas.slice(i, i + chunkSize));
  }

  return (
    <div className="pt-10 mb-10 overflow-hidden bg-gray-50">
      <div className="flex justify-center text-[30px] md:text-[60px] font-medium mt-20">
        <h1 className="flex flex-col text-darkRed font-libre-bodoni">
          <span>Reviews</span>
        </h1>
      </div>

      <div>
        {chunkedData.map((chunk, index) => (
          <div
            key={index}
            className={`p-10 lg:px-20 xl:px-40 mt-10 overflow-x-auto ${styles.scrollYOff}`}
          >
            <Swiper
              breakpoints={{
                340: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
                700: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
              }}
              freeMode={true}
              pagination={{ clickable: true }}
            >
              {chunk.map((data, dataIndex) => (
                <SwiperSlide key={dataIndex}>
                  <div className="bg-grayIcon border px-3 py-4 min-h-52 w-full h-full items-center rounded-2xl">
                    <div className="flex w-full items-center justify-center gap-2 lg:gap-3">
                      <div className="w-[48px] h-[40px] relative overflow-hidden">
                        <Image
                          src={data.profileImage}
                          fill
                          className="rounded-full object-cover"
                          alt="profileImg"
                        />
                      </div>
                      <div className="flex justify-between items-center w-full">
                        <div className="flex flex-col items-start justify-center">
                          <div className="font-lexend text-darkRed font-medium uppercase text-xs lg:text-sm w-max">
                            {data.name}
                          </div>
                          <div className="flex text-xs md:text-base lg:text-lg xl:text-xl text-starYellow">
                            {[...Array(Number(data.numberOfStars))].map(
                              (_, i) => (
                                <IoIosStar key={i} />
                              )
                            )}
                          </div>
                        </div>
                        <div className="text-commentTimeText text-[10px] lg:text-xs pl-1">
                          4 hour ago
                        </div>
                      </div>
                      <div className="rounded-full">
                        <Image
                          src="/assets/images/googleIcon.webp"
                          alt="google icon"
                          width={35}
                          height={35}
                        />
                      </div>
                    </div>
                    <div
                      className={`overflow-x-auto max-h-24 text-xs md:text-sm mt-4 text-commetTxt ${styles.scrollStyle}`}
                    >
                      <p>{data.comment}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <hr className="mt-10 w-[98%]" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
