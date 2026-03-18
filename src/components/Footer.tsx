'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0c1829] border-t border-gray-700 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-accent-orange rounded-sm flex items-center justify-center font-bold text-white">
                WF
              </div>
              <span className="font-bold text-lg text-white">
                Welding Flanges
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Your comprehensive digital resource for technical data, dimensions, and specifications regarding industrial piping components.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-accent-orange text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-accent-orange text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="https://texasflange.com?ref=weldingflanges"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent-orange text-sm"
                >
                  Texas Flange
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="tel:+12814848325" className="hover:text-accent-orange">
                  +1 281 484-8325
                </a>
              </li>
              <li>
                <a href="mailto:sales@texasflange.com" className="hover:text-accent-orange">
                  sales@texasflange.com
                </a>
              </li>
              <li className="text-gray-400 text-sm">
                Mon–Fri, 8 AM – 5 PM CST
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; 2026 Welding Flanges. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="hover:text-accent-orange">
                Privacy
              </Link>
              <Link href="/services" className="hover:text-accent-orange">
                Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
