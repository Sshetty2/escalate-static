import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Escalate LLC | Software Development & AI Solutions",
  description:
    "Escalate LLC builds innovative software products and agentic AI systems. Creators of Radar7, a map-first event discovery platform.",
  keywords: [
    "software development",
    "AI",
    "agentic AI",
    "Radar7",
    "event discovery",
    "LLM",
    "RAG",
    "vector databases",
  ],
  authors: [{ name: "Sachit Shetty" }],
  creator: "Escalate LLC",
  openGraph: {
    title: "Escalate LLC | Software Development & AI Solutions",
    description:
      "Escalate LLC builds innovative software products and agentic AI systems.",
    type: "website",
    siteName: "Escalate LLC",
  },
  twitter: {
    card: "summary",
    title: "Escalate LLC | Software Development & AI Solutions",
    description:
      "Escalate LLC builds innovative software products and agentic AI systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
