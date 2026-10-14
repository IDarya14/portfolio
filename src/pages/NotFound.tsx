import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <section className="min-h-svh bg-canvas px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium text-muted">404</p>
        <h1 className="mt-4 max-w-xl text-5xl font-semibold tracking-[-0.045em] sm:text-6xl">
          This page is not here.
        </h1>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-medium text-white"
        >
          Back home
        </Link>
      </div>
    </section>
  )
}
