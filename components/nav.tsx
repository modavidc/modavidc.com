"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { useLang } from "@/lib/lang"
import { navContent, navPages, type NavActive } from "@/content/nav"

export function Nav({ active }: { active: NavActive }) {
  const { lang, toggle } = useLang()
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const t = navContent[lang]
  const isDark = mounted && resolvedTheme === "dark"

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        margin: "0 -24px",
        padding: "16px 24px",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        background: "color-mix(in srgb, var(--bg) 72%, transparent)",
        backdropFilter: "blur(18px) saturate(1.5)",
        WebkitBackdropFilter: "blur(18px) saturate(1.5)",
        viewTransitionName: "site-nav",
      } as React.CSSProperties}
    >
      <Link
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          fontWeight: 800,
          fontSize: 22,
          letterSpacing: "-.03em",
          textDecoration: "none",
          color: "var(--fg)",
        }}
      >
        <span
          style={{
            width: 36,
            height: 36,
            borderRadius: 10,
            background: "var(--accent)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 15,
            fontWeight: 800,
            letterSpacing: "-.04em",
          }}
        >
          MC
        </span>
        modavidc
      </Link>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 20, fontWeight: 600, fontSize: 15 }}>
        {navPages.map(([key, href]) => {
          const on = key === active
          return (
            <Link
              key={key}
              href={href}
              style={{
                textDecoration: "none",
                color: on ? "var(--fg)" : "var(--muted)",
                borderBottom: `2px solid ${on ? "var(--accent)" : "transparent"}`,
                padding: "4px 0",
              }}
            >
              {t[key]}
            </Link>
          )
        })}
        <div style={{ display: "flex", gap: 8 }}>
          <button
            type="button"
            onClick={toggle}
            aria-label="Language"
            style={{
              height: 42,
              minWidth: 42,
              padding: "0 12px",
              borderRadius: 999,
              border: "1.5px solid var(--line)",
              background: "var(--card)",
              color: "var(--fg)",
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: ".04em",
              cursor: "pointer",
            }}
          >
            {t.other}
          </button>
          <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label="Theme"
            style={{
              width: 42,
              height: 42,
              borderRadius: "50%",
              border: "1.5px solid var(--line)",
              background: "var(--card)",
              color: "var(--fg)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              fontSize: 20,
            }}
          >
            <span className="ms">{isDark ? "light_mode" : "dark_mode"}</span>
          </button>
        </div>
        <a
          href="mailto:hola@modavidc.com"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            borderRadius: 999,
            background: "var(--accent)",
            color: "#fff",
            padding: "10px 18px",
            fontSize: 14,
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          {t.cta}
        </a>
      </div>
    </nav>
  )
}
