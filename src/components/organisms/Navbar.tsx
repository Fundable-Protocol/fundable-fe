"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ConnectWalletButton from "@/components/atoms/Button";
import Logo from "../../../public/imgs/fundable_logo.png";
import { themeStore } from "@/store/theme";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const theme = themeStore.use()


  const themeColor = theme.theme === "dark " ? "#0000" : "#ffff";
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

      {/* Spacer div that pushes hamburger to the right on mobile/tablet */}
      <div className="flex-grow sm:hidden"></div>

      {/* Hamburger Menu for Mobile (Hidden when overlay is open) */}
      {!isMenuOpen && (
        <button
          className="sm:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 transition-transform duration-300 ease-in-out"
            fill={theme.theme === "dark " ? "#fff" : "#000"}
            stroke={theme.theme ==="dark" ? "#fff" : "#000"}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      )}

      {/* Nav Links for Desktop */}
      <div className="hidden sm:flex sm:items-center sm:gap-x-16">
        {links.map((link) => (
          <Link
            href={link.url}
            className={`hover:text-primary py-2 sm:py-0 dark:text-white text-black `}
            key={link.title}
          >
            {link.title}
          </Link>
        ))}
      </div>

      {/* Connect Wallet Button for Desktop Only */}
      <div className="hidden md:block">
        <ConnectWalletButton />
      </div>

      {/* Overlay for Mobile */}
      <div
        className={`fixed inset-0 bg-[#000000d3] z-50 sm:hidden transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Close Button at the Top-Right */}
        <div className="absolute top-4 right-4">
          <button
            className="focus:outline-none"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill={themeColor}
              stroke={themeColor}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Connect Wallet Button in Overlay */}
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          <ConnectWalletButton />

          {/* Nav Links in Overlay */}
          {links.map((link) => (
            <Link
              href={link.url}
              className={`block hover:text-primary py-2 text-white`}
              key={link.title}
              onClick={toggleMenu}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;