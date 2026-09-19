import AreaPage from "../../components/AreaPage";
import { areas } from "../../data/site";

export const metadata = {
  title: "Brands — WOLVIE"
};

export default function Page() {
  return <AreaPage area={areas.brands} />;
}
