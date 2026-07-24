import Image from "next/image";
import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { FadeIn } from "./FadeIn";

export function CareApproach() {
  return (
    <section
      id="approach"
      className="mc-section"
      aria-labelledby="approach-heading"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <FadeIn>
              <p className="section-eyebrow">{copy.approach.eyebrow}</p>
              <h2 id="approach-heading" className="mt-3">
                {copy.approach.title}
              </h2>
              <p className="text-lead mt-4">{copy.approach.lead}</p>
              <div className="relative mt-8 overflow-hidden rounded-image shadow-card">
                <Image
                  src={site.images.approach}
                  alt="Person standing on a mountain overlook taking in a panoramic view"
                  width={1600}
                  height={1200}
                  className="h-[420px] w-full object-cover object-[center_40%] lg:h-[520px]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>

          <div className="space-y-8">
            {copy.approach.chapters.map((chapter, i) => (
              <FadeIn key={chapter.title} delay={i * 0.05}>
                <article className="rounded-card border border-mc-teal/15 bg-white p-6 shadow-soft sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mc-teal-deep">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-mc-dark">
                    {chapter.title}
                  </h3>
                  {chapter.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 32)}
                      className="mt-4 text-sm leading-relaxed text-mc-slate sm:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
