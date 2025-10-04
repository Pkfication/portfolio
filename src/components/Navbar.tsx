import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          pkfication
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link
            href="/experience"
            className="hover:underline underline-offset-4"
          >
            Experience
          </Link>
          <Link href="/projects" className="hover:underline underline-offset-4">
            Projects
          </Link>
          <Link href="/services" className="hover:underline underline-offset-4">
            Services
          </Link>
          <Link href="/contact" className="hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="/PK_CV.pdf"
            className="rounded-md border border-black/10 dark:border-white/20 px-3 py-2 text-sm font-medium hover:bg-black/[.04] dark:hover:bg-white/[.06] transition-colors"
          >
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
}
