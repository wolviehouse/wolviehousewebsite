const focusAreas = [
  {
    n: "01",
    title: "Trade",
    text: "We explore cross-border opportunities, connect products with markets, and build commercial bridges wherever there is potential."
  },
  {
    n: "02",
    title: "Brands",
    text: "We create brands from the ground up — from product and positioning to identity, market entry and growth."
  },
  {
    n: "03",
    title: "Community",
    text: "We bring people together through conversations, meetups, collaborations and communities built around shared ambition."
  },
  {
    n: "04",
    title: "Consulting",
    text: "We turn experience into practical support across business development, go-to-market, growth and execution."
  },
  {
    n: "05",
    title: "Ventures",
    text: "We explore new ideas, test opportunities and build the ones with enough potential to become something real."
  }
];

function WolvieMark({ light = false }: { light?: boolean }) {
  const main = light ? "#F4F1EA" : "#111111";
  return (
    <svg
      className="wolvieMark"
      viewBox="0 0 260 170"
      role="img"
      aria-label="Wolvie monogram"
    >
      <polygon points="26,28 84,28 132,113 101,156" fill={main} />
      <polygon points="103,28 161,28 209,113 178,156" fill={main} />
      <polygon points="198,28 246,28 219,84" fill="#FF5A2F" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="siteHeader shell">
        <a className="wordmark" href="#top">
          WOLVIE<span>.</span>
        </a>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#focus">Focus</a>
          <a href="#approach">Approach</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="top" className="hero shell line">
        <div className="kicker">Wolvie House</div>
        <div className="heroGrid">
          <div className="heroLeft">
            <h1>
              Different directions.
              <br />
              One house<span className="orange">.</span>
            </h1>
            <div className="orangeLine" />
          </div>

          <div className="heroRight">
            <p className="lead">
              Wolvie House is a home for opportunities, ideas and businesses
              across trade, brands, community, consulting and ventures.
            </p>

            <div className="actions">
              <a className="button dark" href="#focus">
                Explore Wolvie <span>→</span>
              </a>
              <a className="button light" href="mailto:harun@wolviehouse.com">
                Get in touch <span>→</span>
              </a>
            </div>
          </div>
        </div>

        <div className="heroMark">
          <WolvieMark />
        </div>
      </section>

      <section id="about" className="section shell line">
        <div className="sectionLabel">01 / About</div>
        <div className="twoCol">
          <h2>
            Built to move
            <br />
            between worlds.
          </h2>
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
        </div>
      </section>

      <section id="focus" className="section shell line">
        <div className="sectionLabel">02 / Focus areas</div>
        <div className="sectionHeading">
          <h2>Five ways we build.</h2>
          <p>
            Different directions, connected by the same mindset:
            curiosity, execution and commercial instinct.
          </p>
        </div>

        <div className="focusGrid">
          {focusAreas.map((item) => (
            <article className="focusCard" key={item.title}>
              <div className="focusTop">
                <span>{item.n}</span>
                {item.n === "01" && <span className="spark" />}
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="approach" className="darkSection">
        <div className="shell darkGrid">
          <div className="markWrap">
            <WolvieMark light />
          </div>

          <div>
            <div className="sectionLabel lightLabel">03 / Approach</div>
            <h2>
              Explore.
              <br />
              Build.
              <br />
              Connect.
              <br />
              Grow<span className="orange">.</span>
            </h2>
            <p className="darkText">
              We prefer motion over endless planning. Start with an opportunity.
              Understand it. Test it. Build around what works.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="section shell line contact">
        <div className="sectionLabel">04 / Contact</div>
        <div className="twoCol contactGrid">
          <h2>
            Let’s see where
            <br />
            it can go<span className="orange">.</span>
          </h2>
          <div className="bodyCopy">
            <p>
              Open to products, partnerships, markets, collaborations and ideas
              worth exploring.
            </p>
            <a className="email" href="mailto:harun@wolviehouse.com">
              harun@wolviehouse.com <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <div>
          <div className="wordmark footerLogo">
            WOLVIE<span>.</span>
          </div>
          <div className="footerSub">Different directions. One house.</div>
        </div>

        <div className="footerList">
          <span>Trade</span>
          <span>Brands</span>
          <span>Community</span>
          <span>Consulting</span>
          <span>Ventures</span>
        </div>

        <div className="copyright">© 2026 Wolvie House</div>
      </footer>
    </main>
  );
}
