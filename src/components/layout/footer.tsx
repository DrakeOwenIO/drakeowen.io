import Link from "next/link";
import { navigation } from "@/config/site";
import { ContactLinks } from "@/components/contact-links";
export function Footer() {
  return (
    <footer className="site-footer shell">
      <div className="footer-top">
        <div>
          <Link href="/" className="wordmark">
            drake<span>.</span>owen
          </Link>
          <p>
            IT professional by career.
            <br />
            Technologist by nature.
          </p>
        </div>
        <nav aria-label="Footer navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/connect">Connect</Link>
        </nav>
        <div className="social-links">
          <ContactLinks />
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Drake Owen</span>
        <span>Western North Carolina</span>
      </div>
    </footer>
  );
}
