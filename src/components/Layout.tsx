import { Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <div className="min-h-svh bg-transparent font-sans text-ink">
      <Outlet />
    </div>
  )
}
