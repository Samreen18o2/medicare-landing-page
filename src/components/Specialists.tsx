import Image from "next/image";
import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { Button } from "./Button";
import { FadeIn } from "./FadeIn";

export function Specialists() {
  return (
    <section
      id="specialists"
      className="mc-section"
      aria-labelledby="specialists-heading"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <FadeIn className="mc-section-header">
          <p className="section-eyebrow">{copy.specialists.eyebrow}</p>
          <h2 id="specialists-heading" className="mt-3">
            {copy.specialists.title}
          </h2>
          <p className="text-lead mt-4">{copy.specialists.lead}</p>
        </FadeIn>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {copy.specialists.people.map((person, i) => (
            <FadeIn key={person.name} delay={i * 0.08}>
              <li className="group overflow-hidden rounded-card border border-mc-teal/15 bg-white shadow-soft transition hover:-translate-y-1 hover:border-mc-blue/25 hover:shadow-card">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={site.images.specialists[i]}
                    alt={`Portrait of ${person.name}`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold tracking-tight text-mc-dark">
                    {person.name}
                  </h3>
                  <p className="mt-1 text-sm text-mc-teal-deep">{person.specialty}</p>
                  <p className="mt-1 text-xs font-medium text-mc-slate">{person.years}</p>
                  <Button
                    href={site.routes.bookConsult}
                    className="mt-4 !h-10 w-full !rounded-full !bg-mc-teal !text-xs hover:!bg-mc-teal-dark"
                  >
                    Book Consult
                  </Button>
                </div>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
