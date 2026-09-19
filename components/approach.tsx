"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { WolvieMark } from "./wolvie-mark";

const ease = [0.16, 1, 0.3, 1] as const;
const words = ["Explore.", "Build.", "Connect.", "Grow."];

export function Approach() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [-9, 9]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.82, 1.16]);
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="approach" ref={ref} className="darkSection">
      <div className="shell darkGrid">
        <motion.div className="markWrap" style={{ rotate, scale, y }}>
          <WolvieMark light />
        </motion.div>

        <div>
          <div className="sectionLabel lightLabel">03 / Approach</div>
          <h2 className="approachWords">
            {words.map((w, i) => (
              <motion.span
                key={w}
                className="approachWord"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
                transition={{ duration: 0.6, delay: i * 0.12, ease }}
              >
                {w === "Grow." ? (
                  <>
                    Grow<span className="orange">.</span>
                  </>
                ) : (
                  w
                )}
              </motion.span>
            ))}
          </h2>
          <motion.p
            className="darkText"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
          >
            We prefer motion over endless planning. Start with an opportunity.
            Understand it. Test it. Build around what works.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
