"use client";
import { AlignRight, X } from "lucide-react";
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
          ? "sticky bg-white shadow-md"
          : "absolute bg-transparent"
      } top-0 z-20 w-full transition-all`}
    >
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <div className="flex justify-between px-10 py-6 ">
          <h1
            className={`${
              isScrolled || showMenu
                ? " text-pink-600"
                : " text-pink-100 font-semibold"
            } font-lora text-2xl font-semibold tracking-wider`}
          >
            psycheMaster
          </h1>
          <nav>
            <ul className="flex gap-8 items-center">
              {navList.map((list) => (
                <Link key={list.name} href={list.href}>
                  <li
                    className={`${
                      isScrolled || showMenu
                        ? " text-pink-500"
                        : " text-pink-100 font-normal"
                    } text-xl cursor-pointer`}
                  >
                    {list.name}
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded">
            Book Appointment
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <div className="flex py-5 justify-between px-6 ">
          <h1
            className={`${
              isScrolled || showMenu
                ? " text-pink-600"
                : " text-pink-100 font-semibold"
            } "text-2xl"`}
          >
            psycheMaster
          </h1>
          <div className="bg-pink-500 rounded-xl p-2">
            {showMenu ? (
              <X onClick={menuhandler} />
            ) : (
              <AlignRight onClick={menuhandler} />
            )}
          </div>
        </div>
        {showMenu && (
          <nav className="flex items-center flex-col gap-10 pb-10 bg-pink-50">
            <ul className="flex flex-col mt-10 gap-8 items-center">
              {navList.map((list) => (
                <Link key={list.name} href={list.href}>
                  <li
                    className={`${
                      isScrolled || showMenu
                        ? " text-pink-600"
                        : " text-pink-100 font-semibold"
                    } text-xl cursor-pointer`}
                  >
                    {list.name}
                  </li>
                </Link>
              ))}
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
