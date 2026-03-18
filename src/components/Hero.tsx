import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-white">
      {/* Accent line effect */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-orange to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-[#0c1829] mb-6 leading-tight">
          Welding Flanges
        </h1>

        <p className="text-xl md:text-2xl text-[#4b5563] mb-8 max-w-3xl mx-auto leading-relaxed">
          Your comprehensive digital resource for technical data, dimensions, and specifications regarding industrial piping components.
        </p>

        <Link
          href="https://texasflange.com/contact?ref=weldingflanges"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-accent-orange hover:bg-accent-orange-light text-white font-bold py-3 px-8 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent-orange/30 text-lg"
        >
          Request a Quote at Texas Flange
        </Link>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-orange opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-orange opacity-5 rounded-full blur-3xl"></div>
    </section>
  );
}
