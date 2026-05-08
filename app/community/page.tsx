 "use client";

import Image from "next/image";
import { useState } from "react";

const suggestionCards = [
  {
    name: "Allison Wong",
    match: "93% match",
    matchTone: "green",
    image: "/allison.jpg",
    tags: ["Producer", "Indie", "Pop"],
  },
  {
    name: "Ethan Palosh",
    match: "78% match",
    matchTone: "amber",
    image: "/ethan.jpg",
    tags: ["Photographer"],
  },
  {
    name: "Sadie Duca",
    match: "89% match",
    matchTone: "amber",
    image: "/sadie.jpg",
    tags: ["Producer", "R&B", "Indie"],
  },
  {
    name: "Hahnlin",
    match: "83% match",
    matchTone: "amber",
    image: "/hahnlin.jpg",
    tags: ["Musician", "Folk"],
  },
  {
    name: "Jay You",
    match: "96% match",
    matchTone: "amber",
    image: "/jay.jpg",
    tags: ["Producer", "Pop", "Indie"],
  },
] as const;

const collaborations = [
  {
    title: "Music Engineer + Film Scorer",
    image: "/collab1.jpg",
  },
  {
    title: "Indie Band Music Video",
    image: "/collab2.jpg",
  },
] as const;

function FilterCheckbox({ label }: { label: string }) {
  return (
    <label className="flex items-center gap-2 text-[13px] text-zinc-300">
      <input
        type="checkbox"
        className="h-[17px] w-[17px] appearance-none rounded-[3px] border border-white/25 bg-transparent outline-none transition checked:border-[#f5a623] checked:bg-[#f5a623]"
      />
      <span>{label}</span>
    </label>
  );
}

function FilterSection({
  title,
  options,
  withSeeMore = false,
}: {
  title: string;
  options: readonly string[];
  withSeeMore?: boolean;
}) {
  return (
    <section>
      <h3 className="text-[20px] font-semibold leading-none text-white">{title}</h3>
      <div className="mt-3 space-y-1.5">
        {options.map((option) => (
          <FilterCheckbox key={option} label={option} />
        ))}
      </div>
      {withSeeMore ? (
        <button
          type="button"
          className="mt-1 text-[14px] font-semibold text-[#f5a623] transition hover:text-[#ffb84d]"
        >
          ↘ See More
        </button>
      ) : null}
    </section>
  );
}

export default function CommunityPage() {
  const [hourlyRate, setHourlyRate] = useState(100);
  const histogramBars = [42, 56, 72, 45, 35, 22, 28, 18];

  return (
    <div className="mx-auto max-w-[1400px] overflow-x-hidden px-0 pb-8 pt-0">
      <div className="flex min-h-[calc(100svh-3.5rem)] flex-row overflow-visible">
        <aside className="min-w-[190px] shrink-0 border-r border-white/[0.08] px-6 py-4 lg:px-5 lg:py-5">
          <section>
            <h2 className="text-[20px] font-semibold leading-none text-white">Location</h2>
            <button
              type="button"
              className="mt-3 flex h-10 w-full items-center justify-between rounded-[6px] border border-white/20 bg-transparent px-3 text-left text-[14px] text-zinc-400"
            >
              <span>Select location</span>
              <span className="text-zinc-500">▾</span>
            </button>
          </section>

          <div className="mt-5 space-y-5">
            <FilterSection
              title="Roles"
              options={["Director", "Songwriter", "Producer", "Videographer"]}
              withSeeMore
            />
            <FilterSection
              title="Style"
              options={["Classical", "Hip Hop/Rap", "Country", "Electronic"]}
              withSeeMore
            />

            <section>
              <h3 className="text-[20px] font-semibold leading-none text-white">Hourly rate</h3>
              <div className="mt-3 flex h-[94px] items-end gap-[6px] rounded-md">
                {histogramBars.map((h, i) => {
                  const threshold = 20 + ((i + 1) / histogramBars.length) * 80;
                  const active = hourlyRate >= threshold;
                  return (
                  <span
                    key={i}
                    className="w-[10px] rounded-t-full bg-[#f5a623] transition-opacity"
                    style={{ height: `${h}px`, opacity: active ? 1 : 0.2 }}
                  />
                  );
                })}
              </div>
              <div className="mt-1.5 flex items-center justify-between text-[11px] font-semibold text-zinc-200">
                <span className="rounded-md border border-white/20 bg-[#1a1a1a] px-2 py-0.5">$20</span>
                <span className="rounded-md border border-white/20 bg-[#1a1a1a] px-2 py-0.5">$100+</span>
              </div>
              <input
                type="range"
                min={20}
                max={100}
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="mt-2 h-2 w-full cursor-pointer accent-[#f5a623]"
                aria-label="Hourly rate"
              />
            </section>

            <FilterSection title="Goals" options={["Director", "Songwriter", "Producer"]} />
          </div>
        </aside>

        <main className="min-w-0 flex-1 overflow-visible px-6 py-5 lg:px-7">
          <section className="overflow-visible">
            <h2 className="text-[34px] font-semibold tracking-tight text-white">Suggestions</h2>
            <div className="mt-4 flex flex-nowrap gap-4 overflow-x-auto pb-2 pt-3">
              {suggestionCards.map((card) => (
                <article
                  key={card.name}
                  className="group h-[260px] w-[200px] shrink-0 overflow-visible rounded-[10px] border border-white/[0.07] bg-[#1a1a1d] transition-transform duration-200 hover:z-10 hover:scale-[1.05] hover:-translate-y-1 hover:brightness-110"
                >
                  <div className="h-full w-full overflow-hidden rounded-[10px]">
                    <div className="relative h-[190px] w-full overflow-hidden">
                      <Image
                        src={card.image}
                        alt={card.name}
                        fill
                        sizes="200px"
                        className="object-cover"
                      />
                      <span
                        className={`absolute right-2 top-2 rounded-full px-1.5 py-0.5 text-[9px] font-semibold leading-none ${
                          card.matchTone === "green"
                            ? "bg-emerald-300/85 text-emerald-950"
                            : "bg-[#d6b56a]/90 text-[#1f1a0f]"
                        }`}
                      >
                        {card.match}
                      </span>
                    </div>
                    <div className="px-3 pb-2 pt-2">
                      <h3 className="truncate text-[17px] font-semibold leading-tight text-white">
                        {card.name}
                      </h3>
                      <div className="mt-1.5 flex flex-wrap gap-1.5">
                        {card.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/20 bg-black/35 px-2 py-0.5 text-[12px] leading-none text-zinc-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-[34px] font-semibold tracking-tight text-white">
              Top Collaborations This Week
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-2">
              {collaborations.map((collab) => (
                <article
                  key={collab.title}
                  className="group relative overflow-hidden rounded-[10px] border border-white/[0.07] transition hover:brightness-110"
                >
                  <div className="relative aspect-[16/6]">
                    <Image
                      src={collab.image}
                      alt={collab.title}
                      fill
                      sizes="(max-width: 1280px) 100vw, 48vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-black/85 via-black/55 to-transparent" />
                    <h3 className="absolute bottom-3 left-4 text-[44px] font-semibold tracking-tight text-white">
                      {collab.title}
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
