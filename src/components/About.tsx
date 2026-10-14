import { profile } from '../data/profile.ts'

const principles = [
  {
    title: 'Own the product surface',
    text: 'Client application, shared data layer, and the release path across 4 environments.',
  },
  {
    title: 'One app, many lenders',
    text: 'A lender-agnostic flow for 19 lenders. A new lender went from a month of frontend work to a week.',
  },
  {
    title: 'Lead in the codebase',
    text: 'Frontend lead for 2 frontend developers, and review of UI written by 4 full-stack developers.',
  },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="text-sm font-medium text-muted">About</p>
          <p className="mt-4 text-[clamp(2rem,4vw,3.15rem)] leading-[1.02] font-semibold tracking-[-0.04em]">
            Complex rules.
            <span className="text-muted"> Interfaces that stay obvious.</span>
          </p>
        </div>
        <div className="space-y-5 text-[17px] leading-relaxed text-ink/80 lg:col-span-7">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      <ul className="mx-auto mt-14 grid max-w-6xl gap-4 md:grid-cols-3">
        {principles.map((item) => (
          <li
            key={item.title}
            className="rounded-[1.25rem] border border-line bg-card px-5 py-6"
          >
            <h2 className="text-lg font-semibold tracking-tight">{item.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
