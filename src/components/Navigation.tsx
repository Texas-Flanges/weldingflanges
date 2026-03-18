'use client';

import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-white bg-opacity-95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-accent-orange rounded-sm flex items-center justify-center font-bold text-white">
              WF
            </div>
            <span className="font-bold text-lg text-[#0c1829] group-hover:text-accent-orange">
              Welding Flanges
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-[#0c1829] hover:text-accent-orange font-medium"
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="text-[#0c1829] hover:text-accent-orange font-medium"
            >
              Blog
            </Link>
          </div>

          {/* CTA Button */}
          <Link
            href="https://texasflange.com/contact-us/?ref=weldingflanges"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent-orange hover:bg-accent-orange-light text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent-orange/30"
          >
            Request Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}
