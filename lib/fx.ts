"use client"

/**
 * Port of design-handoff/design/fx.js — same vanilla DOM/IntersectionObserver
 * engine, same data-* attribute contract. Call initFx() once on mount; it
 * no-ops on subsequent calls (guards itself like the original).
 */
export function initFx() {
  if (typeof window === "undefined") return
  const w = window as Window & { __fx?: boolean }
  if (w.__fx) return
  w.__fx = true

  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches
  const fine = matchMedia("(pointer: fine)").matches
  const seen = new WeakSet<Element>()
  let par: HTMLElement[] = []
  let fills: HTMLElement[] = []
  let scrollies: HTMLElement[] = []
  let spots: HTMLElement[] = []
  const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v))
  const ease = "cubic-bezier(.2,.7,.2,1)"

  type RevealEl = HTMLElement & { __pend?: number }
  type SlabEl = HTMLElement & { __h?: number }

  let pending: RevealEl[] = []
  const show = (el: RevealEl) => {
    if (!el.__pend) return
    el.__pend = 0
    const s = el.style
    s.opacity = ""
    s.transform = ""
    s.filter = ""
    io.unobserve(el)
  }
  const io = new IntersectionObserver(
    (es) => es.forEach((e) => { if (e.isIntersecting) show(e.target as RevealEl) }),
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  )

  const growIO = new IntersectionObserver(
    (es) => es.forEach((e) => {
      if (!e.isIntersecting) return
      const t = e.target as HTMLElement
      t.style.transition = "width 1.4s cubic-bezier(.2,.7,.2,1) .25s"
      t.style.width = t.dataset.w || t.style.width
      growIO.unobserve(t)
    }),
    { threshold: 0.4 }
  )

  function reveal(el: RevealEl, d: number) {
    if (reduce) return
    const y = +(el.dataset.y || 36)
    el.style.opacity = "0"
    el.style.transform = `translate3d(0,${y}px,0)`
    el.style.filter = "blur(10px)"
    el.style.transition = `opacity 1s ${ease} ${d}ms, transform 1.1s ${ease} ${d}ms, filter 1s ease ${d}ms`
    el.__pend = 1
    pending.push(el)
    io.observe(el)
  }

  function tilt(el: HTMLElement) {
    if (reduce || !fine) return
    const max = +(el.dataset.tilt || 8)
    const glow = el.hasAttribute("data-glow")
    el.addEventListener("pointermove", (e: PointerEvent) => {
      const r = el.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width
      const y = (e.clientY - r.top) / r.height
      el.style.transition = "transform .18s ease-out"
      el.style.transform = `perspective(1100px) rotateX(${((0.5 - y) * max).toFixed(2)}deg) rotateY(${((x - 0.5) * max).toFixed(2)}deg)`
      if (glow) {
        el.style.setProperty("--gx", (x * 100).toFixed(1) + "%")
        el.style.setProperty("--gy", (y * 100).toFixed(1) + "%")
        el.style.backgroundImage = "radial-gradient(520px circle at var(--gx) var(--gy), color-mix(in srgb, var(--accent) 16%, transparent), transparent 45%)"
      }
    })
    el.addEventListener("pointerleave", () => {
      el.style.transition = `transform .9s ${ease}`
      el.style.transform = "perspective(1100px) rotateX(0deg) rotateY(0deg)"
      if (glow) el.style.backgroundImage = "none"
    })
  }

  function magnetic(el: HTMLElement) {
    if (reduce || !fine) return
    el.style.transition = `translate .35s ${ease}`
    el.addEventListener("pointermove", (e: PointerEvent) => {
      const r = el.getBoundingClientRect()
      el.style.translate = `${((e.clientX - r.left - r.width / 2) * 0.25).toFixed(1)}px ${((e.clientY - r.top - r.height / 2) * 0.35).toFixed(1)}px`
    })
    el.addEventListener("pointerleave", () => { el.style.translate = "0 0" })
  }

  function upScrolly(el: HTMLElement) {
    const r = el.getBoundingClientRect()
    const p = clamp(-r.top / Math.max(1, r.height - innerHeight))
    const cards = el.querySelectorAll<HTMLElement>("[data-card]")
    const panels = el.querySelectorAll<HTMLElement>("[data-panel]")
    const n = Math.max(cards.length, panels.length, 1)
    const pos = p * (n - 1)
    const act = Math.round(pos)

    cards.forEach((c, i) => {
      const o = i - pos
      const a = Math.abs(o)
      c.style.transform = `translate3d(${(o * 46).toFixed(1)}px, ${(o * -26).toFixed(1)}px, ${(-a * 240).toFixed(1)}px) rotateY(${(o * -20).toFixed(2)}deg) rotateX(${(o * 7).toFixed(2)}deg)`
      c.style.opacity = String(clamp(1 - a * 0.42).toFixed(3))
      c.style.zIndex = String(100 - Math.round(a * 10))
      c.style.filter = reduce ? "" : `blur(${Math.min(a * 3, 6).toFixed(2)}px)`
    })

    panels.forEach((pn, i) => {
      const on = i === act
      pn.style.opacity = on ? "1" : "0"
      pn.style.transform = on ? "none" : `translateY(${i < act ? -28 : 28}px)`
      pn.style.pointerEvents = on ? "auto" : "none"
    })

    const stack = el.querySelector<HTMLElement>("[data-stack]")
    if (stack) stack.style.transform = `rotateX(58deg) rotateZ(${(-44 + p * 26).toFixed(2)}deg)`

    el.querySelectorAll<SlabEl>("[data-slab]").forEach((s) => {
      const i = +(s.dataset.slab || 0)
      const gap = +(s.dataset.gap || 46)
      const f = clamp(pos - i + 1)
      const on = i === act
      const past = i < act
      s.style.transform = `translateZ(${(i * gap + (1 - f) * 340 + (s.__h ? 26 : 0)).toFixed(1)}px)`
      s.style.transition = "transform .25s ease-out"
      s.style.opacity = String(f.toFixed(3))
      s.style.setProperty("--top", on ? "var(--accent)" : past ? "var(--soft)" : "var(--card)")
      s.style.setProperty("--ink", on ? "#fff" : "var(--fg)")
      s.style.setProperty("--side", on ? "var(--accent-ink)" : "color-mix(in srgb, var(--fg) 12%, var(--card))")
      s.style.setProperty("--side2", on ? "color-mix(in srgb, var(--accent-ink) 78%, #000)" : "color-mix(in srgb, var(--fg) 22%, var(--card))")
      s.style.setProperty("--win", on ? "#E3FFEE" : past ? "var(--accent)" : "color-mix(in srgb, var(--fg) 9%, transparent)")
      s.style.setProperty("--glow", on ? "0 30px 60px -10px color-mix(in srgb, var(--accent) 55%, transparent)" : s.__h ? "0 0 0 2px var(--accent)" : "none")
    })

    el.querySelectorAll<HTMLElement>("[data-floorbtn]").forEach((bt) => {
      const on = +(bt.dataset.floorbtn || 0) === act
      bt.style.background = on ? "var(--accent)" : "transparent"
      bt.style.color = on ? "#fff" : "var(--fg)"
      bt.style.borderColor = on ? "var(--accent)" : "var(--line)"
      bt.style.boxShadow = on ? "0 12px 26px -8px color-mix(in srgb, var(--accent) 60%, transparent)" : "none"
    })

    el.querySelectorAll<HTMLElement>("[data-ghost]").forEach((g) => {
      const i = +(g.dataset.ghost || 0)
      const on = i === act
      g.style.opacity = on ? "1" : "0"
      g.style.transform = on ? "none" : `translateY(${i < act ? -30 : 30}px)`
    })

    el.querySelectorAll<HTMLElement>("[data-screen]").forEach((sc) => {
      const i = +(sc.dataset.screen || 0)
      const on = i === act
      sc.style.opacity = on ? "1" : "0"
      sc.style.transform = on ? "none" : `scale(${i < act ? 1.08 : 0.92})`
    })

    el.querySelectorAll<HTMLElement>("[data-appicon]").forEach((ic) => {
      const on = +(ic.dataset.appicon || 0) === act
      ic.style.transform = on ? "translateY(-8px) scale(1.12)" : "none"
      ic.style.boxShadow = on ? "0 14px 24px -8px rgba(0,0,0,.35)" : "0 2px 6px rgba(0,0,0,.12)"
    })

    const bar = el.querySelector<HTMLElement>("[data-progress]")
    if (bar) bar.style.transform = `scaleX(${p.toFixed(4)})`

    el.querySelectorAll<HTMLElement>("[data-dot]").forEach((d, i) => {
      d.style.width = i === act ? "28px" : "8px"
      d.style.background = i === act ? "var(--accent)" : "var(--line)"
    })
  }

  let ticking = false
  function tick() {
    ticking = false
    const vh = innerHeight
    par = par.filter((e) => e.isConnected)
    fills = fills.filter((e) => e.isConnected)
    scrollies = scrollies.filter((e) => e.isConnected)

    if (!reduce) par.forEach((el) => {
      const r = el.getBoundingClientRect()
      el.style.translate = `0 ${(-(r.top + r.height / 2 - vh / 2) * (+(el.dataset.parallax || 0.15))).toFixed(1)}px`
    })

    fills.forEach((el) => {
      const r = el.getBoundingClientRect()
      const p = reduce ? 1 : clamp((vh * 0.85 - r.top) / (r.height + vh * 0.35))
      el.style.backgroundSize = `${(p * 100).toFixed(2)}% 100%, 100% 100%`
    })

    scrollies.forEach(upScrolly)

    pending = pending.filter((el) => {
      if (!el.__pend || !el.isConnected) return false
      const r = el.getBoundingClientRect()
      if (r.top < vh * 0.94 && r.bottom > 0) { show(el); return false }
      return true
    })

    document.querySelectorAll<HTMLElement>("[data-deck]").forEach((dk) => {
      const cards = [...dk.querySelectorAll<HTMLElement>("[data-deckcard]")]
      cards.forEach((c, i) => {
        const fits = innerWidth > 900 && c.offsetHeight < vh - 130
        c.style.position = fits ? "sticky" : "relative"
        c.style.top = fits ? 104 + i * 16 + "px" : ""
        const nx = cards[i + 1]
        let p = 0
        if (fits && nx && !reduce) {
          const ct = c.getBoundingClientRect().top
          const nt = nx.getBoundingClientRect().top
          p = clamp(1 - (nt - ct) / Math.max(1, c.offsetHeight))
        }
        const inner = c.firstElementChild as HTMLElement | null
        if (!inner) return
        inner.style.transformOrigin = "50% 0%"
        inner.style.transform = `perspective(1400px) translateY(${(-p * 18).toFixed(1)}px) scale(${(1 - p * 0.07).toFixed(4)}) rotateX(${(p * 9).toFixed(2)}deg)`
        inner.style.filter = p > 0.01 ? `brightness(${(1 - p * 0.14).toFixed(3)}) saturate(${(1 - p * 0.4).toFixed(3)})` : ""
      })
    })

    document.querySelectorAll<HTMLElement>("[data-order]").forEach((o) => {
      const r = o.getBoundingClientRect()
      const p = reduce ? 1 : clamp((vh * 0.92 - r.top) / (vh * 0.55))
      const q = 1 - (1 - p) * (1 - p) * (1 - p)
      o.querySelectorAll<HTMLElement>("[data-tile]").forEach((t) => {
        const k = 1 - q
        t.style.transform = `translate(${(+(t.dataset.mx || 0) * k).toFixed(1)}px, ${(+(t.dataset.my || 0) * k).toFixed(1)}px) rotate(${(+(t.dataset.mr || 0) * k).toFixed(2)}deg)`
        const tickEl = t.querySelector<HTMLElement>("[data-tick]")
        if (tickEl) {
          tickEl.style.opacity = p > 0.92 ? "1" : "0"
          tickEl.style.transform = p > 0.92 ? "scale(1)" : "scale(.4)"
        }
        t.style.borderColor = p > 0.92 ? "color-mix(in srgb, var(--accent) 45%, var(--line))" : "var(--line)"
      })
    })
  }

  const req = () => { if (!ticking) { ticking = true; requestAnimationFrame(tick) } }
  addEventListener("scroll", req, { passive: true })
  addEventListener("resize", req)
  addEventListener("pointermove", (e: PointerEvent) => {
    spots = spots.filter((s) => s.isConnected)
    spots.forEach((s) => {
      const r = s.getBoundingClientRect()
      s.style.setProperty("--mx", e.clientX - r.left + "px")
      s.style.setProperty("--my", e.clientY - r.top + "px")
    })
  }, { passive: true })

  type TrackedEl = RevealEl & { __fx?: Record<string, number> }

  const once = <T extends TrackedEl = TrackedEl>(sel: string, fn: (el: T) => void) =>
    document.querySelectorAll<T>(sel).forEach((el) => {
      if (el.__fx && el.__fx[sel]) return
      ;(el.__fx = el.__fx || {})[sel] = 1
      fn(el)
    })

  function scan() {
    once("[data-reveal]", (el) => reveal(el, +(el.dataset.delay || 0)))
    document.querySelectorAll<HTMLElement>("[data-stagger]").forEach((p) => {
      const base = +(p.dataset.delay || 0)
      const step = +(p.dataset.staggerStep || p.dataset.stagger || 110)
      ;[...p.children].forEach((c, i) => {
        if (seen.has(c)) return
        seen.add(c)
        reveal(c as HTMLElement, base + i * step)
      })
    })
    once("[data-tilt]", tilt)
    once("[data-magnetic]", magnetic)
    once("[data-parallax]", (el) => par.push(el))
    once("[data-fill]", (el) => fills.push(el))
    once("[data-scrolly]", (el) => scrollies.push(el))
    once("[data-count]", (el) => {
      const m = (el.textContent || "").trim().match(/^([^\d]*)([\d.,]+)(.*)$/)
      if (!m || reduce) return
      const to = parseFloat(m[2].replace(/,/g, ""))
      const pre = m[1]
      const suf = m[3]
      el.textContent = pre + "0" + suf
      const ob = new IntersectionObserver((es) => es.forEach((e) => {
        if (!e.isIntersecting) return
        ob.disconnect()
        const t0 = performance.now()
        const dur = 1600
        const step = (now: number) => {
          const k = clamp((now - t0) / dur)
          const v = 1 - Math.pow(1 - k, 4)
          el.textContent = pre + Math.round(to * v) + suf
          if (k < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
      }), { threshold: 0.6 })
      ob.observe(el)
    })
    once("[data-grow]", (el) => {
      if (reduce) { el.style.width = el.dataset.w || ""; return }
      el.style.width = "0%"
      growIO.observe(el)
    })
    once("[data-goto]", (bt) => bt.addEventListener("click", () => {
      const sc = bt.closest<HTMLElement>("[data-scrolly]")
      if (!sc) return
      const n = sc.querySelectorAll("[data-panel]").length || 1
      const top = scrollY + sc.getBoundingClientRect().top
      scrollTo({
        top: top + (+(bt.dataset.goto || 0) / Math.max(1, n - 1)) * (sc.offsetHeight - innerHeight) + 2,
        behavior: reduce ? "auto" : "smooth",
      })
    }))
    once<SlabEl & TrackedEl>("[data-slab]", (s) => {
      s.addEventListener("pointerenter", () => { s.__h = 1; req() })
      s.addEventListener("pointerleave", () => { s.__h = 0; req() })
    })
    once("[data-spot]", (el) => spots.push(el))
    tick()
  }

  let sr = 0
  const kick = () => { cancelAnimationFrame(sr); sr = requestAnimationFrame(scan) }
  new MutationObserver(kick).observe(document.documentElement, { childList: true, subtree: true })
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", kick)
  else kick()
}
