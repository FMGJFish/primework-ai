import Image from "next/image";
import HeroCentered from "@/components/HeroCentered";
import ProblemSolution from "@/components/ProblemSolution";
import InteractiveFlow from "@/components/InteractiveFlow";
import TierTeaser from "@/components/TierTeaser";
import CTA from "@/components/CTA";
import ResultsBeforeAfter from "@/components/ResultsBeforeAfter";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import CaseStudies from "@/components/CaseStudies";
import IntegrationsStrip from "@/components/IntegrationsStrip";
import GuaranteeBlock from "@/components/GuaranteeBlock";
import Testimonials from "@/components/Testimonials";
import HowWeWork from "@/components/HowWeWork";



export default function Home() {
  return (
    <>
      <HeroCentered variant="navy" />
      {/* Tiny trust bar under hero */}
      <a
        href="#guarantee"
        className="block text-center text-xs md:text-sm text-brand-ink/60 mt-2 hover:text-brand-accent transition"
      >
        Backed by the Primework 30-Day Optimization Guarantee →
      </a>
      <ProblemSolution />

      {/* ---- Section divider ---- */}
      <div className="my-16 h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent" />

      <InteractiveFlow />
      <ResultsBeforeAfter />
      <WhoThisIsFor />
      <CaseStudies />
      <IntegrationsStrip />
      <GuaranteeBlock />
      <TierTeaser />
      <div className="h-px bg-gradient-to-r from-transparent via-slate-300/70 to-transparent mb-12" />
      <Testimonials />
      <HowWeWork />
      <CTA />
    </>
  );
}



