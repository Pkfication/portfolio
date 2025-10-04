import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
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
  title: {
    default: "Pankaj Gupta | Senior Software Engineer – Fintech Portfolio",
    template: "%s | Pankaj Gupta",
  },
  description:
    "Senior software engineer (8+ years) in fintech, ecommerce, CX and workflow automation. Available for freelance projects.",
  metadataBase: new URL("https://example.com"),
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Pankaj Gupta | Senior Software Engineer – Fintech Portfolio",
    description:
      "8+ years across fintech, ecommerce, customer experience and workflow automation.",
    type: "website",
    url: "https://example.com",
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
        <Navbar />
        <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <footer className="border-t border-black/10 dark:border-white/10 py-8">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-sm text-foreground/70 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>
              © {new Date().getFullYear()} Pankaj Gupta. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/pkfication"
                target="_blank"
                rel="noreferrer"
                className="hover:underline underline-offset-4"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/pankajgupta079/"
                target="_blank"
                rel="noreferrer"
                className="hover:underline underline-offset-4"
              >
                LinkedIn
              </a>
              <a
                href="mailto:pankajgupta221b@gmail.com"
                className="hover:underline underline-offset-4"
              >
                Email
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
