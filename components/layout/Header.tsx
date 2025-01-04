"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#010101] shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={100} height={100} />
        </Link>

        <nav className="hidden md:flex space-x-4">
          <Link
            href="/courses"
            className="text-white hover:text-primary transition-colors"
          >
            Courses
          </Link>
          <Link
            href="/categories"
            className="text-white hover:text-primary transition-colors"
          >
            Categories
          </Link>
          <Link
            href="/coaches"
            className="text-white hover:text-primary transition-colors"
          >
            Coaches
          </Link>
          <Link
            href="/tools"
            className="text-white hover:text-primary transition-colors"
          >
            Tools
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="outline"
            className="text-white hover:text-primary transition-colors"
          >
            Log In
          </Button>
          <Button
            variant="outline"
            className="text-white hover:text-primary transition-colors"
          >
            Sign Up
          </Button>
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(true)}>
          <Menu className="text-white" />
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 h-dvh">
            <button
              className="absolute top-2 right-2 text-gray-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Close
            </button>
            <nav className="flex flex-col space-y-2 px-4">
              <Link
                href="/courses"
                className="text-black hover:text-primary transition-colors"
              >
                Courses
              </Link>
              <Link
                href="/categories"
                className="text-black hover:text-primary transition-colors"
              >
                Categories
              </Link>
              <Link
                href="/coaches"
                className="text-black hover:text-primary transition-colors"
              >
                Coaches
              </Link>
              <Link
                href="/tools"
                className="text-black hover:text-primary transition-colors"
              >
                Tools
              </Link>
              <Link
                href="/about"
                className="text-black hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-black hover:text-primary transition-colors"
              >
                Contact
              </Link>
              <Button
                variant="outline"
                className="text-primary border-primary hover:bg-primary hover:text-white w-full"
              >
                Log In
              </Button>
              <Button className="bg-primary text-white hover:bg-red-600 w-full">
                Sign Up
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
