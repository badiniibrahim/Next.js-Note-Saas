"use client";

import React from "react";
import { navLinks } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex w-full flex-row justify-between mb-6">
      <Link href="/" className="sidebar-logo">
        <Image
          src="/assets/images/logo3.png"
          alt=""
          width={90}
          height={90}
          className="flex rounded-[100px] mb-9"
        />
      </Link>
      <nav className="sidebar-nav">
        <SignedIn>
          <ul className="sidebar-nav_elements">
            {navLinks.slice(0, 6).map((link) => {
              const isActive = link.route === pathname;

              return (
                <li
                  key={link.route}
                  className={`sidebar-nav_element group ${
                    isActive ? "bg-purple-gradient text-white" : "text-gray-700"
                  }`}
                >
                  <Link className="sidebar-link" href={link.route}>
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <ul className="sidebar-nav_elements">
            {navLinks.slice(6).map((link) => {
              const isActive = link.route === pathname;

              return (
                <li
                  key={link.route}
                  className={`sidebar-nav_element group ${
                    isActive ? "bg-purple-gradient text-white" : "text-gray-700"
                  }`}
                >
                  <Link className="sidebar-link" href={link.route}>
                    {link.label}
                  </Link>
                </li>
              );
            })}

            <li className="flex-center cursor-pointer">
              <UserButton afterSignOutUrl="/" showName />
            </li>
          </ul>
        </SignedIn>

        <SignedOut>
          <Button asChild className="button bg-cover bg-[#FF4618]">
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
      </nav>
    </div>
  );
};

export default Navbar;
