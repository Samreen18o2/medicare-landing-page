"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { copy } from "@/content/copy";
import { FadeIn } from "./FadeIn";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const items = copy.testimonials.items;
  const current = items[index];

  const prev = () => setIndex((i) => (i === 0 ? items.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === items.length - 1 ? 0 : i + 1));

  return (
    <section
      id="testimonials"
      className="mc-section"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <FadeIn className="mc-section-header">
          <p className="section-eyebrow">{copy.testimonials.eyebrow}</p>
          <h2 id="testimonials-heading" className="mt-3">
            {copy.testimonials.title}
          </h2>
          <p className="text-lead mt-4">{copy.testimonials.lead}</p>
        </FadeIn>

        <FadeIn delay={0.1} className="mx-auto mt-12 max-w-3xl">
          <div
            className="relative overflow-hidden rounded-card border border-mc-teal/15 bg-white p-8 shadow-card sm:p-10"
            aria-roledescription="carousel"
            aria-label="Patient testimonials"
          >
            <Quote
              className="absolute right-6 top-6 h-12 w-12 text-mc-teal/15"
              aria-hidden
            />
            <div className="mb-4 flex gap-1" aria-hidden>
              {[0, 1, 2, 3, 4].map((star) => (
                <Star
                  key={star}
                  size={16}
                  className="fill-mc-teal text-mc-teal"
                />
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={current.name}
                initial={reduce ? false : { opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduce ? undefined : { opacity: 0, x: -24 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <p className="text-lg leading-relaxed text-mc-dark sm:text-xl">
                  “{current.quote}”
                </p>
                <footer className="mt-6">
                  <cite className="not-italic">
                    <span className="block font-semibold text-mc-dark">
                      {current.name}
                    </span>
                    <span className="mt-0.5 block text-sm text-mc-slate">
                      {current.role}
                    </span>
                  </cite>
                </footer>
              </motion.blockquote>
            </AnimatePresence>

            <div className="mt-8 flex items-center justify-between gap-4">
              <div className="flex gap-2" role="tablist" aria-label="Select testimonial">
                {items.map((item, i) => (
                  <button
                    key={item.name}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Show testimonial from ${item.name}`}
                    onClick={() => setIndex(i)}
                    className={`h-2.5 rounded-full transition ${
                      i === index
                        ? "w-8 bg-mc-teal"
                        : "w-2.5 bg-mc-teal/25 hover:bg-mc-teal/40"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={prev}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-mc-dark/10 bg-mc-mist text-mc-dark transition hover:bg-mc-teal-light"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-mc-dark/10 bg-mc-mist text-mc-dark transition hover:bg-mc-teal-light"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
