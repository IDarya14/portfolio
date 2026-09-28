import { useEffect, useLayoutEffect, useRef, useState } from "react";
import headerImage from "../assets/header.jpg";
import portrait from "../assets/portrait.jpg";
import { About } from "../components/About.tsx";
import { Contact } from "../components/Contact.tsx";
import { Skills } from "../components/Skills.tsx";
import { Work } from "../components/Work.tsx";
import { profile } from "../data/profile.ts";

const nav = [
  { href: "#about", label: "About me" },
  { href: "#work", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact me" },
];

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        fill="currentColor"
        d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.1c.5-1 1.8-2.1 3.8-2.1 4 0 4.8 2.7 4.8 6.1V24h-4v-7.7c0-1.8 0-4.1-2.5-4.1s-2.9 2-2.9 4V24h-4V8.5z"
      />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        fill="currentColor"
        d="M20.8 4.6 3.6 11.2c-1.2.5-1.2 1.1-.2 1.4l4.4 1.4 1.7 5.2c.2.6.1.9.7.9.4 0 .6-.2.9-.4l2.4-2.3 4.9 3.6c.6.3 1 .2 1.2-.5l3.2-15.3c.2-1.2-.5-1.7-1.2-1.4ZM9 13.6l9.2-5.8c.4-.3.8-.1.5.2L10.8 15l-.3 3.2-1.5-4.6Z"
      />
    </svg>
  );
}

const sectionIds = ["about", "work", "skills", "contact"];

function useActiveSection() {
  const [active, setActive] = useState("#about");

  useEffect(() => {
    const update = () => {
      let current = "#about";
      let visibleHeight = 0;
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;
        const rect = section.getBoundingClientRect();
        const visible =
          Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 88);
        if (visible > visibleHeight) {
          visibleHeight = visible;
          current = `#${id}`;
        }
      }
      const atEnd =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 4;
      setActive(atEnd ? "#contact" : visibleHeight > 48 ? current : "#about");
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("hashchange", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("hashchange", update);
    };
  }, []);

  return active;
}

function SiteNav() {
  const scrolled = useActiveSection();
  const [pressed, setPressed] = useState<string | null>(null);
  const active = pressed ?? scrolled;
  const navRef = useRef<HTMLElement>(null);
  const [pill, setPill] = useState({ left: 0, top: 0, width: 0, height: 0 });
  const [pillReady, setPillReady] = useState(false);
  const placed = useRef(false);

  useEffect(() => {
    if (!pressed) return;
    const unlock = () => setPressed(null);
    window.addEventListener("scrollend", unlock);
    const timer = window.setTimeout(unlock, 1200);
    return () => {
      window.removeEventListener("scrollend", unlock);
      window.clearTimeout(timer);
    };
  }, [pressed]);

  useLayoutEffect(() => {
    const navEl = navRef.current;
    if (!navEl) return;

    const measure = () => {
      const current = navEl.querySelector<HTMLAnchorElement>(
        '[aria-current="true"]',
      );
      if (!current) return;
      const navBox = navEl.getBoundingClientRect();
      const box = current.getBoundingClientRect();
      setPill({
        left: box.left - navBox.left,
        top: box.top - navBox.top,
        width: box.width,
        height: box.height,
      });
      setPillReady(true);
    };

    const frame = placed.current ? window.requestAnimationFrame(measure) : 0;
    if (!placed.current) {
      placed.current = true;
      measure();
    }
    const observer = new ResizeObserver(measure);
    observer.observe(navEl);
    window.addEventListener("resize", measure);
    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [active]);

  return (
    <nav
      ref={navRef}
      className="relative flex flex-wrap items-center justify-center gap-1 sm:justify-end sm:gap-x-2"
    >
      <span
        aria-hidden="true"
        className={
          pillReady
            ? "pointer-events-none absolute rounded-full bg-white transition-[left,top,width,height] duration-500 ease-out motion-reduce:transition-none"
            : "pointer-events-none absolute rounded-full bg-white"
        }
        style={{
          left: pill.left,
          top: pill.top,
          width: pill.width,
          height: pill.height,
        }}
      />
      {nav.map((item) => {
        const selected = active === item.href;
        return (
          <a
            key={item.href}
            href={item.href}
            aria-current={selected ? "true" : undefined}
            onClick={() => setPressed(item.href)}
            className={
              selected
                ? "relative z-10 rounded-full px-2.5 py-1.5 text-[10px] font-semibold tracking-wide text-ink uppercase transition-colors duration-500 ease-out sm:px-4 sm:py-2 sm:text-xs"
                : "relative z-10 rounded-full px-2.5 py-1.5 text-[10px] font-semibold tracking-wide text-white/55 uppercase transition-colors duration-500 ease-out hover:text-white sm:px-4 sm:py-2 sm:text-xs"
            }
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}

export function Home() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-0">
        <img
          src={headerImage}
          alt=""
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <header className="fixed inset-x-0 top-0 z-30 px-4 py-3 md:px-8 md:py-4">
        <div className="mx-auto flex w-full max-w-6xl justify-end">
          <div className="max-w-full rounded-3xl bg-black/40 px-2 py-1.5 backdrop-blur-md sm:rounded-full sm:px-4 sm:py-2 md:px-5">
            <SiteNav />
          </div>
        </div>
      </header>

      <main id="top" className="relative z-10">
        <section className="px-4 pt-28 pb-4 text-white md:px-8 md:pt-[5.5rem] md:pb-5">
          <div className="relative mx-auto w-full max-w-6xl">
            <img
              src={portrait}
              alt="Daria Kurylenko"
              className="absolute top-0 left-1/2 z-10 size-24 -translate-x-1/2 -translate-y-1/2 rounded-full object-cover object-[center_16%] shadow-[0_16px_40px_rgba(0,0,0,0.4)] ring-2 ring-cyan-100/40 md:top-1/2 md:left-0 md:size-56 md:-translate-x-[18%] md:-translate-y-1/2"
            />
            <div className="glass-panel px-5 pt-16 pb-8 text-center sm:px-8 sm:pb-12 sm:pt-16 md:py-16 md:pr-12 md:pl-52 md:text-left lg:pl-56 lg:pr-12">
              <p className="text-xl font-medium sm:text-2xl md:text-3xl">Hi, I am</p>
              <h1 className="mt-2 text-4xl leading-[0.95] font-semibold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                Daria Kurylenko
              </h1>
              <p className="mt-4 text-sm text-white/75 sm:text-base md:text-lg">
                Frontend Developer · React / TypeScript · Strong Mid-Level
              </p>
              <div className="mt-6 flex justify-center gap-3 md:mt-8 md:justify-start">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/30 bg-white/10 text-white transition-colors hover:bg-white/20"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href={profile.telegram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Telegram"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/30 bg-white/10 text-white transition-colors hover:bg-white/20"
                >
                  <TelegramIcon />
                </a>
              </div>
            </div>
          </div>
        </section>

        <About />
        <Work />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
