import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-[color:var(--brand-ink-2)] text-white">
      <div className="container py-10 grid md:grid-cols-3 gap-8 text-sm">

        {/* Brand + mission */}
        <div>
          <div className="font-semibold mb-2">Primework AI</div>
          <p className="text-sm text-gray-300 leading-relaxed">
            We optimize the work that runs your business — powered by AI.
          </p>
        </div>

        {/* Nav */}
        <div>
          <div className="font-semibold mb-2">Navigate</div>
          <ul className="space-y-1">
            <li><Link href="/automation" className="footer-link">AI Automation</Link></li>
            <li><Link href="/web-development" className="footer-link">Web Development</Link></li>
            <li><Link href="/pricing" className="footer-link">Pricing</Link></li>
            <li><Link href="/contact" className="footer-link">Contact</Link></li>

          </ul>
        </div>

        {/* Legal */}
        <div>
          <div className="font-semibold mb-2">Legal</div>
          <ul className="space-y-1">
            <li><Link href="/privacy" className="footer-link">Privacy</Link></li>
            <li><Link href="/terms" className="footer-link">Terms</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Primework AI. All rights reserved.
      </div>
    </footer>
  );
}

