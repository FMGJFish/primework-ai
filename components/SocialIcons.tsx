// components/SocialIcons.tsx
"use client";

import Link from "next/link";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";
import type { IconType } from "react-icons";

type Social = {
  href: string;
  label: string;
  Icon: IconType;
};

const socials: Social[] = [
  {
    href: "https://instagram.com/primeworkai",
    label: "Primework AI on Instagram",
    Icon: FaInstagram,
  },
  {
    href: "https://facebook.com/primeworkai",
    label: "Primework AI on Facebook",
    Icon: FaFacebookF,
  },
  {
    href: "https://twitter.com/primeworkai",
    label: "Primework AI on X / Twitter",
    Icon: FaTwitter,
  },
  {
    href: "https://linkedin.com/in/fmgjfish",
    label: "Primework AI on LinkedIn",
    Icon: FaLinkedinIn,
  },
  {
    href: "https://tiktok.com/@primeworkai",
    label: "Primework AI on TikTok",
    Icon: FaTiktok,
  },
];

export default function SocialIcons() {
  return (
    <div className="flex items-center gap-3">
      {socials.map(({ href, label, Icon }) => (
        <Link
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 
                     text-brand-ink/70 hover:text-[var(--brand-accent)] hover:border-[var(--brand-accent)] 
                     transition-colors bg-white shadow-sm"
        >
          <Icon className="h-4 w-4" />
        </Link>
      ))}
    </div>
  );
}





