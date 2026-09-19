import Link from "next/link";
import { areas } from "@/lib/wolvie-data";

export function SiteFooter() {
  return (
    <footer className="footer shell">
      <div>
        <div className="wordmark footerLogo">
          WOLVIE<span>.</span>
        </div>
        <div className="footerSub">Different directions. One house.</div>
      </div>

      <div className="footerList">
        {areas.map((area) => (
          <Link key={area.id} href={`/${area.id}`}>
            {area.name}
          </Link>
        ))}
        <Link href="/updates">Updates</Link>
      </div>

      <div className="copyright">© 2026 Wolvie House</div>
    </footer>
  );
}
