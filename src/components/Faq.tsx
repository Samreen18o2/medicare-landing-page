"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { copy } from "@/content/copy";
import { FadeIn } from "./FadeIn";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduce = useReducedMotion();

  // Independent columns so expanding one item doesn't push the other column down.
  const leftItems = copy.faq.items
    .map((item, index) => ({ item, index }))
    .filter(({ index }) => index % 2 === 0);
  const rightItems = copy.faq.items
    .map((item, index) => ({ item, index }))
    .filter(({ index }) => index % 2 === 1);

  const renderItem = (
    item: (typeof copy.faq.items)[number],
    index: number,
    delay: number,
  ) => {
    const open = openIndex === index;
    return (
      <FadeIn key={item.question} delay={delay}>
        <div className="overflow-hidden rounded-card border border-mc-teal/15 bg-white shadow-soft">
          <h3>
            <button
              type="button"
              aria-expanded={open}
              aria-controls={`faq-panel-${index}`}
              id={`faq-button-${index}`}
              onClick={() => setOpenIndex(open ? null : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-mc-dark transition hover:bg-mc-mist/80"
            >
              {item.question}
              <Plus
                size={20}
                className={`shrink-0 text-mc-teal transition duration-300 ${
                  open ? "rotate-45" : ""
                }`}
                aria-hidden
              />
            </button>
          </h3>
          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                id={`faq-panel-${index}`}
                role="region"
                aria-labelledby={`faq-button-${index}`}
                initial={reduce ? false : { height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={reduce ? undefined : { height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-5 text-sm leading-relaxed text-mc-slate">
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </FadeIn>
    );
  };

  return (
    <section id="faq" className="mc-section mc-section-alt" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <FadeIn className="mc-section-header">
          <p className="section-eyebrow">{copy.faq.eyebrow}</p>
          <h2 id="faq-heading" className="mt-3">
            {copy.faq.title}
          </h2>
          <p className="text-lead mt-4">{copy.faq.lead}</p>
        </FadeIn>

        <div className="mt-12 grid gap-3 md:grid-cols-2 md:gap-4">
          <div className="flex flex-col gap-3 md:gap-4">
            {leftItems.map(({ item, index }, i) =>
              renderItem(item, index, i * 0.05),
            )}
          </div>
          <div className="flex flex-col gap-3 md:gap-4">
            {rightItems.map(({ item, index }, i) =>
              renderItem(item, index, i * 0.05 + 0.05),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
