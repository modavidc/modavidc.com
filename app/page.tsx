import Link from "next/link"
import Image from "next/image"
import { Mail, Linkedin, Github, MessageCircle, Send } from "lucide-react"

export default function Home() {
  return (
    <>
      {/* ═══ HERO ════════════════════════════════════════════════ */}
      <div className="hero">
        <div className="hero-left">
          <div className="hero-kicker">Tech Lead · Arquitecto de Soluciones · AWS &amp; FinOps</div>
          <h1 className="hero-h1">
            Lidero equipos. Construyo software<br />
            acelerado por IA<br />
            <em>con criterio e intención.</em>
          </h1>
          <p className="hero-sub">
            +8 años en software, los últimos 3 como Tech Lead en Healthcare, SaaS e IoT. La IA acelera, pero yo pongo el criterio, la intención y la experiencia. Resultados comprobados: -58% en costos AWS, $20k/yr menos en licencias y equipos que escalan.
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
              alt="Moisés Cedeño — Tech Lead"
              width={360}
              height={480}
              priority
              style={{ width: "100%", height: "auto" }}
            />
            <div className="hero-photo-caption">
              <div>
                <div className="hero-photo-name">Moisés Cedeño</div>
                <div className="hero-photo-role">Tech Lead · AWS & FinOps</div>
              </div>
              <div style={{ fontFamily: "var(--ff-mono)", fontSize: "9px", color: "var(--green)", letterSpacing: ".16em", textTransform: "uppercase" }}>Criterio · Contexto · Intención</div>
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
              <div className="kpi-val green">-$20K</div>
              <div className="kpi-label">En licencias / año</div>
              <div className="kpi-sub">Migración NLMI · 2024</div>
            </div>
            <div className="kpi-cell">
              <div className="kpi-val green">-70%</div>
              <div className="kpi-label">Tiempo de resultados clínicos</div>
              <div className="kpi-sub">Lab Middleware · 2022</div>
            </div>
            <div className="kpi-cell">
              <div className="kpi-val">20K+</div>
              <div className="kpi-label">Usuarios en producción</div>
              <div className="kpi-sub">Sistemas multi-tenant</div>
            </div>
            <div className="kpi-cell">
              <div className="kpi-val green">-200%</div>
              <div className="kpi-label">Tiempo de respuesta</div>
              <div className="kpi-sub">T-Cuida · 3min → 1min</div>
            </div>
          </div>
        </div>
      </div>


      {/* ═══ INDUSTRY TAGS ══════════════════════════════════════ */}
      <div style={{ borderBottom: "1px solid var(--border)", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px 48px", display: "flex", alignItems: "center", gap: "32px", flexWrap: "wrap" }}>
          <span style={{ fontFamily: "var(--ff-mono)", fontSize: "9px", color: "var(--text-3)", letterSpacing: ".18em", textTransform: "uppercase", whiteSpace: "nowrap" }}>Industrias</span>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
            {["SaaS", "IoT", "Gov-Tech", "FinOps", "AWS", "Sistemas distribuidos"].map(tag => (
              <span key={tag} style={{ fontFamily: "var(--ff-mono)", fontSize: "10px", color: "var(--text-3)", letterSpacing: ".08em", padding: "3px 10px", border: "1px solid var(--border)", borderRadius: "2px" }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ MI ENFOQUE ══════════════════════════════════════════ */}
      <div id="metodologia" className="full-border">
        <section className="section">
          <div className="section-kicker">Mi Enfoque</div>
          <h2 className="section-h2">Cómo convierto criterio técnico<br />en resultados medibles.</h2>
          <p className="section-sub">No es solo escribir buen código. Es tomar las decisiones correctas en el momento correcto y liderar el equipo para ejecutarlas.</p>

          <div className="enfoque-grid">
            <div className="enfoque-cell">
              <div className="enfoque-icon" style={{ color: "var(--blue)" }}>↗</div>
              <div className="enfoque-title">Liderazgo técnico con impacto</div>
              <div className="enfoque-body">Defino la arquitectura, priorizo la deuda técnica y conecto las decisiones de ingeniería con el negocio. Lidero equipos para que entreguen más y mejor, no solo más rápido.</div>
              <span className="metric-tag neutral">3 años como Tech Lead · SaaS & IoT</span>
            </div>
            <div className="enfoque-cell">
              <div className="enfoque-icon">IA</div>
              <div className="enfoque-title">IA con criterio e intención</div>
              <div className="enfoque-body">Uso IA para acelerar entrega sin sacrificar arquitectura. La herramienta no reemplaza el criterio, lo amplifica. El contexto y la intención siempre los pongo yo.</div>
              <span className="metric-tag">+8 años de criterio técnico detrás</span>
            </div>
            <div className="enfoque-cell">
              <div className="enfoque-icon" style={{ color: "var(--violet)" }}>⌬</div>
              <div className="enfoque-title">Resultados que se miden</div>
              <div className="enfoque-body">-58% en factura AWS, $20k/yr menos en licencias farmacéuticas. Cada decisión técnica tiene un impacto en el negocio — y ese impacto se mide.</div>
              <span className="metric-tag">Resultados comprobados · Healthcare & SaaS</span>
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
              <div className="problema-q">¿Tu factura AWS sube cada mes sin que nadie sepa exactamente por qué?</div>
              <div className="problema-a">
                <strong>Gobierno de costos cloud sin tocar la disponibilidad.</strong> En MediRec identifiqué instancias sobredimensionadas, eliminé recursos huérfanos y reestructuré el modelo de reservas. Resultado: <strong>-58% en factura AWS</strong> en 90 días, plataforma al 100% de uptime.
                <br /><Link className="problema-link" href="/casos-de-exito/medirec-aws">Ver caso completo →</Link>
              </div>
            </div>
            <div className="problema-item">
              <div className="problema-q">¿Pagas licencias de software que podrías eliminar sin perder funcionalidad?</div>
              <div className="problema-a">
                <strong>Migro dependencias costosas a alternativas sin comprometer el producto.</strong> Migré LexComp a NLMI en un sistema Healthcare crítico, eliminando <strong>$20k/año</strong> en licencias farmacéuticas con cero pérdida de integridad clínica.
                <br /><Link className="problema-link" href="/casos-de-exito/licencias-farmaceuticas">Ver caso completo →</Link>
              </div>
            </div>
            <div className="problema-item">
              <div className="problema-q">¿Tu plataforma funciona pero sabes que es frágil y nadie quiere tocarla?</div>
              <div className="problema-a">
                <strong>Re-arquitecturo sistemas frágiles sin detener la operación.</strong> Identifico los puntos de quiebre, priorizo la deuda técnica con criterio de negocio y construyo una base sólida para escalar — sin reescribir todo desde cero.
                <br /><Link className="problema-link" style={{ color: "var(--red)", opacity: 0.7 }} href="/contact">Caso en proceso · Hablemos →</Link>
              </div>
            </div>
            <div className="problema-item">
              <div className="problema-q">¿Tu infraestructura cloud creció sin orden y hoy nadie sabe qué hay en producción?</div>
              <div className="problema-a">
                <strong>Estandarizo infraestructura con IaC y visibilidad real.</strong> Implemento Infrastructure as Code, elimino recursos huérfanos y dejo una arquitectura que cualquier ingeniero puede entender y operar desde el primer día.
                <br /><Link className="problema-link" style={{ color: "var(--red)", opacity: 0.7 }} href="/contact">Caso en proceso · Hablemos →</Link>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "32px", paddingTop: "24px", borderTop: "1px solid var(--border)", textAlign: "center" }}>
            <p style={{ color: "var(--text-3)", fontFamily: "var(--ff-mono)", fontSize: "12px", marginBottom: "12px" }}>¿Tu problema no está aquí? Descríbemelo.</p>
            <Link className="btn btn-primary" href="/contact">Hablemos →</Link>
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
            <h2 className="cta-final-h2">¿Tienes un problema<br />técnico que <em>resolver</em>?</h2>
            <p className="cta-final-sub">
              Si tu plataforma AWS está fuera de control, tu infraestructura creció sin orden o necesitas criterio técnico real en tu equipo, cuéntamelo.
            </p>
            <div className="cta-final-btns">
              <Link className="btn btn-primary" href="/contact">Hablemos →</Link>
            </div>
          </div>
          <div className="cta-final-aside">
            <div className="cta-aside-item">
              <span className="cta-aside-label"><MessageCircle size={13} style={{ display: "inline", marginRight: "6px", verticalAlign: "middle" }} />WhatsApp</span>
              <span className="cta-aside-val"><a href="https://wa.me/51938804597" target="_blank" rel="noopener">+51 938 804 597</a></span>
            </div>
            <div className="cta-aside-item">
              <span className="cta-aside-label"><Send size={13} style={{ display: "inline", marginRight: "6px", verticalAlign: "middle" }} />Telegram</span>
              <span className="cta-aside-val"><a href="https://t.me/modavidc" target="_blank" rel="noopener">@modavidc</a></span>
            </div>
            <div className="cta-aside-item">
              <span className="cta-aside-label"><Mail size={13} style={{ display: "inline", marginRight: "6px", verticalAlign: "middle" }} />Email</span>
              <span className="cta-aside-val"><a href="mailto:moisesdavidaaron@gmail.com">moisesdavidaaron@gmail.com</a></span>
            </div>
            <div className="cta-aside-item">
              <span className="cta-aside-label"><Linkedin size={13} style={{ display: "inline", marginRight: "6px", verticalAlign: "middle" }} />LinkedIn</span>
              <span className="cta-aside-val"><a href="https://linkedin.com/in/modavidc" target="_blank" rel="noopener">linkedin.com/in/modavidc</a></span>
            </div>
            <div className="cta-aside-item">
              <span className="cta-aside-label"><Github size={13} style={{ display: "inline", marginRight: "6px", verticalAlign: "middle" }} />GitHub</span>
              <span className="cta-aside-val"><a href="https://github.com/modavidc" target="_blank" rel="noopener">github.com/modavidc</a></span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
