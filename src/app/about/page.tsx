import About from "@/components/About";
import ApproachToTherapy from "@/components/ApproachToTherapy";
import WhyUs from "@/components/WhyUs";
import React from "react";

export default function page() {
  return (
    <div className="bg-base min-h-fit">
      <h3 className="text-center font-bold">PsycheMaster core Philosphy</h3>
      <div className="">
        <About />
        <ApproachToTherapy />
        <WhyUs />
      </div>
    </div>
  );
}
