"use client"

import { useState, useEffect, useCallback } from "react"

interface EvidenceSlide {
  label: string
  caption: string
  src: string
}

interface EvidenceCarouselProps {
  slides: EvidenceSlide[]
}

export function EvidenceCarousel({ slides }: EvidenceCarouselProps) {
  const [current, setCurrent] = useState(0)
  const [lightbox, setLightbox] = useState(false)
  const [lbIndex, setLbIndex] = useState(0)

  const prev = () => setCurrent(i => (i - 1 + slides.length) % slides.length)
  const next = () => setCurrent(i => (i + 1) % slides.length)

  const lbPrev = useCallback(() => setLbIndex(i => (i - 1 + slides.length) % slides.length), [slides.length])
  const lbNext = useCallback(() => setLbIndex(i => (i + 1) % slides.length), [slides.length])

  const openLightbox = (index: number) => { setLbIndex(index); setLightbox(true) }
  const closeLightbox = () => setLightbox(false)

  useEffect(() => {
    if (!lightbox) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowLeft") lbPrev()
      if (e.key === "ArrowRight") lbNext()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [lightbox, lbPrev, lbNext])

  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [lightbox])

  const slide = slides[current]
  const lbSlide = slides[lbIndex]

  const btnStyle: React.CSSProperties = {
    fontFamily: "var(--ff-mono)",
    fontSize: "12px",
    padding: "3px 10px",
    background: "var(--bg-2)",
    color: "var(--text-2)",
    border: "1px solid var(--border-2)",
    cursor: "pointer",
  }

  return (
    <>
      {/* ── CAROUSEL ── */}
      <div style={{ border: "1px solid var(--border)", overflow: "hidden" }}>

        {/* Top bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 16px", borderBottom: "1px solid var(--border)", background: "var(--bg-3)" }}>
          <span style={{ fontFamily: "var(--ff-mono)", fontSize: "10px", letterSpacing: ".12em", textTransform: "uppercase", color: "var(--text-3)" }}>
            {slide.label}
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontFamily: "var(--ff-mono)", fontSize: "10px", color: "var(--text-3)", letterSpacing: ".08em" }}>
              {current + 1} / {slides.length}
            </span>
            <button onClick={prev} aria-label="Anterior" style={btnStyle}>←</button>
            <button onClick={next} aria-label="Siguiente" style={btnStyle}>→</button>
          </div>
        </div>

        {/* Image — clickable */}
        <div
          role="button"
          tabIndex={0}
          aria-label="Ver en pantalla completa"
          onClick={() => openLightbox(current)}
          onKeyDown={e => (e.key === "Enter" || e.key === " ") && openLightbox(current)}
          style={{ background: "var(--bg)", lineHeight: 0, cursor: "zoom-in", position: "relative" }}
        >
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.label}
            style={{ display: "block", width: "100%", height: "320px", objectFit: "cover", opacity: .88 }}
          />
          <div style={{
            position: "absolute", bottom: "10px", right: "12px",
            fontFamily: "var(--ff-mono)", fontSize: "10px",
            color: "var(--text-3)", background: "rgba(11,12,14,.7)",
            padding: "3px 8px", letterSpacing: ".08em",
            pointerEvents: "none",
          }}>
            zoom
          </div>
        </div>

        {/* Dots */}
        <div style={{ display: "flex", gap: "6px", padding: "10px 16px", background: "var(--bg-3)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Ir a imagen ${i + 1}`}
              style={{
                height: "4px", width: i === current ? "20px" : "4px",
                borderRadius: "2px",
                background: i === current ? "var(--green)" : "var(--border-2)",
                border: "none", padding: 0, cursor: "pointer",
                transition: "width .2s, background .2s",
              }}
            />
          ))}
        </div>

        {/* Caption */}
        <div style={{ padding: "14px 18px 16px", background: "var(--bg-2)" }}>
          <p style={{ fontSize: "13px", color: "var(--text-2)", lineHeight: 1.65, fontWeight: 300, margin: 0 }}>
            {slide.caption}
          </p>
        </div>
      </div>

      {/* ── LIGHTBOX ── */}
      {lightbox && (
        <div
          onClick={closeLightbox}
          style={{
            position: "fixed", inset: 0, zIndex: 1000,
            background: "rgba(7,8,10,.96)",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            padding: "24px",
          }}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            aria-label="Cerrar"
            style={{
              position: "absolute", top: "20px", right: "20px",
              fontFamily: "var(--ff-mono)", fontSize: "14px",
              background: "transparent", color: "var(--text-3)",
              border: "1px solid var(--border-2)",
              padding: "4px 12px", cursor: "pointer",
              letterSpacing: ".08em",
            }}
          >esc</button>

          {/* Counter */}
          <div style={{
            position: "absolute", top: "22px", left: "50%", transform: "translateX(-50%)",
            fontFamily: "var(--ff-mono)", fontSize: "10px",
            color: "var(--text-3)", letterSpacing: ".12em",
          }}>
            {lbIndex + 1} / {slides.length}
          </div>

          {/* Prev arrow */}
          <button
            onClick={e => { e.stopPropagation(); lbPrev() }}
            aria-label="Anterior"
            style={{
              position: "absolute", left: "20px", top: "50%", transform: "translateY(-50%)",
              fontFamily: "var(--ff-mono)", fontSize: "18px",
              background: "var(--bg-2)", color: "var(--text-2)",
              border: "1px solid var(--border-2)",
              padding: "10px 16px", cursor: "pointer",
            }}
          >←</button>

          {/* Next arrow */}
          <button
            onClick={e => { e.stopPropagation(); lbNext() }}
            aria-label="Siguiente"
            style={{
              position: "absolute", right: "20px", top: "50%", transform: "translateY(-50%)",
              fontFamily: "var(--ff-mono)", fontSize: "18px",
              background: "var(--bg-2)", color: "var(--text-2)",
              border: "1px solid var(--border-2)",
              padding: "10px 16px", cursor: "pointer",
            }}
          >→</button>

          {/* Image */}
          <div
            onClick={e => e.stopPropagation()}
            style={{ lineHeight: 0 }}
          >
            <img
              key={lbSlide.src}
              src={lbSlide.src}
              alt={lbSlide.label}
              style={{
                maxWidth: "min(90vw, 1100px)",
                maxHeight: "70vh",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>

          {/* Label + caption */}
          <div
            onClick={e => e.stopPropagation()}
            style={{ maxWidth: "640px", textAlign: "center", marginTop: "20px", padding: "0 48px" }}
          >
            <div style={{
              fontFamily: "var(--ff-mono)", fontSize: "10px",
              color: "var(--green)", letterSpacing: ".14em",
              textTransform: "uppercase", marginBottom: "8px",
            }}>
              {lbSlide.label}
            </div>
            <p style={{ fontSize: "13px", color: "var(--text-2)", lineHeight: 1.65, fontWeight: 300, margin: 0 }}>
              {lbSlide.caption}
            </p>
          </div>

          {/* Dot indicators */}
          <div style={{ display: "flex", gap: "6px", marginTop: "20px" }}>
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={e => { e.stopPropagation(); setLbIndex(i) }}
                aria-label={`Ir a imagen ${i + 1}`}
                style={{
                  height: "4px", width: i === lbIndex ? "20px" : "4px",
                  borderRadius: "2px",
                  background: i === lbIndex ? "var(--green)" : "var(--border-2)",
                  border: "none", padding: 0, cursor: "pointer",
                  transition: "width .2s, background .2s",
                }}
              />
            ))}
          </div>
        </div>
      )}
    </>
  )
}
