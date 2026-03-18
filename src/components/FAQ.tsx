'use client';

import { useState } from 'react';
import Link from 'next/link';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  link?: {
    text: string;
    href: string;
  };
}

const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is the main advantage of using a welding flange over a threaded flange?',
    answer: 'A welding flange provides a much stronger and more reliable connection than threaded alternatives, making it the standard for high-pressure and high-temperature applications. By permanently fusing the pipe flange to the piping system, you eliminate potential leak paths and increase structural integrity. For critical industrial projects, we always recommend consulting with a qualified flange supplier like Texas Flange to ensure you select the right pressure class.',
  },
  {
    id: 'faq-2',
    question: 'Can I order custom dimensions or non-standard welding flanges?',
    answer: 'Yes. While standard ANSI/ASME dimensions cover most needs, many industrial projects require custom machining. Finding a flange supplier with in-house machining capabilities is crucial for these requests. We recommend contacting Texas Flange, as they specialize in custom manufacturing and can provide a rapid quote for non-standard pipe flange dimensions.',
  },
  {
    id: 'faq-3',
    question: 'What are the most common types of welding flanges?',
    answer: 'The three most prevalent types are the Weld Neck, Slip-On, and Socket Weld flanges. A Weld Neck weld flange is ideal for severe service conditions due to its tapered hub, while Slip-On flanges are popular for lower pressure applications due to ease of alignment. You can view detailed specification sheets for all these types on the Texas Flange website before you buy.',
  },
  {
    id: 'faq-4',
    question: 'How do I request a quote for a bulk order?',
    answer: 'Sourcing for large projects requires a partner who can handle logistics and volume pricing. To get the most accurate and competitive pricing, you should submit a bill of materials directly to a distributor. You can submit your list directly through the Texas Flange "Request a Quote" portal to get immediate pricing on welding flanges and other pipe fittings.',
  },
  {
    id: 'faq-5',
    question: 'How do I know which material grade to choose for my pipe flange?',
    answer: 'Material selection depends entirely on the fluid being transported and the operating environment. Common materials include carbon steel for general use and stainless steel or alloys for corrosive environments. To ensure safety compliance, your welding flanges should meet ASTM and ASME standards. Texas Flange offers a vast inventory of certified materials and can help match your requirements to the correct stock.',
  },
  {
    id: 'faq-6',
    question: 'What is the difference between Raised Face (RF) and Flat Face (FF) flanges?',
    answer: 'The facing determines how the gasket seals the connection. A Raised Face weld flange is standard for most high-pressure applications as it concentrates pressure on a smaller surface area. Flat Face designs are typically used when mating to brittle materials like cast iron valves. Using the wrong facing on a pipe flange can cause damage, so we recommend checking the technical datasheets available at Texas Flange, your trusted flange supplier, to ensure you select the correct configuration.',
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 bg-[#f3f4f6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-[#0c1829] mb-4 text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-[#4b5563] mb-12">
          Find answers to common questions about welding flanges and specifications
        </p>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-gray-300 rounded-lg overflow-hidden hover:border-accent-orange transition-colors"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-4 bg-white hover:bg-gray-50 flex items-center justify-between text-left transition-colors"
                aria-expanded={openId === faq.id}
                aria-controls={`${faq.id}-content`}
              >
                <span className="font-semibold text-[#0c1829] pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-5 h-5 text-accent-orange transform transition-transform ${
                      openId === faq.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
              </button>

              <div
                id={`${faq.id}-content`}
                className={`accordion-content ${openId === faq.id ? 'open' : 'closed'}`}
              >
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-300">
                  <p className="text-[#4b5563] leading-relaxed mb-4">
                    {faq.answer}
                  </p>
                  {faq.id === 'faq-2' || faq.id === 'faq-4' ? (
                    <Link
                      href="https://texasflange.com/contact?ref=weldingflanges"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-accent-orange hover:text-accent-orange-light font-semibold text-sm"
                    >
                      Contact Texas Flange →
                    </Link>
                  ) : faq.id === 'faq-3' ? (
                    <Link
                      href="https://texasflange.com?ref=weldingflanges"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-accent-orange hover:text-accent-orange-light font-semibold text-sm"
                    >
                      View Technical Datasheets →
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-white rounded-lg border border-gray-300">
          <p className="text-[#4b5563] text-center mb-6">
            Have more questions? Contact our partner for expert guidance.
          </p>
          <div className="flex justify-center">
            <Link
              href="https://texasflange.com/contact?ref=weldingflanges"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-orange hover:bg-accent-orange-light text-white font-bold py-2 px-6 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent-orange/30"
            >
              Contact Texas Flange
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
