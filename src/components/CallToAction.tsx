import { ArrowRight, Phone } from "lucide-react";
import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { FadeIn } from "./FadeIn";

export function CallToAction() {
  return (
    <section className="mc-section mc-section-alt" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-mc-teal/15 bg-white shadow-soft sm:rounded-[2rem]">
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(112,168,160,0.14),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(24,112,168,0.08),transparent_50%)]"
              aria-hidden
            />
            <div
              className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-mc-teal via-mc-blue to-mc-teal"
              aria-hidden
            />

            <div className="relative grid items-center gap-10 px-8 py-14 sm:px-12 sm:py-16 lg:grid-cols-[1.3fr_0.7fr] lg:gap-14 lg:px-16 lg:py-20">
              <div className="text-center lg:text-left">
                <p className="section-eyebrow">Begin Today</p>
                <h2 id="cta-heading" className="mt-3 max-w-xl lg:max-w-none">
                  {copy.cta.title}
                </h2>
                <p className="text-lead mx-auto mt-4 max-w-xl lg:mx-0">
                  {copy.cta.lead}
                </p>
              </div>

              <div className="flex flex-col items-stretch gap-3 sm:mx-auto sm:max-w-sm lg:mx-0 lg:max-w-none">
                <a
                  href={site.routes.bookConsult}
                  className="group inline-flex h-12 min-h-12 items-center justify-center gap-2 rounded-full bg-mc-teal px-7 text-sm font-semibold text-white shadow-soft transition hover:bg-mc-teal-dark"
                >
                  {copy.cta.primary}
                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </a>
                <a
                  href={site.routes.inquiry}
                  className="inline-flex h-12 min-h-12 items-center justify-center gap-2 rounded-full border-2 border-mc-dark/10 bg-white px-7 text-sm font-semibold text-mc-dark transition hover:border-mc-teal/40 hover:bg-mc-teal-light"
                >
                  {copy.cta.inquiry}
                </a>
                <a
                  href={site.phoneHref}
                  className="inline-flex h-12 min-h-12 items-center justify-center gap-2 rounded-full border-2 border-mc-dark/10 bg-white px-7 text-sm font-semibold text-mc-dark transition hover:border-mc-teal/40 hover:bg-mc-teal-light"
                >
                  <Phone size={16} strokeWidth={1.75} aria-hidden />
                  {copy.cta.secondary}
                  <span className="hidden font-medium text-mc-slate sm:inline">
                    · {site.phone}
                  </span>
                </a>
                <p className="pt-1 text-center text-xs text-mc-slate lg:text-left">
                  Same-week openings · Insurance-friendly · Virtual or in-clinic
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
