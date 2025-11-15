// components/NavMenuIcon.tsx
"use client";

type NavMenuIconProps = {
  open?: boolean;
};

export default function NavMenuIcon({ open }: NavMenuIconProps) {
  return (
    <div
      aria-hidden="true"
      className={`grid grid-cols-2 gap-[2px] w-5 h-5 transition-transform duration-150 ${
        open ? "scale-110 rotate-3" : "scale-100"
      }`}
    >
      {/* Top-left: Emerald */}
      <span className="block w-full h-full rounded-[2px] bg-[var(--brand-accent)]" />
      {/* Top-right: Navy */}
      <span className="block w-full h-full rounded-[2px] bg-[var(--color-ink)]" />
      {/* Bottom-left: Navy */}
      <span className="block w-full h-full rounded-[2px] bg-[var(--color-ink)]" />
      {/* Bottom-right: Emerald */}
      <span className="block w-full h-full rounded-[2px] bg-[var(--brand-accent)]" />
    </div>
  );
}

