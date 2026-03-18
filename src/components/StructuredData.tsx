export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Welding Flanges',
    url: 'https://weldingflanges.com',
    logo: 'https://weldingflanges.com/logo.png',
    description: 'Comprehensive digital resource for welding flange technical data, dimensions, and specifications',
    contact: {
      '@type': 'ContactPoint',
      telephone: '+1-281-484-8325',
      contactType: 'Customer Service',
      email: 'sales@texasflange.com',
    },
    sameAs: ['https://texasflange.com'],
    parentOrganization: {
      '@type': 'Organization',
      name: 'Texas Flange',
      url: 'https://texasflange.com',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the main advantage of using a welding flange over a threaded flange?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A welding flange provides a much stronger and more reliable connection than threaded alternatives, making it the standard for high-pressure and high-temperature applications.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I order custom dimensions or non-standard welding flanges?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. While standard ANSI/ASME dimensions cover most needs, many industrial projects require custom machining.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the most common types of welding flanges?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The three most prevalent types are the Weld Neck, Slip-On, and Socket Weld flanges.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I request a quote for a bulk order?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sourcing for large projects requires submitting a bill of materials to a distributor through the Texas Flange portal.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I know which material grade to choose for my pipe flange?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Material selection depends on the fluid being transported and the operating environment.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between Raised Face (RF) and Flat Face (FF) flanges?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The facing determines how the gasket seals the connection. Raised Face is standard for high-pressure applications.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
