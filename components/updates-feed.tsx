"use client";

import { useMemo, useState } from "react";
import { updates, getAreaName } from "@/lib/wolvie-data";
import { Reveal } from "./reveal";
import { UpdateList } from "./update-list";

const filters = [
  "All",
  "Trade",
  "Brands",
  "Community",
  "Consulting",
  "Ventures",
] as const;

export function UpdatesFeed() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const sorted = useMemo(
    () => [...updates].sort((a, b) => b.date.localeCompare(a.date)),
    [],
  );

  const filtered = useMemo(
    () =>
      active === "All"
        ? sorted
        : sorted.filter((u) => getAreaName(u.area) === active),
    [active, sorted],
  );

  return (
    <main className="areaMain">
      <section className="areaHero shell line">
        <Reveal>
          <div className="kicker">Journal</div>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="areaTitle">
            Updates from Wolvie<span className="orange">.</span>
          </h1>
        </Reveal>
      </section>

      <section className="section shell line">
        <div className="filters">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`filterBtn${active === filter ? " isActive" : ""}`}
              onClick={() => setActive(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <UpdateList updates={filtered} />
      </section>
    </main>
  );
}
