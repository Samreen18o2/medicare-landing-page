import Image from "next/image";
import { Check } from "lucide-react";
import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { FadeIn } from "./FadeIn";

export function WhyChoose() {
  return (
    <section
      id="about"
      className="mc-section mc-section-alt"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <p className="section-eyebrow">{copy.why.eyebrow}</p>
            <h2 id="about-heading" className="mt-3">
              {copy.why.title}
            </h2>
            <p className="text-lead mt-4">{copy.why.lead}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {copy.why.reasons.map((reason) => (
                <li
                  key={reason}
                  className="flex items-start gap-3 rounded-card border border-mc-teal/15 bg-white px-5 py-4 shadow-soft"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mc-teal text-white">
                    <Check size={14} strokeWidth={2.5} aria-hidden />
                  </span>
                  <span className="text-sm font-medium leading-relaxed text-mc-dark">
                    {reason}
                  </span>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div className="relative overflow-hidden rounded-image shadow-card">
              <Image
                src={site.images.whyChoose}
                alt="MindCare clinician providing compassionate care"
                width={1408}
                height={768}
                className="h-full min-h-[420px] w-full object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-mc-dark/35 via-transparent to-transparent"
                aria-hidden
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
