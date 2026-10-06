"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"

export function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <>
      <style>{`
        .nav {
          position: sticky; top: 0; z-index: 100;
          background: rgba(11,12,14,.92); backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border);
        }
        .nav-inner {
          max-width: 1200px; margin: 0 auto; padding: 0 48px;
          display: flex; align-items: center; justify-content: space-between;
          height: 60px;
        }
        .nav-brand { display: flex; align-items: baseline; gap: 12px; text-decoration: none; }
        .nav-wm {
          font-family: var(--ff-display); font-size: 20px; font-weight: 400;
          letter-spacing: -.025em; color: var(--text);
        }
        .nav-wm .mo { color: var(--green); }
        .nav-tagline {
          font-family: var(--ff-mono); font-size: 10px; color: var(--text-3);
          letter-spacing: .12em; text-transform: uppercase;
        }
        .nav-links { display: flex; align-items: center; gap: 32px; }
        .nav-links a {
          font-size: 13px; color: var(--text-2); text-decoration: none;
          transition: color .15s; letter-spacing: -.005em;
        }
        .nav-links a:hover, .nav-links a.active { color: var(--text); }
        .nav-links a.nav-cta, .nav-mobile a.nav-cta {
          background: var(--green); color: #0b0c0e; font-size: 13px; font-weight: 500;
          padding: 8px 18px; border-radius: 3px; font-family: var(--ff-body);
          text-decoration: none; transition: opacity .15s;
          letter-spacing: -.005em;
        }
        .nav-links a.nav-cta:hover, .nav-mobile a.nav-cta:hover { opacity: .85; color: #0b0c0e; }
        .nav-hamburger {
          display: none; background: none; border: none; cursor: pointer;
          color: var(--text-2); padding: 4px;
        }
        .nav-mobile {
          display: none; flex-direction: column;
          background: rgba(11,12,14,.98);
          border-bottom: 1px solid var(--border);
          padding: 20px 20px;
          gap: 16px;
        }
        .nav-mobile.open { display: flex; }
        .nav-mobile a {
          font-size: 15px; color: var(--text-2); text-decoration: none;
          transition: color .15s;
        }
        .nav-mobile a:hover { color: var(--text); }
        .nav-mobile .nav-cta { align-self: flex-start; }
        @media(max-width: 1000px) {
          .nav-tagline { display: none; }
          .nav-links { display: none; }
          .nav-hamburger { display: block; }
          .nav-inner { padding: 0 20px; }
        }
      `}</style>

      <nav className="nav">
        <div className="nav-inner">
          <Link className="nav-brand" href="/">
            <div className="nav-wm"><span className="mo">mo</span>davidc</div>
            <div className="nav-tagline">Criterio · Contexto · Intención</div>
          </Link>
          <div className="nav-links">
            <Link href="/experiencia" className={pathname === "/experiencia" ? "active" : ""}>Experiencia</Link>
            <Link href="/casos-de-exito" className={pathname === "/casos-de-exito" ? "active" : ""}>Casos de Éxito</Link>
            <Link href="/metodologia" className={pathname === "/metodologia" ? "active" : ""}>Metodología</Link>
            <Link href="/testimonials" className={pathname === "/testimonials" ? "active" : ""}>Testimonios</Link>
            <Link className="nav-cta" href="/contact">Hablemos</Link>
          </div>
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              {menuOpen
                ? <path d="M4 4L18 18M18 4L4 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                : <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              }
            </svg>
          </button>
        </div>

        <div className={`nav-mobile ${menuOpen ? "open" : ""}`}>
          <Link href="/experiencia">Experiencia</Link>
          <Link href="/casos-de-exito">Casos de Éxito</Link>
          <Link href="/metodologia">Metodología</Link>
          <Link href="/testimonials">Testimonios</Link>
          <Link className="nav-cta" href="/contact">Hablemos</Link>
        </div>
      </nav>
    </>
  )
}
