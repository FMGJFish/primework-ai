// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-white text-2xl"
        style={{ background: "var(--brand-accent)" }}
      >
        P
      </div>

      <h1 className="mt-6 text-3xl md:text-4xl font-semibold text-brand-ink">
        Page Not Found
      </h1>

      <p className="mt-3 text-brand-ink/70 max-w-md">
        The page you’re looking for doesn’t exist or may have been moved.
      </p>

      <Link
        href="/"
        className="mt-6 btn btn-primary px-6 py-3 text-sm font-medium"
      >
        Go Back Home
      </Link>
    </main>
  );
}

