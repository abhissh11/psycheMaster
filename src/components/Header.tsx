"use client";
import { AlignRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathName = usePathname();
  const isHomePage = pathName === "/";

  // Navigation List
  const navList = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "FAQ", href: "/faqs" },
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
    <div className="fixed  bg-white shadow-sm top-0 z-20 w-full transition-all">
      {/* Desktop Navigation */}
      <div className="hidden lg:block">
        <div className="flex gap-2 justify-between items-center px-8 py-2 ">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/master.png"
              width={60}
              height={60}
              alt="logo"
              className="rounded-full"
            />
            <div className="flex flex-col gap-1 items-center">
              <h1 className="text-purple-950 font-serif text-lg font-semibold tracking-wider flex items-center gap-3">
                PsycheMaster
              </h1>
              <h3 className="text-purple-950 font-serif text-sm text-center font-light tracking-wider flex items-center gap-3">
                Mindful Living | Flourishing Together
              </h3>
            </div>
          </Link>

          <nav>
            <ul className="flex gap-4 items-center">
              {navList.map((list) => (
                <Link key={list.name} href={list.href}>
                  <li className="text-purple-900 text-lg cursor-pointer py-1 relative group hover:bg-purple-100 px-1 rounded">
                    {list.name}
                    <span className="absolute left-0 bottom-0 h-[2px] w-full bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="https://chat.whatsapp.com/KP90vTFesp7J2wjvIDMzpX"
              target="_blank"
            >
              <button className="text-purple-950 hover:text-white px-3 py-2 max-h-13 text-center font-semibold rounded  border-2 border-purple-950 hover:bg-purple-950 opacity-95">
                Join Community
              </button>
            </Link>
            <Link href="https://forms.gle/bnpshu7fa6cTqa526" target="_blank">
              <button className="border-2 border-purple-950 bg-purple-950 hover:bg-purple-900 text-white px-2 py-2 max-h-13 rounded">
                Book Appointment
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <div className="flex py-2 items-center justify-between px-4 ">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/master.png"
              width={60}
              height={60}
              alt="logo"
              className="rounded-full"
            />
            <div className="flex flex-col gap-1 items-center">
              <h1 className="text-purple-950 font-serif text-base font-semibold tracking-wider flex items-center gap-3">
                PsycheMaster
              </h1>
              <h3 className="text-purple-950 font-serif text-sm text-center font-light tracking-wider flex items-center gap-3">
                Mindful Living | Flourishing Together
              </h3>
            </div>
          </Link>
          <div className="bg-purple-950 text-white rounded p-2 max-h-12 cursor-pointer">
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
            className="flex items-center flex-col gap-10 pb-10 bg-purple-100 overflow-x-hidden"
          >
            <ul className="flex flex-col mt-8 gap-4 items-center">
              {navList.map((list) => (
                <Link key={list.name} href={list.href}>
                  <li
                    onClick={menuhandler}
                    className="text-purple-950 text-base font-semibold cursor-pointer relative group"
                  >
                    {list.name}
                    <span className="absolute left-0 bottom-0 h-[3px] w-full bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </li>
                </Link>
              ))}
            </ul>
            <div className="flex flex-col items-center gap-5">
              <Link
                href="https://chat.whatsapp.com/KP90vTFesp7J2wjvIDMzpX"
                target="_blank"
              >
                <button className="text-purple-950 hover:text-white px-3 py-2 max-h-13 text-center font-semibold rounded  border-2 border-purple-950 hover:bg-purple-950 opacity-95">
                  Join Community
                </button>
              </Link>
              <Link href="https://forms.gle/bnpshu7fa6cTqa526" target="_blank">
                <button className="border-2 border-purple-950 bg-purple-950 hover:bg-purple-900 text-white px-2 py-2 max-h-13 rounded">
                  Book Appointment
                </button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </div>
  );
}
