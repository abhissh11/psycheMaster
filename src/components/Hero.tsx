"use client";

import GridPattern from "./ui/grid-pattern";
import { cn } from "@/lib/utils";
import ScrollProgress from "./ui/scroll-progress";
import { CircleArrowDown } from "lucide-react";
import { useState } from "react";
import Modal from "./BookingModal";

export default function Hero() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <div className="relative mt-20 py-6 flex justify-center items-center  sm:items-start h-screen sm:h-fit flex-wrap overflow-hidden w-full bg-base">
      <ScrollProgress className="top-[78px] md:top-[72px]" />

      <div className="px-4 pt-16 flex flex-col gap-16 justify-center items-center">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-4xl font-bold text-white text-center">
            PsycheMaster's Epilepsy Support Initiative
          </h1>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-center text-white">
              Empowering Epilepsy Warriors & <br />
              Their Loved Ones
            </h2>
            <p className="text-lg font-normal text-center text-white">
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
