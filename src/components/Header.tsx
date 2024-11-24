"use client";
import { AlignRight, X } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useState } from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const menuhandler = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="sticky top-0 bg-pink-50 z-20">
      <div className="hidden md:block">
        <div className="flex justify-between px-10 py-6 border-b">
          <h1 className="text-2xl font-semibold">psycheMaster</h1>
          <nav>
            <ul className="flex gap-8 items-center">
              <Link href="/">
                <li className="cursor-pointer text-xl font-normal">Home</li>
              </Link>
              <Link href="/about">
                <li className="cursor-pointer text-xl font-normal">About</li>
              </Link>
              <Link href="/services">
                <li className="cursor-pointer text-xl font-normal">Services</li>
              </Link>
              <Link href="/contact">
                <li className="cursor-pointer text-xl font-normal">Contact</li>
              </Link>
            </ul>
          </nav>
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded">
            Book Appointment
          </button>
        </div>
      </div>

      <div className="md:hidden">
        <div className="flex py-5 justify-between px-6 border-b">
          <h1 className="text-2xl font-semibold">psycheMaster</h1>
          <div className="bg-pink-500 rounded-xl p-2">
            {showMenu ? (
              <X onClick={menuhandler} />
            ) : (
              <AlignRight onClick={menuhandler} />
            )}
          </div>
        </div>
        {showMenu && (
          <nav className="flex items-center flex-col gap-10 mb-10">
            <ul className="flex flex-col mt-10 gap-8 items-center">
              <Link href="/">
                <li className="cursor-pointer text-xl font-normal">Home</li>
              </Link>
              <Link href="/about">
                <li className="cursor-pointer text-xl font-normal">About</li>
              </Link>
              <Link href="/services">
                <li className="cursor-pointer text-xl font-normal">Services</li>
              </Link>
              <Link href="/contact">
                <li className="cursor-pointer text-xl font-normal">Contact</li>
              </Link>
            </ul>
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded">
              Book Appointment
            </button>
          </nav>
        )}
      </div>
    </div>
  );
}
