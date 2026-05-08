import Image from "next/image";
import type { ReactNode } from "react";
import { Camera, Film, Instagram, Linkedin } from "lucide-react";

const skills = [
  "Full-Stack Engineer",
  "Videographer",
  "Editor",
] as const;

const genres = ["Documentary", "Experimental", "Editorial"] as const;

const projects = [
  {
    src: "/project1.jpg",
    label: "MURAL DOCUMENTARY",
    date: "01.25",
    href: "https://www.instagram.com/reel/DURadUxkmk0/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    src: "/project2.jpg",
    label: "SEP VISUAL REBRAND",
    date: "08.24",
    href: "https://www.figma.com/proto/3tzYzGVw8xS6CvrWwzKGXM/Branding?node-id=12-9&t=uqHaRAttkEscaSLS-0&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=12%3A9",
  },
  {
    src: "/project3.jpg",
    label: "SPARK SC",
    date: "",
    href: "https://sparksc.org/",
  },
  {
    src: "/project4.jpg",
    label: "SEP",
    date: "",
    href: "https://uscsep.com/",
  },
] as const;

const inspiration = [
  {
    title: "La La Land",
    director: "Damien Chazelle",
    src: "/film1.jpg",
  },
  {
    title: "Catch Me If You Can",
    director: "Steven Spielberg",
    src: "/film2.jpg",
  },
  {
    title: "Kill Bill",
    director: "Quentin Tarantino",
    src: "/film3.jpg",
  },
  {
    title: "Before Sunrise",
    director: "Richard Linklater",
    src: "/film4.jpg",
  },
] as const;

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-[15px] font-semibold tracking-tight text-white">
      {children}
    </h2>
  );
}

function SectionRule() {
  return <div className="h-px w-full bg-white/[0.07]" aria-hidden />;
}

