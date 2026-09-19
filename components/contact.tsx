"use client";

import { motion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

export function Contact() {
  return (
    <section id="contact" className="section shell line contact">
      <div className="sectionLabel">04 / Contact</div>
      <div className="twoCol contactGrid">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
          transition={{ duration: 1, ease }}
        >
          Let’s see where
          <br />
          it can go<span className="orange">.</span>
        </motion.h2>
        <motion.div
          className="bodyCopy"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
        >
          <p>
            Open to products, partnerships, markets, collaborations and ideas
            worth exploring.
          </p>
          <a className="email" href="mailto:harun@wolviehouse.com">
            harun@wolviehouse.com <span>↗</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
