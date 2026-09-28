import { experience } from "../data/profile.ts";

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
            <article
              key={job.company}
              className="grid gap-6 border-t border-white/15 py-8 md:grid-cols-12 md:py-12"
            >
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
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="border-l border-cyan-200/70 pl-4 text-sm leading-relaxed text-white/75"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-xs leading-relaxed tracking-wide break-words text-white/50 uppercase">
                  {job.stack}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
