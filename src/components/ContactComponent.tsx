import { Instagram, Mail } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import ContactForm from "./ContactForm";

export default function ContactComponent() {
  return (
    <div className="px-4 md:px-10 lg:px-20 py-10 md:py-20 bg-base">
      <div className="flex md:flex-row flex-col gap-10 w-full justify-between border bg-chase rounded-3xl border-purple-900">
        <div className="flex flex-col gap-10 justify-start items-center w-full md:w-1/2 py-6">
          <h1 className="text-3xl font-bold font-mono text-white mt-6 md:mt-2">
            GET IN TOUCH WITH US
          </h1>
          <div className="flex flex-col">
            <div className="flex gap-2 items-center mb-6">
              <Mail
                size={44}
                className="text-2xl text-white bg-blue-600 p-2 rounded"
              />
              <div className="">
                <p className="text-xl font-semibold text-gray-200">
                  Email us at
                </p>
                <Link
                  href="#"
                  target="_blank"
                  className="text-sm font-medium text-white"
                >
                  psychemastersindia@gmail.com
                </Link>
              </div>
            </div>
            <div className="flex gap-2 items-center mb-6">
              <span>
                {" "}
                <Icon
                  icon="uim:whatsapp"
                  className="w-12 h-12 rounded text-white bg-blue-600 p-2"
                />
              </span>{" "}
              <div className="">
                <p className="text-xl font-semibold text-gray-200">
                  Join our WhatsApp community
                </p>
                <Link
                  href="#"
                  target="_blank"
                  className="text-sm font-medium text-white"
                >
                  WhatsApp
                </Link>
              </div>
            </div>
            <div className="flex gap-2 items-center mb-6">
              <span>
                <Instagram
                  size={46}
                  className="text-white p-2 bg-blue-600 text-2xl rounded"
                />
              </span>{" "}
              <div className="">
                <p className="text-xl font-semibold text-gray-200">
                  Follow us on Instagram
                </p>
                <Link
                  href="#"
                  target="_blank"
                  className="text-sm font-medium text-white"
                >
                  Instagram
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 p-2 rounded-full">
            <Image
              src="/images/master.png"
              height={120}
              width={120}
              alt="PsycheMaster's Logo"
              className="rounded-full shadow-md shadow-purple-800 hover:shadow-xl hover:shadow-purple-800 transition-all"
            />
          </div>
        </div>

        {/* form section  */}

        <div className=" md:w-1/2 w-full px-10 py-20 bg-white flex items-center justify-center rounded-3xl md:rounded-r-3xl ">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

{
  /* <Image
src="/images/psychemasters-card.jpg"
height={200}
width={200}
alt="PsycheMaster's Logo"
className="rounded-2xl shadow-md shadow-gray-900 hover:shadow-xl transition-all hover:shadow-black"
/>
<div className="flex gap-4 items-center py-4">
<Link
  href="https://www.instagram.com/psychemasters/"
  target="_blank"
> */
}
