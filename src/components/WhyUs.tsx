import {
  BookCheck,
  Brain,
  ChevronRight,
  Hourglass,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function WhyUs() {
  return (
    <div
      className="min-h-fit bg-white px-4 md:px-10 lg:px-20 py-8 md:py-10
    flex flex-col gap-10 items-center"
    >
      <div className="flex flex-col sm:flex-row justify-around items-start">
        <div className="max-w-[26rem] flex flex-col gap-12 pt-20">
          <h1 className="text-purple-900 text-3xl font-normal font-mono text-center md:text-start">
            WHY CHOOSE US
          </h1>
          <div
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-once="true"
            suppressHydrationWarning={true}
            className="flex flex-col gap-3 "
          >
            <h1 className="text-purple-900 text-2xl md:text-4xl lg:text-4xl  md:text-start text-center font-normal font-serif tracking-wide leading-snug">
              The leading mental health consultation center for you
            </h1>
            <p className="text-xs md:text-base text-indigo-900 font-medium text-center lg:text-left">
              No one should face epilepsy alone. Our epilepsy services are for
              everyone <br /> No financial barriers - just compassionate care.
            </p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-once="true"
            suppressHydrationWarning={true}
            className=" flex flex-col gap-4"
          >
            <div className="flex items-center gap-2">
              <BookCheck
                size={36}
                className="bg-base text-white p-2 font-bold rounded-full"
              />
              <p className="text-purple-950 text-base font-semibold">
                Certified and Experienced counselors.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck
                size={36}
                className="bg-base text-white p-2 font-bold rounded-full"
              />
              <p className="text-purple-950 text-base font-semibold">
                Secure and Private sessions.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Hourglass
                size={36}
                className="bg-base text-white p-2 font-bold rounded-full"
              />
              <p className="text-purple-950 text-base font-semibold">
                Flexible online scheduling.
              </p>
            </div>
          </div>
        </div>
        {/* right/image side  */}
        <div className="flex flex-col items-center gap-2">
          <div
            data-aos="fade-left"
            data-aos-delay="100"
            data-aos-once="true"
            suppressHydrationWarning={true}
            className=" overflow-hidden"
          >
            <Image
              className="rounded-xl"
              src="/images/counseling4.png"
              width={400}
              height={400}
              alt="counseling-img"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
            suppressHydrationWarning={true}
            className="flex gap-4 items-center bg-gradient-to-tr from-purple-800 to-black opacity-90 text-white px-10"
          >
            <div className="border-r-2 pr-4">
              <Brain
                size={60}
                className="text-white bg-base p-2 rounded-full font-bold border-2 "
              />
            </div>
            <div className="flex flex-col items-start justify-center gap-4 min-h-36">
              <h1 className="text-sm md:text-base md:font-semibold text-white">
                Break the silence! Epilepsy affects more than just the body.
              </h1>
              <Link href="https://forms.gle/bnpshu7fa6cTqa526" target="_blank">
                <button className="flex gap-1 text-sm md:text-lg text-white items-center group ">
                  Book Your Session Now
                  <span className="group-hover:translate-x-4 transition-all duration-100">
                    <ChevronRight />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
