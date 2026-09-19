import AreaPage from "../../components/AreaPage";
import { areas } from "../../data/site";

export const metadata = {
  title: "Consulting — WOLVIE"
};

export default function Page() {
  return <AreaPage area={areas.consulting} />;
}
