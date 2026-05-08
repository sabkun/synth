import Link from "next/link";
import { PageBloom } from "@/components/PageBloom";

const features = [
  {
    title: "Visual Portfolio",
    body: "Build a profile that actually looks like your work.",
  },
  {
    title: "Smart Matching",
    body: "An algorithm that connects you with the right collaborators.",
  },
  {
    title: "Creative Community",
    body: "Browse, discover, and reach out to creatives around you.",
  },
] as const;

export default function LandingPage() {
  return (
    <div className="relative">
      <PageBloom />
      <section className="relative mx-auto flex min-h-[calc(100svh-3.5rem)] max-w-[1400px] flex-col justify-center px-4 pb-20 pt-6 sm:px-6 sm:pb-24 sm:pt-8 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            Invite-only beta
          </p>
          <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl sm:leading-[1.08]">
            Where Creatives{" "}
            <span className="text-zinc-100">Find Each Other.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg">
            A visual portfolio and collaboration platform for dancers,
            directors, musicians, photographers, and every creative in between.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="#"
              className="inline-flex h-11 min-w-[160px] items-center justify-center rounded-full bg-[#f5a623] px-8 text-sm font-semibold text-[#0d0d0d] transition hover:bg-[#ffb84d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f5a623]"
            >
              Request Access
            </Link>
            <Link
              href="#how-it-works"
              className="inline-flex h-11 min-w-[160px] items-center justify-center rounded-full border border-white/[0.12] bg-transparent px-8 text-sm font-medium text-zinc-200 transition hover:border-white/[0.2] hover:bg-white/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="relative mx-auto max-w-[1400px] border-t border-white/[0.06] px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <article
              key={f.title}
              className="group rounded-2xl border border-white/[0.06] border-l-[3px] border-l-[#f5a623] bg-white/[0.02] p-10 transition hover:border-white/[0.1] hover:border-l-[#f5a623] hover:bg-white/[0.03]"
            >
              <h2 className="text-lg font-semibold tracking-tight text-white">
                {f.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {f.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/[0.06] py-10 text-center text-xs text-zinc-600">
        © {new Date().getFullYear()} Synth. All rights reserved.
      </footer>
    </div>
  );
}
