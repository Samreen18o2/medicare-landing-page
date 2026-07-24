"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, Phone, X } from "lucide-react";
import { copy } from "@/content/copy";
import { site } from "@/content/site";

const navLinks = [
  { href: site.routes.services, label: copy.header.nav.services },
  { href: site.routes.about, label: copy.header.nav.about },
  { href: site.routes.specialists, label: copy.header.nav.specialists },
  { href: site.routes.testimonials, label: copy.header.nav.testimonials },
  { href: site.routes.faq, label: copy.header.nav.faq },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <div
        className={`mc-nav-wrap relative ${open ? "is-open z-[100]" : ""} ${scrolled ? "is-scrolled" : ""}`}
      >
        <nav
          className={`mc-nav-bar ${scrolled ? "is-scrolled" : ""}`}
          aria-label="Main"
        >
          <a
            href="/"
            className={`relative z-10 flex shrink-0 items-center rounded-full transition ${
              scrolled
                ? "bg-transparent px-0 py-0 shadow-none"
                : "bg-white/95 px-2 py-1 shadow-[0_8px_24px_-16px_rgba(15,61,92,0.35)]"
            }`}
            aria-label={`${site.name} home`}
          >
            <Image
              src={site.logo}
              alt={site.name}
              width={1926}
              height={783}
              priority
              quality={100}
              sizes="(max-width: 640px) 140px, 180px"
              className="h-10 w-auto sm:h-11"
            />
          </a>

          <div className="mc-nav-pill">
            <div className="flex items-center gap-0.5 px-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-[0.7rem] py-2 text-sm font-semibold text-mc-dark transition hover:bg-mc-teal-light hover:text-mc-teal-deep"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href={site.routes.bookConsult}
              className="inline-flex items-center rounded-full bg-mc-teal px-4 py-2 text-sm font-semibold text-white transition hover:bg-mc-teal-dark"
            >
              {copy.header.bookConsultCta}
            </a>
            <a
              href={site.routes.inquiry}
              className="inline-flex items-center rounded-full border border-mc-dark/15 bg-transparent px-4 py-2 text-sm font-semibold text-mc-dark transition hover:bg-mc-teal-light hover:text-mc-teal-deep"
            >
              {copy.header.inquiryCta}
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-mc-dark/12 bg-transparent py-1.5 pl-3.5 pr-1.5 text-sm font-semibold text-mc-dark transition hover:bg-mc-teal-light"
              aria-label={`Call ${site.phone}`}
            >
              <span className="hidden xl:inline">{copy.ctas.call}</span>
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-mc-teal text-white">
                <Phone size={14} strokeWidth={2} aria-hidden />
              </span>
            </a>
          </div>

          <button
            type="button"
            className="relative z-[110] inline-flex h-11 w-11 items-center justify-center rounded-full border border-mc-dark/10 bg-white text-mc-dark shadow-soft lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X size={22} strokeWidth={2.25} aria-hidden />
            ) : (
              <Menu size={22} strokeWidth={2.25} aria-hidden />
            )}
          </button>
        </nav>
      </div>

      {open && (
        <div className="fixed inset-0 z-[90] lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-mc-dark/40 backdrop-blur-sm"
            aria-label="Close menu overlay"
            onClick={close}
          />
          <div
            id="mobile-nav"
            className="absolute inset-x-4 top-20 rounded-3xl border border-mc-teal/15 bg-white p-6 shadow-lift"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={close}
                    className="block rounded-xl px-4 py-3 text-base font-semibold text-mc-dark transition hover:bg-mc-teal-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={site.routes.bookConsult}
              onClick={close}
              className="btn-primary mt-4 w-full !rounded-full"
            >
              {copy.header.bookConsultCta}
            </a>
            <a
              href={site.routes.inquiry}
              onClick={close}
              className="btn-secondary mt-2 w-full !rounded-full"
            >
              {copy.header.inquiryCta}
            </a>
            <a
              href={site.phoneHref}
              onClick={close}
              className="btn-secondary mt-2 w-full !rounded-full"
            >
              <Phone size={16} aria-hidden />
              {copy.ctas.call} {site.phone}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
