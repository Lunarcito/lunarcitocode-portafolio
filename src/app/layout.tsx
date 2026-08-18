import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Carolina Calle | Frontend Engineer",
    template: "%s | Carolina Calle",
  },
  description:
    "Frontend Engineer building accessible, high-performance web applications with React, Next.js, and TypeScript.",
  openGraph: {
    title: "Carolina Calle | Frontend Engineer",
    description:
      "Frontend Engineer building accessible, high-performance web applications with React, Next.js, and TypeScript.",
    url: "/",
    siteName: "Carolina Calle",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Carolina Calle | Frontend Engineer",
    description:
      "Frontend Engineer building accessible, high-performance web applications with React, Next.js, and TypeScript.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-neutral-950 antialiased">{children}</body>
    </html>
  );
}
