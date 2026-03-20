import Link from 'next/link';

export default function Guide() {
  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-[#0c1829]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Visual element */}
          <div className="relative order-2 md:order-1">
            <div className="aspect-square bg-gray-800 rounded-lg border-2 border-gray-700 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="mb-6">
                  <svg className="w-32 h-32 mx-auto text-accent-orange opacity-80" fill="currentColor" viewBox="0 0 100 100">
                    <path d="M 20 20 Q 50 10 80 20 L 80 50 Q 50 60 20 50 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M 20 50 Q 50 60 80 50 L 80 80 Q 50 90 20 80 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                    <line x1="20" y1="20" x2="20" y2="80" stroke="currentColor" strokeWidth="2" />
                    <line x1="80" y1="20" x2="80" y2="80" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <p className="text-gray-400 text-sm font-medium">Engineered for High Pressure</p>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-bold text-white mb-6">
              Your Welding Flange Guide
            </h2>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                The longevity of any piping system depends heavily on the material composition of its components. Whether your project requires a standard carbon steel pipe flange for general utility or a stainless steel weld flange for corrosive environments, adhering to strict ASME and ASTM standards is non-negotiable.
              </p>

              <p>
                Using the wrong material grade can lead to critical failure under high pressure. For fully certified materials and complete mill test reports, we recommend partnering with a trusted flange supplier. Visit Texas Flange to browse their comprehensive catalog of verified welding flanges and ensure your project meets all safety codes.
              </p>

              <div className="mt-8 space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent-orange rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">Carbon Steel - General industrial applications</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent-orange rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">Stainless Steel - Corrosive environments</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent-orange rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">Alloy Steel - Extreme conditions</span>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="https://texasflange.com/contact-us/?ref=weldingflanges"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-accent-orange hover:bg-accent-orange-light text-white font-bold py-2 px-6 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent-orange/30"
                >
                  Get Technical Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
