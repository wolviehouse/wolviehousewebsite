import type { Metadata } from "next";
import { UpdatesFeed } from "@/components/updates-feed";

export const metadata: Metadata = {
  title: "Updates from Wolvie — WOLVIE",
  description:
    "A chronological feed of updates across trade, brands, community, consulting and ventures.",
};

export default function Page() {
  return <UpdatesFeed />;
}
