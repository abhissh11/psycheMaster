"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BASE_URL } from "./../constants/config";

// Define the type for a testimonial
interface Testimonial {
  _id: string;
  name: string;
  testimonial: string;
  createdAt: string;
}

export default function Testimonial() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(`${BASE_URL}/psyche/testimonials`);
        if (!response.ok) {
          throw new Error("Failed to fetch testimonials");
        }
        const data = await response.json();
        setTestimonials(data.testimonials);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-[50vh] max-w-[100vw] bg-base px-4 lg:px-10 py-20 overflow-hidden">
      <div className="flex flex-col gap-10 justify-center items-center">
        <h1 className="text-3xl text-white flex gap-4 items-center font-bold font-mono text-center">
          TESTIMONIALS
        </h1>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-normal font-serif text-white tracking-wide leading-snug text-center">
          What people say about us!
        </h1>
      </div>
      <div
        data-aos="fade-in"
        data-aos-easing="ease-in-sine"
        data-aos-delay="100"
        suppressHydrationWarning={true}
        className="w-full flex items-center justify-center my-20 p-2"
      >
        <div className="relative flex w-full sm:w-3/4 h-[16rem] justify-center items-center shadow-md rounded-xl bg-gradient-to-tr bg-chase p-10">
          {/* Check if testimonials are loaded */}
          {testimonials.length > 0 ? (
            <div className="absolute md:px-10 md:w-3/4 inset-0 flex flex-col justify-center items-center gap-4 transition-all duration-500 ease-in-out">
              <p className="text-slate-100 text-start text-sm sm:text-base md:text-lg px-4">
                {testimonials[currentIndex].testimonial}
              </p>
              <h1 className="text-white text-lg font-bold text-end">
                {` ~ ${testimonials[currentIndex].name}`}
              </h1>
            </div>
          ) : (
            <p className="text-slate-100 text-center">
              Loading testimonials...
            </p>
          )}

          {/* Navigation Controls */}
          {testimonials.length > 0 && (
            <div className="absolute bottom-4 md:bottom-10 md:right-20 flex gap-2">
              <ChevronLeft
                onClick={handlePrev}
                size={32}
                className="text-white p-2 border border-white rounded-full cursor-pointer hover:bg-white hover:text-purple-900 transition"
              />
              <ChevronRight
                onClick={handleNext}
                size={32}
                className="text-white p-2 border border-white rounded-full cursor-pointer hover:bg-white hover:text-purple-900 transition"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
