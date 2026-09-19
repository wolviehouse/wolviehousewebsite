import Link from "next/link";
import { getLatestUpdates } from "@/lib/wolvie-data";
import { Reveal } from "./reveal";
import { UpdateList } from "./update-list";

export function LatestUpdates() {
  const latest = getLatestUpdates(3);

  return (
    <section className="section shell line">
      <div className="latestHead">
        <Reveal>
          <h2 className="latestTitle">Latest from Wolvie</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Link className="exploreLink viewAll" href="/updates">
            View all updates <span>→</span>
          </Link>
        </Reveal>
      </div>

      <UpdateList updates={latest} />
    </section>
  );
}
