"use client"

import { useState, useEffect } from "react"

export type StoryStep = { title: string; text: string; svg: React.ReactNode }

const btn: React.CSSProperties = {
  fontFamily: "var(--ff-mono)",
  fontSize: "13px",
  padding: "3px 10px",
  borderRadius: "3px",
  background: "var(--bg-3)",
  color: "var(--text-2)",
  border: "1px solid var(--border-2)",
  cursor: "pointer",
}

export function CasoStory({ steps }: { steps: StoryStep[] }) {
  const [idx, setIdx] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [visible, setVisible] = useState(true)

  function go(to: number) {
    setVisible(false)
    setTimeout(() => { setIdx(to); setVisible(true) }, 180)
  }

  function next() {
    const n = idx + 1
    if (n >= steps.length) { setPlaying(false); return }
    go(n)
  }

  function prev() {
    setPlaying(false)
    go((idx - 1 + steps.length) % steps.length)
  }

  useEffect(() => {
    if (!playing) return
    const t = setInterval(() => {
      setIdx(i => {
        if (i + 1 >= steps.length) { setPlaying(false); return i }
        setVisible(false)
        setTimeout(() => setVisible(true), 180)
        return i + 1
      })
    }, 3800)
    return () => clearInterval(t)
  }, [playing, steps.length])

  useEffect(() => {
    function h(e: KeyboardEvent) {
      if (e.key === "ArrowRight") { next(); setPlaying(false) }
      if (e.key === "ArrowLeft") prev()
    }
    window.addEventListener("keydown", h)
    return () => window.removeEventListener("keydown", h)
  }, [idx, steps.length])

  return (
    <div style={{ border: "1px solid var(--border)", overflow: "hidden" }}>
      {/* Controls */}
      <div style={{
        display: "flex", alignItems: "center", gap: "10px",
        padding: "10px 18px", borderBottom: "1px solid var(--border)",
        background: "var(--bg-3)",
      }}>
        <div style={{ display: "flex", gap: "5px", flex: 1, alignItems: "center" }}>
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => { setPlaying(false); go(i) }}
              aria-label={`Paso ${i + 1}`}
              style={{
                height: "5px",
                width: i === idx ? "22px" : "5px",
                borderRadius: "3px",
                background: i < idx ? "var(--green-dim)" : i === idx ? "var(--green)" : "var(--border-2)",
                border: "none", padding: 0, cursor: "pointer",
                transition: "width .22s, background .22s",
              }}
            />
          ))}
        </div>
        <span style={{ fontFamily: "var(--ff-mono)", fontSize: "10px", color: "var(--text-3)", letterSpacing: ".1em", whiteSpace: "nowrap" }}>
          {idx + 1} / {steps.length}
        </span>
        <button
          onClick={() => setPlaying(p => !p)}
          style={{
            fontFamily: "var(--ff-mono)", fontSize: "10px", letterSpacing: ".1em",
            padding: "4px 12px", borderRadius: "3px", cursor: "pointer",
            textTransform: "uppercase",
            background: playing ? "var(--green-bg)" : "var(--bg-2)",
            color: playing ? "var(--green)" : "var(--text-3)",
            border: `1px solid ${playing ? "var(--green-dim)" : "var(--border-2)"}`,
            transition: "all .15s",
          }}
        >
          {playing ? "⏸ Pausa" : "▶ Play"}
        </button>
        <button onClick={prev} style={btn}>←</button>
        <button onClick={next} style={btn}>→</button>
      </div>

      {/* Visual */}
      <div style={{
        height: "200px", overflow: "hidden",
        borderBottom: "1px solid var(--border)",
        background: "var(--bg)",
        opacity: visible ? 1 : 0,
        transition: "opacity .18s ease",
      }}>
        {steps[idx].svg}
      </div>

      {/* Text */}
      <div style={{
        padding: "16px 20px 20px", background: "var(--bg-2)",
        opacity: visible ? 1 : 0,
        transition: "opacity .18s ease",
      }}>
        <div style={{
          fontFamily: "var(--ff-mono)", fontSize: "10px",
          color: "var(--green)", letterSpacing: ".16em",
          textTransform: "uppercase", marginBottom: "6px",
        }}>
          {steps[idx].title}
        </div>
        <p style={{ fontSize: "13px", color: "var(--text-2)", lineHeight: 1.7, fontWeight: 300, margin: 0 }}>
          {steps[idx].text}
        </p>
      </div>
    </div>
  )
}
