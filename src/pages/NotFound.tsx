import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <section className="min-h-svh bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-24">
      <p className="text-xs font-medium tracking-[0.24em] text-moss uppercase">
        404
      </p>
      <h1 className="mt-4 font-serif text-6xl tracking-tight">
        This page is not here.
      </h1>
      <Link
        to="/"
        className="mt-8 inline-flex border-b border-ink pb-0.5 text-sm"
      >
        Back home
      </Link>
      </div>
    </section>
  )
}
