import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div>
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
  );
}
