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
      title: "Family counseling",
      description: "Scelerisque eleifend donec pretium vulputate sapien",
    },
    {
      icon: <BrainCircuit size={48} />,
      title: "Personal counseling",
      description: "Scelerisque eleifend donec pretium vulputate sapien",
    },
    {
      icon: <BrainCog size={48} />,
      title: "Anxiety disorder",
      description: "Scelerisque eleifend donec pretium vulputate sapien",
    },
    {
      icon: <MessageCircleHeart size={48} />,
      title: "Dating  & Relation",
      description: "Scelerisque eleifend donec pretium vulputate sapien",
    },
  ];
  return (
    <div className="min-h-[50vh] bg-indigo-100 px-4 md:px-10 lg:px-10 py-20">
      <div className="flex flex-col gap-10 justify-center items-center">
        <h3 className="text-xl text-center font-semibold text-gray-700">
          AFFORDABLE SERVICES
        </h3>
        <h1 className="text-3xl text-center font-bold font-serif tracking-normal leading-normal">
          Specialists psychology consultation service
        </h1>
      </div>
      <div className="sm:my-30 my-20 flex md:flex-row flex-col gap-10 flex-wrap items-center justify-center  ">
        {services.map((sv) => (
          <div
            key={sv.title}
            data-aos="fade-right"
            data-aos-delay="200"
            className="animated-image flex flex-col gap-3 text-center items-center justify-center bg-white lg:w-1/5 max-w-72 h-64 rounded-xl cursor-pointer"
          >
            <h4 className="text-white bg-indigo-600 p-4 rounded-full">
              {sv.icon}
            </h4>
            <h1 className="text-xl text-indigo-600 font-bold  text-center">
              {sv.title}
            </h1>
            <h1 className="text-center text-sm text-gray-700 px-4 font-normal">
              {sv.description}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
