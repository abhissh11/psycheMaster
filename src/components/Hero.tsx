"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
import GridPattern from "./ui/grid-pattern";
import { cn } from "@/lib/utils";
import ScrollProgress from "./ui/scroll-progress";
import { ArrowBigDownDash, CircleArrowDown } from "lucide-react";
import { useState } from "react";
import Modal from "./BookingModal";

export default function Hero() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <div className="relative mt-20 flex justify-center items-start h-screen flex-wrap overflow-hidden w-full bg-base">
      <ScrollProgress className="top-[80px] md:top-[72px]" />

      <div className="px-4 pt-16 flex flex-col gap-16 justify-center items-center">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-4xl font-bold text-white text-center">
            PsycheMaster's Epilepsy Support Initiative
          </h1>
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold text-center text-white">
              Empowering Epilepsy Warriors & <br />
              Their Loved Ones
            </h2>
            <p className="text-lg font-normal text-white">
              Reach out today and take the first step towards a stronger, more
              resilient you!
            </p>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <button
            onClick={openModal}
            className="text-base font-normal hover:scale-105 transition-all duration-110 text-purple-900 bg-slate-100 border border-purple-950 px-7 py-5 rounded-full
                    hover:bg-purple-200 hover:opacity-80"
          >
            Book a Session
          </button>
          <Modal isOpen={isModalOpen} onClose={closeModal} />
        </div>
        <div className="">
          <svg className="animate-bounce w-10 h-10  text-white">
            <CircleArrowDown size={32} className="text-sm font-thin" />
          </svg>
        </div>
      </div>

      <GridPattern
        width={36}
        height={34}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
        )}
      />
    </div>
  );
}

// <div className="relative flex h-screen flex-wrap overflow-hidden w-full bg-background ">
// <Swiper
//   modules={[Autoplay]}
//   spaceBetween={0}
//   slidesPerView={1}
//   autoplay={{ delay: 12000, disableOnInteraction: false }}
//   loop
// >
//   <SwiperSlide>
//     <div
//       className="w-full h-screen bg-cover bg-center"
//       style={{ backgroundImage: "url('/images/hero-bg1.jpg')" }}
//     ></div>
//   </SwiperSlide>
//   <SwiperSlide>
//     <div
//       className="w-full h-screen bg-cover bg-center"
//       style={{ backgroundImage: "url('/images/hero-bg2.jpg')" }}
//     ></div>
//   </SwiperSlide>
//   <SwiperSlide>
//     <div
//       className="w-full h-screen bg-cover bg-center"
//       style={{ backgroundImage: "url('/images/hero-bg3.jpg')" }}
//     ></div>
//   </SwiperSlide>
// </Swiper>
// <div className="relative w-full h-full overflow-hidden">
//   {/* Background Images */}
//   <div className="absolute inset-0 bg-cover bg-center animate-slide1"></div>
//   <div className="absolute inset-0 bg-cover bg-center animate-slide2"></div>
//   <div className="absolute inset-0 bg-cover bg-center animate-slide3"></div>
//   {/* overlay */}
//   <div className="absolute inset-0 bg-black opacity-60"></div>

//   {/* Content */}
//   <div className="pt-5 relative z-10 gap-10 flex flex-col m-5 items-center justify-center  h-full text-white">
//     <h1 className="text-3xl md:leading-loose md:text-4xl  font-serif font-bold text-center text-pink-50 ">
//       PsycheMaster&apos;s Epilepsy <br />
//       Support Initiative
//     </h1>

//     <h4 className="md:text-xl font-normal text-white text-wrap text-center">
//       Empowering Epilepsy Warriors &amp; <br /> Their Loved Ones
//     </h4>
//     <div className="flex flex-col gap-4 items-center">
//       <p className="max-w-[40rem] font-sans text-center">
//         Break the silence! <br /> Epilepsy affects more than just the
//         body. Our expert team at PsycheMaster offer confidential,
//         compassionate support.
//         <br />
//         Reach out today and take the first step towards a stronger,
//         more resilient you!
//       </p>
//       <div className="pt-5 flex flex-col-reverse md:flex-row items-center gap-3">
//         <Link href="https://forms.gle/bnpshu7fa6cTqa526" target="_blank">
//           <button className="border-2 border-indigo-600 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 max-h-13 rounded">
//             Book Appointment
//           </button>
//         </Link>
//         <Link
//           href="https://chat.whatsapp.com/KP90vTFesp7J2wjvIDMzpX"
//           target="_blank"
//         >
//           <button
//             className=" text-white px-4 py-3 max-h-13 text-center font-semibold rounded  border-2
//              border-indigo-600 hover:bg-indigo-600"
//           >
//             Join WhatsApp Community
//           </button>
//         </Link>
//       </div>
//     </div>
//   </div>
// </div>
// </div>
