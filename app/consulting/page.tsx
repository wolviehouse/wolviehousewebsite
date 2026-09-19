import type { Metadata } from "next";
import { AreaPage } from "@/components/area-page";
import { getArea } from "@/lib/wolvie-data";

const area = getArea("consulting")!;

export const metadata: Metadata = {
  title: `${area.name} — WOLVIE`,
  description: area.intro,
};

export default function Page() {
  return <AreaPage area={area} />;
}
