"use client";
import { AlignRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Navigation List
  const navList = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  // Function to toggle the menu
  const menuhandler = () => {
    setShowMenu(!showMenu);
  };

  // Function to handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        isScrolled || showMenu
          ? "fixed bg-white shadow-md"
          : "absolute bg-transparent"
      } top-0 z-20 w-full transition-all`}
    >
      {/* Desktop Navigation */}
      <div className="hidden lg:block">
        <div className="flex  justify-between px-10 py-6 ">
          <Link href="/">
            <h1
              className={`${
                isScrolled || showMenu
                  ? " text-indigo-700"
                  : " text-white font-semibold"
              } font-serif text-xl font-semibold tracking-wider flex items-center gap-3`}
            >
              <Image
                src="/images/logo-PsycheMaster.png"
                width={50}
                height={50}
                alt="Picture of the author"
                className="rounded-full"
              />
              <span>PsycheMaster</span>
            </h1>
          </Link>

          <nav>
            <ul className="flex gap-8 items-center">
              {navList.map((list) => (
                <Link key={list.name} href={list.href}>
                  <li
                    className={`${
                      isScrolled || showMenu
                        ? " text-indigo-600"
                        : " text-white font-normal"
                    } text-xl cursor-pointer py-1 relative group`}
                  >
                    {list.name}
                    <span className="absolute left-0 bottom-0 h-[2px] w-full bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 max-h-12 rounded">
            Book Appointment
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <div className="flex py-5 justify-between px-6 ">
          <h1
            className={`${
              isScrolled || showMenu
                ? " text-indigo-600"
                : " text-white font-semibold"
            } font-serif text-xl font-semibold tracking-wider flex items-center gap-3`}
          >
            <Image
              src="/images/logo-Psychemaster.png"
              width={50}
              height={50}
              alt="Picture of the author"
              className="rounded-full"
            />
            <span>PsycheMaster</span>
          </h1>
          <div className="bg-indigo-600  text-white rounded-xl p-3 cursor-pointer">
            {showMenu ? (
              <X onClick={menuhandler} />
            ) : (
              <AlignRight onClick={menuhandler} />
            )}
          </div>
        </div>
        {showMenu && (
          <nav
            data-aos="zoom-in-down"
            className="flex items-center flex-col gap-10 pb-10 bg-indigo-100 overflow-x-hidden"
          >
            <ul className="flex flex-col mt-10 gap-8 items-center">
              {navList.map((list) => (
                <Link key={list.name} href={list.href}>
                  <li
                    className={`${
                      isScrolled || showMenu
                        ? " text-indigo-600"
                        : " text-white font-semibold"
                    } text-xl cursor-pointer relative group`}
                  >
                    {list.name}
                    <span className="absolute left-0 bottom-0 h-[3px] w-full bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </li>
                </Link>
              ))}
            </ul>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded">
              Book Appointment
            </button>
          </nav>
        )}
      </div>
    </div>
  );
}
