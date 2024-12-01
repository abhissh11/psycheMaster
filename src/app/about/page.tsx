import About from "@/components/About";
import React from "react";

export default function page() {
  return (
    <div className="bg-indigo-200 min-h-screen py-32">
      <h3 className="text-center font-bold">PsycheMaster core Philosphy</h3>
      <div className="my-10">
        <About />
      </div>
    </div>
  );
}
