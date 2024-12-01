import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <div className="px-4 md:px-10 lg:px-10 py-10 gray-bg ">
      <div className="flex flex-col md:flex-row gap-10 justify-between items-end md:items-center px-10 pb-10 border-b border-orange-900">
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
            <p className="text-white text-xs font-serif font-extralight tracking-wide">
              Mindul Living <br /> Flourishing Together
            </p>
          </div>
        </Link>
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
      </div>

      <div className="my-4 flex items-center justify-center">
        <p className="text-xs text-center text-wrap text-gray-200">{`© ${new Date().getFullYear()} PsycheMaster | All Rights Reserverd`}</p>
      </div>
    </div>
  );
}
