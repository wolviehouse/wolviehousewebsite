
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer shell">
      <div>
        <div className="wordmark footerWordmark">WOLVIE<span>.</span></div>
        <div className="footerTagline">Different directions. One house.</div>
      </div>

      <div className="footerLinks">
        <Link href="/trade">Trade</Link>
        <Link href="/brands">Brands</Link>
        <Link href="/community">Community</Link>
        <Link href="/consulting">Consulting</Link>
        <Link href="/ventures">Ventures</Link>
      </div>

      <div className="copyright">© 2026 Wolvie House</div>
    </footer>
  );
}
