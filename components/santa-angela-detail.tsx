"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

const tocSections = [
  { id: "contexto",     label: "Contexto",              n: "01" },
  { id: "problema",     label: "Problema crítico",      n: "02" },
  { id: "arquitectura", label: "Arquitectura",          n: "03" },
  { id: "solucion",     label: "Solución",              n: "04" },
  { id: "impacto",      label: "Certificación / impacto", n: "05" },
  { id: "resultados",   label: "Resultados medibles",   n: "06" },
  { id: "stack",        label: "Stack técnico",         n: "07" },
  { id: "evidencia",    label: "Evidencia real",        n: "08" },
]

const problemBullets = [
  { n: "01", bold: "wp-login.php inaccesible.", rest: " El servidor devolvía un \"File not found\" a nivel de Apache, no el 404 propio de WordPress. El panel de administración quedó bloqueado para la administradora del colegio." },
  { n: "02", bold: "Página de admisión reemplazada por spam de apuestas.", rest: " El landing de admisión (antes hecho en Elementor) servía contenido de apuestas online, un patrón clásico de inyección SEO spam." },
  { n: "03", bold: "Urgencia real, no solo técnica.", rest: " El colegio necesitaba publicar resultados de admisión en pocos días. Cada hora sin el sitio funcionando tenía un costo directo para la institución." },
  { n: "04", bold: "El backup disponible no era confiable.", rest: " El único respaldo se había tomado el mismo período en que ocurrió el ataque. Restaurarlo sin analizarlo primero podía reintroducir el problema." },
]

const criteria = [
  {
    n: "Decisión 01",
    title: "Diagnosticar offline antes de tocar producción",
    body: "Reproduje el backup completo en un entorno Docker aislado. Eso permitió analizar el sitio con calma, sin arriesgar más el servidor real ni perder evidencia por accidente.",
    why: "Un error de diagnóstico en producción puede convertir un sitio comprometido en un sitio caído del todo.",
  },
  {
    n: "Decisión 02",
    title: "Cuarentena, nunca borrado",
    body: "Cada archivo sospechoso se movió a una carpeta separada en vez de eliminarse. Eso preserva la evidencia forense y permite revertir si algo se identifica mal.",
    why: "Borrar destruye la única pista de cómo entró el atacante.",
  },
  {
    n: "Decisión 03",
    title: "No confiar en fechas de archivo",
    body: "El atacante falsificaba sistemáticamente los timestamps para simular archivos antiguos y legítimos. Cambié el método de verificación de barridos por fecha a comparación de hashes contra el checksum oficial de WordPress.org.",
    why: "Fue el cambio de método que destapó el verdadero tamaño del problema, muy por encima de lo que parecía al inicio.",
  },
  {
    n: "Decisión 04",
    title: "Reconstruir el core en vez de perseguir archivo por archivo",
    body: "Cuando el sitio siguió reinfectándose pese a varias limpiezas, la decisión fue descargar el core oficial de WordPress desde cero en vez de seguir removiendo archivos uno por uno.",
    why: "Perseguir archivos individuales no cierra la puerta de entrada, solo retrasa la siguiente ola.",
  },
]

const deliverables = [
  { n: "01", title: "Endurecimiento de cabeceras HTTP", desc: "CSP, HSTS, X-Frame-Options y el resto del set completo, con calificación A en securityheaders.com." },
  { n: "02", title: "2FA y ocultamiento del login", desc: "Autenticación en dos pasos y URL de acceso administrativo no predecible." },
  { n: "03", title: "Rotación completa de credenciales", desc: "Contraseñas de base de datos y de administración rotadas, ninguna reutilizada del incidente." },
  { n: "04", title: "Checklist de verificación post-incidente", desc: "Procedimiento repetible: checksums oficiales, escaneo Sucuri y cabeceras de seguridad, para volver a auditar el sitio en minutos." },
]

