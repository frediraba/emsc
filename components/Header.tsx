"use client";

import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => pathname === href;
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return (
    <header className="bg-background/80 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 border-b backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2" aria-label="EMSC avaleht">
          <Image
            src="/logo.png"
            alt="EMSC logo"
            width={40}
            height={40}
            priority
            className="rounded"
          />
          <span className="font-semibold tracking-tight">EMSC</span>
        </Link>
        <nav className="hidden gap-6 text-sm sm:flex" aria-label="Põhinavigatsioon">
          {[
            { href: "/teenused", label: "Teenused" },
            { href: "/meist", label: "Meist" },
            { href: "/kontakt", label: "Kontakt" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`nav-link focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 ${isActive(item.href) ? "is-active font-semibold" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border sm:hidden"
            aria-label="Ava menüü"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            ☰
          </button>
          <ThemeToggle />
          <a
            href="/kontakt"
            className="btn text-background hidden rounded-md px-3 py-1.5 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 sm:inline-flex"
            style={{ backgroundColor: "var(--accent)" }}
          >
            Küsi pakkumist
          </a>
        </div>
      </div>
      {open && (
        <div id="mobile-nav" className="bg-background border-t sm:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3">
            <Link
              href="/teenused"
              onClick={() => setOpen(false)}
              className={isActive("/teenused") ? "font-semibold" : ""}
            >
              Teenused
            </Link>
            <Link
              href="/meist"
              onClick={() => setOpen(false)}
              className={isActive("/meist") ? "font-semibold" : ""}
            >
              Meist
            </Link>
            <Link
              href="/kontakt"
              onClick={() => setOpen(false)}
              className={isActive("/kontakt") ? "font-semibold" : ""}
            >
              Kontakt
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
