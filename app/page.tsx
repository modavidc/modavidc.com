import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <>
      {/* ═══ HERO ════════════════════════════════════════════════ */}
      <div className="hero">
        <div className="hero-left">
          <div className="hero-kicker">Solutions Architect · FinOps &amp; Cloud · Healthcare &amp; SaaS</div>
          <h1 className="hero-h1">
            Construyo software<br />
            que escala sin depender<br />
            <em>de quién lo creó.</em>
          </h1>
          <p className="hero-sub">
            +8 años en Healthcare, SaaS e IoT entregando sistemas que cualquier dev puede mantener desde el primer día. Sin documentación muerta. Sin dependencia de persona.
          </p>
          <div className="hero-ctas">
            <Link className="btn btn-primary" href="/contact">Hablemos →</Link>
            <Link className="btn btn-secondary" href="/casos-de-exito">Ver casos de éxito</Link>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-photo-wrap">
            <Image
              src="/assets/profile/moises_cedeno.png"
              alt="Moisés Cedeño — Solutions Architect"
              width={360}
              height={480}
              priority
              style={{ width: "100%", height: "auto" }}
            />
            <div className="hero-photo-caption">
              <div>
                <div className="hero-photo-name">Moisés Cedeño</div>
                <div className="hero-photo-role">Solutions Architect · Lima, Perú</div>
              </div>
              <div className="hero-photo-badge">Disponible</div>
            </div>
          </div>
        </div>
      </div>


      {/* ═══ KPI BAR ═════════════════════════════════════════════ */}
      <div className="full-border">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="kpi-bar">
            <div className="kpi-cell">
              <div className="kpi-val green">-58%</div>
              <div className="kpi-label">Factura AWS</div>
              <div className="kpi-sub">MediRec · 2023</div>
            </div>
            <div className="kpi-cell">
              <div className="kpi-val">+8</div>
              <div className="kpi-label">Años de experiencia</div>
              <div className="kpi-sub">Healthcare · SaaS · IoT</div>
            </div>
            <div className="kpi-cell">
              <div className="kpi-val">20K+</div>
              <div className="kpi-label">Usuarios en producción</div>
              <div className="kpi-sub">Sistemas multi-tenant</div>
            </div>
            <div className="kpi-cell">
              <div className="kpi-val">48h</div>
              <div className="kpi-label">Onboarding de dev nuevo</div>
              <div className="kpi-sub">Sin dependencia de persona</div>
            </div>
            <div className="kpi-cell">
              <div className="kpi-val">-$20K</div>
              <div className="kpi-label">En licencias / año</div>
              <div className="kpi-sub">Migración NLMI · 2024</div>
            </div>
          </div>
        </div>
      </div>


      {/* ═══ INDUSTRY TAGS ══════════════════════════════════════ */}
      <div style={{ borderBottom: "1px solid var(--border)", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px 48px", display: "flex", alignItems: "center", gap: "32px", flexWrap: "wrap" }}>
          <span style={{ fontFamily: "var(--ff-mono)", fontSize: "9px", color: "var(--text-3)", letterSpacing: ".18em", textTransform: "uppercase", whiteSpace: "nowrap" }}>Industrias</span>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
            {["Healthcare", "SaaS", "IoT", "Gov-Tech", "FinOps", "Sistemas distribuidos"].map(tag => (
              <span key={tag} style={{ fontFamily: "var(--ff-mono)", fontSize: "10px", color: "var(--text-3)", letterSpacing: ".08em", padding: "3px 10px", border: "1px solid var(--border)", borderRadius: "2px" }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ MI ENFOQUE ══════════════════════════════════════════ */}
      <div id="metodologia" className="full-border">
        <section className="section">
          <div className="section-kicker">Mi Enfoque</div>
          <h2 className="section-h2">Entrego sistemas que funcionan<br />cuando yo no estoy.</h2>
          <p className="section-sub">Documentación que permite que cualquier dev entienda el sistema. Arquitecturas que no dependen del conocimiento de una sola persona.</p>

          <div className="enfoque-grid">
            <div className="enfoque-cell">
              <div className="enfoque-icon">IA</div>
              <div className="enfoque-title">Velocidad con criterio</div>
              <div className="enfoque-body">Uso IA como acelerador, no como sustituto del criterio técnico. Entrego en semanas lo que antes tardaba meses — con la misma calidad de arquitectura.</div>
              <span className="metric-tag">+400% velocidad de desarrollo</span>
            </div>
            <div className="enfoque-cell">
              <div className="enfoque-icon" style={{ color: "var(--blue)" }}>↗</div>
              <div className="enfoque-title">Arquitectura que escala</div>
              <div className="enfoque-body">Diseño sistemas para el día que yo ya no esté. Decisiones documentadas, patrones reusables, onboarding de 48h para cualquier dev nuevo en el equipo.</div>
              <span className="metric-tag neutral">48h onboarding · garantizado</span>
            </div>
            <div className="enfoque-cell">
              <div className="enfoque-icon" style={{ color: "var(--violet)" }}>⌬</div>
              <div className="enfoque-title">Autonomía del equipo</div>
              <div className="enfoque-body">Dejo equipos más capaces de lo que los encontré. Registro de decisiones, guías de contribución y documentación viva que cualquier dev puede navegar solo.</div>
              <span className="metric-tag neutral">0 dependencias de persona clave</span>
            </div>
          </div>
        </section>
      </div>


      {/* ═══ PROBLEMAS QUE RESUELVO ══════════════════════════════ */}
      <div className="full-border">
        <section className="section">
          <div className="section-kicker">Problemas que Resuelvo</div>
          <h2 className="section-h2">¿Te suena alguno de estos?</h2>
          <p className="section-sub">Si una de estas situaciones describe tu empresa hoy, probablemente podamos hablar.</p>

          <div className="problemas-list">
            <div className="problema-item">
              <div className="problema-q">¿Tu factura de AWS sube cada mes sin una explicación clara de por qué?</div>
              <div className="problema-a">
                <strong>Reduzco costos de nube sin tocar la disponibilidad.</strong> En MediRec identifiqué instancias sobredimensionadas, eliminé recursos huérfanos y reestructuré el modelo de reservas. Resultado: <strong>-58% en factura AWS</strong> en 90 días, con la plataforma al 100% de uptime.
                <br /><Link className="problema-link" href="/casos-de-exito">Ver caso completo →</Link>
              </div>
            </div>
            <div className="problema-item">
              <div className="problema-q">¿Cada vez que un dev se va, el proyecto pierde velocidad durante semanas?</div>
              <div className="problema-a">
                <strong>Elimino la dependencia de persona clave.</strong> Implemento arquitecturas documentadas donde el conocimiento vive en el sistema, no en la cabeza de alguien. Un dev nuevo queda productivo en <strong>48 horas</strong>.
              </div>
            </div>
            <div className="problema-item">
              <div className="problema-q">¿Pagas licencias de software por herramientas que podrías construir internamente?</div>
              <div className="problema-a">
                <strong>Migro dependencias costosas a alternativas open source sin perder funcionalidad.</strong> En un proyecto Healthcare migré LexComp a NLMI, eliminando <strong>$20k/año</strong> en licencias farmacéuticas sin comprometer la integridad clínica.
                <br /><Link className="problema-link" href="/casos-de-exito">Ver caso completo →</Link>
              </div>
            </div>
            <div className="problema-item">
              <div className="problema-q">¿Tu equipo tarda meses en onboardear un dev nuevo en el sistema?</div>
              <div className="problema-a">
                <strong>Construyo sistemas con onboarding documentado.</strong> ADRs (Architecture Decision Records), guías de contribución y runbooks que permiten que cualquier dev navegue el sistema solo — en horas, no semanas.
              </div>
            </div>
          </div>
        </section>
      </div>


      {/* ═══ TESTIMONIOS ══════════════════════════════════════════ */}
      <div id="testimonios" className="full-border">
        <section className="section">
          <div className="section-kicker">Testimonios</div>
          <h2 className="section-h2">Feedback real de proyectos<br />documentados.</h2>
          <p className="section-sub">Algunos detalles modificados por NDA. Las métricas son verificables.</p>

          <div className="test-grid">
            <div className="test-cell">
              <div className="test-quote">El nuevo dev estuvo productivo en menos de 48 horas gracias al registro de decisiones que Moisés implementó. Nunca habíamos onboardeado tan rápido.</div>
              <div className="test-meta">
                <div className="test-name">Product Owner</div>
                <div className="test-role">Plataforma Healthcare · Lima, 2023</div>
                <span className="cat-badge cat-violet"><span className="dot" />Healthcare</span>
              </div>
            </div>
            <div className="test-cell">
              <div className="test-quote">Redujimos la factura de AWS en un 58% en menos de tres meses. Lo que más sorprendió al equipo fue que la disponibilidad no bajó ni un punto durante el proceso.</div>
              <div className="test-meta">
                <div className="test-name">Director de TI</div>
                <div className="test-role">MediRec · SaaS Healthcare · 2023</div>
                <span className="cat-badge cat-green"><span className="dot" />FinOps</span>
              </div>
            </div>
            <div className="test-cell">
              <div className="test-quote">Moisés no solo entregó el sistema — entregó documentación que hace que cualquier dev pueda contribuir desde el día uno. Eso vale más que el código.</div>
              <div className="test-meta">
                <div className="test-name">CTO</div>
                <div className="test-role">SaaS IoT · Miami, 2024</div>
                <span className="cat-badge cat-blue"><span className="dot" />SaaS</span>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <Link className="btn btn-secondary" href="/testimonials" style={{ fontSize: "13px" }}>Ver los 6 testimonios →</Link>
          </div>
        </section>
      </div>


      {/* ═══ CASOS DE ÉXITO ══════════════════════════════════════ */}
      <div id="casos" className="full-border">
        <section className="section">
          <div className="section-kicker">Casos de Éxito</div>
          <h2 className="section-h2">Proyectos reales.<br />Métricas verificables.</h2>
          <p className="section-sub">8 años de decisiones técnicas documentadas. Selecciona el que más se acerque a tu contexto.</p>

          <div className="casos-grid">
            <div className="caso-card">
              <div className="caso-meta">
                <span>Work · Healthcare</span>
                <span>2023</span>
              </div>
              <div className="caso-title">Cómo reduje 58% la factura AWS de MediRec</div>
              <div className="caso-body">Re-arquitectura y gobernanza de costos en plataforma Healthcare con 20K+ usuarios. Instancias reservadas, auto-scaling inteligente y eliminación de recursos huérfanos — sin tocar uptime.</div>
              <div className="caso-foot">
                <span className="metric-tag">-58% AWS · $180K ahorrados</span>
                <Link className="caso-link" href="/casos-de-exito/detail/medirec-aws">Ver caso →</Link>
              </div>
            </div>
            <div className="caso-card">
              <div className="caso-meta">
                <span>Work · FinOps</span>
                <span>2024</span>
              </div>
              <div className="caso-title">Cómo eliminé $20k/año en licencias farmacéuticas</div>
              <div className="caso-body">Migración de LexComp a NLMI sin perder integridad clínica ni cobertura de datos. Sistema de validación de medicamentos que cumple PREIS con la mitad del costo operativo.</div>
              <div className="caso-foot">
                <span className="metric-tag neutral">-$20k/año · 0 downtime</span>
                <Link className="caso-link" href="/casos-de-exito/detail/licencias-farmaceuticas">Ver caso →</Link>
              </div>
            </div>
            <div className="caso-card">
              <div className="caso-meta">
                <span>Work · SaaS</span>
                <span>2023</span>
              </div>
              <div className="caso-title">Lab Middleware: -70% en tiempo de resultados clínicos</div>
              <div className="caso-body">Middleware de integración de laboratorio que redujo el tiempo de entrega de resultados clínicos de 6 horas a menos de 90 minutos. Stack: Node + HL7 + AWS Lambda.</div>
              <div className="caso-foot">
                <span className="cat-badge cat-violet"><span className="dot" />Healthcare</span>
                <Link className="caso-link" href="/casos-de-exito/detail/lab-middleware">Ver caso →</Link>
              </div>
            </div>
            <div className="caso-card">
              <div className="caso-meta">
                <span>Personal · IoT</span>
                <span>2024</span>
              </div>
              <div className="caso-title">Lo que construyo cuando nadie me paga</div>
              <div className="caso-body">Proyectos de exploración técnica: sistemas IoT con MQTT y edge computing, herramientas de automatización personal, experimentos de arquitectura distribuida en Raspberry Pi.</div>
              <div className="caso-foot">
                <span className="cat-badge cat-amber"><span className="dot" />Personal</span>
                <Link className="caso-link" href="/labs">Ver proyectos →</Link>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <Link className="btn btn-secondary" href="/casos-de-exito" style={{ fontSize: "13px" }}>Ver todos los casos →</Link>
          </div>
        </section>
      </div>


      {/* ═══ CTA FINAL ════════════════════════════════════════════ */}
      <div id="contacto" className="full-border">
        <div className="cta-final">
          <div>
            <div className="section-kicker" style={{ marginBottom: "20px" }}>¿Hablamos?</div>
            <h2 className="cta-final-h2">¿Buscas este perfil<br />para tu <em>equipo</em>?</h2>
            <p className="cta-final-sub">
              Si tienes un proyecto que necesita reducción de costos, escalar sin depender de una sola persona o simplemente construirse bien desde el inicio — cuéntame.
            </p>
            <div className="cta-final-btns">
              <a className="btn btn-primary" href="mailto:hola@modavidc.com">Enviar mensaje →</a>
              <a className="btn btn-secondary" href="/assets/cv/cv.pdf" download>Descargar CV · PDF</a>
            </div>
          </div>
          <div className="cta-final-aside">
            <div className="cta-aside-item">
              <span className="cta-aside-label">Email</span>
              <span className="cta-aside-val"><a href="mailto:hola@modavidc.com">hola@modavidc.com</a></span>
            </div>
            <div className="cta-aside-item">
              <span className="cta-aside-label">LinkedIn</span>
              <span className="cta-aside-val"><a href="https://linkedin.com/in/modavidc" target="_blank" rel="noopener">linkedin.com/in/modavidc</a></span>
            </div>
            <div className="cta-aside-item">
              <span className="cta-aside-label">GitHub</span>
              <span className="cta-aside-val"><a href="https://github.com/modavidc" target="_blank" rel="noopener">github.com/modavidc</a></span>
            </div>
            <div className="cta-aside-item">
              <span className="cta-aside-label">Disponibilidad</span>
              <span className="cta-aside-val" style={{ color: "var(--green)" }}>Proyectos seleccionados — preguntar</span>
            </div>
            <div className="cta-aside-item">
              <span className="cta-aside-label">Respuesta</span>
              <span className="cta-aside-val">Menos de 24h</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
