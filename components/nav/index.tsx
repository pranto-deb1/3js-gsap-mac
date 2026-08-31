"use client";
import { Constants } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RiDropdownList } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

function Nav() {
  const [sideBar, setSideBar] = useState(false);
  const links = Constants.navLinks;

  return (
    <header className="">
      <nav className="flex bg-black/50 backdrop-blur-2xl justify-between px-5 md:px-0 md:justify-around w-full fixed pt-4 top-0">
        <div className="">
          <Image
            src={"/logo.svg"}
            width={500}
            height={500}
            alt="logo"
            className="w-8 h-8"
          />
        </div>

        <div className="md:flex gap-4 hidden ">
          {links.map((link, index) => (
            <Link key={index} href={link.label}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex justify-center gap-3">
          <button className="">
            <Image
              src={"/search.svg"}
              width={500}
              height={500}
              alt="search"
              className="w-8 h-8"
            />
          </button>
          <button className="">
            <Image
              src={"/cart.svg"}
              width={500}
              height={500}
              alt="cart"
              className="w-8 h-8"
            />
          </button>

          <div
            className={` md:hidden justify-center items-center ${sideBar ? "hidden" : "flex"}`}
          >
            <button onClick={() => setSideBar(true)} className="text-[20px]">
              <RiDropdownList />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`${sideBar ? "translate-x-0 " : "translate-x-[200%] pointer-events-none"} flex fixed w-full h-full bg-[#575353] flex-col transition-all duration-300`}
      >
        <div className="flex justify-end mt-4 mr-5">
          <button onClick={() => setSideBar(false)} className="text-2xl">
            <RxCross2 />
          </button>
        </div>
        <div className="flex flex-col ml-4">
          {links.map((link, index) => (
            <Link href={link.label} key={index} className="text-2xl">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Nav;
