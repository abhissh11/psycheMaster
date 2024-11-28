"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

export default function Hero() {
  return (
    <div className="relative flex lg:h-screen h-[80svh] flex-wrap overflow-hidden w-full bg-background ">
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
        {/* overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content */}
        <div className=" relative z-10 gap-10 flex flex-col m-5 items-center justify-center  h-full text-white">
          {/* <GradualSpacing
            className="md:text-2xl text-xl font-normal text-pink-100"
            duration={0.2}
            delayMultiple={0.05}
            text="welcome to PsycheMaster"
          /> */}
          <h1 className="text-4xl leading-relaxed md:text-6xl  font-serif font-bold text-center text-pink-50 ">
            Mindful Living
            <br />
            <span className="my-10 text-center ">
              Flourishing Together
            </span>{" "}
          </h1>
          <p className="max-w-[40rem] font-sans text-center">
            Personalized counseling to help you navigate life's challenges with
            clarity and confidence.
            <br />
            Start Your Healing Journey Today! Schedule Your{" "}
            <span className="font-serif tracking-wide font-semibold bg-yellow-950 px-2">
              Free Session
            </span>{" "}
            Now!
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 max-h-12 rounded">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
}
