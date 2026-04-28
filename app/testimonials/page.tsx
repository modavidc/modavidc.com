import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Testimonios",
  description: "Feedback real de equipos y líderes con los que ha colaborado Moisés Cedeño. -58% AWS, 48h onboarding, -70% tiempo clínico. Métricas verificables, datos bajo NDA.",
  openGraph: {
    title: "Testimonios — Moisés Cedeño · Solutions Architect",
    description: "Lo que dicen quienes han trabajado con Moisés Cedeño. Proyectos con impacto medible y documentación transferible.",
    url: "https://modavidc.com/testimonials",
  },
  alternates: { canonical: "/testimonials" },
}

export default function TestimoniosPage() {
  return (
    <>
      <div className="page-header">
        <div className="section-kicker">Testimonios</div>
        <h1 className="page-h1">Lo que dicen quienes han<br />trabajado <em>conmigo.</em></h1>
        <p className="page-sub">Feedback real de equipos y líderes con los que he colaborado. Proyectos con impacto medible, documentación transferible y cero dependencia.</p>
        <div className="nda-note">Algunos datos modificados por NDA — las métricas son verificables en los casos de éxito</div>
      </div>

      <div className="page-wrap">
        <div className="testimonios-grid">

          {/* Featured */}
          <div className="test-card-new featured">
            <div>
              <div className="test-card-top">
                <div style={{display:'flex',alignItems:'center',gap:'12px'}}>
                  <div className="test-avatar">DT</div>
                  <div>
                    <div style={{fontSize:'13px',fontWeight:500}}>Director de TI</div>
                    <div style={{fontFamily:'var(--ff-mono)',fontSize:'10px',color:'var(--text-3)',letterSpacing:'.1em',textTransform:'uppercase'}}>Director de Tecnología · MediRec</div>
                  </div>
                </div>
                <div className="test-platform">
                  <div className="platform-dot" style={{background:'var(--blue)'}} />
                  LinkedIn
                </div>
              </div>
              <div className="test-quote-new">
                Moisés lideró la reducción de nuestra factura AWS en un 58%. No solo optimizó costos — documentó cada decisión de arquitectura para que el equipo pudiera mantenerlos sin depender de él.
              </div>
              <div className="test-meta-new">
                <div>
                  <div className="test-name-new">Director de TI</div>
                  <div className="test-role-new">Plataforma Healthcare · MediRec · 2023</div>
                </div>
                <div className="test-badges-col">
                  <span className="metric-small">-58% AWS · $180K</span>
                  <span className="cat-badge cat-green"><span className="dot" />FinOps</span>
                </div>
              </div>
            </div>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',gap:'16px',padding:'0 0 0 40px',borderLeft:'1px solid var(--border)'}}>
              <div style={{fontFamily:'var(--ff-mono)',fontSize:'10px',color:'var(--text-3)',letterSpacing:'.14em',textTransform:'uppercase',marginBottom:'4px'}}>Resultado verificable</div>
              <div>
                <div style={{fontFamily:'var(--ff-display)',fontSize:'44px',fontWeight:500,letterSpacing:'-.04em',lineHeight:1,color:'var(--green)'}}>-58%</div>
                <div style={{fontFamily:'var(--ff-mono)',fontSize:'10px',color:'var(--text-3)',letterSpacing:'.1em',textTransform:'uppercase',marginTop:'6px'}}>Factura AWS · MediRec</div>
              </div>
              <div>
                <div style={{fontFamily:'var(--ff-display)',fontSize:'32px',fontWeight:500,letterSpacing:'-.03em',lineHeight:1}}>48h</div>
                <div style={{fontFamily:'var(--ff-mono)',fontSize:'10px',color:'var(--text-3)',letterSpacing:'.1em',textTransform:'uppercase',marginTop:'6px'}}>Onboarding dev nuevo</div>
              </div>
            </div>
          </div>

          {/* 02 */}
          <div className="test-card-new">
            <div className="test-card-top">
              <div style={{display:'flex',alignItems:'center',gap:'12px'}}>
                <div className="test-avatar">LT</div>
                <div>
                  <div style={{fontSize:'13px',fontWeight:500}}>Líder Técnico</div>
                  <div style={{fontFamily:'var(--ff-mono)',fontSize:'10px',color:'var(--text-3)',letterSpacing:'.1em',textTransform:'uppercase'}}>Tech Lead · MediRec Mobile</div>
                </div>
              </div>
              <div className="test-platform">
                <div className="platform-dot" style={{background:'var(--blue)'}} />
                LinkedIn
              </div>
            </div>
            <div className="test-quote-new">
              La app móvil quedó lista en 2 meses. Lo impresionante fue que el código estaba tan bien estructurado que cuando hubo que agregar features, no tuvimos que reescribir nada.
            </div>
            <div className="test-meta-new">
              <div>
                <div className="test-name-new">Líder Técnico</div>
                <div className="test-role-new">MediRec Mobile · 2024</div>
              </div>
              <div className="test-badges-col">
                <span className="metric-small">2 meses delivery</span>
                <span className="cat-badge cat-amber"><span className="dot" />Mobile</span>
              </div>
            </div>
          </div>

          {/* 03 */}
          <div className="test-card-new">
            <div className="test-card-top">
              <div style={{display:'flex',alignItems:'center',gap:'12px'}}>
                <div className="test-avatar">PO</div>
                <div>
                  <div style={{fontSize:'13px',fontWeight:500}}>Product Owner</div>
                  <div style={{fontFamily:'var(--ff-mono)',fontSize:'10px',color:'var(--text-3)',letterSpacing:'.1em',textTransform:'uppercase'}}>Product Lead · T-Cuida</div>
                </div>
              </div>
              <div className="test-platform">
                <div className="platform-dot" style={{background:'var(--green)'}} />
                Directo
              </div>
            </div>
            <div className="test-quote-new">
              Lo que más me impresionó fue su documentación. Cuando entró un nuevo dev, estuvo productivo en 48 horas gracias al registro de decisiones que Moisés mantuvo durante todo el proyecto.
            </div>
            <div className="test-meta-new">
              <div>
                <div className="test-name-new">Product Owner</div>
                <div className="test-role-new">T-Cuida · SaaS IoT · 2023</div>
              </div>
              <div className="test-badges-col">
                <span className="metric-small">48h onboarding</span>
                <span className="cat-badge cat-blue"><span className="dot" />SaaS</span>
              </div>
            </div>
          </div>

          {/* 04 */}
          <div className="test-card-new">
            <div className="test-card-top">
              <div style={{display:'flex',alignItems:'center',gap:'12px'}}>
                <div className="test-avatar">GO</div>
                <div>
                  <div style={{fontSize:'13px',fontWeight:500}}>Gerente de Operaciones</div>
                  <div style={{fontFamily:'var(--ff-mono)',fontSize:'10px',color:'var(--text-3)',letterSpacing:'.1em',textTransform:'uppercase'}}>Ops Lead · Lab Middleware</div>
                </div>
              </div>
              <div className="test-platform">
                <div className="platform-dot" style={{background:'var(--violet)'}} />
                Directo
              </div>
            </div>
            <div className="test-quote-new">
              La integración del middleware redujo el 70% del tiempo de comunicación de resultados. El sistema se comunica con equipos legacy que nadie más quería tocar. Funciona perfecto.
            </div>
            <div className="test-meta-new">
              <div>
                <div className="test-name-new">Gerente de Operaciones</div>
                <div className="test-role-new">Lab Middleware · Healthcare · 2022</div>
              </div>
              <div className="test-badges-col">
                <span className="metric-small">-70% tiempo</span>
                <span className="cat-badge cat-violet"><span className="dot" />Healthcare</span>
              </div>
            </div>
          </div>

          {/* 05 */}
          <div className="test-card-new">
            <div className="test-card-top">
              <div style={{display:'flex',alignItems:'center',gap:'12px'}}>
                <div className="test-avatar">CI</div>
                <div>
                  <div style={{fontSize:'13px',fontWeight:500}}>Coordinador IoT</div>
                  <div style={{fontFamily:'var(--ff-mono)',fontSize:'10px',color:'var(--text-3)',letterSpacing:'.1em',textTransform:'uppercase'}}>IoT Lead · T-Cuida</div>
                </div>
              </div>
              <div className="test-platform">
                <div className="platform-dot" style={{background:'var(--amber)'}} />
                Directo
              </div>
            </div>
            <div className="test-quote-new">
              El Bridge TCP/IP–WebSocket mejoró el throughput en un 400%. Pensamos que necesitaríamos hardware nuevo, pero Moisés encontró la solución en el software.
            </div>
            <div className="test-meta-new">
              <div>
                <div className="test-name-new">Coordinador IoT</div>
                <div className="test-role-new">T-Cuida · Bridge TCP/IP · 2023</div>
              </div>
              <div className="test-badges-col">
                <span className="metric-small">+400% throughput</span>
                <span className="cat-badge cat-amber"><span className="dot" />IoT</span>
              </div>
            </div>
          </div>

          {/* 06 */}
          <div className="test-card-new">
            <div className="test-card-top">
              <div style={{display:'flex',alignItems:'center',gap:'12px'}}>
                <div className="test-avatar">CT</div>
                <div>
                  <div style={{fontSize:'13px',fontWeight:500}}>CTO</div>
                  <div style={{fontFamily:'var(--ff-mono)',fontSize:'10px',color:'var(--text-3)',letterSpacing:'.1em',textTransform:'uppercase'}}>Chief Technology Officer · Healthcare Startup</div>
                </div>
              </div>
              <div className="test-platform">
                <div className="platform-dot" style={{background:'var(--text-3)'}} />
                Email
              </div>
            </div>
            <div className="test-quote-new">
              Necesitábamos cumplir con PREIS en tiempo récord. Moisés no solo lo logró — automatizó los reportes que antes tomaban 4 horas semanales. Ahora son real-time.
            </div>
            <div className="test-meta-new">
              <div>
                <div className="test-name-new">CTO</div>
                <div className="test-role-new">Healthcare Startup · Gov-Tech · 2023</div>
              </div>
              <div className="test-badges-col">
                <span className="metric-small" style={{background:'var(--bg-3)',color:'var(--text-2)',borderColor:'var(--border-2)'}}>100% PREIS</span>
                <span className="cat-badge cat-violet"><span className="dot" />Healthcare</span>
              </div>
            </div>
          </div>

        </div>

        {/* ── MÉTRICAS ── */}
        <div className="metrics-strip">
          <div style={{fontFamily:'var(--ff-mono)',fontSize:'11px',color:'var(--text-3)',letterSpacing:'.16em',textTransform:'uppercase',marginBottom:'24px',display:'flex',alignItems:'center',gap:'10px'}}>
            <span style={{display:'block',width:'24px',height:'1px',background:'var(--border-2)'}} />
            En números
          </div>
          <div className="metrics-grid">
            <div className="metric-cell">
              <div className="metric-val green">-58%</div>
              <div className="metric-lbl">AWS reducido</div>
              <div className="metric-ctx">MediRec · verificable</div>
            </div>
            <div className="metric-cell">
              <div className="metric-val">48h</div>
              <div className="metric-lbl">Onboarding</div>
              <div className="metric-ctx">T-Cuida · verificable</div>
            </div>
            <div className="metric-cell">
              <div className="metric-val">+400%</div>
              <div className="metric-lbl">Throughput IoT</div>
              <div className="metric-ctx">TCP/IP Bridge · verificable</div>
            </div>
            <div className="metric-cell">
              <div className="metric-val">-70%</div>
              <div className="metric-lbl">Tiempo clínico</div>
              <div className="metric-ctx">Lab Middleware · verificable</div>
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div style={{padding:'48px 0 96px'}}>
          <div className="cta-band">
            <div>
              <h3 className="cta-band-h">¿Listo para ser el próximo<br />caso de <em>éxito</em>?</h3>
              <p className="cta-band-sub">Proyectos que entregan resultados medibles, con documentación que permite continuidad sin dependencias.</p>
            </div>
            <div className="cta-band-btns">
              <a className="btn btn-primary" href="mailto:hola@modavidc.com">Hablemos de tu proyecto →</a>
              <a className="btn btn-secondary" href="/casos-de-exito">Ver casos de éxito</a>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
