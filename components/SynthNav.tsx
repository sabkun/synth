"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navLink =
  "text-sm text-zinc-400 transition-colors hover:text-zinc-200 whitespace-nowrap";

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={`shrink-0 text-zinc-500 transition-transform ${open ? "rotate-180" : ""}`}
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SynthNav() {
  const pathname = usePathname();
  const [jobsOpen, setJobsOpen] = useState(false);
  const jobsRefDesktop = useRef<HTMLDivElement>(null);
  const jobsRefMobile = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      const t = e.target as Node;
      if (
        jobsRefDesktop.current?.contains(t) ||
        jobsRefMobile.current?.contains(t)
      ) {
        return;
      }
      setJobsOpen(false);
    }
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#0d0d0d]/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[1400px] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="shrink-0 rounded-md outline-none ring-synth-accent/40 focus-visible:ring-2"
        >
          <Image
            src="/synth-logo.png"
            alt="synth"
            width={120}
            height={32}
            className="object-contain"
            priority
          />
        </Link>

        <div className="mx-auto hidden min-w-0 max-w-xl flex-1 md:flex md:justify-center">
          <div className="flex w-full max-w-md items-center gap-0 rounded-full border border-white/[0.08] bg-white/[0.03] pl-3 pr-1 py-1">
            <svg
              className="h-4 w-4 shrink-0 text-zinc-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="search"
              placeholder="Search creatives, projects, roles…"
              className="min-w-0 flex-1 bg-transparent px-2 py-1.5 text-sm text-zinc-200 placeholder:text-zinc-600 outline-none"
              aria-label="Search"
            />
            <div className="relative shrink-0" ref={jobsRefDesktop}>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setJobsOpen((o) => !o);
                }}
                className="flex items-center gap-1 rounded-full border border-white/[0.06] bg-white/[0.04] px-2.5 py-1.5 text-xs font-medium text-zinc-300 transition hover:bg-white/[0.07] hover:text-white"
                aria-expanded={jobsOpen}
                aria-haspopup="listbox"
              >
                Jobs
                <ChevronDown open={jobsOpen} />
              </button>
              {jobsOpen ? (
                <ul
                  role="listbox"
                  className="absolute right-0 top-full z-50 mt-1 min-w-[9rem] overflow-hidden rounded-lg border border-white/[0.08] bg-[#141414] py-1 shadow-xl"
                >
                  {["Jobs", "People", "Projects"].map((item) => (
                    <li key={item}>
                      <button
                        type="button"
                        className="block w-full px-3 py-2 text-left text-xs text-zinc-300 hover:bg-white/[0.05] hover:text-white"
                        onClick={() => setJobsOpen(false)}
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </div>

        <nav className="ml-auto flex items-center gap-1 sm:gap-2 lg:gap-4">
          <Link
            href="/community"
            className={`hidden lg:inline ${navLink} ${pathname === "/community" ? "text-white" : ""}`}
          >
            Community
          </Link>
          <Link
            href="/profile"
            className={`hidden lg:inline ${navLink} ${pathname === "/profile" ? "text-white" : ""}`}
          >
            My Profile
          </Link>
          <button
            type="button"
            className="rounded-full p-2 text-zinc-500 transition hover:bg-white/[0.05] hover:text-zinc-300"
            aria-label="Notifications"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
            >
              <path d="M18 8A6 6 0 106 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 01-3.46 0" />
            </svg>
          </button>
          <Link
            href="/profile"
            className="ml-0.5 shrink-0 rounded-full outline-none ring-synth-accent/40 focus-visible:ring-2"
            aria-label="My profile"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-zinc-600 to-zinc-800 text-xs font-semibold text-zinc-200 ring-1 ring-white/10">
              SK
            </span>
          </Link>
        </nav>
      </div>

      {/* Mobile search row */}
      <div className="border-t border-white/[0.04] px-4 py-2 md:hidden">
        <div className="flex items-center gap-0 rounded-full border border-white/[0.08] bg-white/[0.03] pl-3 pr-1 py-1">
          <svg
            className="h-4 w-4 shrink-0 text-zinc-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="search"
            placeholder="Search…"
            className="min-w-0 flex-1 bg-transparent px-2 py-1 text-sm text-zinc-200 placeholder:text-zinc-600 outline-none"
            aria-label="Search"
          />
          <div className="relative shrink-0" ref={jobsRefMobile}>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setJobsOpen((o) => !o);
              }}
              className="flex items-center gap-0.5 rounded-full border border-white/[0.06] bg-white/[0.04] px-2 py-1 text-[11px] font-medium text-zinc-300"
            >
              Jobs
              <ChevronDown open={jobsOpen} />
            </button>
            {jobsOpen ? (
              <ul
                role="listbox"
                className="absolute right-0 top-full z-50 mt-1 min-w-[9rem] overflow-hidden rounded-lg border border-white/[0.08] bg-[#141414] py-1 shadow-xl"
              >
                {["Jobs", "People", "Projects"].map((item) => (
                  <li key={item}>
                    <button
                      type="button"
                      className="block w-full px-3 py-2 text-left text-xs text-zinc-300 hover:bg-white/[0.05] hover:text-white"
                      onClick={() => setJobsOpen(false)}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
        <div className="mt-2 flex gap-3 overflow-x-auto pb-1 text-xs">
          <Link href="/community" className={navLink}>
            Community
          </Link>
          <Link href="/profile" className={navLink}>
            My Profile
          </Link>
        </div>
      </div>
    </header>
  );
}
