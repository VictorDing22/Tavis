"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "服务", href: "/#services" },
  { label: "案例", href: "/cases" },
  { label: "关于", href: "/team" },
  { label: "联系", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => setOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-content mx-auto px-6 flex items-center justify-between h-16">
        <Link
          href="/"
          className={`text-xl font-semibold tracking-tight whitespace-nowrap transition-colors duration-500 ${
            scrolled ? "text-primary" : "text-white"
          }`}
        >
          太微工作室
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  scrolled
                    ? "text-secondary hover:text-primary"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className={`md:hidden flex items-center justify-center w-11 h-11 transition-colors ${
            scrolled ? "text-primary" : "text-white"
          }`}
          onClick={() => setOpen(!open)}
          aria-label="菜单"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-border shadow-lg px-6 py-2">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={handleClick}
              className="flex items-center h-12 text-[15px] font-medium text-secondary border-b border-border last:border-b-0 active:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
