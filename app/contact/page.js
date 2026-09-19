
import Reveal from "../../components/Reveal";
import Monogram from "../../components/Monogram";

export const metadata = {
  title: "Contact — WOLVIE"
};

export default function Contact() {
  return (
    <main>
      <section className="contactPage shell">
        <div className="sectionLabel">Contact</div>
        <div className="contactPageGrid">
          <Reveal>
            <h1>
              Let’s see where
              <br />
              it can go<span className="orange">.</span>
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <div className="contactPageCopy">
              <p>
                Open to products, partnerships, markets, collaborations and ideas
                worth exploring.
              </p>
              <a className="emailLink large" href="mailto:harun@wolviehouse.com">
                harun@wolviehouse.com <span>↗</span>
              </a>
            </div>
          </Reveal>
        </div>

        <Monogram className="contactMark" />
      </section>
    </main>
  );
}
