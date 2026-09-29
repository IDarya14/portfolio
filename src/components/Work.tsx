import { useId, useState } from "react";
import { experience, type Experience } from "../data/profile.ts";

const visiblePointCount = 3;

function Job({ job }: { job: Experience }) {
  const [open, setOpen] = useState(false);
  const extraId = useId();
  const extra = job.points.slice(visiblePointCount);

  return (
    <article className="grid gap-6 border-t border-white/15 py-8 md:grid-cols-12 md:py-12">
      <div className="md:col-span-4">
        <p className="text-sm text-white/55">{job.dates}</p>
        <h3 className="mt-2 font-serif text-3xl leading-none sm:text-4xl">
          {job.role}
        </h3>
        <p className="mt-3 text-lg">{job.company}</p>
        <p className="mt-2 text-sm text-white/55">
          {job.employment} · {job.place}
        </p>
      </div>
      <div className="md:col-span-8">
        <p className="leading-relaxed text-white/80">{job.summary}</p>
        <ul className="mt-6 space-y-3">
          {job.points.slice(0, visiblePointCount).map((point) => (
            <li
              key={point}
              className="border-l border-cyan-200/70 pl-4 text-sm leading-relaxed text-white/75"
            >
              {point}
            </li>
          ))}
        </ul>
        {extra.length > 0 ? (
          <>
            <div
              id={extraId}
              inert={!open}
              className={`grid transition-[grid-template-rows] duration-500 ease-out motion-reduce:transition-none ${
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="min-h-0 overflow-hidden">
                <ul className="space-y-3 pt-3">
                  {extra.map((point) => (
                    <li
                      key={point}
                      className="border-l border-cyan-200/70 pl-4 text-sm leading-relaxed text-white/75"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <button
              type="button"
              aria-expanded={open}
              aria-controls={extraId}
              onClick={() => setOpen((value) => !value)}
              className="mt-4 cursor-pointer text-sm text-cyan-100/90 underline decoration-cyan-100/70 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
            >
              {open ? "Hide" : "Read more"}
            </button>
          </>
        ) : null}
        <p className="mt-6 text-xs leading-relaxed tracking-wide break-words text-white/50 uppercase">
          {job.stack}
        </p>
      </div>
    </article>
  );
}

export function Work() {
  return (
    <section id="work" className="px-4 py-4 text-white md:px-8 md:py-5">
      <div className="glass-panel mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-12 md:px-12 md:py-16">
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-serif text-4xl tracking-tight sm:text-5xl">Experience</h2>
          <p className="hidden max-w-xs text-right text-sm text-white/60 sm:block">
            Build smart. Keep it simple.
          </p>
        </div>

        <div className="mt-8">
          {experience.map((job) => (
            <Job key={job.company} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}
