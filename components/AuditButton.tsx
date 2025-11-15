"use client";
import Link from "next/link";

const AUDIT_URL = "https://calendly.com/fishermarketgroup/15min";

export function AuditButton({
  children = "Book a 15-Min Audit",
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={AUDIT_URL}
      target="_blank"
      rel="noreferrer"
      className={`btn btn-primary ${className}`}
    >
      {children}
    </Link>
  );
}
