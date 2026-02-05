"use client";

import { HiOutlineMenu } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
import { useState } from "react";
import Link from "next/link";
import { HiHome } from "react-icons/hi";


const ToggleMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative md:hidden w-fit">
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 p-2 bg-white border rounded shadow-xl"
      >
        <span className="w-6 h-6 flex items-center justify-center">
          {open ? (
            <HiXMark className="" />
          ) : (
            <HiOutlineMenu className="" />
          )}
        </span>
        <span className="">Menu</span>

      </button>

      {/* Toggle Content */}
      <div
        className={`absolute right-0 mt-1 bg-white/80 shadow-gray-300 shadow-xl border rounded shadow overflow-hidden backdrop-blur-md  transition-all duration-500 ease-in-out
        ${open ? "max-h-96 opacity-100 p-3" : "max-h-0 opacity-0 p-0"}`}
      >
        <ul className="flex flex-col gap-2">
          <li>
            <Link href='/trending' className="block px-2 py-1 rounded">
            Trending
            </Link>
          </li>
          <li>
            <Link href="/categories/fashion" className="block px-2 py-1  rounded">
              Fashion
            </Link>
          </li>
          
          <li>
            <Link href="/categories/beauty" className="block px-2 py-1 hover:bg-gray-200 rounded">
              Beauty
            </Link>
          </li>
          <li>
            <Link href="/categories/tech" className="block px-2 py-1 hover:bg-gray-200 rounded">
              Tech
            </Link>
          </li>
          <li>
            <Link href="/" className="block px-2 py-1 hover:bg-gray-200 rounded flex gap-1">
            <HiHome className=""/> Home
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ToggleMenu;
