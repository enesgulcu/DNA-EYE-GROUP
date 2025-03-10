"use client";
import React, { useRef, useEffect } from "react";
import { IoIosStar } from "react-icons/io";
import styles from "./styles.module.css";
import datas from "@/public/assets/data/section7.json";
import "./bullet.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import Aos from "aos";
import "aos/dist/aos.css";
import Container from "@/components/Container";
import Image from "next/image";

function Section7() {
  const scrollRef = useRef(null);

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Container>
      <div className="overflow-hidden">
        <div className="flex justify-center text-[30px] md:text-[60px] font-[500] mt-20">
          <h1 className="flex flex-col font-libre-bodoni">
            <span data-aos="fade-right">Patient</span>{" "}
            <span
              data-aos="fade-left"
              className="text-redTitle ml-10 mt-[-20px]"
            >
              Reviews
            </span>
          </h1>
        </div>

        <div
          ref={scrollRef}
          className={`md:px-8 lg:px-20 xl:px-40 mt-10 overflow-x-auto ${styles.scrollYOff} `}
        >
          <Swiper
            style={{
              "--swiper--bullet-active": "#fff",
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            freeMode={true}
            pagination={{
              clickable: true,
              el: ".pagination",
              type: "bullets",
            }}
            modules={[FreeMode, Pagination]}
          >
            {datas.map((data, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col p-5 h-full w-full items-center rounded-2xl">
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
                        <div className="flex lg:hidden text-commentTimeText text-[10px] lg:text-xs">
                          4 hour ago
                        </div>
                      </div>
                      <div className="lg:flex hidden text-commentTimeText text-[10px] lg:text-xs pl-1">
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
                    className={`overflow-x-auto max-h-24 text-sm mt-8 text-commetTxt ${styles.scrollStyle}`}
                  >
                    <p>{data.comment}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div
          className={`${styles.paginationButton} pagination mt-5 space-x-[1.5px] md:space-x-1 lg:space-x-2 px-5 sm:px-8 md:px-12 lg:px-24 xl:px-52`}
        />
      </div>
    </Container>
  );
}

export default Section7;
