import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="relative px-4 md:px-10 lg:px-20 py-10 md:py-20 bg-white opacity-90">
      <div className="flex flex-col md:flex-row items-center md:items-stretch justify-between h-auto">
        {/* Image Div */}
        <div className="flex justify-center items-center w-full md:w-1/3">
          <Image
            src="/images/master.png"
            height={220}
            width={220}
            alt="PsycheMaster's Logo"
            className="rounded-2xl"
          />
        </div>

        {/* Vertical Line */}
        <div className="hidden md:block border-l-2 border-purple-700 "></div>

        {/* Content Div */}
        <div className="flex flex-col gap-4 w-full md:w-1/2  items-center justify-center px-4 py-8">
          <h1 className="text-3xl font-bold text-purple-950 font-mono">
            WHO ARE WE
          </h1>
          <h2 className="text-xl font-bold text-purple-900 text-center">
            We are a Team of Certified Counselors Working around Epilepsy
          </h2>
          <p className="text-base font-medium text-indigo-950">
            We understand that living with epilepsy can often bring emotional,
            social, and psychological hurdles, not just for the individual but
            also for their families and caregivers. From dealing with anxiety
            and stress to addressing feelings of isolation or stigma, our
            tailored counseling services are designed to provide compassionate
            support every step of the way. At our core, we believe that no one
            should face these challenges alone. <br />
            <span className="py-2">
              {" "}
              <br />
            </span>{" "}
            Let's work together to nurture mental and emotional strength, one
            step at a time.
          </p>
        </div>
      </div>
    </div>
  );
}

// <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-10 lg:items-start">
//         {/* Image Section */}
//         <div className=" w-full lg:w-1/3 flex justify-center lg:justify-start mb-10 lg:mb-0">
//           <Image
//             data-aos="fade-up"
//             suppressHydrationWarning={true}
//             src="/images/about-psyche.jpg"
//             alt="about-us-img"
//             width={600}
//             height={600}
//             className="rounded-xl w-full max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
//           />
//         </div>

//         {/* Content Section */}
//         <div
//           data-aos="fade-left"
//           suppressHydrationWarning={true}
//           className="lg:w-1/2 lg:pl-10 flex flex-col gap-6"
//         >
//           <h1 className="text-3xl font-normal font-mono text-center lg:text-left">
//             About Us
//           </h1>
//           <h1 className="text-4xl md:text-5xl lg:text-5xl font-normal font-serif text-yellow-900 tracking-wide leading-snug text-center lg:text-left">
//             We are a Team of Certified Counselors Working around Epilepsy
//           </h1>
//           <p className="text-xs md:text-sm text-gray-900 font-normal text-center lg:text-left">
//             Our team consists of certified and experienced counselors who are
//             passionate about making a difference in the lives of those
//             navigating the unique challenges associated with this condition.
//           </p>
//           <p className="text-xs md:text-sm text-gray-900 font-normal text-center lg:text-left">
//             We understand that living with epilepsy can often bring emotional,
//             social, and psychological hurdles, not just for the individual but
//             also for their families and caregivers. From dealing with anxiety
//             and stress to addressing feelings of isolation or stigma, our
//             tailored counseling services are designed to provide compassionate
//             support every step of the way.
//           </p>
//           <p className="text-xs md:text-sm text-gray-900 font-normal text-center lg:text-left">
//             At our core, we believe that no one should face these challenges
//             alone. Let&apos;s work together to nurture mental and emotional
//             strength, one step at a time.
//           </p>
//         </div>
//       </div>
