"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ConnectWalletButton from "@/components/atoms/Button";
import Logo from "../../../public/imgs/fundable_logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { title: "Solutions", url: "#" },
    { title: "Resources", url: "#" },
    { title: "About", url: "#" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between gap-x-4 items-center py-4 text-sm font-bold text-txt container">
      {/* Logo */}
      <Link href="/" className="relative w-28 h-5">
        <Image
          priority
          alt="logo"
          fill
          src={Logo}
          className="w-auto h-auto object-contain"
        />
      </Link>

      {/* Connect Wallet Button */}
      <div className="md:hidden block">
        <ConnectWalletButton />
      </div>

      {/* Hamburger Menu for Mobile */}
      <button
        className="sm:hidden focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6 transition-transform duration-300 ease-in-out"
          fill="#ffffff"
          stroke="#ffffff"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          )}
        </svg>
      </button>

      {/* Nav Links */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } sm:flex sm:items-center sm:gap-x-16 absolute sm:static top-16 left-0 w-full sm:w-auto bg-[#000000d3] text-[#ffffff] sm:bg-transparent p-4 sm:p-0 transition-all duration-300 ease-in-out`}
      >
        {links.map((link) => (
          <Link
            href={link.url}
            className="block sm:inline-block text-white hover:text-primary py-2 sm:py-0"
            key={link.title}
          >
            {link.title}
          </Link>
        ))}
      </div>

      {/* Connect Wallet Button */}
      <div className="hidden md:block">
        <ConnectWalletButton />
      </div>
    </nav>
  );
};

export default Navbar;
