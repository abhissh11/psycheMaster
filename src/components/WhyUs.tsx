import {
  BookCheck,
  Brain,
  ChevronRight,
  Hourglass,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import React from "react";

export default function WhyUs() {
  return (
    <div
      className="min-h-screen bg-white px-4 md:px-10 lg:px-20 py-10 md:py-20 
    flex flex-col gap-10 items-center"
    >
      <div className="flex flex-col-reverse sm:flex-row justify-around items-center">
        <div className="max-w-[36rem] flex flex-col gap-12">
          <h1 className="text-3xl font-normal font-mono text-center md:text-start">
            Why Choose us
          </h1>
          <div className="flex flex-col gap-2 ">
            <h1 className="text-4xl md:text-5xl lg:text-5xl  md:text-start text-center font-normal font-serif text-yellow-900 tracking-wide leading-snug">
              The leading mental health consultation center for you
            </h1>
            <p className="text-xs md:text-sm text-gray-700 font-normal text-center lg:text-left">
              No one should face epilepsy alone. Our epilepsy services are for
              everyone, with no financial barriers - just compassionate care.
            </p>
          </div>
        </div>
        <div className=" ">
          <Image
            className="rounded-xl"
            src="/images/counseling4.png"
            width={500}
            height={500}
            alt="counseling-img"
          />
        </div>
      </div>
      <div className="flex flex-col gap-10 sm:flex-row justify-around items-center">
        <div className=" flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <BookCheck
              size={36}
              className="bg-indigo-600 text-white p-2 font-bold rounded-full"
            />
            <p className="text-base font-semibold">
              Certified and experienced counselors.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck
              size={36}
              className="bg-indigo-600 text-white p-2 font-bold rounded-full"
            />
            <p className="text-base font-semibold">
              Secure and private sessions.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Hourglass
              size={36}
              className="bg-indigo-600 text-white p-2 font-bold rounded-full"
            />
            <p className="text-base font-semibold">
              Flexible online scheduling.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center bg-gradient-to-tr from-orange-700 to-black opacity-70 text-white px-10">
          <div className="border-r-2 pr-4">
            <Brain
              size={60}
              className="text-white bg-teal-700 p-2 rounded-full font-bold border-2 "
            />
          </div>
          <div className="flex flex-col items-start justify-center gap-4 min-h-36">
            <h1 className="text-sm md:text-base md:font-semibold text-white">
              Break the silence! Epilepsy affects more than just the body.
            </h1>
            <button className="flex gap-1 text-sm md:text-lg items-center group ">
              Book Your Session Now
              <span className="group-hover:translate-x-4 transition-all duration-100">
                <ChevronRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
