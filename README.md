# Welding Flanges - Production-Ready Next.js Site

A modern, SEO-optimized industrial B2B website for weldingflanges.com built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Next.js 14+ with App Router** - Modern React framework with file-based routing
- **TypeScript** - Full type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Static Export Ready** - Configured for `output: 'export'` for static site generation
- **Dark Industrial Theme** - Professional dark grays, steel blues, and orange accents
- **Fully Responsive** - Mobile-first design that works on all devices
- **SEO Optimized** - Proper meta tags, Open Graph, JSON-LD structured data
- **Accessible** - Semantic HTML, ARIA labels, keyboard navigation support
- **Fast Performance** - Optimized for Core Web Vitals

## Project Structure

```
nextjs-weldingflanges/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with global metadata
│   │   ├── globals.css         # Global styles
│   │   ├── page.tsx            # Homepage
│   │   └── blog/
│   │       ├── layout.tsx       # Blog layout
│   │       └── page.tsx         # Blog placeholder
│   └── components/
│       ├── Navigation.tsx       # Header navigation
│       ├── Footer.tsx           # Footer with contact info
│       ├── Hero.tsx             # Hero section
│       ├── Specifications.tsx   # Material grades section
│       ├── Guide.tsx            # Welding flange guide
│       ├── FAQ.tsx              # Accordion FAQ
│       └── StructuredData.tsx   # JSON-LD schemas
├── public/
│   ├── robots.txt               # SEO robots file
│   └── sitemap.xml              # XML sitemap
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js               # Static export config
└── postcss.config.js
```

## Getting Started

### Installation

```bash
cd /sessions/happy-practical-carson/nextjs-weldingflanges
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

```bash
npm run build
```

This creates a static export in the `out/` directory, ready for deployment.

### Deployment

The project is configured for static export. Deploy the `out/` directory to:

- **Vercel** - `vercel deploy`
- **Netlify** - Drag and drop `out/` folder
- **AWS S3** - Upload `out/` contents
- **Any static host** - Just upload the contents of `out/`

## Site Pages

### Homepage (/)

Full-featured homepage with:
- Industrial hero section with dark gradient background
- Material grades and specifications section
- Welding flange guide with visual diagrams
- 6-item accordion FAQ with internal links
- Navigation and footer with contact information

### Blog (/blog)

Placeholder page for future blog content.

## SEO Features

- **Meta Tags** - Title, description, keywords, author
- **Open Graph** - Social media sharing optimization
- **JSON-LD Schemas**:
  - Organization schema with contact info
  - FAQ page schema with all 6 Q&A items
- **Semantic HTML** - Proper heading hierarchy, `<article>`, `<section>`, `<nav>`
- **Robots.txt** - Search engine indexing guidelines
- **Sitemap.xml** - Complete site structure for crawlers
- **Canonical URLs** - Prevent duplicate content issues

## Styling

The site uses Tailwind CSS with custom colors:

- **Industrial Dark** - `#1a1f26` (primary background)
- **Industrial Darker** - `#0f1419` (deeper sections)
- **Steel Grays** - Color scale from `#f8f9fa` to `#0d1117`
- **Accent Orange** - `#ff8c42` (primary accent, CTAs)

All colors defined in `tailwind.config.ts`.

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Focus-visible states on buttons and links
- Accordion pattern with proper ARIA expanded/controls
- Color contrast meets WCAG AA standards
- Keyboard navigation support

## Performance

- CSS-only patterns and gradients (no image assets needed)
- Minified builds with Next.js
- Static export for instant page loads
- No client-side JavaScript on landing page
- Interactive components use 'use client' directive

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Android Chrome)

## Contact Information

- **Phone**: +1 281 484-8325
- **Fax**: 281 484-8730
- **Email**: sales@texasflange.com
- **Partner**: [Texas Flange](https://texasflange.com)

## License

All content © 2025 Welding Flanges. All rights reserved.
