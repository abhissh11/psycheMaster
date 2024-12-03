import Image from "next/image";
import React from "react";

export default function Counselors() {
  const counsels = [
    {
      id: 1,
      img: "/images/couns1.jpg",
      name: "John Doe",
      designation: "Physiotherapist",
    },
    {
      id: 2,
      img: "/images/couns3.jpg",
      name: "Jane Smith",
      designation: "Counselor",
    },
    {
      id: 3,
      img: "/images/couns2.jpg",
      name: "Michael Brown",
      designation: "Physiotherapist",
    },
  ];
  return (
    <div className="min-h-fit flex flex-col gap-10 justify-center bg-indigo-50 px-4 md:px-10 lg:px-20 py-10 md:py-20 ">
      <h1 className="text-3xl font-normal font-mono text-center">
        Our Counselors
      </h1>
      <div className="flex flex-col justify-center gap-6 ">
        <h1 className="text-4xl md:text-5xl lg:text-5xl text-center font-normal font-serif text-yellow-900 tracking-wide leading-snug">
          Meet our specialists counselors
        </h1>
        <div className="my-20 flex gap-10 flex-col md:flex-row flex-wrap justify-center items-center">
          {counsels.map((counsel) => (
            <div
              key={counsel.id}
              data-aos="fade-right"
              suppressHydrationWarning={true}
              data-aos-delay="200"
              className="group overflow-hidden cursor-pointer flex flex-col gap-1 pb-2 bg-indigo-50 shadow-sm shadow-indigo-200 rounded-xl"
            >
              <div className="overflow-hidden">
                <Image
                  src={counsel.img}
                  width={300}
                  height={300}
                  alt={counsel.name}
                  className="rounded-t-xl transform transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <p className="text-sm text-start font-normal text-gray-900 px-4">
                {counsel.designation}
              </p>
              <h1 className="text-xl text-indigo-700 font-bold pl-3">
                {counsel.name}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}