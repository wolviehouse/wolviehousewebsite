import Link from "next/link";
import { areas } from "@/lib/wolvie-data";
import { Reveal } from "./reveal";
import { WolvieMark } from "./wolvie-mark";

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="section shell line wwdSection">
      <Reveal>
        <div className="sectionLabel">What we do</div>
      </Reveal>

      <div className="wwd">
        {areas.map((area, i) => (
          <article
            key={area.id}
            className={`wwdItem${i % 2 === 1 ? " wwdItem--split" : ""}`}
          >
            <Reveal className="wwdHead">
              <div className="wwdMarker">
                <span className="orange">—</span>
              </div>
              <h3 className="wwdName">{area.name}</h3>
            </Reveal>

            <Reveal delay={0.1} className="wwdBody">
              <p className="wwdText">{area.teaser}</p>
              <Link className="exploreLink" href={`/${area.id}`}>
                Explore {area.name} <span>→</span>
              </Link>
            </Reveal>
          </article>
        ))}
      </div>

      <div className="wwdMark" aria-hidden="true">
        <WolvieMark />
      </div>
    </section>
  );
}
