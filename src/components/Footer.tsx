import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <div className="px-4 md:px-10 lg:px-10 py-10 bg-chase ">
      <div className="flex flex-col md:flex-row gap-10 justify-between items-end md:items-center px-10 pb-10 ">
        <div className=" ">
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/images/master.png"
              width={80}
              height={80}
              alt="logo"
              className="rounded-full"
            />
            <div className="flex flex-col gap-1 items-start">
              <h1 className=" text-white font-serif text-xl font-semibold tracking-wider flex items-center gap-3">
                PsycheMaster
              </h1>
              <p className="text-white text-xs font-serif font-extralight tracking-wider">
                Mindful Living <br /> Flourishing Together
              </p>
            </div>
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4 ">
            <Link href="" className="text-white" target="_blank">
              <Icon icon="uil:linkedin" className="w-8 h-8" />
            </Link>
            <Link href="" className="text-white" target="_blank">
              <Icon icon="uil:instagram" className="w-8 h-8" />
            </Link>
            <Link href="" className="text-white" target="_blank">
              <Icon icon="ri:twitter-x-line" className="w-8 h-8" />
            </Link>
            <Link href="" className="text-white" target="_blank">
              <Icon icon="uim:whatsapp" className="w-8 h-8" />
            </Link>
          </div>
          <div className="text-center"></div>
        </div>
      </div>
      <div className="md:text-left text-right py-5 px-10 border-b border-indigo-950">
        <Link href="/auth/signin">
          <button className="px-4 py-1 text-white bg-base border border-purple-950 hover:bg-purple-950 rounded">
            Signin
          </button>
        </Link>
      </div>

      <div className="my-4 flex items-center justify-center">
        <p className="text-xs text-center text-wrap text-gray-200">{`© ${new Date().getFullYear()} PsycheMaster | All Rights Reserverd`}</p>
      </div>
    </div>
  );
}
