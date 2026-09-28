import { profile } from '../data/profile.ts'

const contactLinkClass =
  'inline-flex cursor-pointer items-center gap-2.5 text-sm text-white/80 transition-colors hover:text-white'

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4 shrink-0"
    >
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-[18px] shrink-0"
    >
      <path d="M8 3.8h2.1l1.1 2.8-1.5.9a12 12 0 0 0 6.8 6.8l.9-1.5 2.8 1.1V16a2 2 0 0 1-2.2 2A14.2 14.2 0 0 1 6 6a2 2 0 0 1 2-2.2z" />
    </svg>
  )
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 shrink-0">
      <path
        fill="currentColor"
        d="M20.8 4.6 3.6 11.2c-1.2.5-1.2 1.1-.2 1.4l4.4 1.4 1.7 5.2c.2.6.1.9.7.9.4 0 .6-.2.9-.4l2.4-2.3 4.9 3.6c.6.3 1 .2 1.2-.5l3.2-15.3c.2-1.2-.5-1.7-1.2-1.4ZM9 13.6l9.2-5.8c.4-.3.8-.1.5.2L10.8 15l-.3 3.2-1.5-4.6Z"
      />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="5.6 4.6 14 14" aria-hidden="true" className="size-[17px] shrink-0">
      <path
        fill="currentColor"
        d="M6.7 9.4h2.3v8.2H6.7V9.4Zm1.2-3.8a1.35 1.35 0 1 1 0 2.7 1.35 1.35 0 0 1 0-2.7ZM11.2 9.4h2.2v1.1h.1c.3-.6 1.1-1.2 2.3-1.2 2.5 0 2.9 1.6 2.9 3.7v4.6h-2.3v-4.1c0-1 0-2.2-1.4-2.2s-1.6 1-1.6 2.2v4.1h-2.2V9.4Z"
      />
    </svg>
  )
}

export function Contact() {
  return (
    <>
      <section className="px-4 py-4 text-white md:px-8 md:py-5">
        <div className="glass-panel mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-12 md:px-12 md:py-16">
          <p className="text-xs font-medium tracking-[0.22em] text-cyan-100 uppercase">
            Education
          </p>
          <h3 className="mt-5 max-w-3xl font-serif text-3xl leading-tight sm:text-4xl">
            {profile.education.degree}
          </h3>
          <p className="mt-3 max-w-2xl leading-relaxed break-words text-white/75">
            {profile.education.school}
          </p>
          <p className="mt-2 text-sm text-white/55">{profile.education.dates}</p>
        </div>
      </section>

      <footer
        id="contact"
        className="mt-6 border-t border-white/15 bg-[#041018]/80 px-5 pt-10 pb-8 text-white backdrop-blur-md sm:px-8 md:px-10 md:pt-12"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-10">
          <div>
            <p className="text-xs font-medium tracking-[0.24em] text-cyan-100/70 uppercase">
              Contact
            </p>
            <h2 className="mt-4 max-w-xl font-serif text-3xl leading-none sm:text-4xl md:text-5xl">
              Let’s build the next product.
            </h2>
            <p className="mt-4 text-sm text-white/60">{profile.location}</p>
          </div>
          <div className="flex flex-col gap-3">
            <a href={`mailto:${profile.email}`} className={contactLinkClass}>
              <MailIcon />
              {profile.email}
            </a>
            <a href={profile.phoneHref} className={contactLinkClass}>
              <PhoneIcon />
              {profile.phone}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className={contactLinkClass}
            >
              <LinkedInIcon />
              LinkedIn
            </a>
            <a
              href={profile.telegram}
              target="_blank"
              rel="noreferrer"
              className={contactLinkClass}
            >
              <TelegramIcon />
              Telegram
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
