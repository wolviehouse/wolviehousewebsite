
import Link from "next/link";
import Reveal from "./Reveal";
import Monogram from "./Monogram";

export default function AreaPage({ area }) {
  return (
    <main>
      <section className="areaHero shell pageLine">
        <div className="sectionLabel">{area.kicker}</div>
        <Reveal>
          <h1 className="areaTitle">{area.headline}</h1>
        </Reveal>
        <div className="areaHeroBottom">
          <Reveal delay={100}>
            <p className="areaIntro">{area.intro}</p>
          </Reveal>
          <Monogram className="areaMark" />
        </div>
      </section>

      <section className="pageSection shell pageLine">
        <div className="sectionLabel">What it means</div>
        <div className="split">
          <Reveal><h2>{area.title} at Wolvie.</h2></Reveal>
          <Reveal delay={100}>
            <div className="bodyCopy">
              <p>{area.overview}</p>
              {area.note ? <p className="note">{area.note}</p> : null}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pageSection shell pageLine">
        <div className="sectionLabel">How we think about it</div>
        <div className="pillarList">
          {area.pillars.map(([title, text], index) => (
            <Reveal key={title} delay={index * 70}>
              <article className="pillarRow">
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="areaClosing">
        <div className="shell closingInner">
          <Reveal>
            <h2>{area.closing}</h2>
          </Reveal>
          <Link className="textLink lightLink" href="/contact">
            Talk to Wolvie <span>↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
