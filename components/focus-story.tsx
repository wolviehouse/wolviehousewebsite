"use client";

import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

type FocusArea = { n: string; title: string; text: string };

export function FocusStory({ items }: { items: FocusArea[] }) {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(items.length - 1, Math.max(0, Math.floor(v * items.length)));
    setActive(idx);
  });

  const current = items[active];

  return (
    <section
      id="focus"
      ref={ref}
      className="focusStory"
      style={{ height: `${items.length * 100}vh` }}
    >
      <div className="focusSticky shell">
        <div className="focusStickyHead">
          <div className="sectionLabel">02 / Focus areas</div>
          <p className="focusIntro">
            Different directions, connected by the same mindset: curiosity,
            execution and commercial instinct.
          </p>
        </div>

        <div className="focusStage">
          <div className="focusRail" aria-hidden="true">
            {items.map((item, i) => (
              <div
                key={item.title}
                className={`focusTick${i === active ? " isActive" : ""}`}
              >
                <span className="focusTickNum">{item.n}</span>
                <span className="focusTickBar" />
              </div>
            ))}
          </div>

          <div className="focusPanel">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.title}
                className="focusPanelInner"
                initial={{ opacity: 0, y: 34 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -26 }}
                transition={{ duration: 0.55, ease }}
              >
                <div className="focusPanelNum">
                  {current.n}
                  <span className="focusOf">/ 05</span>
                </div>
                <h3 className="focusPanelTitle">{current.title}</h3>
                <p className="focusPanelText">{current.text}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
