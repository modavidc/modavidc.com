import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Experiencia",
  description: "De full-stack a Solutions Architect en 8 años. Trayectoria en Healthcare, SaaS e IoT con métricas reales: -58% AWS, 48h onboarding, 20K+ usuarios en producción.",
  openGraph: {
    title: "Experiencia — Moisés Cedeño · Solutions Architect",
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
        <h1 className="page-h1">De full-stack a<br /><em>Solutions Architect.</em></h1>
        <p className="page-sub">
          8+ años construyendo sistemas que escalan — en Healthcare, SaaS e IoT. Cada rol añadió una capa: velocidad técnica, luego arquitectura, luego criterio de negocio.
        </p>
      </div>

      <div className="page-wrap">

        {/* ── TIMELINE ── */}
        <section className="page-section">
          <div className="section-kicker">Trayectoria</div>
          <h2 className="section-h2">Roles que construyeron el criterio</h2>
          <p className="section-sub">De la implementación al diseño de sistemas — con métricas reales en cada etapa.</p>

          <div className="timeline">

            <div className="tl-entry is-current">
              <div className="tl-date">
                <span className="tl-years">2023 → presente</span>
                <span className="tl-period current">2+ años</span>
                <div className="tl-dot" />
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
                  <li>Redujo la factura AWS en <strong>-58%</strong> ($180K anuales) en 90 días mediante re-arquitectura de instancias y eliminación de recursos huérfanos — sin afectar uptime.</li>
                  <li>Implementó un sistema de ADRs que llevó el onboarding de nuevos devs de 3 semanas a <strong>48 horas</strong>.</li>
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
                  <span className="cat-badge cat-green"><span className="dot" />FinOps</span>
                  <span className="cat-badge cat-violet"><span className="dot" />Healthcare</span>
                  <span className="cat-badge cat-blue"><span className="dot" />SaaS</span>
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
                <div className="tl-dot" />
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
                  Diseño de arquitectura para sistemas de gobierno digital. Primer rol con responsabilidad completa de decisiones técnicas de principio a fin — stack, infraestructura, patrones de integración y seguridad. Trabajo directo con stakeholders no técnicos.
                </p>
                <ul className="tl-achievements">
                  <li>Arquitectó un sistema multi-tenant que hoy sirve a <strong>+20K usuarios</strong> de servicios públicos de salud.</li>
                  <li>Redujo el tiempo de entrega de resultados clínicos en <strong>-70%</strong> mediante middleware de integración HL7.</li>
                  <li>Lideró la migración on-premise a cloud en <strong>2 meses</strong> con cero downtime visible al usuario final.</li>
                  <li>Implementó autenticación federada y auditoría completa de acceso para regulaciones gubernamentales.</li>
                </ul>
                <div className="tl-metrics">
                  <span className="metric-inline">20K+ usuarios</span>
                  <span className="metric-inline">-70% tiempo clínico</span>
                  <span className="metric-inline neutral">2 meses · 0 downtime</span>
                </div>
                <div className="tl-tags">
                  <span className="cat-badge cat-violet"><span className="dot" />Healthcare</span>
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
                <div className="tl-dot" />
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
                  Diseño y desarrollo de integraciones entre sistemas heterogéneos — ERP, dispositivos IoT, APIs de terceros y plataformas de mensajería clínica. Rol que definió el enfoque en arquitecturas orientadas a eventos.
                </p>
                <ul className="tl-achievements">
                  <li>Construyó el backbone de integración de una plataforma SaaS IoT con <strong>+1,500 dispositivos</strong> en tiempo real.</li>
                  <li>Implementó sistema de eventos con MQTT + AWS IoT Core reduciendo latencia de telemetría en <strong>-65%</strong>.</li>
                  <li>Diseñó el primer ADK de la empresa — adoptado por <strong>3 clientes enterprise</strong> en el primer trimestre.</li>
                </ul>
                <div className="tl-metrics">
                  <span className="metric-inline neutral">1,500+ dispositivos</span>
                  <span className="metric-inline">-65% latencia IoT</span>
                </div>
                <div className="tl-tags">
                  <span className="cat-badge cat-amber"><span className="dot" />IoT</span>
                  <span className="cat-badge cat-blue"><span className="dot" />SaaS</span>
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
                <div className="tl-dot" />
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
                  Desarrollo full-stack para productos digitales en retail, fintech y salud. Primera exposición a sistemas con carga real de usuarios y primeros patrones de arquitectura escalable.
                </p>
                <ul className="tl-achievements">
                  <li>Desarrolló y mantuvo 6 productos digitales en producción simultáneamente — aprendió a priorizar técnicamente bajo presión real.</li>
                  <li>Primera experiencia con sistemas de salud: plataforma de gestión de citas médicas con <strong>+3K usuarios</strong> activos.</li>
                  <li>Adoptó las primeras prácticas de documentación técnica — patrón que escalaría en todos los roles posteriores.</li>
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

        {/* ── DOMINIOS ── */}
        <section className="page-section">
          <div className="section-kicker">Dominios de un Solutions Architect</div>
          <h2 className="section-h2">Qué resuelvo — y con qué resultado probado</h2>
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
                <span className="metric-inline">-70% tiempo clínico</span>
              </div>
              <div className="dominio-skills">
                <span className="tag">Node.js</span>
                <span className="tag">REST / GraphQL</span>
                <span className="tag">Kafka</span>
                <span className="tag">PostgreSQL</span>
                <span className="tag">Redis</span>
              </div>
              <div className="dominio-body">APIs de alta disponibilidad para plataformas con miles de usuarios. Middleware HL7 que redujo latencia de resultados clínicos en un 70%.</div>
            </div>
            <div className="dominio-card">
              <div className="dominio-head">
                <div className="dominio-title">Healthcare &amp; Regulatorio</div>
                <span className="metric-inline neutral">PREIS · HIPAA</span>
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
                <div className="dominio-title">IoT &amp; Sistemas distribuidos</div>
                <span className="metric-inline">-65% latencia</span>
              </div>
              <div className="dominio-skills">
                <span className="tag">MQTT</span>
                <span className="tag">AWS IoT Core</span>
                <span className="tag">Edge computing</span>
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
              </div>
              <div className="dominio-body">Sistemas de documentación viva que reducen la curva de onboarding de semanas a horas. Cualquier dev nuevo productivo en 48h.</div>
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
              </div>
              <div className="dominio-body">Liderazgo con ownership real: decisiones de arquitectura, roadmap técnico, cultura de calidad y revisión sin burocracia.</div>
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
              </div>
              <div className="dominio-body">Migración on-premise a cloud en tiempo récord sin downtime. CI/CD completo con observabilidad desde el primer sprint.</div>
            </div>
            <div className="dominio-card">
              <div className="dominio-head">
                <div className="dominio-title">Negocio &amp; stakeholders</div>
                <span className="metric-inline neutral">ROI documentado</span>
              </div>
              <div className="dominio-skills">
                <span className="tag">Build vs. buy</span>
                <span className="tag">Estimaciones técnicas</span>
                <span className="tag">Comunicación ejecutiva</span>
              </div>
              <div className="dominio-body">Decisiones técnicas con criterio de negocio: cuándo migrar, cuándo construir internamente, cómo comunicar ROI a audiencias no técnicas.</div>
            </div>
            <div className="dominio-card">
              <div className="dominio-head">
                <div className="dominio-title">IA aplicada al desarrollo</div>
                <span className="metric-inline">+400% velocidad</span>
              </div>
              <div className="dominio-skills">
                <span className="tag">Cursor / Claude</span>
                <span className="tag">Prompt engineering</span>
                <span className="tag">Flujos augmentados</span>
              </div>
              <div className="dominio-body">IA como acelerador con criterio: entrega en semanas lo que antes tardaba meses, sin delegar el juicio técnico a la herramienta.</div>
            </div>
          </div>
        </section>

        {/* ── KPI + CTA ── */}
        <section className="page-section">
          <div className="section-kicker">En números</div>
          <h2 className="section-h2">8 años de decisiones, documentadas</h2>
          <p className="section-sub">Métricas de impacto directo — verificables en los casos de éxito.</p>

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
              <p className="cta-band-sub">Si necesitas un Solutions Architect que deje el sistema en mejor estado del que lo encontró — cuéntame el proyecto.</p>
            </div>
            <div className="cta-band-btns">
              <a className="btn btn-primary" href="mailto:hola@modavidc.com">Hablemos →</a>
              <a className="btn btn-secondary" href="/assets/cv/cv.pdf" download>Descargar CV</a>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
