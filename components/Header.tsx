// components/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AuditButton } from "@/components/AuditButton";
import NavMenuIcon from "@/components/NavMenuIcon";


const navLinks = [
  { href: "/", label: "Home" },
  { href: "/automation", label: "AI Automation" },
  { href: "/web-development", label: "Web Development" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-black/5">
        <div className="container flex h-14 items-center justify-between gap-3">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
            <div
              className="w-7 h-7 rounded-xl flex items-center justify-center text-white font-bold"
              style={{ background: "var(--brand-accent)" }}
            >
              P
            </div>
            <span className="hidden sm:inline text-[var(--color-ink)] font-semibold tracking-tight">
              Primework <span className="opacity-75 font-normal">AI</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    "text-[var(--color-ink)] hover:text-[var(--brand-accent)] transition-colors" +
                    (isActive ? " text-[var(--brand-accent)]" : "")
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right side: CTA + Mobile Menu button */}
          <div className="flex items-center gap-2">
            {/* CTA always visible (smaller on mobile) */}
            <AuditButton className="btn btn-primary px-3 py-1 text-xs sm:text-sm md:px-4 md:py-2">
              Book a 15-Min Audit
            </AuditButton>

            {/* Mobile dropdown trigger */}
            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-full border border-black/10 px-3 py-1 text-xs font-medium text-[var(--color-ink)] bg-white shadow-sm md:hidden"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-label="Toggle navigation menu"
            >
              <NavMenuIcon open={menuOpen} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile dropdown panel */}
      {menuOpen && (
  <div className="md:hidden border-b border-black/5 bg-white/95 backdrop-blur shadow-sm">
    <div className="container py-3 flex flex-col gap-1">
      {navLinks.map((link) => {
        const isActive =
          link.href === "/"
            ? pathname === "/"
            : pathname.startsWith(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            className={
              "py-2 text-sm font-medium rounded-lg px-2 " +
              (isActive
                ? "bg-[var(--brand-accent)]/5 text-[var(--brand-accent)]"
                : "text-[var(--color-ink)] hover:bg-slate-100")
            }
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  </div>
)}

    </>
  );
}




