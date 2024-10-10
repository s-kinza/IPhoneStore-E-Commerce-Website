import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { CiHeart } from 'react-icons/ci';
import { FiUser } from 'react-icons/fi';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left Side Logo Section */}
          <div className="flex-shrink-0">
            <Image src="/images/logo.png" alt="Cyber Logo" width={60} height={60} />
          </div>

          {/* Center Section - Search Bar */}
          <div className="hidden md:flex flex-grow justify-center">
            <input
              className="bg-gray-800 text-white px-5 py-2 rounded-md text-sm w-80"
              type="text"
              placeholder="Search"
            />
          </div>

          {/* Right Section - Navigation Links */}
          <div className="hidden md:flex items-center gap-10">
            <Link href="/" className="text-gray-300 hover:text-purple-400 transition duration-200">
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-purple-400 transition duration-200">
              About
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-purple-400 transition duration-200">
              Contact Us
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-purple-400 transition duration-200">
              Blog
            </Link>
          </div>

          {/* Icons Section */}
          <div className="hidden md:flex text-gray-300 hover:text-purple-400 flex gap-5">
            <CiHeart className="cursor-pointer transition duration-200" />
            <RiShoppingCart2Line className="cursor-pointer transition duration-200" />
            <FiUser className="cursor-pointer transition duration-200" />
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="flex md:hidden items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-purple-400">
              {isMenuOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <input
              className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm w-full mb-4"
              type="text"
              placeholder="Search"
            />
            <Link href="/" className="block text-gray-300 hover:text-purple-400">
              Home
            </Link>
            <Link href="/about" className="block text-gray-300 hover:text-purple-400">
              About
            </Link>
            <Link href="/contact" className="block text-gray-300 hover:text-purple-400">
              Contact Us
            </Link>
            <Link href="/blog" className="block text-gray-300 hover:text-purple-400">
              Blog
            </Link>

            {/* Icons in Mobile Menu */}
            <div className="flex gap-5 justify-center">
              <CiHeart className="cursor-pointer text-gray-300 hover:text-purple-400" />
              <RiShoppingCart2Line className="cursor-pointer text-gray-300 hover:text-purple-400" />
              <FiUser className="cursor-pointer text-gray-300 hover:text-purple-400" />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;



