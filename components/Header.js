import Link from 'next/link';
import { company, navItems } from '@/lib/siteData';

export default function Header() {
  return (
    <header className="topbar">
      <div className="container navWrap">
        <Link className="logo" href="/">
          {company.name}
        </Link>
        <nav>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <a className="phone" href="tel:+919655722050">
          +91 9655722050
        </a>
      </div>
    </header>
  );
}
