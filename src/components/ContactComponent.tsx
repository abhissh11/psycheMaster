import { Instagram } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import ContactForm from "./ContactForm";

export default function ContactComponent() {
  return (
    <div className="px-4 md:px-10 lg:px-20 py-10 md:py-20 bg-base">
      <div className="flex md:flex-row flex-col gap-10 w-full justify-between border bg-chase rounded-3xl border-purple-900">
        <div className="flex flex-col gap-10 justify-center items-center w-full md:w-1/2 py-6">
          <h1 className="text-3xl font-bold font-mono text-white mt-6 md:mt-2">
            GET IN TOUCH WITH US
          </h1>
          <Image
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
            >
              <button className="animate-pulse flex items-center gap-2 text-base font-medium font-sans bg-gradient-to-tr from-purple-700 to-pink-600 px-4 py-2 rounded  text-white ">
                <span>
                  <Instagram size={28} />
                </span>{" "}
                Instagram
              </button>
            </Link>
            <p className="text-lg font-medium text-white font-sans">or</p>
            <Link
              href="https://chat.whatsapp.com/KP90vTFesp7J2wjvIDMzpX"
              target="_blank"
            >
              <button className="animate-pulse flex items-center gap-2 text-base font-medium px-4 py-2 rounded bg-green-500 font-sans text-white">
                <span>
                  {" "}
                  <Icon icon="uim:whatsapp" className="w-7 h-7" />
                </span>{" "}
                WhatsApp
              </button>
            </Link>
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
