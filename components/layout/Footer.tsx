import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <Image
              src="/logo.png"
              alt="GymElite Logo"
              width={120}
              height={60}
            />
          </div>
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <p className="text-sm text-gray-300 mb-4">
              <a href="#" className="text-gray-300">
                Privacy Policy
              </a>
            </p>
            <p className="text-sm text-gray-300 mb-4">
              <a href="#" className="text-gray-300">
                Terms of Service
              </a>
            </p>
          </div>
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <p className="text-sm text-gray-300">
              Copyright © 2023 GymElite. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
