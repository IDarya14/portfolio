import { useLayoutEffect, useRef, useState, type PointerEvent } from 'react'
import { skillGroups } from '../data/profile.ts'

const tabShortLabel: Record<string, string> = {
  Interface: 'UI',
  'State and data': 'Data',
  Delivery: 'Build',
  Collaboration: 'Team',
}

function Chevron({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        d={direction === 'left' ? 'M14.5 6.5 9 12l5.5 5.5' : 'M9.5 6.5 15 12l-5.5 5.5'}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Skills() {
  const count = skillGroups.length
  const [index, setIndex] = useState(0)
  const [drag, setDrag] = useState(0)
  const [dragging, setDragging] = useState(false)
  const startX = useRef(0)
  const viewportRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const lineReady = useRef(false)
  const [viewportWidth, setViewportWidth] = useState(0)
  const [line, setLine] = useState({ left: 0, width: 0, top: 0 })

  useLayoutEffect(() => {
    const menu = menuRef.current
    if (!menu) return

    const measure = () => {
      const current = menu.querySelector<HTMLButtonElement>(
        '[aria-selected="true"]',
      )
      if (!current) return
      const menuBox = menu.getBoundingClientRect()
      const box = current.getBoundingClientRect()
      setLine({
        left: box.left - menuBox.left,
        width: box.width,
        top: box.bottom - menuBox.top - 1,
      })
    }

    const frame = lineReady.current ? window.requestAnimationFrame(measure) : 0
    if (!lineReady.current) {
      lineReady.current = true
      measure()
    }
    const observer = new ResizeObserver(measure)
    observer.observe(menu)
    return () => {
      window.cancelAnimationFrame(frame)
      observer.disconnect()
    }
  }, [index])

  useLayoutEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return
    const measure = () =>
      setViewportWidth(Math.floor(viewport.getBoundingClientRect().width))
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(viewport)
    return () => observer.disconnect()
  }, [])

  function go(next: number) {
    setIndex((next + count) % count)
  }

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === 'mouse' && event.button !== 0) return
    startX.current = event.clientX
    setDragging(true)
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!dragging) return
    setDrag(event.clientX - startX.current)
  }

  function finishDrag(event: PointerEvent<HTMLDivElement>) {
    if (!dragging) return
    const delta = event.clientX - startX.current
    setDragging(false)
    setDrag(0)
    if (delta <= -56) go(index + 1)
    else if (delta >= 56) go(index - 1)
  }

  return (
    <section id="skills" className="px-4 py-4 text-white md:px-8 md:py-5">
      <div className="glass-panel mx-auto max-w-6xl overflow-hidden px-5 py-8 sm:px-8 sm:py-12 md:px-12 md:py-16">
        <div
          ref={menuRef}
          className="relative flex flex-nowrap gap-x-3 overflow-x-auto border-b border-white/15 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-x-6 [&::-webkit-scrollbar]:hidden"
          role="tablist"
          aria-label="Skill groups"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute h-px bg-white transition-[left,width,top] duration-500 ease-out motion-reduce:transition-none"
            style={{ left: line.left, width: line.width, top: line.top }}
          />
          {skillGroups.map((group, groupIndex) => {
            const active = groupIndex === index
            return (
              <button
                key={group.title}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => go(groupIndex)}
                aria-label={group.title}
                className={
                  active
                    ? 'shrink-0 cursor-pointer pb-2 text-[10px] font-medium tracking-[0.12em] text-white uppercase transition-colors duration-500 ease-out sm:pb-3 sm:text-xs sm:tracking-[0.16em]'
                    : 'shrink-0 cursor-pointer pb-2 text-[10px] font-medium tracking-[0.12em] text-white/40 uppercase transition-colors duration-500 ease-out hover:text-white sm:pb-3 sm:text-xs sm:tracking-[0.16em]'
                }
              >
                <span className="sm:hidden">
                  {tabShortLabel[group.title] ?? group.title}
                </span>
                <span className="hidden sm:inline">{group.title}</span>
              </button>
            )
          })}
        </div>

        <div className="mt-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-serif text-4xl tracking-tight sm:text-5xl">Skills</h2>
            <p className="mt-3 text-sm tracking-[0.22em] text-cyan-100/80 uppercase">
              {index + 1} / {count}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous skills"
              onClick={() => go(index - 1)}
              className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <Chevron direction="left" />
            </button>
            <button
              type="button"
              aria-label="Next skills"
              onClick={() => go(index + 1)}
              className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <Chevron direction="right" />
            </button>
          </div>
        </div>

        <div
          ref={viewportRef}
          className="mt-8 cursor-grab touch-pan-y overflow-hidden active:cursor-grabbing"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={finishDrag}
          onPointerCancel={finishDrag}
        >
          <div
            className={
              dragging
                ? 'flex'
                : 'flex transition-transform duration-500 ease-out motion-reduce:transition-none'
            }
            style={{
              transform: `translateX(${-index * viewportWidth + drag}px)`,
            }}
          >
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="box-border shrink-0 overflow-hidden px-1"
                style={{ width: viewportWidth }}
              >
                <h3 className="font-serif text-3xl italic sm:text-4xl md:text-5xl">{group.title}</h3>
                <ul className="mt-8 flex min-h-48 flex-wrap content-start gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="max-w-full rounded-full bg-white/10 px-3 py-1.5 text-sm break-words text-white/90 ring-1 ring-white/20"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
