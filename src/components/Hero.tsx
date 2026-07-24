"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { Button } from "./Button";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section aria-labelledby="hero-heading" className="mc-hero">
      <div className="mc-hero-shell">
        <div className="mc-hero-card">
          <div className="mc-hero-media" aria-hidden>
            <Image
              src={site.images.hero}
              alt=""
              fill
              priority
              quality={95}
              className="object-cover object-[center_45%]"
              sizes="100vw"
            />
          </div>
          <div className="mc-hero-tint" aria-hidden />
          <div className="mc-hero-scrim" aria-hidden />

          <div className="mc-hero-inner">
            <div className="mx-auto w-full max-w-content px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-[920px] space-y-4 text-center text-white sm:space-y-5 lg:mx-0 lg:space-y-6 lg:text-left">
                <motion.p
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="font-display text-xl font-semibold tracking-tight text-mc-teal sm:text-2xl"
                >
                  {copy.hero.brand}
                </motion.p>
                <motion.div
                  initial={reduce ? false : { scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="mx-auto h-px w-14 origin-center bg-mc-teal lg:mx-0 lg:origin-left"
                  aria-hidden
                />
                <motion.h1
                  id="hero-heading"
                  initial={reduce ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="!text-[clamp(2.1rem,8vw,3.25rem)] !leading-[1.14] !tracking-[-0.03em] !text-white"
                >
                  {copy.hero.headline}
                </motion.h1>
                <motion.p
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.2 }}
                  className="mx-auto mt-1 max-w-[58ch] text-base leading-[1.7] text-white/90 sm:text-lg lg:mx-0 lg:leading-[1.75]"
                >
                  {copy.hero.subheadline}
                </motion.p>

                <motion.div
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.28 }}
                  className="flex flex-wrap items-center justify-center gap-3 pt-1 lg:justify-start lg:pt-2"
                >
                  <Button
                    href={site.routes.bookConsult}
                    variant="primary"
                    className="!rounded-full !bg-white !text-mc-dark hover:!bg-mc-teal-light"
                  >
                    {copy.hero.primaryCta}
                  </Button>
                  <Button
                    href={site.routes.inquiry}
                    variant="secondary"
                    className="!rounded-full !border-white/40 !bg-transparent !text-white hover:!border-white/60 hover:!bg-white/10"
                  >
                    {copy.hero.secondaryCta}
                  </Button>
                  <Button
                    href={site.phoneHref}
                    variant="secondary"
                    className="!rounded-full !border-white/40 !bg-transparent !text-white hover:!border-white/60 hover:!bg-white/10"
                  >
                    {copy.hero.callCta} {site.phone}
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
