import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import portrait from '../assets/portrait.jpg'
import { About } from '../components/About.tsx'
import { Contact } from '../components/Contact.tsx'
import { Skills } from '../components/Skills.tsx'
import { Work } from '../components/Work.tsx'
import { highlights, profile } from '../data/profile.ts'

const nav = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

const sectionIds = ['about', 'work', 'skills', 'contact']

function useActiveSection() {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const update = () => {
      const marker = 120
      let current: string | null = null
      for (const id of sectionIds) {
        const section = document.getElementById(id)
        if (!section) continue
        if (section.getBoundingClientRect().top <= marker) current = `#${id}`
      }
      const atEnd =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 4
      setActive(atEnd ? '#contact' : current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('hashchange', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('hashchange', update)
    }
  }, [])

  return active
}

function SiteNav() {
  const scrolled = useActiveSection()
  const [pressed, setPressed] = useState<string | null>(null)
  const active = pressed ?? scrolled
  const navRef = useRef<HTMLElement>(null)
  const [pill, setPill] = useState({ left: 0, top: 0, width: 0, height: 0 })
  const placed = useRef(false)

  useEffect(() => {
    if (!pressed) return
    const unlock = () => setPressed(null)
    window.addEventListener('scrollend', unlock)
    const timer = window.setTimeout(unlock, 900)
    return () => {
      window.removeEventListener('scrollend', unlock)
      window.clearTimeout(timer)
    }
  }, [pressed])

  useLayoutEffect(() => {
    const navEl = navRef.current
    if (!navEl) return

    const measure = () => {
      const current = navEl.querySelector<HTMLAnchorElement>(
        '[aria-current="true"]',
      )
      if (!current) {
        setPill((value) => ({ ...value, width: 0 }))
        return
      }
      const navBox = navEl.getBoundingClientRect()
      const box = current.getBoundingClientRect()
      setPill({
        left: box.left - navBox.left,
        top: box.top - navBox.top,
        width: box.width,
        height: box.height,
      })
    }

    const frame = placed.current ? window.requestAnimationFrame(measure) : 0
    if (!placed.current) {
      placed.current = true
      measure()
    }
    const observer = new ResizeObserver(measure)
    observer.observe(navEl)
    window.addEventListener('resize', measure)
    return () => {
      window.cancelAnimationFrame(frame)
      observer.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [active])

  return (
    <nav
      ref={navRef}
      className="relative flex items-center gap-0.5 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      aria-label="Page"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute rounded-full bg-ink transition-[left,top,width,height] duration-500 ease-out motion-reduce:transition-none"
        style={{
          left: pill.left,
          top: pill.top,
          width: pill.width,
          height: pill.height,
        }}
      />
      {nav.map((item) => {
        const selected = active === item.href
        return (
          <a
            key={item.href}
            href={item.href}
            aria-current={selected ? 'true' : undefined}
            onClick={() => setPressed(item.href)}
            className={
              selected
                ? 'relative z-10 shrink-0 rounded-full px-2.5 py-1.5 text-[13px] font-medium text-white transition-colors duration-500 sm:px-3'
                : 'relative z-10 shrink-0 rounded-full px-2.5 py-1.5 text-[13px] font-medium text-ink/55 transition-colors duration-500 hover:text-ink sm:px-3'
            }
          >
            {item.label}
          </a>
        )
      })}
    </nav>
  )
}

export function Home() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-30 border-b border-line/80 bg-canvas/80 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-2 px-5 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 md:px-8">
          <a href="#top" className="shrink-0 text-sm font-semibold tracking-tight">
            Daria Kurylenko
          </a>
          <SiteNav />
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden px-5 pt-28 pb-8 md:px-8 md:pt-36 md:pb-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 right-0 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(223,245,106,0.55),transparent_68%)]"
          />
          <div className="relative mx-auto grid w-full max-w-6xl items-end gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] lg:gap-16">
            <div>
              <p className="inline-flex items-center gap-2 text-sm text-muted">
                <span className="size-1.5 rounded-full bg-[#6f9f16]" />
                {profile.location} · {profile.availability}
              </p>
              <h1 className="mt-6 max-w-3xl text-[clamp(2.7rem,6.4vw,5.4rem)] leading-[0.92] font-semibold tracking-[-0.045em] text-balance">
                Clear interfaces for complicated products.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                {profile.summary}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex rounded-full bg-ink px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-ink/85"
                >
                  Email me
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full border border-line bg-card px-5 py-3 text-sm font-medium transition-colors hover:bg-white"
                >
                  LinkedIn
                </a>
                <a
                  href={profile.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex px-2 py-3 text-sm font-medium text-muted transition-colors hover:text-ink"
                >
                  Telegram
                </a>
              </div>
            </div>

            <figure className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
              <img
                src={portrait}
                alt="Daria Kurylenko"
                className="aspect-[4/5] w-full rounded-[1.75rem] object-cover object-[center_18%] shadow-[0_30px_70px_-36px_rgba(18,18,17,0.55)]"
              />
              <figcaption className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-medium text-ink shadow-sm backdrop-blur">
                Kyiv · Lead Frontend
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="px-5 pb-4 md:px-8">
          <dl className="mx-auto grid max-w-6xl gap-px overflow-hidden rounded-[1.5rem] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <div key={item.label} className="bg-card px-6 py-6 md:px-8 md:py-8">
                <dt className="text-[2rem] leading-none font-semibold tracking-[-0.04em]">
                  {item.value}
                </dt>
                <dd className="mt-3 max-w-[12rem] text-sm leading-snug text-muted">
                  {item.label}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <About />
        <Work />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
