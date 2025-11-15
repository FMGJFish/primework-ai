"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AuditButton } from "@/components/AuditButton"; // ← NEW IMPORT

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-black/5">
      <div className="container flex h-14 items-center justify-between">
        
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          <div
            className="w-7 h-7 rounded-xl flex items-center justify-center text-white font-bold"
            style={{ background: "var(--brand-accent)" }}
          >
            P
          </div>
          <span className="text-[var(--color-ink)] font-semibold tracking-tight">
            Primework <span className="opacity-75 font-normal">AI</span>
          </span>
        </Link>

        {/* Nav */}
        <nav className="flex items-center gap-8 text-[15px] font-medium">
          <Link
            href="/"
            className="text-[var(--color-ink)] hover:text-[var(--brand-accent)] transition-colors"
          >
            Home
          </Link>

          <Link
            href="/automation"
            className="text-[var(--color-ink)] hover:text-[var(--brand-accent)] transition-colors"
          >
            AI Automation
          </Link>

          <Link
            href="/web-development"
            className="text-[var(--color-ink)] hover:text-[var(--brand-accent)] transition-colors"
          >
            Web Development
          </Link>

          <Link
            href="/pricing"
            className="text-[var(--color-ink)] hover:text-[var(--brand-accent)] transition-colors"
          >
            Pricing
          </Link>

          <Link
            href="/contact"
            className="text-[var(--color-ink)] hover:text-[var(--brand-accent)] transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* CTA — now reusable */}
        <AuditButton className="hidden sm:inline-flex" />

      </div>
    </header>
  );
}



