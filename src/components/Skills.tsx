import { profile, skillGroups } from '../data/profile.ts'

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium text-muted">Skills</p>
        <h2 className="mt-3 max-w-xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
          What I ship with.
        </h2>
        <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-2">
          {profile.focus.map((item) => (
            <li
              key={item}
              className="text-2xl font-medium tracking-[-0.03em] sm:text-[1.7rem]"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-[1.25rem] border border-line bg-card px-5 py-6 sm:px-6"
            >
              <h3 className="text-sm font-medium text-muted">{group.title}</h3>
              <ul className="mt-4 columns-2 gap-x-6">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="break-inside-avoid py-1 text-sm leading-snug text-ink/85"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
