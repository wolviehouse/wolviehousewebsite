"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { WolvieMark } from "./wolvie-mark";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const markScale = useTransform(scrollYProgress, [0, 1], [1, 1.32]);
  const markY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const markX = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const markOpacity = useTransform(scrollYProgress, [0, 1], [0.1, 0.02]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 70]);

  return (
    <section id="top" ref={ref} className="hero shell line">
      <motion.div style={{ y: contentY }}>
        <motion.div
          className="kicker"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          Wolvie House
        </motion.div>

        <div className="heroGrid">
          <div className="heroLeft">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.08, ease }}
            >
              Different directions.
              <br />
              One house<span className="orange">.</span>
            </motion.h1>
            <motion.div
              className="orangeLine"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.5, ease }}
            />
          </div>

          <motion.div
            className="heroRight"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease }}
          >
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
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="heroMark"
        style={{ scale: markScale, y: markY, x: markX, opacity: markOpacity }}
      >
        <WolvieMark />
      </motion.div>
    </section>
  );
}
