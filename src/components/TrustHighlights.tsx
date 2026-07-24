"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CalendarCheck, ShieldCheck, Stethoscope } from "lucide-react";
import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { FadeIn } from "./FadeIn";

const icons = [CalendarCheck, Stethoscope, ShieldCheck] as const;
const AUTO_MS = 5000;

export function TrustHighlights() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const items = copy.trustHighlights.items;
  const current = items[active];

  const select = useCallback((index: number) => {
    setActive(index);
  }, []);

  useEffect(() => {
    if (reduce || paused) return;
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, AUTO_MS);
    return () => window.clearInterval(id);
  }, [items.length, paused, reduce, active]);

  return (
    <section
      id="trust-highlights"
      className="mc-section"
      aria-labelledby="trust-highlights-heading"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <FadeIn className="mc-section-header">
          <p className="section-eyebrow">{copy.trustHighlights.eyebrow}</p>
          <h2 id="trust-highlights-heading" className="mt-3">
            {copy.trustHighlights.title}
          </h2>
          <p className="text-lead mt-4">{copy.trustHighlights.lead}</p>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-12">
          <div
            className="relative overflow-hidden rounded-[1.75rem] shadow-lift sm:rounded-[2rem]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                setPaused(false);
              }
            }}
          >
            <div className="relative min-h-[420px] sm:min-h-[480px] lg:min-h-[540px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.image}
                  className="absolute inset-0"
                  initial={reduce ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={reduce ? undefined : { opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={current.image}
                    alt=""
                    fill
                    priority={active === 0}
                    quality={90}
                    className="object-cover object-center"
                    sizes="100vw"
                  />
                </motion.div>
              </AnimatePresence>

              <div
                className="absolute inset-0 bg-gradient-to-t from-mc-dark/85 via-mc-dark/45 to-mc-dark/20"
                aria-hidden
              />

              <div className="relative z-10 flex h-full min-h-[420px] flex-col justify-end p-6 sm:min-h-[480px] sm:p-10 lg:min-h-[540px] lg:p-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.title}
                    initial={reduce ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduce ? undefined : { opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-8 max-w-xl"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-mc-teal">
                      {current.title}
                    </p>
                    <p className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                      {current.headline}
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-white/85">
                      {current.description}
                    </p>
                  </motion.div>
                </AnimatePresence>

                <div
                  className="grid gap-3 sm:grid-cols-3"
                  role="tablist"
                  aria-label="Care highlights"
                  aria-live="polite"
                >
                  {items.map((item, i) => {
                    const Icon = icons[i];
                    const selected = i === active;
                    return (
                      <button
                        key={item.title}
                        type="button"
                        role="tab"
                        aria-selected={selected}
                        onClick={() => select(i)}
                        className={`relative flex items-center gap-3 overflow-hidden rounded-2xl border px-4 py-4 text-left transition ${
                          selected
                            ? "border-white/40 bg-white text-mc-dark shadow-soft"
                            : "border-white/20 bg-white/10 text-white backdrop-blur-md hover:bg-white/18"
                        }`}
                      >
                        {selected && !reduce && !paused ? (
                          <span
                            key={`${item.title}-${active}`}
                            className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 origin-left bg-mc-teal"
                            style={{
                              animation: `mc-trust-progress ${AUTO_MS}ms linear forwards`,
                            }}
                            aria-hidden
                          />
                        ) : null}
                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                            selected
                              ? "bg-mc-teal-light text-mc-teal-deep"
                              : "bg-white/15 text-white"
                          }`}
                        >
                          <Icon size={18} strokeWidth={1.75} aria-hidden />
                        </span>
                        <span className="text-sm font-semibold leading-snug">
                          {item.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <p className="sr-only">
          Background imagery updates as each highlight is selected. Current focus:{" "}
          {current.title}. Book at {site.routes.book}.
        </p>
      </div>
    </section>
  );
}
