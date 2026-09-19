import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { WhatWeDo } from "@/components/what-we-do";
import { Approach } from "@/components/approach";
import { LatestUpdates } from "@/components/latest-updates";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <WhatWeDo />
      <Approach />
      <LatestUpdates />
      <Contact />
    </main>
  );
}
