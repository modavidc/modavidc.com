import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Experiencia",
  description: "De full-stack a Tech Lead en 8 años. Trayectoria en Healthcare, SaaS e IoT con métricas reales: -58% AWS, -$20K/yr en licencias, 20K+ usuarios en producción.",
  openGraph: {
    title: "Experiencia · Moisés Cedeño · Tech Lead",
    description: "8 años de decisiones técnicas documentadas en Healthcare, SaaS e IoT. Métricas verificables en cada rol.",
    url: "https://modavidc.com/experiencia",
  },
  alternates: { canonical: "/experiencia" },
}

export default function ExperienciaPage() {
  return (
    <>
      <div className="page-header">
        <div className="section-kicker">Experiencia</div>
        <h1 className="page-h1">
          De full-stack a<br />
          <em>Tech Lead.</em>
        </h1>
        <p className="page-sub">
          8+ años construyendo sistemas que escalan en Healthcare, SaaS e IoT. Cada rol añadió una capa: velocidad técnica, luego arquitectura, luego criterio de negocio.
        </p>
        <div style={{display:'flex', gap:'12px', flexWrap:'wrap', marginTop:'24px'}}>
          <Link href="/contact" className="btn btn-primary">Hablemos →</Link>
          <a className="btn btn-secondary" href="/assets/cv/cv.pdf" download>Descargar CV · PDF</a>
        </div>
      </div>

      <div className="page-wrap">

        <section className="page-section">
          <div className="section-kicker">Trayectoria</div>
          <h2 className="section-h2">Roles que construyeron el criterio</h2>
          <p className="section-sub">De la implementación al diseño de sistemas, con métricas reales en cada etapa.</p>

          <div className="timeline">

            <div className="tl-entry is-current">
              <div className="tl-date">
                <span className="tl-years">2023 → presente</span>
                <span className="tl-period current">2+ años</span>
                <div className="tl-dot"></div>
              </div>
              <div className="tl-card">
                <div className="tl-card-head">
                  <div>
                    <div className="tl-role">Tech Lead</div>
                    <div className="tl-company">Plataforma Healthcare · SaaS · Lima, Perú</div>
                  </div>
                  <span className="status-badge status-current">Actual</span>
                </div>
                <p className="tl-body">
                  Liderazgo técnico de equipo de 6 devs en plataforma de salud con 20K+ usuarios activos. Responsable de arquitectura cloud, FinOps y cultura de documentación. Primer rol donde el impacto medible supera el código escrito directamente.
                </p>
                <ul className="tl-achievements">
                  <li>Redujo la factura AWS en <strong>-58%</strong> ($180K anuales) en 90 días mediante re-arquitectura de instancias y eliminación de recursos huérfanos, sin afectar uptime.</li>
                  <li>Implementó un sistema de ADRs (Architecture Decision Records) que llevó el onboarding de nuevos devs de 3 semanas a <strong>48 horas</strong>.</li>
                  <li>Migró de LexComp a NLMI eliminando <strong>$20K/año en licencias</strong> farmacéuticas sin pérdida de integridad clínica.</li>
                  <li>Implementó CI/CD completo + observabilidad: de 0 a <strong>100% de cobertura de deploys</strong> auditables.</li>
                  <li>Logró cumplimiento regulatorio PREIS en tiempo récord para sistema de resultados de laboratorio.</li>
                </ul>
                <div className="tl-metrics">
                  <span className="metric-inline">-58% AWS · $180K</span>
                  <span className="metric-inline">48h onboarding</span>
                  <span className="metric-inline">-$20K/año licencias</span>
                </div>
                <div className="tl-tags">
                  <span className="cat-badge cat-green"><span className="dot"></span>FinOps</span>
                  <span className="cat-badge cat-violet"><span className="dot"></span>Healthcare</span>
                  <span className="cat-badge cat-blue"><span className="dot"></span>SaaS</span>
                  <span className="tag">AWS</span>
                  <span className="tag">Node.js</span>
                  <span className="tag">PostgreSQL</span>
                  <span className="tag">Docker</span>
                  <span className="tag">Terraform</span>
                  <span className="tag">HL7 / FHIR</span>
                </div>
              </div>
            </div>

            <div className="tl-entry">
              <div className="tl-date">
                <span className="tl-years">2021 → 2023</span>
                <span className="tl-period">2 años</span>
                <div className="tl-dot"></div>
              </div>
              <div className="tl-card">
                <div className="tl-card-head">
                  <div>
                    <div className="tl-role">Solutions Architect</div>
                    <div className="tl-company">Empresa Gov-Tech · Puerto Rico</div>
                  </div>
                  <span className="status-badge status-past">2021–2023</span>
                </div>
                <p className="tl-body">
                  Diseño de arquitectura para sistemas de gobierno digital. Primer rol con responsabilidad completa de decisiones técnicas de principio a fin, stack, infraestructura, patrones de integración y seguridad. Trabajo directo con stakeholders no técnicos.
                </p>
                <ul className="tl-achievements">
                  <li>Arquitectó un sistema multi-tenant que hoy sirve a <strong>+20K usuarios</strong> de servicios públicos de salud.</li>
                  <li>Construyó una API de integración con <strong>25+ laboratorios externos</strong> que redujo el tiempo de entrega de resultados clínicos de 5 días a <strong>4 horas</strong>, procesando 40K+ órdenes al mes.</li>
                  <li>Lideró la migración de infraestructura on-premise a cloud en <strong>2 meses</strong> con cero downtime visible al usuario final.</li>
                  <li>Implementó autenticación federada y auditoría completa de acceso para cumplir con regulaciones de datos gubernamentales.</li>
                </ul>
                <div className="tl-metrics">
                  <span className="metric-inline">20K+ usuarios</span>
                  <span className="metric-inline">40K+ órdenes lab/mes</span>
                  <span className="metric-inline neutral">2 meses · 0 downtime</span>
                </div>
                <div className="tl-tags">
                  <span className="cat-badge cat-violet"><span className="dot"></span>Healthcare</span>
                  <span className="tag">AWS</span>
                  <span className="tag">Node.js</span>
                  <span className="tag">React</span>
                  <span className="tag">Redis</span>
                  <span className="tag">HL7</span>
                  <span className="tag">OAuth 2.0</span>
                  <span className="tag">Gov-Tech</span>
                </div>
              </div>
            </div>

            <div className="tl-entry">
              <div className="tl-date">
                <span className="tl-years">2019 → 2021</span>
                <span className="tl-period">2 años</span>
                <div className="tl-dot"></div>
              </div>
              <div className="tl-card">
                <div className="tl-card-head">
                  <div>
                    <div className="tl-role">Integration Engineer</div>
                    <div className="tl-company">Startup SaaS · Panamá / Miami</div>
                  </div>
                  <span className="status-badge status-past">2019–2021</span>
                </div>
                <p className="tl-body">
                  Diseño y desarrollo de integraciones entre sistemas heterogéneos: ERP, dispositivos IoT, APIs de terceros y plataformas de mensajería clínica. Rol que definió el enfoque en arquitecturas orientadas a eventos y sistemas distribuidos.
                </p>
                <ul className="tl-achievements">
                  <li>Construyó el backbone de integración de una plataforma SaaS IoT que conecta <strong>+1,500 dispositivos</strong> en tiempo real.</li>
                  <li>Implementó un sistema de eventos con MQTT + AWS IoT Core que redujo la latencia de telemetría en <strong>-65%</strong>.</li>
                  <li>Diseñó el primer ADK (API Developer Kit) de la empresa, adoptado por <strong>3 clientes enterprise</strong> en el primer trimestre.</li>
                </ul>
                <div className="tl-metrics">
                  <span className="metric-inline neutral">1,500+ dispositivos</span>
                  <span className="metric-inline">-65% latencia IoT</span>
                </div>
                <div className="tl-tags">
                  <span className="cat-badge cat-amber"><span className="dot"></span>IoT</span>
                  <span className="cat-badge cat-blue"><span className="dot"></span>SaaS</span>
                  <span className="tag">MQTT</span>
                  <span className="tag">AWS IoT</span>
                  <span className="tag">Node.js</span>
                  <span className="tag">Python</span>
                  <span className="tag">Kafka</span>
                  <span className="tag">REST / GraphQL</span>
                </div>
              </div>
            </div>

            <div className="tl-entry">
              <div className="tl-date">
                <span className="tl-years">2016 → 2019</span>
                <span className="tl-period">3 años</span>
                <div className="tl-dot"></div>
              </div>
              <div className="tl-card">
                <div className="tl-card-head">
                  <div>
                    <div className="tl-role">Full-Stack Developer</div>
                    <div className="tl-company">Agencia de producto digital · Lima, Perú</div>
                  </div>
                  <span className="status-badge status-past">2016–2019</span>
                </div>
                <p className="tl-body">
                  Desarrollo full-stack para productos digitales de clientes en retail, fintech y salud. Primera exposición a sistemas con carga real de usuarios y primeros patrones de arquitectura escalable. Base técnica que define el resto de la trayectoria.
                </p>
                <ul className="tl-achievements">
                  <li>Desarrolló y mantuvo 6 productos digitales en producción simultáneamente, aprendió a priorizar técnicamente bajo presión real.</li>
                  <li>Primera experiencia con sistemas de salud: plataforma de gestión de citas médicas con <strong>+3K usuarios</strong> activos.</li>
                  <li>Adoptó las primeras prácticas de documentación técnica, patrón que luego escalaría en todos los roles posteriores.</li>
                </ul>
                <div className="tl-tags">
                  <span className="tag">JavaScript</span>
                  <span className="tag">React</span>
                  <span className="tag">Node.js</span>
                  <span className="tag">MySQL</span>
                  <span className="tag">PHP</span>
                  <span className="tag">AWS EC2</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section className="page-section">
          <div className="section-kicker">Dominios de un Tech Lead</div>
          <h2 className="section-h2">Qué resuelvo, y con qué resultado probado</h2>
          <p className="section-sub">No son categorías de skills. Son áreas donde hay decisiones tomadas, sistemas entregados y métricas reales.</p>

          <div className="dominios-grid">

            <div className="dominio-card">
              <div className="dominio-head">
                <div className="dominio-title">Cloud FinOps</div>
                <span className="metric-inline">-58% AWS · MediRec</span>
              </div>
              <div className="dominio-skills">
                <span className="tag">AWS Cost Explorer</span>
                <span className="tag">Reserved Instances</span>
                <span className="tag">Terraform</span>
                <span className="tag">Auto Scaling</span>
              </div>
              <div className="dominio-body">Gobernanza de costos cloud con tagging, rightsizing y automatización de apagado de recursos ociosos. Resultado documentado: $180K ahorrados en un año.</div>
            </div>

            <div className="dominio-card">
              <div className="dominio-head">
                <div className="dominio-title">Backend APIs &amp; Microservicios</div>
                <span className="metric-inline">40K+ órdenes/mes</span>
              </div>
              <div className="dominio-skills">
                <span className="tag">Node.js</span>
                <span className="tag">REST / GraphQL</span>
                <span className="tag">Kafka</span>
                <span className="tag">PostgreSQL</span>
                <span className="tag">Redis</span>
              </div>
              <div className="dominio-body">APIs de alta disponibilidad para plataformas con miles de usuarios. API de integración con 25+ laboratorios que redujo el tiempo de entrega de resultados de 5 días a 4 horas.</div>
            </div>

            <div className="dominio-card">
              <div className="dominio-head">
                <div className="dominio-title">Healthcare &amp; Regulatorio</div>
                <span className="metric-inline neutral">PREIS · HIPAA</span>
              </div>
              <div className="dominio-skills">
                <span className="tag">HL7 / FHIR</span>
                <span className="tag">NLMI</span>
                <span className="tag">LexComp</span>
                <span className="tag">Auditoría clínica</span>
              </div>
              <div className="dominio-body">Sistemas que cumplen regulaciones de datos clínicos en LATAM y Puerto Rico. Migración de sistemas farmacéuticos propietarios a alternativas open sin perder cobertura de datos.</div>
            </div>

            <div className="dominio-card">
              <div className="dominio-head">
                <div className="dominio-title">IoT &amp; Sistemas distribuidos</div>
                <span className="metric-inline">-65% latencia · 1,500 devs</span>
              </div>
              <div className="dominio-skills">
                <span className="tag">MQTT</span>
                <span className="tag">AWS IoT Core</span>
                <span className="tag">Edge computing</span>
                <span className="tag">Raspberry Pi</span>
              </div>
              <div className="dominio-body">Arquitecturas event-driven para telemetría en tiempo real. Backbone de integración para plataformas con 1,500+ dispositivos conectados.</div>
            </div>

            <div className="dominio-card">
              <div className="dominio-head">
                <div className="dominio-title">Documentación &amp; Onboarding</div>
                <span className="metric-inline">48h onboarding</span>
              </div>
              <div className="dominio-skills">
                <span className="tag">ADRs</span>
                <span className="tag">Runbooks</span>
                <span className="tag">C4 Model</span>
                <span className="tag">Notion / Confluence</span>
              </div>
              <div className="dominio-body">Sistemas de documentación viva: Architecture Decision Records, guías de contribución y runbooks que reducen la curva de onboarding de semanas a horas.</div>
            </div>

            <div className="dominio-card">
              <div className="dominio-head">
                <div className="dominio-title">Liderazgo técnico</div>
                <span className="metric-inline neutral">Equipos de 4–8 devs</span>
              </div>
              <div className="dominio-skills">
                <span className="tag">Code reviews</span>
                <span className="tag">RFC / RFC-light</span>
                <span className="tag">Roadmap técnico</span>
                <span className="tag">1:1s</span>
              </div>
              <div className="dominio-body">Liderazgo de equipos con ownership real: decisiones de arquitectura, roadmap técnico, cultura de calidad y procesos de revisión sin burocracia.</div>
            </div>

            <div className="dominio-card">
              <div className="dominio-head">
                <div className="dominio-title">Entrega &amp; Delivery</div>
                <span className="metric-inline neutral">2 meses · 0 downtime</span>
              </div>
              <div className="dominio-skills">
                <span className="tag">CI/CD</span>
                <span className="tag">GitHub Actions</span>
                <span className="tag">Docker</span>
                <span className="tag">Observabilidad</span>
              </div>
              <div className="dominio-body">Migración de infraestructura on-premise a cloud en tiempo récord sin downtime. CI/CD completo con observabilidad desde el primer sprint.</div>
            </div>

            <div className="dominio-card">
              <div className="dominio-head">
                <div className="dominio-title">Negocio &amp; stakeholders</div>
                <span className="metric-inline neutral">ROI documentado</span>
              </div>
              <div className="dominio-skills">
                <span className="tag">Decisiones de build vs. buy</span>
                <span className="tag">Estimaciones técnicas</span>
                <span className="tag">Comunicación ejecutiva</span>
              </div>
              <div className="dominio-body">Decisiones técnicas con criterio de negocio: cuándo migrar una librería de terceros, cuándo construir internamente, cómo comunicar impacto en términos de ROI a audiencias no técnicas.</div>
            </div>

            <div className="dominio-card">
              <div className="dominio-head">
                <div className="dominio-title">IA aplicada al desarrollo</div>
                <span className="metric-inline">+400% velocidad</span>
              </div>
              <div className="dominio-skills">
                <span className="tag">Cursor / Claude</span>
                <span className="tag">Prompt engineering</span>
                <span className="tag">Revisión de output</span>
                <span className="tag">Flujos augmentados</span>
              </div>
              <div className="dominio-body">IA como acelerador de desarrollo con criterio: entrega en semanas lo que antes tardaba meses, sin delegar el juicio técnico a la herramienta.</div>
            </div>

          </div>
        </section>

        <section className="page-section">
          <div className="section-kicker">En números</div>
          <h2 className="section-h2">8 años de decisiones, documentadas</h2>
          <p className="section-sub">Métricas de impacto directo, verificables en los casos de éxito.</p>

          <div className="kpi-strip">
            <div className="kpi-cell">
              <div className="kpi-val green">-58%</div>
              <div className="kpi-label">Reducción factura AWS</div>
              <div className="kpi-sub">MediRec · 2023</div>
            </div>
            <div className="kpi-cell">
              <div className="kpi-val">48h</div>
              <div className="kpi-label">Onboarding documentado</div>
              <div className="kpi-sub">Sin dependencia de persona</div>
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
              <h3 className="cta-band-h">¿Buscas este perfil<br />para tu <em>equipo</em>?</h3>
              <p className="cta-band-sub">Si necesitas un Tech Lead que deje el sistema en mejor estado del que lo encontró, cuéntame el proyecto. Disponible para in-house, consultoría o audit puntual.</p>
            </div>
            <div className="cta-band-btns">
              <Link href="/contact" className="btn btn-primary">Hablemos →</Link>
              <a className="btn btn-secondary" href="/assets/cv/cv.pdf" download>Descargar CV · PDF</a>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
