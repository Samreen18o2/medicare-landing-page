import { copy } from "@/content/copy";
import { FadeIn } from "./FadeIn";

export function PatientJourney() {
  return (
    <section
      id="journey"
      className="mc-section mc-section-alt"
      aria-labelledby="journey-heading"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <FadeIn className="mc-section-header">
          <p className="section-eyebrow">{copy.journey.eyebrow}</p>
          <h2 id="journey-heading" className="mt-3">
            {copy.journey.title}
          </h2>
          <p className="text-lead mt-4">{copy.journey.lead}</p>
        </FadeIn>

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-10">
          {copy.journey.steps.map((step, i) => (
            <li key={step.title} className="relative text-center">
              <FadeIn delay={i * 0.08}>
                <p className="font-heading text-4xl font-semibold text-mc-teal/55">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-mc-dark">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mc-slate">
                  {step.description}
                </p>
              </FadeIn>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
