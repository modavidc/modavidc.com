import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Experiencia",
  description: "De full-stack a Tech Lead en 8 años. Trayectoria en SaaS, IoT y cloud con métricas reales: -58% AWS, -$20K/yr en licencias, 20K+ usuarios en producción.",
  openGraph: {
    title: "Experiencia · Moisés Cedeño · Tech Lead",
    description: "8 años de decisiones técnicas documentadas en SaaS, IoT y cloud. Métricas verificables en cada rol.",
    url: "https://modavidc.com/experiencia",
  },
  alternates: { canonical: "/experiencia" },
}

export default function ExperienciaPage() {
  return (
    <>
      <div className="page-header">
        <div className="section-kicker">Experiencia</div>
        <h1 className="page-h1">De full-stack a<br /><em>Tech Lead.</em></h1>
        <p className="page-sub">
          8 años en software donde cada rol añadió una capa: velocidad técnica, luego arquitectura, luego criterio de negocio. Hoy lidero equipos y tomo decisiones que se miden en resultados.
        </p>
      </div>

      <div className="page-wrap">

        {/* ── TIMELINE ── */}
        <section className="page-section">
          <div className="section-kicker">Experiencia</div>
          <h2 className="section-h2">Roles que construyeron el criterio</h2>
          <p className="section-sub">De la implementación al diseño de sistemas con métricas reales en cada etapa.</p>

          <div className="timeline">

            <div className="tl-entry is-current">
              <div className="tl-date">
                <span className="tl-years">2023 → presente</span>
                <span className="tl-period current">3+ años</span>
                <div className="tl-dot" />
              </div>
              <div className="tl-card">
                <div className="tl-card-head">
                  <div>
                    <div className="tl-role">Tech Lead</div>
                    <div className="tl-company">T-Cuida · SaaS / IoT · Lima, Perú · Remoto</div>
                  </div>
                  <span className="status-badge status-current">Actual</span>
                </div>
                <p className="tl-body">
                  Diseño y liderazgo técnico del ecosistema completo T-Cuida: wearables, GPS, dashboard en tiempo real y comunicación familiar. Primer rol con ownership total de arquitectura, infraestructura y decisiones de producto.
                </p>
                <ul className="tl-achievements">
                  <li>Panel de atención en tiempo real reduciendo tiempo de respuesta un <strong>200%</strong> (3 min → 1 min).</li>
                  <li>Bridge TCP/IP a WebSockets acelerando programación de dispositivos un <strong>400%</strong>.</li>
                  <li>Publicación en App Store y Play Store estandarizada, reduciendo tiempos de aprobación un <strong>70%</strong>.</li>
                  <li>Administración de entornos AWS y Digital Ocean garantizando alta disponibilidad.</li>
                </ul>
                <div className="tl-metrics">
                  <span className="metric-inline">-200% tiempo de respuesta</span>
                  <span className="metric-inline">App Store + Play Store</span>
                </div>
                <div className="tl-tags">
                  <span className="cat-badge cat-amber"><span className="dot" />IoT</span>
                  <span className="cat-badge cat-blue"><span className="dot" />SaaS</span>
                  <span className="tag">PHP (Laravel)</span>
                  <span className="tag">Node.js</span>
                  <span className="tag">Vue.js</span>
                  <span className="tag">WebSockets</span>
                  <span className="tag">AWS S3</span>
                  <span className="tag">Digital Ocean</span>
                  <span className="tag">Flutter</span>
                </div>
              </div>
            </div>

            <div className="tl-entry is-current">
              <div className="tl-date">
                <span className="tl-years">2020 → presente</span>
                <span className="tl-period current">6+ años</span>
                <div className="tl-dot" />
              </div>
              <div className="tl-card">
                <div className="tl-card-head">
                  <div>
                    <div className="tl-role">Ingeniero de Integraciones</div>
                    <div className="tl-company">MediRec, Inc · Healthcare · Puerto Rico · Remoto</div>
                  </div>
                  <span className="status-badge status-current">Actual</span>
                </div>
                <p className="tl-body">
                  Integraciones clínicas críticas para plataforma Healthcare en Puerto Rico. Responsable de FinOps, interoperabilidad de laboratorios, cumplimiento regulatorio y arquitectura móvil.
                </p>
                <ul className="tl-achievements">
                  <li>Re-arquitectura de servicios AWS reduciendo la factura cloud un <strong>58%</strong> mediante ajuste de recursos y gobernanza de instancias.</li>
                  <li>Migración de LexiComp a NLM eliminando <strong>$20,000 USD/año</strong> en licencias farmacéuticas sin pérdida de integridad clínica.</li>
                  <li>Middleware clínico conectando laboratorios y médicos, reduciendo tiempos de resultados en un <strong>70%</strong>.</li>
                  <li>API crítica para integración con PREIS, automatizando entrega segura de vacunas al Gobierno de Puerto Rico.</li>
                  <li>Primera app Flutter de la organización en 2 meses, estableciendo roadmap técnico de productos digitales.</li>
                </ul>
                <div className="tl-metrics">
                  <span className="metric-inline">-58% AWS · $180K</span>
                  <span className="metric-inline">-$20K/año licencias</span>
                  <span className="metric-inline">-70% tiempo clínico</span>
                </div>
                <div className="tl-tags">
                  <span className="cat-badge cat-green"><span className="dot" />FinOps</span>
                  <span className="cat-badge cat-violet"><span className="dot" />Healthcare</span>
                  <span className="tag">PHP (Laravel)</span>
                  <span className="tag">C# (.NET)</span>
                  <span className="tag">Flutter</span>
                  <span className="tag">AWS EC2</span>
                  <span className="tag">Docker</span>
                  <span className="tag">HL7</span>
                  <span className="tag">REST</span>
                </div>
              </div>
            </div>

            <div className="tl-entry">
              <div className="tl-date">
                <span className="tl-years">2018 → 2021</span>
                <span className="tl-period">2 años 9 meses</span>
                <div className="tl-dot" />
              </div>
              <div className="tl-card">
                <div className="tl-card-head">
                  <div>
                    <div className="tl-role">Coordinador de Desarrollo</div>
                    <div className="tl-company">INDEXUM · Lima, Perú · Híbrido</div>
                  </div>
                  <span className="status-badge status-past">2018–2021</span>
                </div>
                <p className="tl-body">
                  Liderazgo de desarrollo de soluciones para finanzas, agrotech y servicios al ciudadano. Primer rol con responsabilidad de equipo y entrega de múltiples productos en paralelo.
                </p>
                <ul className="tl-achievements">
                  <li>Reducción del <strong>40%</strong> en gestión de Tesorería mediante módulos personalizados para control de flujo de caja.</li>
                  <li>Disminución del <strong>60%</strong> en tiempo de respuesta operativa para monitoreo agrícola con solución móvil.</li>
                  <li>Reducción del <strong>200%</strong> en tiempos de consulta ciudadana mediante plataforma de autoservicio digital.</li>
                </ul>
                <div className="tl-metrics">
                  <span className="metric-inline">-40% gestión financiera</span>
                  <span className="metric-inline">-60% respuesta agrotech</span>
                </div>
                <div className="tl-tags">
                  <span className="cat-badge cat-blue"><span className="dot" />SaaS</span>
                  <span className="tag">PHP (Laravel)</span>
                  <span className="tag">Node.js</span>
                  <span className="tag">Vue.js</span>
                  <span className="tag">Ionic</span>
                  <span className="tag">Digital Ocean</span>
                  <span className="tag">MySQL</span>
                </div>
              </div>
            </div>

            <div className="tl-entry">
              <div className="tl-date">
                <span className="tl-years">2017 → 2018</span>
                <span className="tl-period">1 año 2 meses</span>
                <div className="tl-dot" />
              </div>
              <div className="tl-card">
                <div className="tl-card-head">
                  <div>
                    <div className="tl-role">Mid Software Developer</div>
                    <div className="tl-company">IGA · 117 filiales globales · Remoto</div>
                  </div>
                  <span className="status-badge status-past">2017–2018</span>
                </div>
                <p className="tl-body">
                  Desarrollo y optimización de plataforma de cobranzas para red global de franquicias. Primer rol internacional con impacto medible en recaudación.
                </p>
                <ul className="tl-achievements">
                  <li>Incremento del <strong>25%</strong> en cobro de cuotas morosas a nivel global mediante corrección de algoritmos.</li>
                  <li>Optimización de consultas críticas reduciendo tiempos de 3 min a menos de <strong>5 segundos</strong>.</li>
                  <li>Resolución de fallo estructural en motor de cobranzas que persistía por más de un año.</li>
                </ul>
                <div className="tl-metrics">
                  <span className="metric-inline">+25% recaudación · 117 filiales</span>
                  <span className="metric-inline">3min → 5seg</span>
                </div>
                <div className="tl-tags">
                  <span className="tag">PHP (CodeIgniter)</span>
                  <span className="tag">JavaScript</span>
                  <span className="tag">MySQL</span>
                  <span className="tag">JIRA</span>
                </div>
              </div>
            </div>

            <div className="tl-entry">
              <div className="tl-date">
                <span className="tl-years">2015 → 2017</span>
                <span className="tl-period">2 años</span>
                <div className="tl-dot" />
              </div>
              <div className="tl-card">
                <div className="tl-card-head">
                  <div>
                    <div className="tl-role">Full-Stack Developer Jr.</div>
                    <div className="tl-company">Hispanos Soluciones · Disegnatec · Venezuela · Remoto</div>
                  </div>
                  <span className="status-badge status-past">2015–2017</span>
                </div>
                <p className="tl-body">
                  Inicio de carrera en desarrollo full-stack. Primeros módulos de cobranzas, reportes financieros y optimización de consultas. Cimientos de criterio técnico y documentación.
                </p>
                <ul className="tl-achievements">
                  <li>Módulo de Collections migrando cobros de manual a <strong>100% digital</strong>.</li>
                  <li>Reducción del <strong>75%</strong> en tiempo de ejecución de reportes críticos.</li>
                  <li>Primer módulo de BI de la plataforma facilitando toma de decisiones basada en datos.</li>
                </ul>
                <div className="tl-tags">
                  <span className="tag">PHP (CodeIgniter)</span>
                  <span className="tag">JavaScript</span>
                  <span className="tag">MySQL</span>
                  <span className="tag">Git</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── DOMINIOS ── */}
        <section className="page-section">
          <div className="section-kicker">Áreas de impacto</div>
          <h2 className="section-h2">Cómo convierto criterio técnico<br />en resultados medibles.</h2>
          <p className="section-sub">No son categorías de skills. Son áreas donde hay decisiones tomadas, sistemas entregados y métricas reales.</p>

          <div className="dominios-grid">
            <div className="dominio-card">
              <div className="dominio-head">
                <div className="dominio-title">Liderazgo técnico</div>
                <span className="metric-inline">3 años como Tech Lead</span>
              </div>
              <div className="dominio-skills">
                <span className="tag">Decisiones de arquitectura</span>
                <span className="tag">Roadmap técnico</span>
                <span className="tag">Code reviews</span>
              </div>
              <div className="dominio-body">Defino la arquitectura, priorizo la deuda técnica y conecto decisiones de ingeniería con el negocio. Lidero equipos para que entreguen más y mejor, no solo más rápido.</div>
            </div>
            <div className="dominio-card">
              <div className="dominio-head">
                <div className="dominio-title">Cloud FinOps</div>
                <span className="metric-inline">-58% AWS · $180K</span>
              </div>
              <div className="dominio-skills">
                <span className="tag">AWS Cost Explorer</span>
                <span className="tag">Reserved Instances</span>
                <span className="tag">Auto Scaling</span>
                <span className="tag">Terraform</span>
              </div>
              <div className="dominio-body">Gobernanza de costos cloud con rightsizing, tagging y eliminación de recursos ociosos. Resultado documentado: $180K ahorrados en un año sin tocar uptime.</div>
            </div>
            <div className="dominio-card">
              <div className="dominio-head">
                <div className="dominio-title">Documentación técnica</div>
                <span className="metric-inline">ADRs · Runbooks · C4</span>
              </div>
              <div className="dominio-skills">
                <span className="tag">ADRs</span>
                <span className="tag">Runbooks</span>
                <span className="tag">C4 Model</span>
                <span className="tag">Guías de contribución</span>
              </div>
              <div className="dominio-body">Documentación viva que cualquier dev puede navegar solo. El conocimiento vive en el sistema, no en la cabeza de una persona.</div>
            </div>
            <div className="dominio-card">
              <div className="dominio-head">
                <div className="dominio-title">Backend APIs e Integraciones</div>
                <span className="metric-inline">-70% tiempo de resultados</span>
              </div>
              <div className="dominio-skills">
                <span className="tag">PHP (Laravel)</span>
                <span className="tag">Node.js</span>
                <span className="tag">REST</span>
                <span className="tag">WebSockets</span>
                <span className="tag">HL7</span>
              </div>
              <div className="dominio-body">APIs e integraciones entre sistemas heterogéneos. Middleware clínico que redujo tiempos de resultados en un 70%. Interoperabilidad sin reescribir el sistema legacy.</div>
            </div>
            <div className="dominio-card">
              <div className="dominio-head">
                <div className="dominio-title">IoT y SaaS en tiempo real</div>
                <span className="metric-inline">-200% tiempo de respuesta</span>
              </div>
              <div className="dominio-skills">
                <span className="tag">WebSockets</span>
                <span className="tag">TCP/IP</span>
                <span className="tag">Wearables</span>
                <span className="tag">GPS</span>
                <span className="tag">AWS S3</span>
              </div>
              <div className="dominio-body">Ecosistemas SaaS/IoT completos: wearables, GPS, dashboards en tiempo real. T-Cuida redujo el tiempo de respuesta ante emergencias de 3 minutos a 1 minuto.</div>
            </div>
            <div className="dominio-card">
              <div className="dominio-head">
                <div className="dominio-title">Criterio de negocio</div>
                <span className="metric-inline">-$20K/yr en licencias</span>
              </div>
              <div className="dominio-skills">
                <span className="tag">Build vs. buy</span>
                <span className="tag">Estimaciones técnicas</span>
                <span className="tag">Comunicación ejecutiva</span>
              </div>
              <div className="dominio-body">Decisiones técnicas con impacto medible en el negocio: cuándo migrar, cuándo construir internamente, cómo comunicar ROI a stakeholders no técnicos.</div>
            </div>
            <div className="dominio-card">
              <div className="dominio-head">
                <div className="dominio-title">Healthcare &amp; Regulatorio</div>
                <span className="metric-inline">PREIS · HIPAA</span>
              </div>
              <div className="dominio-skills">
                <span className="tag">HL7 / FHIR</span>
                <span className="tag">NLMI</span>
                <span className="tag">Auditoría clínica</span>
              </div>
              <div className="dominio-body">Sistemas que cumplen regulaciones de datos clínicos en LATAM y Puerto Rico. Migración de sistemas farmacéuticos propietarios a open sin perder cobertura.</div>
            </div>
            <div className="dominio-card">
              <div className="dominio-head">
                <div className="dominio-title">Mobile</div>
                <span className="metric-inline">App Store · Play Store</span>
              </div>
              <div className="dominio-skills">
                <span className="tag">Flutter</span>
                <span className="tag">React Native</span>
                <span className="tag">Android</span>
              </div>
              <div className="dominio-body">Primera app Flutter de MediRec en 2 meses. Publicación en App Store y Play Store estandarizada en T-Cuida, reduciendo tiempos de aprobación un 70%.</div>
            </div>
            <div className="dominio-card">
              <div className="dominio-head">
                <div className="dominio-title">IA con criterio e intención</div>
                <span className="metric-inline">+8 años de criterio detrás</span>
              </div>
              <div className="dominio-skills">
                <span className="tag">Cursor / Claude</span>
                <span className="tag">Prompt engineering</span>
                <span className="tag">Flujos augmentados</span>
              </div>
              <div className="dominio-body">IA como acelerador, no como sustituto del criterio. El contexto, la intención y la decisión técnica los pongo yo.</div>
            </div>
          </div>
        </section>

        {/* ── KPI + CTA ── */}
        <section className="page-section">
          <div className="section-kicker">En números</div>
          <h2 className="section-h2">8 años de criterio técnico<br />con resultados medibles.</h2>
          <p className="section-sub">Cada decisión tiene un número detrás. Métricas verificables en los casos de éxito.</p>

          <div className="kpi-strip">
            <div className="kpi-cell">
              <div className="kpi-val green">-58%</div>
              <div className="kpi-label">Reducción factura AWS</div>
              <div className="kpi-sub">MediRec · 2023</div>
            </div>
            <div className="kpi-cell">
              <div className="kpi-val green">-200%</div>
              <div className="kpi-label">Tiempo de respuesta</div>
              <div className="kpi-sub">T-Cuida · 3min → 1min</div>
            </div>
            <div className="kpi-cell">
              <div className="kpi-val">20K+</div>
              <div className="kpi-label">Usuarios en producción</div>
              <div className="kpi-sub">Sistemas multi-tenant</div>
            </div>
            <div className="kpi-cell">
              <div className="kpi-val">-$20K</div>
              <div className="kpi-label">En licencias / año</div>
              <div className="kpi-sub">Migración NLMI · 2024</div>
            </div>
          </div>

          <div className="cta-band">
            <div>
              <h3 className="cta-band-h">¿Tienes un problema<br />técnico que <em>resolver</em>?</h3>
              <p className="cta-band-sub">Si tu plataforma AWS está fuera de control, tu infraestructura creció sin orden o necesitas criterio técnico real en tu equipo, cuéntamelo.</p>
            </div>
            <div className="cta-band-btns">
              <Link href="/contact" className="btn btn-primary">Hablemos →</Link>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
