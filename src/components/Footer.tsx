import Link from 'next/link';
import Image from 'next/image';


export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-red-500 to-gray-500">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-black">Contact Us</h3>
            <p className="mb-2 text-black">825 Techwood Drive NW</p>
            <p className="mb-2 text-black">Atlanta, GA, 30332</p>
            <p className="mb-2 text-black">Email: psk.kd.president@gmail.com</p>
            <div className="flex space-x-4 text-black">
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

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">Quick Links</h3>
            <ul className="space-y-2 text-black">
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

          {/* Come Visit Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">Come Visit Us</h3>
            <p className="mb-4 text-black">825 Techwood Drive NW<br/>Atlanta, GA, 30332</p>
            <div className="rounded-lg overflow-hidden shadow-lg border border-gray-300">
              <iframe
                src="https://www.google.com/maps?q=825+Techwood+Drive+NW,+Atlanta,+GA,+30332&output=embed"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Phi Sigma Kappa House Location"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-psk-silver text-center">
          <p>&copy; {new Date().getFullYear()} Phi Sigma Kappa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 