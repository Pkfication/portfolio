import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Pankaj Gupta via email or LinkedIn.",
};

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Contact
        </h1>
        <p className="mt-2 text-foreground/80">
          I’m available for freelance work and advisory. Reach out and let’s
          talk.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <a
          href="mailto:pankajgupta221b@gmail.com"
          className="rounded-lg border border-black/10 dark:border-white/10 p-4 hover:border-black/20 dark:hover:border-white/20 transition-colors"
        >
          <div className="text-sm uppercase tracking-wide text-foreground/60">
            Email
          </div>
          <div className="mt-1 font-semibold">pankajgupta221b@gmail.com</div>
          <div className="mt-2 text-sm text-foreground/70">
            Click to compose an email
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/pankajgupta079/"
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-black/10 dark:border-white/10 p-4 hover:border-black/20 dark:hover:border-white/20 transition-colors"
        >
          <div className="text-sm uppercase tracking-wide text-foreground/60">
            LinkedIn
          </div>
          <div className="mt-1 font-semibold">
            linkedin.com/in/pankajgupta079
          </div>
          <div className="mt-2 text-sm text-foreground/70">
            Opens in a new tab
          </div>
        </a>
      </div>
    </div>
  );
}
