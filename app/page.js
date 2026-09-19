
import Link from "next/link";
import Monogram from "../components/Monogram";
import Reveal from "../components/Reveal";
import { homeAreas } from "../data/site";

export default function Home() {
  return (
    <main>
      <section className="hero shell pageLine">
        <div className="sectionLabel">Wolvie House</div>

        <div className="heroGrid">
          <Reveal>
            <div>
              <h1>
                Different directions.
                <br />
                One house<span className="orange">.</span>
              </h1>
              <div className="orangeRule" />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="heroSide">
              <p className="lead">
                Wolvie House is a home for opportunities, ideas and businesses
                across trade, brands, community, consulting and ventures.
              </p>
              <div className="actions">
                <a className="button darkButton" href="#what-we-do">
                  Explore Wolvie <span>→</span>
                </a>
                <Link className="button lightButton" href="/contact">
                  Get in touch <span>→</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="heroMonogramWrap">
          <Monogram className="heroMonogram" />
        </div>
      </section>

      <section id="about" className="pageSection shell pageLine">
        <div className="sectionLabel">About</div>
        <div className="split">
          <Reveal>
            <h2>
              Built to move
              <br />
              between worlds.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="bodyCopy">
              <p>
                Wolvie House is not tied to one industry, one product or one way
                of building.
              </p>
              <p>
                We follow strong opportunities, connect people and markets,
                create brands, test ideas and turn useful experience into real
                business.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="what-we-do" className="story">
        {homeAreas.map((area, index) => (
          <section
            key={area.title}
            className={`storyPanel ${area.tone} ${index === 2 ? "storyPanelWide" : ""}`}
          >
            <div className="shell storyInner">
              <Reveal>
                <div className="storyTitleWrap">
                  <h2 className="storyTitle">{area.title}</h2>
                  <span className="storySpark" />
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="storyCopy">
                  <p>{area.text}</p>
                  <Link href={area.href} className="textLink">
                    Explore {area.title} <span>↗</span>
                  </Link>
                </div>
              </Reveal>
            </div>
          </section>
        ))}
      </section>

      <section id="approach" className="darkSection">
        <div className="shell darkGrid">
          <div className="darkMarkWrap">
            <Monogram light className="darkMark" />
          </div>
          <div>
            <div className="sectionLabel lightLabel">Approach</div>
            <Reveal>
              <h2 className="approachTitle">
                Explore.
                <br />
                Build.
                <br />
                Connect.
                <br />
                Grow<span className="orange">.</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="darkText">
                We prefer motion over endless planning. Start with an opportunity.
                Understand it. Test it. Build around what works.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pageSection shell pageLine contactTease">
        <div className="sectionLabel">Contact</div>
        <div className="split">
          <Reveal>
            <h2>
              Let’s see where
              <br />
              it can go<span className="orange">.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="bodyCopy">
              <p>
                Open to products, partnerships, markets, collaborations and ideas
                worth exploring.
              </p>
              <a className="emailLink" href="mailto:harun@wolviehouse.com">
                harun@wolviehouse.com <span>↗</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
