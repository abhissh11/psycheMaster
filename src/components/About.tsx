import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="relative px-4 md:px-10 lg:px-20 py-10 md:py-20">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-10 lg:items-start">
        {/* Image Section */}
        <div className=" w-full lg:w-1/3 flex justify-center lg:justify-start mb-10 lg:mb-0">
          <Image
            data-aos="fade-up"
            src="/images/about-psyche.jpg"
            alt="about-us-img"
            width={600}
            height={600}
            className="rounded-xl w-full max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
          />
        </div>

        {/* Content Section */}
        <div
          data-aos="fade-left"
          className="lg:w-1/2 lg:pl-10 flex flex-col gap-6"
        >
          <h1 className="text-3xl font-normal font-mono text-center lg:text-left">
            About Us
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal font-serif text-yellow-900 tracking-wide leading-snug text-center lg:text-left">
            We are the leading advisory center for you
          </h1>
          <p className="md:text-lg text-sm text-gray-700 font-normal text-center lg:text-left">
            Our clinic is the largest private mental health partnership, with a
            carefully selected nationwide team of Psychiatrists, Psychologists,
            and Psychotherapists. We only work with highly experienced and
            capable partners who share our values.
          </p>
          <p className="text-sm md:text-lg text-gray-700 font-normal text-center lg:text-left">
            Vitae suscipit tellus mauris a diam maecenas sed. Volutpat consequat
            mauris nunc congue nisi vitae suscipit tellus.
          </p>
        </div>
      </div>

      {/* Secondary Image
      <div className="hidden lg:flex absolute bottom-10 right-20 justify-center items-center">
        <Image
          src="/images/about-2.png"
          alt="about-counsellor"
          width={200}
          height={200}
          className="rounded-full"
        />
      </div> */}
    </div>
  );
}
