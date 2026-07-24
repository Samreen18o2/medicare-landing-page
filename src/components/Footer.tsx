import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { copy } from "@/content/copy";
import { site } from "@/content/site";

const quickLinks = [
  { href: site.routes.services, label: copy.header.nav.services },
  { href: site.routes.about, label: copy.header.nav.about },
  { href: site.routes.specialists, label: copy.header.nav.specialists },
  { href: site.routes.testimonials, label: copy.header.nav.testimonials },
  { href: site.routes.faq, label: copy.header.nav.faq },
  { href: site.routes.bookConsult, label: copy.ctas.bookConsult },
  { href: site.routes.inquiry, label: copy.ctas.inquiry },
];

export function Footer() {
  return (
    <footer className="border-t border-mc-teal/10 bg-gradient-to-b from-white to-mc-mist">
      <div className="mx-auto max-w-content px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="/" className="inline-flex items-center" aria-label={`${site.name} home`}>
              <Image
                src={site.logo}
                alt={site.name}
                width={1926}
                height={783}
                quality={100}
                sizes="200px"
                className="h-11 w-auto"
              />
            </a>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-mc-slate">
              {copy.footer.blurb}
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={site.social.instagram}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-mc-dark/10 bg-white text-mc-dark transition hover:bg-mc-teal-light hover:text-mc-teal-deep"
                aria-label="Instagram"
              >
                <Instagram size={18} strokeWidth={1.75} />
              </a>
              <a
                href={site.social.linkedin}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-mc-dark/10 bg-white text-mc-dark transition hover:bg-mc-teal-light hover:text-mc-teal-deep"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} strokeWidth={1.75} />
              </a>
              <a
                href={site.social.facebook}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-mc-dark/10 bg-white text-mc-dark transition hover:bg-mc-teal-light hover:text-mc-teal-deep"
                aria-label="Facebook"
              >
                <Facebook size={18} strokeWidth={1.75} />
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-mc-dark">
              {copy.footer.quickLinks}
            </h2>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-mc-slate transition hover:text-mc-teal-deep"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-mc-dark">
              {copy.footer.legal}
            </h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-sm text-mc-slate transition hover:text-mc-teal-deep">
                  {copy.footer.privacy}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-mc-slate transition hover:text-mc-teal-deep">
                  {copy.footer.terms}
                </a>
              </li>
            </ul>
            <div className="mt-6 rounded-card border border-mc-teal/15 bg-white/80 p-4 shadow-soft">
              <p className="text-xs leading-relaxed text-mc-slate">
                This is a fictional demo clinic created for portfolio purposes and is not a
                real medical provider.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-12 border-t border-mc-teal/10 pt-6 text-center text-xs text-mc-slate">
          {copy.footer.rights}
        </p>
      </div>
    </footer>
  );
}
