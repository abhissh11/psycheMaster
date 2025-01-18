import { CheckCircle, LockIcon, TimerIcon } from "lucide-react";
import React from "react";

export default function ApproachToTherapy() {
  const cards = [
    {
      title: "Understanding and Support",
      description:
        "We understand that living with epilepsy can often bring emotional, social, and psychological hurdles, not just for the individual but also for their families and caregivers.",
    },
    {
      title: "Comprehensive Care",
      description:
        "From dealing with anxiety and stress to addressing feelings of isolation or stigma, our tailored counseling services are designed to provide compassionate support every step of the way.",
    },
    {
      title: "Our Core Belief",
      description:
        "At our core, we believe that no one should face these challenges alone. Let's work together to nurture mental and emotional strength, one step at a time.",
    },
  ];

  const highlights = [
    {
      icon: CheckCircle,
      title: "Certified Counselors",
      description:
        "Our team consists of certified and experienced counselors specialized in epilepsy care.",
    },
    {
      icon: LockIcon,
      title: "Secure & Private",
      description:
        "Your privacy is our priority. All sessions are completely confidential.",
    },
    {
      icon: TimerIcon,
      title: "Flexible Scheduling",
      description:
        "Book sessions at your convenience with our easy online scheduling system.",
    },
  ];

  return (
    <div className="min-h-fit flex flex-col gap-10 items-center justify-center bg-chase px-4 md:px-10 lg:px-20 py-10">
      <h1 className="text-white text-3xl font-bold font-mono text-center">
        OUR APPROACH TO THERAPY
      </h1>
      <div className="flex flex-col items-center justify-center gap-10 w-full">
        <h2 className="text-3xl md:text-3xl lg:text-4xl text-center font-normal font-serif text-white tracking-wide leading-snug">
          Know our process to therapy
        </h2>
        <div className="flex flex-col gap-20 md:flex-row justify-between w-full">
          <div className="flex flex-col gap-8 md:w-1/2 p-2">
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 p-6 bg-base rounded shadow-lg shadow-purple-700 hover:shadow-xl hover:shadow-purple-500"
              >
                <h3 className="text-2xl text-white font-semibold">
                  {card.title}
                </h3>
                <p className="text-gray-300 text-sm font-medium">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center w-full md:w-1/2">
            <div className="w-full flex flex-col gap-8 bg-base px-10 py-10 rounded-xl shadow-lg shadow-purple-700 hover:shadow-xl hover:shadow-purple-500">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex gap-4 items-center">
                  <span>
                    <highlight.icon
                      size={44}
                      className="bg-purple-950 text-white p-2 rounded"
                    />
                  </span>
                  <div className="flex flex-col gap-2">
                    <h5 className="text-xl font-semibold text-white">
                      {highlight.title}
                    </h5>
                    <p className="text-gray-300 text-sm font-medium">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
