import {
  BrainCircuit,
  BrainCog,
  MessageCircleHeart,
  PersonStanding,
} from "lucide-react";
import React from "react";

export default function ServicesComponet() {
  const services = [
    {
      icon: <PersonStanding size={48} />,
      title: "Individual Counseling",
      description:
        "One to One session over your Personal challenges with Epilepsy condition",
    },

    {
      icon: <BrainCircuit size={48} />,
      title: "Epilepsy Warriors Training",
      description: "Personalized training for Epilepsy patient",
    },
    {
      icon: <BrainCog size={48} />,
      title: "Epilepsy Caregivers Training",
      description: "Personalized training for Epilepsy caregivers",
    },
    {
      icon: <MessageCircleHeart size={48} />,
      title: "Family Training",
      description:
        "Personalized family training program for Epilepsy warriors and their loved ones",
    },
  ];
  return (
    <div className="min-h-[50vh] max-w-[100vw] bg-base px-4 md:px-10 lg:px-10 py-20 overflow-hidden">
      <div className="flex flex-col gap-10 justify-center items-center">
        <h1 className="text-white text-3xl flex gap-4 items-center font-bold font-mono text-center">
          WHAT WE DO
        </h1>
        <h1 className="text-2xl md:text-2xl lg:text-4xl font-normal font-serif text-white tracking-wide leading-snug text-center">
          Our Psychological Support
        </h1>
      </div>
      <div className="sm:my-30 my-20 flex flex-wrap gap-10 justify-center">
        {services.map((sv) => (
          <div
            key={sv.title}
            data-aos="fade-in"
            data-aos-easing="ease-in-sine"
            suppressHydrationWarning={true}
            data-aos-delay="100"
            className="animated-image flex flex-col gap-3 text-center items-center justify-center bg-base w-full md:w-[45%] lg:w-[20%] h-64 rounded-xl cursor-pointer"
          >
            <h4 className="text-white bg-chase p-4 rounded-full">{sv.icon}</h4>
            <h1 className="text-xl text-white font-bold">{sv.title}</h1>
            <h1 className="text-sm font-normal text-gray-100 px-4">
              {sv.description}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
