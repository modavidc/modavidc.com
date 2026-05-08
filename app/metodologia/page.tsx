export default function MetodologiaPage() {
  return (
    <div className="page-wrap">

      {/* ── HERO ── */}
      <div className="page-section" style={{paddingTop:'72px'}}>
        <div className="section-kicker">Metodología</div>
        <h1 className="page-h1" style={{fontSize:'clamp(36px,5vw,64px)'}}>
          Así es cómo trabajo — y por qué<br />importa más que el <em>stack</em> que elijo.
        </h1>
        <p className="page-sub" style={{marginBottom:'32px'}}>
          IA para velocidad. Documentación para continuidad. Criterio para que el proyecto no dependa de mí. Cada proyecto queda en mejor estado del que lo encontré.
        </p>
        <div className="hero-pull">
          Cuando termino un proyecto, el equipo <strong>no me necesita para seguir</strong> — eso no es accidental, es el objetivo desde el día uno.
        </div>
      </div>

      {/* ── PILARES ── */}
      <section className="page-section">
        <div className="section-kicker">Los tres pilares</div>
        <h2 className="section-h2">IA + Contexto + <em>Criterio</em></h2>
        <p className="section-sub">No es un proceso lineal — es un sistema donde cada pilar refuerza a los otros.</p>

        <div className="pilares-grid">
          <div className="pilar-card">
            <div className="pilar-icon">
              <div className="pilar-icon-mark">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2L10 6H14L11 9L12 13L8 11L4 13L5 9L2 6H6L8 2Z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
                </svg>
              </div>
              IA para velocidad
            </div>
            <div className="pilar-title">Velocidad con criterio</div>
            <div className="pilar-body">Uso IA como acelerador del trabajo técnico, no como sustituto del juicio. La diferencia es que puedo entregar en 3 semanas lo que antes tardaba 3 meses — sin sacrificar la calidad de la arquitectura.</div>
            <div className="pilar-items">
              <div className="pilar-item"><strong>Generación de código</strong> — acelero scaffolding, tests y boilerplate repetitivo</div>
              <div className="pilar-item"><strong>Análisis</strong> — reviso dependencias, surface patterns y deuda técnica con mayor velocidad</div>
              <div className="pilar-item"><strong>Documentación</strong> — genero primeros borradores de ADRs y runbooks que luego refino</div>
            </div>
          </div>
          <div className="pilar-card">
            <div className="pilar-icon">
              <div className="pilar-icon-mark">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <rect x="2" y="2" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                  <line x1="5" y1="6" x2="11" y2="6" stroke="currentColor" strokeWidth="1.2"/>
                  <line x1="5" y1="9" x2="9" y2="9" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
              </div>
              Contexto documentado
            </div>
            <div className="pilar-title">Documentación que vive</div>
            <div className="pilar-body">No escribo documentación para que exista — la escribo para que cualquier dev pueda tomar el control del sistema sin necesitarme. ADRs, runbooks y guías de contribución como ciudadanos de primera clase del proyecto.</div>
            <div className="pilar-items">
              <div className="pilar-item"><strong>ADRs</strong> — cada decisión de arquitectura documentada con contexto y alternativas evaluadas</div>
              <div className="pilar-item"><strong>Runbooks</strong> — guías operacionales para incidentes, deploys y rollbacks</div>
              <div className="pilar-item"><strong>Onboarding</strong> — cualquier dev nuevo productivo en menos de 48 horas</div>
            </div>
          </div>
          <div className="pilar-card">
            <div className="pilar-icon">
              <div className="pilar-icon-mark">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="5" stroke="currentColor" strokeWidth="1.2"/>
                  <circle cx="8" cy="8" r="2" fill="currentColor"/>
                </svg>
              </div>
              Criterio técnico
            </div>
            <div className="pilar-title">Criterio, no herramientas</div>
            <div className="pilar-body">La IA me da velocidad pero no me da criterio. Saber cuándo no usar un framework, cuándo construir internamente, cuándo la solución simple gana — eso viene de 8 años de proyectos reales.</div>
            <div className="pilar-items">
              <div className="pilar-item"><strong>Build vs. buy</strong> — análisis de TCO real antes de adoptar una dependencia</div>
              <div className="pilar-item"><strong>Simplicidad intencional</strong> — la arquitectura más simple que resuelve el problema</div>
              <div className="pilar-item"><strong>ROI técnico</strong> — cada decisión tiene un argumento de negocio</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CASO REAL ── */}
      <section className="page-section">
        <div className="section-kicker">Caso real</div>
        <h2 className="section-h2">De 3 semanas a <em>48 horas</em></h2>
        <p className="section-sub">Cómo el sistema funcionó en un proyecto real — con números.</p>

        <div className="caso-real">
          <div className="caso-real-label">Caso real · T-Cuida · SaaS IoT</div>
          <div className="caso-real-h">De la idea al App Store en 3 semanas</div>
          <p className="caso-real-body">
            Se necesitaba construir una plataforma SaaS completa — wearables, GPS, dashboard real-time, comunicación familiar — en tiempo récord. Con el sistema de IA + documentación desde el día uno, pude generar el registro de arquitectura completo en las primeras 48 horas. Eso permitió que cualquier colaborador externo pudiera integrarse al proyecto sin fricción.<br /><br />
            El resultado: de cero a App Store + Play Store en 3 semanas. Con documentación que permitió que el equipo tomara ownership inmediato al entregarlo.
          </p>
          <div className="caso-kpis">
            <div className="caso-kpi">
              <div className="caso-kpi-val">3</div>
              <div className="caso-kpi-label">Semanas · entrega total</div>
            </div>
            <div className="caso-kpi">
              <div className="caso-kpi-val">48h</div>
              <div className="caso-kpi-label">Onboarding de dev nuevo</div>
            </div>
            <div className="caso-kpi">
              <div className="caso-kpi-val">0</div>
              <div className="caso-kpi-label">Dependencia de persona</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESO ── */}
      <section className="page-section">
        <div className="section-kicker">El proceso</div>
        <h2 className="section-h2">Del problema a la solución <em>documentada</em></h2>
        <p className="section-sub">Cuatro fases en cada proyecto — sin importar el tamaño.</p>

        <div className="process-flow">
          <div className="process-step">
            <div className="step-num">01 · Diagnóstico</div>
            <div className="step-title">Entender el sistema existente</div>
            <div className="step-body">Mapeo de deuda técnica, dependencias críticas y riesgos antes de escribir una línea. El problema real no siempre es el problema reportado.</div>
          </div>
          <div className="process-step">
            <div className="step-num">02 · Arquitectura</div>
            <div className="step-title">Diseñar antes de construir</div>
            <div className="step-body">ADRs escritos antes del código. Cada decisión de arquitectura con alternativas evaluadas, contexto y criterio de negocio documentados.</div>
          </div>
          <div className="process-step">
            <div className="step-num">03 · Entrega</div>
            <div className="step-title">Iterar con contexto</div>
            <div className="step-body">Sprints cortos con CI/CD desde el primer día. Cada deploy es auditado y documentado. La velocidad no sacrifica la calidad de la arquitectura.</div>
          </div>
          <div className="process-step">
            <div className="step-num">04 · Transferencia</div>
            <div className="step-title">El equipo toma ownership</div>
            <div className="step-body">Entrego cuando el equipo puede continuar sin mí. Runbook completo, guía de contribución, onboarding documentado. Cualquier dev productivo en 48h.</div>
          </div>
        </div>

        <div className="video-block">
          <div className="video-header">
            <div className="video-title">Del problema a la solución documentada</div>
            <div className="video-coming">Próximamente</div>
          </div>
          <div className="video-placeholder">
            <button className="video-play" aria-label="Reproducir">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--text-2)"><path d="M8 5v14l11-7z"/></svg>
            </button>
            <div className="video-caption">Velocidad + Documentación + Criterio<br />Cómo construyo software que cualquier dev puede mantener</div>
          </div>
        </div>
      </section>

      {/* ── RIESGOS ── */}
      <section className="page-section">
        <div className="section-kicker">Lo que elimino · Lo que garantizo</div>
        <h2 className="section-h2">Riesgos que <em>elimino</em></h2>
        <p className="section-sub">Cada uno de estos es un patrón que he visto en proyectos reales — y que el proceso está diseñado para prevenir.</p>

        <div className="riesgos-grid">
          <div className="riesgos-col bad">
            <div className="riesgos-head bad">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <circle cx="6" cy="6" r="5" stroke="currentColor"/>
                <line x1="4" y1="4" x2="8" y2="8" stroke="currentColor" strokeWidth="1.2"/>
                <line x1="8" y1="4" x2="4" y2="8" stroke="currentColor" strokeWidth="1.2"/>
              </svg>
              Riesgos que elimino
            </div>
            <div className="riesgo-item"><strong>Fuga de conocimiento</strong> — cuando el dev que llevaba el proyecto ya no está disponible</div>
            <div className="riesgo-item"><strong>Onboarding lento</strong> — semanas para que un dev nuevo entienda por qué las cosas son como son</div>
            <div className="riesgo-item"><strong>Dependencia de persona</strong> — no podrás escalar sin esa persona clave</div>
            <div className="riesgo-item"><strong>Decisiones sin contexto</strong> — código sin documentar por qué se tomó esa decisión</div>
          </div>
          <div className="riesgos-col good">
            <div className="riesgos-head good">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <circle cx="6" cy="6" r="5" stroke="currentColor"/>
                <path d="M3.5 6L5.5 8L8.5 4" stroke="currentColor" strokeWidth="1.2"/>
              </svg>
              Lo que garantizo
            </div>
            <div className="riesgo-item"><strong>ADRs completos</strong> — cada decisión de arquitectura con contexto, alternativas y criterio de negocio</div>
            <div className="riesgo-item"><strong>Onboarding rápido</strong> — cualquier dev nuevo productivo en menos de 48 horas con la documentación entregada</div>
            <div className="riesgo-item"><strong>Sistema que escala</strong> — arquitectura que el equipo puede mantener y extender sin mí</div>
            <div className="riesgo-item"><strong>Listo para crecer</strong> — infraestructura y prácticas que soportan el crecimiento futuro</div>
          </div>
        </div>
      </section>

      {/* ── REGLAS + CTA ── */}
      <section className="page-section">
        <div className="section-kicker">Principios</div>
        <h2 className="section-h2">Tres reglas <em>innegociables</em></h2>
        <p className="section-sub">Son los valores que no negocio en ningún proyecto, sin importar el deadline.</p>

        <div className="reglas-grid">
          <div className="regla-card">
            <div className="regla-num">01</div>
            <div className="regla-title">Si no está escrito, no pasó</div>
            <div className="regla-body">Cada decisión importante que no está documentada es deuda técnica disfrazada de velocidad. La documentación no es un extra — es parte del entregable desde el sprint uno.</div>
          </div>
          <div className="regla-card">
            <div className="regla-num">02</div>
            <div className="regla-title">Mínimo 2 opciones evaluadas</div>
            <div className="regla-body">No existe una única solución a un problema de arquitectura. Siempre evalúo al menos dos alternativas y documento por qué elegí la que elegí — con criterio técnico y de negocio.</div>
          </div>
          <div className="regla-card">
            <div className="regla-num">03</div>
            <div className="regla-title">IA como herramienta, no muleta</div>
            <div className="regla-body">La IA me da velocidad. El criterio técnico y el juicio de arquitectura son míos. Reviso, valido y refino cada output antes de que entre al proyecto. El estándar no baja.</div>
          </div>
        </div>

        <div className="cta-band cta-band--accent">
          <div>
            <h3 className="cta-band-h">¿Tu próximo proyecto o<br />rescatando uno <em>existente</em>?</h3>
            <p className="cta-band-sub">Si tu problema es nuevo o ya tienes un sistema que necesita mejorar — el resultado es el mismo: un sistema que escala sin depender de nadie.</p>
          </div>
          <div className="cta-band-btns">
            <a className="btn btn-primary" href="mailto:moisesdavidaaron@gmail.com">Hablemos →</a>
            <a className="btn btn-secondary" href="/casos-de-exito">Ver todos los casos</a>
          </div>
        </div>
      </section>

    </div>
  )
}
