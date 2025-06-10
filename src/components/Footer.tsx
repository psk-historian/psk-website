import Link from 'next/link';
import Image from 'next/image';


export default function Footer() {
  return (
    <footer className="bg-red-500 text-black">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">825 Techwood Drive NW</p>
            <p className="mb-2">Atlanta, GA, 30332</p>
            <p className="mb-2">Email: psk.kd.president@gmail.com</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-white transition duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/recruitment" className="hover:text-white transition duration-300">
                  Recruitment
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-white transition duration-300">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/gtphisig"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition duration-300"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition duration-300"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition duration-300"
              >
                Twitter
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="mb-4">Subscribe to our newsletter for the latest updates.</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded text-gray-900"
              />
              <button
                type="submit"
                className="bg-white text-psk-red px-4 py-2 rounded hover:bg-psk-silver transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-psk-silver text-center">
          <p>&copy; {new Date().getFullYear()} Phi Sigma Kappa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 