"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Equipment", href: "/equipment" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-navy shadow-lg" : "bg-navy/95"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 h-16 sm:h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="w-9 h-9 sm:w-11 sm:h-11 shrink-0 rounded bg-gradient-to-br from-brand-light to-brand-dark flex items-center justify-center font-bold text-white text-sm sm:text-lg">
            RD
          </div>
          <div className="min-w-0">
            <p className="text-white font-bold text-sm sm:text-lg leading-tight tracking-wide truncate">
              RD ENTERPRISES
            </p>
            <p className="hidden sm:block text-brand-light text-[11px] tracking-wide truncate">
              Building Today, Shaping Tomorrow
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative py-2 text-sm font-medium transition-colors whitespace-nowrap"
              >
                <span
                  className={cn(
                    active ? "text-brand" : "text-gray-200 hover:text-brand-light"
                  )}
                >
                  {link.label}
                </span>

                {active && (
                  <motion.span
                    layoutId="navbar-active-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-brand rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden lg:flex items-center gap-1 bg-brand hover:bg-brand-dark text-white text-sm font-semibold px-4 xl:px-5 py-2.5 rounded transition-colors whitespace-nowrap"
        >
          Get a Quote <ChevronRight size={16} />
        </Link>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white shrink-0 p-1"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-navy border-t border-white/10 max-h-[calc(100vh-60px)] overflow-y-auto"
          >
            <div className="flex flex-col px-4 sm:px-6 py-4 gap-1">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "text-sm font-medium border-l-2 pl-3 py-2.5",
                      active
                        ? "text-brand border-brand bg-white/5"
                        : "text-gray-200 border-transparent"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="bg-brand text-white text-sm font-semibold px-5 py-3 rounded text-center mt-2"
              >
                Get a Quote
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}