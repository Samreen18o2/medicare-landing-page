"use client";

import { useState, type FormEvent } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { Button } from "./Button";
import { FadeIn } from "./FadeIn";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="mc-section"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto grid max-w-content gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-start lg:gap-16 lg:px-8">
        <FadeIn className="space-y-6">
          <p className="section-eyebrow">{copy.contact.eyebrow}</p>
          <h2 id="contact-heading">{copy.contact.title}</h2>
          <p className="text-lead">{copy.contact.lead}</p>

          <div className="flex flex-wrap gap-3">
            <Button href={site.routes.bookConsult}>{copy.ctas.bookConsult}</Button>
            <Button href={site.phoneHref} variant="secondary">
              {copy.ctas.call} {site.phone}
            </Button>
          </div>

          <ul className="space-y-1 pt-2">
            <li>
              <a
                href={site.phoneHref}
                className="group flex items-start gap-3 rounded-xl p-2 transition hover:bg-mc-teal-light/70"
              >
                <span className="mc-icon-badge !p-2.5">
                  <Phone size={16} strokeWidth={1.75} aria-hidden />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-mc-slate">
                    {copy.contact.phoneLabel}
                  </span>
                  <span className="mt-0.5 block font-medium text-mc-dark group-hover:text-mc-teal-deep">
                    {site.phone}
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={site.emailHref}
                className="group flex items-start gap-3 rounded-xl p-2 transition hover:bg-mc-teal-light/70"
              >
                <span className="mc-icon-badge !p-2.5">
                  <Mail size={16} strokeWidth={1.75} aria-hidden />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-mc-slate">
                    {copy.contact.emailLabel}
                  </span>
                  <span className="mt-0.5 block font-medium text-mc-dark group-hover:text-mc-teal-deep">
                    {site.email}
                  </span>
                </span>
              </a>
            </li>
            <li>
              <div className="flex items-start gap-3 rounded-xl p-2">
                <span className="mc-icon-badge !p-2.5">
                  <Clock size={16} strokeWidth={1.75} aria-hidden />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-mc-slate">
                    {copy.contact.hoursLabel}
                  </span>
                  {site.hours.map((row) => (
                    <span key={row.day} className="mt-0.5 block text-sm text-mc-dark">
                      <span className="font-medium">{row.day}</span>
                      <span className="text-mc-slate"> · {row.time}</span>
                    </span>
                  ))}
                </span>
              </div>
            </li>
            <li>
              <div className="flex items-start gap-3 rounded-xl p-2">
                <span className="mc-icon-badge !p-2.5">
                  <MapPin size={16} strokeWidth={1.75} aria-hidden />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-mc-slate">
                    {copy.contact.addressLabel}
                  </span>
                  <span className="mt-0.5 block leading-relaxed text-mc-dark">
                    {site.address}
                    <br />
                    {site.city}
                  </span>
                </span>
              </div>
            </li>
          </ul>

          <p className="text-small">{copy.contact.trustLine}</p>
        </FadeIn>

        <FadeIn delay={0.1} className="lg:pt-6">
          <div className="overflow-hidden rounded-card border border-mc-teal/15 bg-white shadow-lift">
            <div className="border-b border-mc-teal/10 bg-mc-teal-light/50 px-6 py-5 sm:px-7">
              <p className="text-lg font-semibold text-mc-dark">
                {copy.contact.formTitle}
              </p>
              <p className="mt-1 text-sm text-mc-slate">{copy.contact.formSubtitle}</p>
            </div>

            {submitted ? (
              <div role="status" className="p-8 text-center sm:p-10">
                <p className="text-lg font-semibold text-mc-dark">
                  {copy.contact.form.success}
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="p-6 sm:p-8" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mc-label">
                      {copy.contact.form.name}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className="mc-field"
                      placeholder="Jordan Lee"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mc-label">
                      {copy.contact.form.email}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="mc-field"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mc-label">
                      {copy.contact.form.phone}
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      className="mc-field"
                      placeholder="(555) 000-0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="date" className="mc-label">
                      {copy.contact.form.date}
                    </label>
                    <input id="date" name="date" type="date" required className="mc-field" />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="service" className="mc-label">
                      {copy.contact.form.service}
                    </label>
                    <select id="service" name="service" required className="mc-field">
                      <option value="">Select a service</option>
                      {copy.contact.services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="mc-label">
                      {copy.contact.form.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="mc-field resize-y"
                      placeholder="Share anything that helps us prepare for your visit."
                    />
                  </div>
                </div>
                <button type="submit" className="btn-primary mt-6 w-full !rounded-full sm:w-auto">
                  {copy.contact.form.submit}
                </button>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
