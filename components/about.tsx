"use client";

import { motion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

const paragraphs = [
  "Wolvie House is not tied to one industry, one product or one way of building.",
  "We follow strong opportunities, connect people and markets, create brands, test ideas and turn useful experience into real business.",
];

export function About() {
  return (
    <section id="about" className="section shell line">
      <div className="sectionLabel">01 / About</div>
      <div className="twoCol">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
          transition={{ duration: 0.9, ease }}
        >
          Built to move
          <br />
          between worlds.
        </motion.h2>
        <div className="bodyCopy">
          {paragraphs.map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
              transition={{ duration: 0.8, delay: 0.15 + i * 0.18, ease }}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
