import { profile } from '../data/profile.ts'

const linkClass =
  'text-sm text-muted underline decoration-transparent underline-offset-4 transition-colors hover:text-ink hover:decoration-ink/30'

export function Contact() {
  return (
    <footer id="contact" className="scroll-mt-24 px-5 pt-8 pb-10 md:px-8 md:pb-14">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[1.75rem] bg-ink px-6 py-12 text-white sm:px-10 md:px-14 md:py-16">
        <p className="text-sm text-white/55">Contact</p>
        <h2 className="mt-4 max-w-3xl text-[clamp(2.4rem,5vw,4.4rem)] leading-[0.95] font-semibold tracking-[-0.045em]">
          Tell me about the product.
        </h2>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-white/60">
          {profile.location} · {profile.availability}
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-flex rounded-full bg-lime px-5 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 motion-reduce:hover:translate-y-0"
        >
          {profile.email}
        </a>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
          <a href={profile.phoneHref} className="text-sm text-white/75 hover:text-white">
            {profile.phone}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-white/75 hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href={profile.telegram}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-white/75 hover:text-white"
          >
            Telegram
          </a>
        </div>
        <p className="mt-12 max-w-2xl border-t border-white/10 pt-6 text-sm leading-relaxed text-white/45">
          {profile.education.degree}
          <span className="text-white/25"> · </span>
          {profile.education.school}
          <span className="text-white/25"> · </span>
          {profile.education.dates}
        </p>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/45">
          {profile.education.note}
          <span className="text-white/25"> · </span>
          {profile.education.languages}
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-6xl text-xs text-muted">
        <a href="#top" className={linkClass}>
          Back to top
        </a>
      </p>
    </footer>
  )
}
