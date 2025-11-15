import Link from "next/link";
import { AuditButton } from "@/components/AuditButton";


type Variant = "navy" | "sand";

export default function HeroCentered({ variant = "navy" }: { variant?: Variant }) {
  const isNavy = variant === "navy";

  const wrapper =
  isNavy
    ? "text-white bg-gradient-to-b from-[#081520] via-[#0B1C2C] to-[#000000]"
    : "text-[color:#0B1C2C] bg-[color:#E8DCC3]";



  const subText =
    isNavy ? "text-white/80" : "text-[color:#2B3B4A]";

  const ctaNote =
    isNavy ? "text-white/60" : "text-[color:#32475A]/70";

  // Outline button styles tuned per background for WCAG contrast
  const outlineBtn = isNavy
    ? "border border-white text-white bg-transparent hover:bg-white hover:text-[color:#0B1C2C]"
    : "border border-[color:#0B1C2C] text-[color:#0B1C2C] bg-transparent hover:bg-[color:#0B1C2C] hover:text-white";

  return (
    <section className="w-full py-28 bg-gradient-to-b from-[#0B1C2C] via-[#0E1622] to-[#0B1C2C] text-white text-center">

      <div className="container py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">

            Where your work flows.
          </h1>

          <p className={`text-lg md:text-xl ${subText}`}>
            We optimize the work that runs your business — powered by AI.
          </p>

          <p className={`text-base ${ctaNote}`}>
            Stop losing leads. Start getting paid faster.
          </p>

          <div className="mt-4 flex items-center justify-center gap-3">
            <AuditButton className="hidden sm:inline-flex" />

            <Link href="/automation" className={`btn ${outlineBtn}`}>
              See How It Works
            </Link>
          </div>

          <p className={`text-sm ${ctaNote}`}>
            No pressure. No contracts. Just clarity.
          </p>
        </div>
      </div>
    </section>
  );
}
