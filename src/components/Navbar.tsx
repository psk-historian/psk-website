'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [alumniDropdownOpen, setAlumniDropdownOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-red-500 to-gray-500 font-bold text-black shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src="/logo.png"
                alt="Phi Sigma Kappa Logo"
                width={100}
                height={100}
                className="h-10 w-auto"
              />
              <span className="ml-4 text-xl hover:text-white transition duration-300 font-bold">Georgia Tech Phi Sigma Kappa</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* About Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setAboutDropdownOpen(true)}
                onMouseLeave={() => setAboutDropdownOpen(false)}
                className="hover:text-white transition duration-300 flex items-center"
              >
                About
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {aboutDropdownOpen && (
                <div
                  onMouseEnter={() => setAboutDropdownOpen(true)}
                  onMouseLeave={() => setAboutDropdownOpen(false)}
                  className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-md py-2 z-50"
                >
                  <Link
                    href="/executive-board"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-500 transition duration-300"
                  >
                    Executive Board
                  </Link>
                  <Link
                    href="/awards"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-500 transition duration-300"
                  >
                    Awards
                  </Link>
                </div>
              )}
            </div>

            <Link href="/recruitment" className="hover:text-white transition duration-300">
              Recruitment
            </Link>
            <Link href="/scholarships" className="hover:text-white transition duration-300">
              Scholarships
            </Link>

            {/* Alumni Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setAlumniDropdownOpen(true)}
                onMouseLeave={() => setAlumniDropdownOpen(false)}
                className="hover:text-white transition duration-300 flex items-center"
              >
                Alumni
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {alumniDropdownOpen && (
                <div
                  onMouseEnter={() => setAlumniDropdownOpen(true)}
                  onMouseLeave={() => setAlumniDropdownOpen(false)}
                  className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-md py-2 z-50"
                >
                  <Link
                    href="/alumni/newsletters"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-500 transition duration-300"
                  >
                    Newsletters
                  </Link>
                  <Link
                    href="/alumni/events"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-500 transition duration-300"
                  >
                    Events
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-psk-silver focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:text-psk-silver transition duration-300"
            >
              About
            </Link>
            <Link
              href="/executive-board"
              className="block px-6 py-2 rounded-md text-sm font-medium hover:bg-gray-100 hover:text-psk-silver transition duration-300"
            >
              Executive Board
            </Link>
            <Link
              href="/awards"
              className="block px-6 py-2 rounded-md text-sm font-medium hover:bg-gray-100 hover:text-psk-silver transition duration-300"
            >
              Awards
            </Link>
            <Link
              href="/recruitment"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:text-psk-silver transition duration-300"
            >
              Recruitment
            </Link>
            <Link
              href="/scholarships"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:text-psk-silver transition duration-300"
            >
              Scholarships
            </Link>
            <Link
              href="/alumni"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-yellow-100 hover:text-psk-silver transition duration-300"
            >
              Alumni
            </Link>
            <Link
              href="/newsletters"
              className="block px-6 py-2 rounded-md text-sm font-medium hover:bg-yellow-100 hover:text-psk-silver transition duration-300"
            >
              Newsletters
            </Link>
            <Link
              href="/events"
              className="block px-6 py-2 rounded-md text-sm font-medium hover:bg-gray-100 hover:text-psk-silver transition duration-300"
            >
              Events
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 