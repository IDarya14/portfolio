import { Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <div className="min-h-svh bg-canvas font-sans text-ink antialiased">
      <Outlet />
    </div>
  )
}
