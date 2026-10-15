type BadgeProps = {
  tone?: "soft" | "outline"
  icon?: string
  dotColor?: string
  children: React.ReactNode
  style?: React.CSSProperties
}

/** Small pill used for status/category chips (production status, app status, availability). */
export function Badge({ tone = "soft", icon, dotColor, children, style }: BadgeProps) {
  const base: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    fontSize: 13,
    fontWeight: 700,
    borderRadius: 999,
    padding: "5px 12px",
    whiteSpace: "nowrap",
    ...(tone === "soft"
      ? { background: "var(--soft)", color: "var(--accent-ink)" }
      : { background: "var(--card)", border: "1px solid var(--line)", color: "var(--fg)" }),
    ...style,
  }
  return (
    <span style={base}>
      {dotColor && (
        <span style={{ width: 7, height: 7, borderRadius: "50%", background: dotColor, flex: "none" }} />
      )}
      {icon && <span className="ms" style={{ fontSize: 16 }}>{icon}</span>}
      {children}
    </span>
  )
}
