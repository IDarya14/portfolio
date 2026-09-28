import { profile } from "../data/profile.ts";

export function About() {
  return (
    <section id="about" className="px-4 py-4 text-white md:px-8 md:py-5">
      <div className="glass-panel mx-auto grid max-w-6xl gap-8 px-5 py-8 sm:px-8 sm:py-12 md:grid-cols-12 md:gap-10 md:px-12 md:py-16">
        <div className="md:col-span-4">
          <p className="text-xs font-medium tracking-[0.24em] text-white/60 uppercase">
            About
          </p>
          <p className="mt-4 font-serif text-3xl leading-tight italic sm:text-4xl">
            Less complexity. More impact.
          </p>
        </div>
        <div className="space-y-5 text-base leading-relaxed text-white/90 md:col-span-8">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="text-white">{profile.lookingFor}</p>
        </div>
      </div>
    </section>
  );
}
