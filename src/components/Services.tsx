"use client";

import {
  Brain,
  ClipboardList,
  HeartPulse,
  Pill,
  Users,
  Video,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { copy } from "@/content/copy";
import { FadeIn } from "./FadeIn";

const icons: LucideIcon[] = [
  Brain,
  ClipboardList,
  Pill,
  HeartPulse,
  Users,
  Video,
];

export function Services() {
  return (
    <section id="services" className="mc-section" aria-labelledby="services-heading">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <FadeIn className="mc-section-header">
          <p className="section-eyebrow">{copy.services.eyebrow}</p>
          <h2 id="services-heading" className="mt-3">
            {copy.services.title}
          </h2>
          <p className="text-lead mt-4">{copy.services.lead}</p>
        </FadeIn>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {copy.services.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <FadeIn key={item.title} delay={i * 0.06}>
                <motion.li
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 320, damping: 24 }}
                  className="rounded-card border border-mc-teal/15 bg-white p-6 shadow-soft transition hover:shadow-card"
                >
                  <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-mc-teal-light text-mc-teal-deep">
                    <Icon size={20} strokeWidth={1.75} aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight text-mc-teal-deep">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mc-slate">
                    {item.description}
                  </p>
                </motion.li>
              </FadeIn>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