export default function ProfilePage() {
  return (
    <div className="relative mx-auto max-w-[1400px] px-4 pb-24 pt-4 sm:px-6 sm:pt-5 lg:px-8 lg:pt-5">
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-10 lg:items-start">
        {/* Left column */}
        <aside className="w-full shrink-0 lg:w-[280px]">
          <div className="mx-auto w-[min(100%,280px)] lg:mx-0 lg:w-full">
            <div
              className="rounded-2xl p-[3px] shadow-[0_0_48px_-4px_rgba(45,212,191,0.45),0_0_80px_-12px_rgba(34,211,238,0.25)]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(45,212,191,0.95) 0%, rgba(34,211,238,0.75) 40%, rgba(16,185,129,0.5) 100%)",
              }}
            >
              <div className="overflow-hidden rounded-[13px] bg-[#0d0d0d]">
                <Image
                  src="/profile.jpg"
                  alt="Saborni Kundu"
                  width={560}
                  height={560}
                  className="aspect-square w-full object-cover"
                  priority
                />
              </div>
            </div>

            <div className="mt-5 flex justify-center gap-8 lg:justify-start lg:gap-9">
              <a
                href="https://www.instagram.com/sliceofsab?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noreferrer"
                className="text-zinc-300 transition hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-[22px] w-[22px]" strokeWidth={1.5} />
              </a>
              <a
                href="https://www.linkedin.com/in/sabornikundu/"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-300 transition hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-[22px] w-[22px]" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div className="mt-8">
            <SectionTitle>Skills</SectionTitle>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {skills.map((s) => (
                <li key={s}>
                  <span className="inline-flex items-center rounded-full border border-white/[0.14] bg-zinc-950/85 px-2 py-0.5 text-[10.5px] font-medium leading-tight tracking-wide text-zinc-200">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="my-6">
            <SectionRule />
          </div>

          <div>
            <SectionTitle>Genres</SectionTitle>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {genres.map((g) => (
                <li key={g}>
                  <span className="inline-flex items-center rounded-full border border-white/[0.14] bg-zinc-950/85 px-2.5 py-0.5 text-[12px] font-medium leading-tight text-zinc-200">
                    {g}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="my-6">
            <SectionRule />
          </div>

          <div>
            <SectionTitle>Education</SectionTitle>
            <div className="mt-3 border-l-[3px] border-[#f5a623] pl-4">
              <div className="flex items-baseline justify-between gap-3">
                <p className="text-[15px] font-semibold leading-snug text-white">
                  Computer Science
                </p>
                <span className="shrink-0 text-[13px] font-medium tabular-nums text-zinc-500">
                  2026
                </span>
              </div>
              <p className="mt-1 text-[13px] leading-snug text-zinc-400">
                USC Viterbi
              </p>
            </div>
          </div>
        </aside>

        {/* Right column */}
        <div className="min-w-0 flex-1">
          <h1 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-[1.12] tracking-tight text-white">
            Saborni Kundu
          </h1>
          <p className="mt-2 max-w-2xl text-[15px] font-medium italic leading-relaxed text-[#f5a623] sm:text-base">
            Full-Stack Engineer, Videographer.
          </p>
          <div className="mt-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.18] bg-black/50 px-3.5 py-1.5 text-[12px] font-medium text-white backdrop-blur-sm">
              <span
                className="h-2 w-2 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.85)]"
                aria-hidden
              />
              Available for Collaborations
            </span>
          </div>

          <p className="mt-6 max-w-3xl text-[15px] font-normal leading-[1.75] text-gray-300">
            I&apos;m at the intersection of code and creativity: I build
            full-stack products by day and film the world around me whenever I
            can. I&apos;ve spent my time at USC deep in startup culture:
            founding, building, and coding for early-stage companies, while
            also chasing the kind of projects that feel more like art than
            work. Most recently, a documentary on mural painting. Off-screen
            I&apos;m scrolling on Letterboxd, sketching new fonts, and
            developing film off my Olympus camera.
          </p>

          <div className="my-10 lg:my-11">
            <SectionRule />
          </div>

          {/* Past Projects */}
          <section>
            <SectionTitle>Past Projects</SectionTitle>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {projects.map((p) => (
                <article
                  key={p.label}
                  className="group relative overflow-hidden rounded-xl bg-zinc-900 ring-1 ring-white/[0.06]"
                >
                  <a
                    href={p.href || "#"}
                    target={p.href ? "_blank" : undefined}
                    rel={p.href ? "noreferrer" : undefined}
                    className={`block ${p.href ? "cursor-pointer" : "cursor-default"}`}
                    aria-label={p.href ? `Open ${p.label}` : undefined}
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={p.src}
                        alt=""
                        fill
                        sizes="(max-width: 1024px) 50vw, 19vw"
                        className="object-cover transition duration-300 ease-out group-hover:scale-[1.03] group-hover:brightness-110"
                      />
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent px-3 pb-2.5 pt-8">
                        <p className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-white">
                          {p.label}
                          {p.date ? (
                            <>
                              {" "}
                              <span className="font-normal text-white/70">|</span>{" "}
                              {p.date}
                            </>
                          ) : null}
                        </p>
                      </div>
                    </div>
                  </a>
                </article>
              ))}
            </div>
          </section>

          <div className="my-10 lg:my-11">
            <SectionRule />
          </div>

          {/* Looking For */}
          <section>
            <SectionTitle>Looking For</SectionTitle>
            <div className="mt-5 flex flex-col gap-4 rounded-xl border border-white/[0.08] bg-white/[0.02] p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-6">
              <div className="flex min-w-0 flex-1 items-start gap-4 sm:items-center">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-white">
                  <Camera className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <div className="min-w-0">
                  <p className="text-base font-semibold tracking-tight text-white">
                    Collaborators
                  </p>
                  <p className="mt-0.5 text-sm text-zinc-400">
                    Short Film | Documentary
                  </p>
                </div>
              </div>
              <button
                type="button"
                className="shrink-0 self-start rounded-full border border-[#f5a623] px-6 py-2.5 text-sm font-semibold text-[#f5a623] transition hover:bg-[#f5a623]/[0.08] sm:self-center"
              >
                Apply
              </button>
            </div>
          </section>

          <div className="my-10 lg:my-11">
            <SectionRule />
          </div>

          {/* Inspiration */}
          <section>
            <SectionTitle>Inspiration</SectionTitle>
            <ul className="mt-5 divide-y divide-white/[0.06] rounded-xl border border-white/[0.08] bg-white/[0.02] px-1">
              {inspiration.map((film) => (
                <li
                  key={film.title}
                  className="flex items-center gap-4 px-4 py-4 first:rounded-t-[10px] last:rounded-b-[10px]"
                >
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-md ring-1 ring-white/[0.08]">
                    <Image
                      src={film.src}
                      alt=""
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[15px] font-semibold tracking-tight text-white">
                      {film.title}
                    </p>
                    <p className="mt-0.5 text-[13px] text-zinc-400">
                      {film.director}
                    </p>
                  </div>
                  <Film
                    className="h-5 w-5 shrink-0 text-zinc-500"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
