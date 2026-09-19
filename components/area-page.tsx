import { getUpdatesByArea, type Area } from "@/lib/wolvie-data";
import { Reveal } from "./reveal";
import { UpdateList } from "./update-list";
import { WolvieMark } from "./wolvie-mark";

export function AreaPage({ area }: { area: Area }) {
  const updates = getUpdatesByArea(area.id);

  return (
    <main className="areaMain">
      <section className="areaHero shell line">
        <Reveal>
          <div className="kicker">Wolvie House</div>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="areaTitle">
            {area.name}
            <span className="orange">.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="areaIntro">{area.intro}</p>
        </Reveal>
        <div className="areaHeroMark" aria-hidden="true">
          <WolvieMark />
        </div>
      </section>

      <section className="section shell line">
        <Reveal>
          <div className="sectionLabel">Currently</div>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="areaCurrentlyLead">
            A place for active projects, activities and initiatives.
          </p>
        </Reveal>

        <div className="areaSections">
          {area.sections.map((section, i) => (
            <Reveal key={section.title} delay={i * 0.06} className="areaSectionCard">
              <h3 className="areaSectionTitle">{section.title}</h3>
              <div className="areaSectionBody">
                <p className="areaSectionNote">{section.note}</p>
                {section.items && section.items.length > 0 ? (
                  <ul className="areaSectionItems">
                    {section.items.map((item) => (
                      <li key={item.name}>
                        <span>{item.name}</span>
                        {item.tag && <span className="areaTag">{item.tag}</span>}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <span className="areaSoon">Coming soon</span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="updates" className="section shell line">
        <Reveal>
          <div className="sectionLabel">Updates</div>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="areaCurrentlyLead">
            A chronological record of what is happening in {area.name}.
          </p>
        </Reveal>
        <UpdateList updates={updates} />
      </section>
    </main>
  );
}
