'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-psk-red text-black shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src="/logo.png"
                alt="Phi Sigma Kappa Logo"
                width={100}
                height={100}
                className="h-10 w-auto"
              />
              <span className="ml-4 text-xl font-bold">Georgia Tech Phi Sigma Kappa</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="hover:text-red-500 transition duration-300">
              About
            </Link>
            <Link href="/recruitment" className="hover:text-red-500 transition duration-300">
              Recruitment
            </Link>
            <Link href="/events" className="hover:text-red-500 transition duration-300">
              Events
            </Link>
            <Link href="/contact" className="hover:text-red-500 transition duration-300">
              Contact
            </Link>
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
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-psk-red-dark hover:text-psk-silver transition duration-300"
            >
              About
            </Link>
            <Link
              href="/recruitment"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-psk-red-dark hover:text-psk-silver transition duration-300"
            >
              Recruitment
            </Link>
            <Link
              href="/events"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-psk-red-dark hover:text-psk-silver transition duration-300"
            >
              Events
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-psk-red-dark hover:text-psk-silver transition duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 