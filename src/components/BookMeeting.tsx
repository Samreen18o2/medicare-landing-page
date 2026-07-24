"use client";

import { useMemo, useState } from "react";
import { CalendarDays, Check, Clock, User } from "lucide-react";
import { copy } from "@/content/copy";
import { site } from "@/content/site";
import { Button } from "./Button";
import { FadeIn } from "./FadeIn";

const dates = [
  { id: "mon", label: "Mon", day: "24", month: "Mar" },
  { id: "tue", label: "Tue", day: "25", month: "Mar" },
  { id: "wed", label: "Wed", day: "26", month: "Mar" },
  { id: "thu", label: "Thu", day: "27", month: "Mar" },
  { id: "fri", label: "Fri", day: "28", month: "Mar" },
];

const times = ["9:00 AM", "10:30 AM", "1:00 PM", "2:30 PM", "4:00 PM"];

export function BookMeeting() {
  const [dateId, setDateId] = useState(dates[1].id);
  const [time, setTime] = useState(times[2]);
  const [service, setService] = useState<string>(copy.contact.services[0]);
  const [generated, setGenerated] = useState(false);

  const selectedDate = useMemo(
    () => dates.find((d) => d.id === dateId) ?? dates[0],
    [dateId],
  );

  const generate = () => {
    setGenerated(true);
  };

  return (
    <section
      id="book-meeting"
      className="mc-section mc-section-alt"
      aria-labelledby="book-meeting-heading"
    >
      <div className="mx-auto grid max-w-content items-start gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <FadeIn className="space-y-5 text-center lg:sticky lg:top-28 lg:text-left">
          <p className="section-eyebrow">{copy.bookMeeting.eyebrow}</p>
          <h2 id="book-meeting-heading">{copy.bookMeeting.title}</h2>
          <p className="text-lead mx-auto max-w-xl lg:mx-0">
            {copy.bookMeeting.lead}
          </p>
          <ul className="mx-auto mt-2 max-w-md space-y-3 text-left lg:mx-0">
            {copy.bookMeeting.points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-mc-slate">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mc-teal text-white">
                  <Check size={12} strokeWidth={2.5} aria-hidden />
                </span>
                {point}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 lg:justify-start">
            <Button href={site.phoneHref} variant="secondary">
              Call {site.phone}
            </Button>
            <Button href={site.routes.inquiry} variant="secondary">
              {copy.ctas.inquiry}
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="overflow-hidden rounded-card border border-mc-teal/15 bg-white p-5 shadow-lift sm:p-7">
            {generated ? (
              <div className="space-y-5 text-center" role="status">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-mc-teal-light text-mc-teal-deep">
                  <Check size={28} strokeWidth={2} aria-hidden />
                </span>
                <h3 className="text-xl font-semibold text-mc-dark">
                  Meeting invite generated
                </h3>
                <p className="text-sm leading-relaxed text-mc-slate">
                  Demo confirmation for a <strong>{service}</strong> visit on{" "}
                  <strong>
                    {selectedDate.label} {selectedDate.day} {selectedDate.month}
                  </strong>{" "}
                  at <strong>{time}</strong>. In a live build this would sync to
                  your calendar and EHR.
                </p>
                <div className="rounded-card border border-mc-teal/15 bg-mc-mist px-4 py-4 text-left text-sm text-mc-dark">
                  <p className="flex items-center gap-2 font-semibold">
                    <CalendarDays size={16} className="text-mc-teal" aria-hidden />
                    MindCare — {service}
                  </p>
                  <p className="mt-2 flex items-center gap-2 text-mc-slate">
                    <Clock size={16} aria-hidden />
                    {selectedDate.label} {selectedDate.day} {selectedDate.month} · {time}
                  </p>
                  <p className="mt-2 flex items-center gap-2 text-mc-slate">
                    <User size={16} aria-hidden />
                    Assigned specialist · Virtual or in-clinic
                  </p>
                </div>
                <button
                  type="button"
                  className="btn-secondary !rounded-full"
                  onClick={() => setGenerated(false)}
                >
                  Edit selection
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <p className="mc-label">Service</p>
                  <select
                    className="mc-field"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                  >
                    {copy.contact.services.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <p className="mc-label">Preferred date</p>
                  <div className="grid grid-cols-5 gap-2">
                    {dates.map((date) => {
                      const active = date.id === dateId;
                      return (
                        <button
                          key={date.id}
                          type="button"
                          onClick={() => setDateId(date.id)}
                          className={`rounded-xl border px-1 py-3 text-center transition ${
                            active
                              ? "border-mc-teal bg-mc-teal text-white shadow-soft"
                              : "border-mc-dark/10 bg-mc-mist text-mc-dark hover:border-mc-teal/40"
                          }`}
                        >
                          <span className="block text-[10px] font-semibold uppercase tracking-wide opacity-80">
                            {date.label}
                          </span>
                          <span className="mt-1 block text-lg font-bold leading-none">
                            {date.day}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <p className="mc-label">Available times</p>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {times.map((slot) => {
                      const active = slot === time;
                      return (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setTime(slot)}
                          className={`rounded-xl border px-3 py-2.5 text-sm font-semibold transition ${
                            active
                              ? "border-mc-teal bg-mc-teal-light text-mc-teal-deep"
                              : "border-mc-dark/10 bg-white text-mc-dark hover:border-mc-teal/35"
                          }`}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <button
                  type="button"
                  className="btn-primary w-full !rounded-full"
                  onClick={generate}
                >
                  {copy.bookMeeting.generateCta}
                </button>
                <p className="text-center text-xs text-mc-slate">
                  Portfolio demo — no real appointment is booked.
                </p>
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
