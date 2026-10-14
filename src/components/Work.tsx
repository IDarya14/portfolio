import { useId, useState } from 'react'
import { experience, type Experience } from '../data/profile.ts'

const visiblePointCount = 3

function Job({ job, index }: { job: Experience; index: number }) {
  const [open, setOpen] = useState(false)
  const extraId = useId()
  const extra = job.points.slice(visiblePointCount)
  const order = String(index + 1).padStart(2, '0')

  return (
    <article className="rounded-[1.5rem] border border-line bg-card px-5 py-7 sm:px-8 sm:py-9">
      <div className="grid gap-6 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-4">
          <p className="text-sm font-medium text-muted">{order}</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
            {job.company}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">{job.role}</p>
          <p className="mt-1 text-sm text-muted">
            {job.dates}
            <span className="text-ink/25"> · </span>
            {job.place}
          </p>
        </div>
        <div className="md:col-span-8">
          <p className="text-xl leading-snug font-medium tracking-[-0.03em] sm:text-2xl">
            {job.impact}
          </p>
          <p className="mt-4 leading-relaxed text-muted">{job.summary}</p>
          <ul className="mt-6 space-y-3">
            {job.points.slice(0, visiblePointCount).map((point) => (
              <li
                key={point}
                className="border-l border-ink/15 pl-4 text-sm leading-relaxed text-ink/75"
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
                  open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="min-h-0 overflow-hidden">
                  <ul className="space-y-3 pt-3">
                    {extra.map((point) => (
                      <li
                        key={point}
                        className="border-l border-ink/15 pl-4 text-sm leading-relaxed text-ink/75"
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
                className="mt-5 cursor-pointer text-sm font-medium underline decoration-ink/25 underline-offset-4 transition-colors hover:decoration-ink"
              >
                {open ? 'Show less' : 'Show the full scope'}
              </button>
            </>
          ) : null}
          <ul className="mt-6 flex flex-wrap gap-2">
            {job.stack.split(', ').map((item) => (
              <li
                key={item}
                className="rounded-full bg-canvas px-2.5 py-1 text-xs text-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

export function Work() {
  return (
    <section id="work" className="scroll-mt-24 px-5 py-8 md:px-8 md:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-medium text-muted">Selected work</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Products I own.
            </h2>
          </div>
          <p className="hidden max-w-xs text-right text-sm leading-relaxed text-muted lg:block">
            Commercial frontend since July 2021.
          </p>
        </div>
        <div className="mt-8 space-y-4">
          {experience.map((job, index) => (
            <Job key={job.company} job={job} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
