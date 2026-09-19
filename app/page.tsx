import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { FocusStory } from "@/components/focus-story";
import { Approach } from "@/components/approach";
import { Contact } from "@/components/contact";

const focusAreas = [
  {
    n: "01",
    title: "Trade",
    text: "We explore cross-border opportunities, connect products with markets, and build commercial bridges wherever there is potential.",
  },
  {
    n: "02",
    title: "Brands",
    text: "We create brands from the ground up — from product and positioning to identity, market entry and growth.",
  },
  {
    n: "03",
    title: "Community",
    text: "We bring people together through conversations, meetups, collaborations and communities built around shared ambition.",
  },
  {
    n: "04",
    title: "Consulting",
    text: "We turn experience into practical support across business development, go-to-market, growth and execution.",
  },
  {
    n: "05",
    title: "Ventures",
    text: "We explore new ideas, test opportunities and build the ones with enough potential to become something real.",
  },
];

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

      <Hero />
      <About />
      <FocusStory items={focusAreas} />
      <Approach />
      <Contact />

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