export function SantaAngelaDetail() {
  const [scrollPct, setScrollPct] = useState(0)
  const [activeId, setActiveId] = useState("contexto")
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement
      const max = el.scrollHeight - el.clientHeight
      setScrollPct(el.scrollTop / Math.max(max, 1) * 100)

      const y = window.scrollY + 140
      let active = tocSections[0].id
      for (const s of tocSections) {
        const node = document.getElementById(s.id)
        if (node && node.offsetTop <= y) active = s.id
      }
      setActiveId(active)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!mobileOpen) return
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setMobileOpen(false) }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [mobileOpen])

  const activeSection = tocSections.find(s => s.id === activeId)

  return (
    <>
      <div className="ss-progress" style={{ width: `${scrollPct}%` }} />

      <main className="ss-shell">
        <div className="ss-grid">

          <aside className="ss-side-l">
            <div className="ss-toc-h">Índice</div>
            <ul className="ss-toc">
              {tocSections.map(s => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className={activeId === s.id ? "active" : ""}>
                    <span className="n" aria-hidden="true">{s.n}</span>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          <article>
            <div className="ss-crumb">
              <Link href="/casos-de-exito">Casos de éxito</Link>
              {" "}&nbsp;/{" "}&nbsp;Educación · Ciberseguridad
            </div>

            <h1 className="ss-title">
              Cómo recuperé un WordPress con <em>backdoors que sobrevivían</em> cada limpieza
            </h1>

            <p className="ss-tldr">
              El sitio institucional del Colegio Santa Angela (santaangela.edu.pe) fue comprometido
              con spam de apuestas y varios backdoors ocultos que reaparecían tras cada limpieza.
              Cambié el método de diagnóstico de fechas de archivo a <b>verificación de checksums
              oficiales de WordPress.org</b>, eliminé más de 460 archivos maliciosos y endurecí la
              infraestructura. Seis semanas después, el sitio sigue verificando limpio.
            </p>

            <dl className="ss-meta-strip">
              {[
                { dt: "Cliente", dd: "Colegio Santa Angela" },
                { dt: "Año", dd: "2026" },
                { dt: "Rol", dd: "Respuesta a incidentes · Forense WordPress" },
                { dt: "Sector", dd: "Educación · Perú" },
              ].map(({ dt, dd }) => (
                <div key={dt}><dt>{dt}</dt><dd>{dd}</dd></div>
              ))}
            </dl>

            <div className="ss-metrics" aria-label="Resultados clave">
              <div className="ss-m-cell">
                <div className="lbl">Archivos maliciosos</div>
                <div className="num">460+</div>
                <div className="sub">Backdoors y archivos alterados identificados y puestos en cuarentena.</div>
              </div>
              <div className="ss-m-cell">
                <div className="lbl">Oleadas de reinfección</div>
                <div className="num">3</div>
                <div className="sub">Ciclos de reinfección enfrentados y finalmente detenidos con un rebuild completo del core.</div>
              </div>
              <div className="ss-m-cell">
                <div className="lbl">Cabeceras de seguridad</div>
                <div className="num">A</div>
                <div className="sub">Calificación en securityheaders.com tras el endurecimiento.</div>
              </div>
              <div className="ss-m-cell">
                <div className="lbl">Verificado limpio</div>
                <div className="num ss-num-sm">6+ semanas</div>
                <div className="sub">Checksums oficiales confirmados limpios de forma independiente, dos veces, con seis semanas de diferencia.</div>
              </div>
            </div>

            {/* 01 Contexto */}
            <section className="ss-sec" id="contexto">
              <div className="ss-sec-eyebrow">01 · El contexto</div>
              <h2 className="ss-sec-title">Un sitio institucional gestionado a distancia.</h2>
              <div className="ss-prose">
                <p>El Colegio Santa Angela mantiene su sitio institucional en WordPress, incluyendo la página de admisión que usan las familias para postular cada año.</p>
                <p>El sitio se gestiona a distancia, coordinando con la administradora del colegio. Cuando el acceso administrativo dejó de funcionar de un día para otro, la prioridad no era solo técnica: el colegio dependía de ese sitio para un proceso con fecha límite.</p>
              </div>
            </section>

            {/* 02 Problema crítico */}
            <section className="ss-sec ss-sec--risk" id="problema">
              <div className="ss-sec-eyebrow">02 · Problema crítico</div>
              <h2 className="ss-sec-title">Acceso bloqueado, spam en producción y un backup del que no se podía confiar.</h2>
              <p className="ss-sec-lede">Cuatro problemas simultáneos, cada uno cerrando una salida distinta.</p>
              <ul className="ss-bullets">
                {problemBullets.map(({ n, bold, rest }) => (
                  <li key={n} data-n={n}><b>{bold}</b>{rest}</li>
                ))}
              </ul>
            </section>

            {/* 03 Arquitectura */}
            <section className="ss-sec" id="arquitectura">
              <div className="ss-sec-eyebrow">03 · Arquitectura de la investigación</div>
              <h2 className="ss-sec-title">Diagnosticar sin arriesgar el sitio real.</h2>
              <p className="ss-sec-lede">Tres etapas, cada una construida sobre lo que la anterior descartó.</p>

              <div className="ss-breakout">
                <div className="ss-arch">
                  <div className="ss-arch-head">
                    <span><span aria-hidden="true">▎ </span>flujo de investigación · forense WordPress</span>
                    <span className="right"><span>WP-CLI</span><span>2026</span></span>
                  </div>

                  <div className="ss-arch-body">
                    <div className="ss-arch-grid">
                      <div className="ss-node">
                        <div className="role">Sandbox aislado</div>
                        <h4>Backup en Docker</h4>
                        <p>El backup infectado se reprodujo en un entorno local separado, para analizarlo sin tocar el sitio real ni perder evidencia.</p>
                        <div className="chips">
                          <span className="chip">Docker</span>
                          <span className="chip">análisis offline</span>
                        </div>
                      </div>

                      <div className="ss-arrow">
                        <span className="lbl">confirma en</span>
                        <span className="line" />
                        <span className="sub">producción real</span>
                      </div>

                      <div className="ss-node gw">
                        <div className="role">★ Verificación de integridad</div>
                        <h4>wp core verify-checksums</h4>
                        <p>Comparación contra el hash oficial de WordPress.org, sin depender de fechas de archivo, que el atacante falsificaba de forma sistemática.</p>
                        <div className="chips">
                          <span className="chip">WP-CLI</span>
                          <span className="chip">checksums oficiales</span>
                          <span className="chip">SSH</span>
                        </div>
                      </div>

                      <div className="ss-arrow">
                        <span className="lbl">resultado</span>
                        <span className="line" />
                        <span className="sub">rebuild + hardening</span>
                      </div>

                      <div className="ss-node">
                        <div className="role">Remediación final</div>
                        <h4>Core reconstruido</h4>
                        <p>Descarga limpia del core oficial, cuarentena de todo archivo ajeno al estándar y endurecimiento completo de la infraestructura.</p>
                        <div className="chips">
                          <span className="chip">wp core download</span>
                          <span className="chip">hardening</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="ss-arch-foot">
                    <div className="f"><div className="l">Diagnóstico</div><div className="v">WP-CLI · Docker · SSH</div></div>
                    <div className="f"><div className="l">Infra</div><div className="v">MariaDB · contenedores</div></div>
                    <div className="f"><div className="l">Hardening</div><div className="v">Traefik · Wordfence · 2FA</div></div>
                    <div className="f"><div className="l">Verificación</div><div className="v">Sucuri · securityheaders.com</div></div>
                  </div>
                </div>
              </div>
            </section>

            {/* 04 Solución */}
            <section className="ss-sec" id="solucion">
              <div className="ss-sec-eyebrow">04 · Solución</div>
              <h2 className="ss-sec-title">Cuatro decisiones que cambiaron el resultado.</h2>
              <p className="ss-sec-lede">Cada una respondió a un punto donde el enfoque anterior se había quedado corto.</p>
              <div className="ss-criterio-grid">
                {criteria.map(({ n, title, body, why }) => (
                  <div key={n} className="ss-crit-card">
                    <div className="n">{n}</div>
                    <h3>{title}</h3>
                    <p>{body}</p>
                    <div className="why"><b>Por qué</b> {why}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* 05 Certificación / impacto */}
            <section className="ss-sec" id="impacto">
              <div className="ss-sec-eyebrow">05 · Certificación / impacto</div>
              <h2 className="ss-sec-title">Verificación objetiva, no una impresión visual.</h2>
              <div className="ss-prose">
                <p>La limpieza no se dio por buena por observación directa, que ya había fallado antes con este mismo sitio. Se validó con tres fuentes independientes: <b>Sucuri SiteCheck</b> sin hallazgos de malware, <b>securityheaders.com</b> con calificación A tras el endurecimiento, y <b>wp core verify-checksums</b> confirmando que cada archivo del core coincide con el oficial de WordPress.org.</p>
                <p>Esta última verificación se repitió seis semanas después, de forma independiente, con el mismo resultado limpio.</p>
              </div>
            </section>

            {/* 06 Resultados medibles */}
            <section className="ss-sec" id="resultados">
              <div className="ss-sec-eyebrow">06 · Resultados medibles</div>
              <h2 className="ss-sec-title">De un sitio que se reinfectaba solo a uno verificado limpio.</h2>
              <p className="ss-sec-lede">Cuatro números, una sola lectura: el problema se cerró de raíz, no se ocultó temporalmente.</p>
              <div className="ss-result-grid">
                <div className="ss-r-card">
                  <div className="l">Archivos maliciosos</div>
                  <div className="v">460+</div>
                  <div className="d">Backdoors y archivos alterados encontrados y puestos en cuarentena.</div>
                </div>
                <div className="ss-r-card">
                  <div className="l">Reinfecciones</div>
                  <div className="v">3</div>
                  <div className="d">Oleadas distintas, cada una investigada hasta encontrar la causa real.</div>
                </div>
                <div className="ss-r-card">
                  <div className="l">Cabeceras</div>
                  <div className="v">A</div>
                  <div className="d">securityheaders.com, con el set completo de cabeceras de seguridad activo.</div>
                </div>
                <div className="ss-r-card">
                  <div className="l">Verificado limpio</div>
                  <div className="v ss-v-sm">6+ sem</div>
                  <div className="d">Confirmado de forma independiente, sin depender de una sola revisión.</div>
                </div>
              </div>
            </section>

            {/* 07 Stack técnico */}
            <section className="ss-sec" id="stack">
              <div className="ss-sec-eyebrow">07 · Stack técnico y lo que dejé</div>
              <h2 className="ss-sec-title">Herramientas usadas y artefactos que el colegio conserva.</h2>
              <p className="ss-sec-lede">El objetivo no era solo limpiar el sitio, sino dejarlo en condiciones de detectar un problema similar sin depender de mí.</p>
              <div className="ss-deliver">
                {deliverables.map(({ n, title, desc }) => (
                  <div key={n} className="ss-d-card">
                    <div className="n">{n}</div>
                    <h4>{title}</h4>
                    <p>{desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 08 Evidencia real */}
            <section className="ss-sec" id="evidencia">
              <div className="ss-sec-eyebrow">08 · Evidencia real</div>
              <h2 className="ss-sec-title">Verificación de checksums, en producción.</h2>
              <p className="ss-sec-lede">Salida real del comando ejecutado sobre el servidor de producción, seis semanas después de la remediación.</p>

              <div
                style={{
                  background: "#0b0c0e",
                  border: "1px solid var(--border)",
                  borderRadius: "6px",
                  overflow: "hidden",
                  fontFamily: "var(--ff-mono)",
                  fontSize: "12.5px",
                  lineHeight: 1.6,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 14px",
                    borderBottom: "1px solid var(--border)",
                    color: "var(--text-3)",
                    fontSize: "11px",
                  }}
                >
                  <span style={{ display: "flex", gap: "5px" }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#e0645c", display: "inline-block" }} />
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#e0b84c", display: "inline-block" }} />
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--green)", display: "inline-block" }} />
                  </span>
                  <span>root@santaangela · wp core verify-checksums · 2026-09-10</span>
                </div>
                <pre style={{ margin: 0, padding: "16px 18px", color: "var(--text-2)", whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
<span style={{ color: "var(--text-3)" }}>[root@localhost ~]#</span> wp core verify-checksums --path=/home/web/wordpress/santaangela.edu.pe/public_html --allow-root --no-color{"\n"}
<span style={{ color: "var(--text-3)" }}>PHP Warning:  Module &quot;mysqli&quot; is already loaded in Unknown on line 0</span>{"\n"}
<span style={{ color: "var(--text-3)" }}>PHP Warning:  Module &quot;pdo_mysql&quot; is already loaded in Unknown on line 0</span>{"\n"}
<span style={{ color: "var(--green)" }}>Success: WordPress installation verifies against checksums.</span>
                </pre>
              </div>
              <p className="ss-sec-lede" style={{ marginTop: "16px" }}>
                Los warnings de PHP son ruido de configuración de módulos duplicados, no indican ningún problema. El resultado relevante es la línea final: cada archivo del core coincide con el oficial de WordPress.org.
              </p>
            </section>

            <div className="ss-end-cta">
              <div>
                <h3>¿Tu sitio quedó comprometido y sigue &quot;volviendo&quot;?</h3>
                <p>Si limpiaste el malware pero reaparece, probablemente el diagnóstico se está basando en fechas de archivo, no en checksums. Hablemos.</p>
              </div>
              <div className="ss-actions">
                <Link href="/casos-de-exito">← Todos los casos</Link>
                <a
                  href="mailto:moisesdavidaaron@gmail.com?subject=Le%C3%AD%20tu%20caso%20Santa%20Angela%20y%20tengo%20algo%20parecido"
                  className="ss-primary"
                >
                  Hablemos de tu proyecto →
                </a>
              </div>
            </div>

          </article>
        </div>
      </main>

      <div className="ss-mobile-toc" aria-label="Navegación de secciones">
        <button
          className="ss-mobile-toc-btn"
          onClick={() => setMobileOpen(true)}
          aria-expanded={mobileOpen}
          aria-controls="ss-mobile-menu"
        >
          <span aria-hidden="true" style={{ color: "var(--green)", fontFamily: "var(--ff-mono)" }}>§</span>
          <span>{activeSection?.n} · {activeSection?.label}</span>
          <span aria-hidden="true" style={{ opacity: 0.5 }}>↑</span>
        </button>
      </div>

      {mobileOpen && (
        <div
          className="ss-mobile-overlay"
          onClick={() => setMobileOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Índice de secciones"
        >
          <nav
            id="ss-mobile-menu"
            className="ss-mobile-menu"
            onClick={e => e.stopPropagation()}
          >
            {tocSections.map(s => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={activeId === s.id ? "active" : ""}
                onClick={() => setMobileOpen(false)}
              >
                <span className="n" aria-hidden="true">{s.n}</span>
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
