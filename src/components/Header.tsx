import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  {
    name: "home",
    href: "/",
    label: "Home",
  },
  {
    name: "projects",
    href: "/projects",
    label: "Projects",
  },
  {
    name: "contact",
    href: "/contact",
    label: "Contact",
  },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/75 backdrop-blur-sm">
      <div className="mx-auto max-w-3xl px-8 py-6">
        <nav className="flex items-center justify-between">
          <ul className="flex gap-4 sm:gap-8">
            {navLinks.map((nav) => (
              <li key={nav.name} className="link">
                <Link href={nav.href}>{nav.label}</Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-2 sm:gap-4">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
