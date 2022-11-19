"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import useAuth from "../hooks/useAuth";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { logout } = useAuth()

  useEffect(() => {
    const handleScrool = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScrool);

    return () => {
      window.removeEventListener("scroll", handleScrool);
    };
  }, []);

  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          alt="logo"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        <ul className="hidden space-x-4 md:flex">
          {links.map((link, i) => (
            <li
              key={i}
              className="cursor-pointer text-sm font-light text-[#e5e5e5] transition duration-[0.4s] hover:text-[#b3b3b3]"
            >
              <Link href={link.href}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <BiSearch className="hidden w-6 h-6 cursor-pointer sm:inline" />
        <IoIosNotifications className="w-6 h-6 cursor-pointer" />
        {/* <Link href="/account"> */}
          <img
            onClick={() => logout()}
            src="https://th.bing.com/th/id/OIP.FuE0oCG2DGHMnoeb5RSajgHaGt?pid=ImgDet&rs=1"
            alt="account"
            className="cursor-pointer rounded-lg object-cover w-12 h-12"
          />
        {/* </Link> */}
      </div>
    </header>
  );
}

export default Header;

const links = [
  { text: "Home", href: "/" },
  { text: "TV Shows", href: "/" },
  { text: "Movies", href: "/" },
  { text: "New & Popular", href: "/" },
  { text: "My List", href: "/" },
];
