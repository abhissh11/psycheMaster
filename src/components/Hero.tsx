"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

export default function Hero() {
  return (
    <div className="relative flex  md:h-screen h-[70svh]  overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 12000, disableOnInteraction: false }}
        loop
      >
        <SwiperSlide>
          <div
            className="w-full h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('/images/hero-bg1.jpg')" }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('/images/hero-bg2.jpg')" }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('/images/hero-bg3.jpg')" }}
          ></div>
        </SwiperSlide>
      </Swiper>
      <div className="relative w-full h-full overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0 bg-cover bg-center animate-slide1"></div>
        <div className="absolute inset-0 bg-cover bg-center animate-slide2"></div>
        <div className="absolute inset-0 bg-cover bg-center animate-slide3"></div>

        <div className="absolute inset-0 bg-black opacity-70"></div>

        {/* Content */}
        <div className="relative z-10 gap-6 flex flex-col items-center justify-center h-full text-white">
          <h3 className="text-2xl font-sans text-pink-50  font-semibold">
            --- welcome to psycheMaster
          </h3>
          <h1 className="text-4xl leading-relaxed md:text-7xl  font-lora text-pink-50 ">
            Healthy Mind
            <br />
            <span className="my-10 md:pl-40">Healthy Living</span>{" "}
          </h1>
          <p className="max-w-[40rem] font-sans text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quam
            iure, voluptates asperiores quisquam provident hic recusandae natus,
            atque eaque sunt minima?
          </p>
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
}
