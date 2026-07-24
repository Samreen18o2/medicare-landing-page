import { ShieldCheck } from "lucide-react";
import { copy } from "@/content/copy";
import { AnimatedCounter } from "./AnimatedCounter";
import { FadeIn } from "./FadeIn";

export function TrustBar() {
  return (
    <section
      aria-label="Trust indicators"
      className="border-y border-mc-teal/10 bg-mc-mist/60"
    >
      <div className="mx-auto max-w-content px-4 py-10 sm:px-6 lg:px-8">
        <ul className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {copy.trust.map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.08}>
              <li className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:gap-3 sm:text-left">
                <span className="mb-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mc-teal-light text-mc-teal-deep sm:mb-0">
                  <ShieldCheck size={18} strokeWidth={1.75} aria-hidden />
                </span>
                <div>
                  <p className="text-2xl font-bold tracking-tight text-mc-dark sm:text-3xl">
                    <AnimatedCounter
                      value={item.value}
                      suffix={item.suffix}
                      decimals={"decimals" in item ? item.decimals : 0}
                    />
                  </p>
                  <p className="mt-1 text-sm font-medium text-mc-slate">{item.label}</p>
                </div>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
