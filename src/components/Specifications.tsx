import Link from 'next/link';

export default function Specifications() {
  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <h2 className="text-4xl font-bold text-[#0c1829] mb-6">
              Material Grades & Specifications
            </h2>

            <div className="space-y-4 text-[#4b5563] leading-relaxed">
              <p>
                Welding flanges are critical piping components designed to be permanently attached to a pipe system via a welding connection, ensuring superior joint integrity and leak prevention. Unlike threaded options, a weld flange—such as a Weld Neck, Slip-On, or Socket Weld—is engineered for high-pressure and high-temperature applications where safety is paramount.
              </p>

              <p>
                Selecting the correct pipe flange specification is essential for maintaining flow efficiency and structural stability. For extensive inventories and immediate procurement needs, we direct all users to Texas Flange, a premier flange supplier capable of meeting complex industrial requirements.
              </p>

              <div className="mt-8">
                <Link
                  href="https://texasflange.com?ref=weldingflanges"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-accent-orange hover:bg-accent-orange-light text-white font-bold py-2 px-6 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent-orange/30"
                >
                  Browse Inventory at Texas Flange
                </Link>
              </div>
            </div>
          </div>

          {/* Right side - Visual element */}
          <div className="relative">
            <div className="aspect-square bg-gray-100 rounded-lg border-2 border-gray-300 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="mb-6">
                  <svg className="w-32 h-32 mx-auto text-accent-orange opacity-80" fill="currentColor" viewBox="0 0 100 100">
                    <circle cx="50" cy="25" r="8" />
                    <circle cx="50" cy="75" r="8" />
                    <rect x="48" y="33" width="4" height="34" />
                    <circle cx="30" cy="50" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="70" cy="50" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M 35 50 L 65 50" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <p className="text-gray-600 text-sm font-medium">ASME / ANSI Certified</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
