"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.svg";
import {
  FaTwitter,
  FaDiscord,
  FaInstagram,
  FaWallet,
  FaTimes,
  FaBars,
} from "react-icons/fa";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const links = [
  { href: "/", label: "Home" },
  { href: "/collection", label: "Collection" },
  { href: "/choose", label: "Choose" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/blog", label: "Blog" },
];

const socialsJsx = (
  <>
    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
      <FaTwitter className="text-white hover:text-gray-400" size={24} />
    </a>
    <a href="https://discord.com/" target="_blank" rel="noopener noreferrer">
      <FaDiscord className="text-white hover:text-gray-400" size={24} />
    </a>
    <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
      <FaInstagram className="text-white hover:text-gray-400" size={24} />
    </a>
    <a href="#wallet" target="_blank" rel="noopener noreferrer">
      <FaWallet className="text-white hover:text-gray-400" size={24} />
    </a>
  </>
);

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 flex justify-between items-center p-4 bg-gray-900">
      <div className="flex flex-row">
        <Image src={Logo} alt="logo" className="w-28 mr-2" />
        <ConnectButton />
      </div>
      <div className="sm:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <FaTimes className="text-white" size={24} />
          ) : (
            <FaBars className="text-white" size={24} />
          )}
        </button>
      </div>
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-gray-900 transform transition-transform ease-in-out duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:hidden`}
      >
        <div className="py-6 pr-6 pl-8 space-y-4">
          {links.map(({ href, label }) => (
            <Link href={href} key={`${href}${label}`}>
              <span className="text-white hover:text-gray-400 block">
                {label}
              </span>
            </Link>
          ))}
        </div>
        <div className="absolute bottom-8 left-8 space-x-4 flex">
          {socialsJsx}
        </div>
      </div>
      <div className="hidden sm:flex sm:flex-row space-x-4">
        {links.map(({ href, label }) => (
          <Link href={href} key={`${href}${label}`}>
            <span className="text-white hover:text-gray-400 block">
              {label}
            </span>
          </Link>
        ))}
      </div>
      <div className="space-x-4 ml-6 hidden sm:flex">{socialsJsx}</div>
    </div>
  );
};

export default Nav;
