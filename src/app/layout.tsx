import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Welding Flanges",
  description: "Your comprehensive digital resource for welding flange technical data, dimensions, and specifications.",
  metadataBase: new URL("https://weldingflanges.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://weldingflanges.com",
    title: "Welding Flanges",
    description: "Your comprehensive digital resource for welding flange technical data, dimensions, and specifications.",
    siteName: "Welding Flanges",
  },
  twitter: {
    card: "summary_large_image",
    title: "Welding Flanges",
    description: "Your comprehensive digital resource for welding flange technical data, dimensions, and specifications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
