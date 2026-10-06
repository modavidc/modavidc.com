import Link from 'next/link'

export default function MetodologiaPage() {
  return (
    <div>

      {/* HERO */}
      <div className="page-header">
        <div className="section-kicker">Metodología</div>
        <h1 className="page-h1">No es solo escribir buen código.<br />Es tomar las <em>decisiones correctas.</em></h1>
        <p className="page-sub">8 años de proyectos me enseñaron cuándo la solución obvia es la solución equivocada. Aquí está el sistema que uso para tomar las decisiones correctas y para que el equipo pueda seguir tomándolas con criterio propio.</p>
        <div className="page-meta">
          <span>Lima, remoto</span>
          <span>Healthcare · SaaS</span>
          <span>8 años · 20K+ usuarios en producción</span>
        </div>
        <p className="lead-quote">El stack es una <em>consecuencia</em> de la decisión, no la decisión.</p>
      </div>

      {/* PROCESO 4 FASES */}
      <section className="section">
        <div className="section-kicker">El proceso · de día 1 a entrega</div>
        <h2 className="section-h2">Cuatro fases, <em>doce semanas</em></h2>
        <p className="section-sub">Lo que pasa cuando entro a un proyecto. No es un workflow ágil genérico: es la secuencia específica con la que llevo un sistema de "algo está roto" a "el equipo lo opera con criterio propio".</p>

        <div className="process">
          <div className="process-cell">
            <div className="process-num"><b>01</b>Diagnóstico</div>
            <div className="process-h">Mapear lo real</div>
            <div className="process-when">Semana 1</div>
            <div className="process-body">Entrevistas con el equipo, lectura del repo y del cloud bill, mapeo de la deuda técnica priorizada por costo de negocio. No hay decisiones aún, solo verdad.</div>
            <div className="process-out"><b>Output</b>Documento de 2 páginas: 3 hallazgos críticos, con costo y consecuencia.</div>
          </div>
          <div className="process-cell">
            <div className="process-num"><b>02</b>ADR raíz</div>
            <div className="process-h">Decidir, escrito</div>
            <div className="process-when">Semana 2</div>
            <div className="process-body">Las decisiones arquitectónicas críticas quedan en un ADR público con contexto, alternativas evaluadas y consecuencias aceptadas. El equipo discute la decisión antes de que sea irreversible.</div>
            <div className="process-out"><b>Output</b>1 ADR raíz + plantilla para los que vengan después.</div>
          </div>
          <div className="process-cell">
            <div className="process-num"><b>03</b>Ejecución</div>
            <div className="process-h">Equipo decide en parejas</div>
            <div className="process-when">Semanas 3–8</div>
            <div className="process-body">Cada PR de impacto se asocia a un ADR. Pair-review con un dev del equipo. La IA acelera el código y el ADR garantiza que cada commit tenga intención defendible.</div>
            <div className="process-out"><b>Output</b>PRs con ADR enlazado, métricas semanales contra baseline.</div>
          </div>
          <div className="process-cell">
            <div className="process-num"><b>04</b>Transferencia</div>
            <div className="process-h">Handoff con ownership</div>
            <div className="process-when">Semanas 9–12</div>
            <div className="process-body">Runbook por servicio, on-call rotativo, lectura conjunta del primer reporte mensual. La transferencia es la entrega: si el equipo no puede decidir por su cuenta, el proyecto no terminó.</div>
            <div className="process-out"><b>Output</b>Runbook + reporte de impacto + handoff doc firmado.</div>
          </div>
        </div>
      </section>

      {/* 3 PILARES */}
      <section className="section">
        <div className="section-kicker">Los tres pilares · en profundidad</div>
        <h2 className="section-h2">Decidir, operar, <em>medir.</em></h2>
        <p className="section-sub">Tres verbos, tres pilares. No son principios decorativos: son la forma concreta en que opero cada fase del proceso.</p>

        <div className="pilares-grid">
          <div className="pilar-cell">
            <div className="pilar-num"><span className="dot"></span><span className="pilar-verb">01 · DECIDIR</span></div>
            <div className="pilar-h">Liderazgo <em>técnico.</em></div>
            <div className="pilar-body">Decido, priorizo, lidero. Defino la arquitectura, priorizo la deuda técnica con criterio de negocio y formo al equipo para que tome cada decisión, no solo el código. El equipo entrega más porque entiende mejor, no porque va más rápido.</div>
            <div className="pilar-evidence">
              <div className="pilar-evidence-label">Artefactos</div>
              <div className="pilar-evidence-text">• Plantilla ADR pública<br />• Runbook por servicio<br />• Repo de referencia con guías</div>
            </div>
          </div>
          <div className="pilar-cell">
            <div className="pilar-num"><span className="dot"></span><span className="pilar-verb">02 · OPERAR</span></div>
            <div className="pilar-h">IA con <em>criterio.</em></div>
            <div className="pilar-body">Uso IA para acortar tiempos de entrega sin comprometer la arquitectura. La herramienta amplifica el criterio: la velocidad sin criterio es ruido. Combinar las dos es lo que entrego.</div>
            <div className="pilar-evidence">
              <div className="pilar-evidence-label">Toolchain IA</div>
              <div className="pilar-evidence-text">• Claude · Cursor · Aider<br />• Validación: tests + ADR review humano<br />• Cada decisión pasa revisión antes del merge</div>
            </div>
          </div>
          <div className="pilar-cell">
            <div className="pilar-num"><span className="dot"></span><span className="pilar-verb">03 · MEDIR</span></div>
            <div className="pilar-h">Resultados <em>medibles.</em></div>
            <div className="pilar-body">−58% en factura AWS. $20K/año menos en licencias farmacéuticas. Cada decisión técnica tiene un impacto en el negocio: ese impacto se mide, se documenta y se reporta.</div>
            <div className="pilar-evidence">
              <div className="pilar-evidence-label">Loop de medición</div>
              <div className="pilar-evidence-text">• ROI técnico antes de adoptar cualquier dependencia<br />• Métricas desde el día uno<br />• Reporte mensual al equipo</div>
            </div>
          </div>
        </div>

        <div className="bridge">
          <div className="bridge-label">Los pilares,<br />aplicados</div>
          <div className="bridge-text">Los tres pilares no son teoría. Abajo, <strong>dos casos donde se aplicaron uno por uno</strong>, con el pilar predominante etiquetado y el número que lo respalda. <em>Decidir antes que optimizar</em> en uno, <em>medir antes de declarar éxito</em> en el otro.</div>
        </div>
      </section>

      {/* CASOS APLICADOS */}
      <section className="section">
        <div className="section-kicker">En la práctica · pilares aplicados</div>
        <h2 className="section-h2">Criterio técnico con <em>números reales</em></h2>
        <p className="section-sub">Dos casos, dos pilares predominantes, dos métricas defendibles. Click para el caso completo.</p>

        <div className="cases-applied">
          <Link className="case-applied" href="/casos-de-exito/detail/medirec-aws">
            <div className="case-applied-pilar">Pilar 03 · Medir</div>
            <div className="case-applied-h">−58% en factura AWS en 90 días</div>
            <div className="case-applied-body">Plataforma con 20K+ usuarios activos. La factura AWS crecía más rápido de lo que nadie podía explicar. Identifiqué instancias sobredimensionadas, eliminé recursos huérfanos y reestructuré el modelo de reservas. Uptime al 100% durante todo el proceso. El equipo tomó ownership del nuevo modelo de gobernanza desde el día de la entrega.</div>
            <div className="case-applied-numbers">
              <div className="case-num"><span className="case-num-val">−58%</span><span className="case-num-label">factura</span></div>
              <div className="case-num"><span className="case-num-val">100%</span><span className="case-num-label">uptime</span></div>
              <div className="case-num"><span className="case-num-val">20K+</span><span className="case-num-label">usuarios</span></div>
            </div>
          </Link>
          <Link className="case-applied" href="/casos-de-exito/detail/licencias-farmaceuticas">
            <div className="case-applied-pilar">Pilar 01 · Decidir</div>
            <div className="case-applied-h">$20K/año menos en licencias, sin perder cobertura</div>
            <div className="case-applied-body">Sistema de validación farmacéutica en healthcare. La dependencia de LexComp costaba $20K/año. La decisión no era técnica: era clínica. Pregunté a NLM (Dr. Olivier Bodenreider) directamente. Respuesta: sí tienen capacidades para alergias, contraindicaciones y embarazo. Con ese dato, la migración dejó de ser riesgo y se volvió decisión obvia.</div>
            <div className="case-applied-numbers">
              <div className="case-num"><span className="case-num-val">−$20K</span><span className="case-num-label">/año</span></div>
              <div className="case-num"><span className="case-num-val">0</span><span className="case-num-label">downtime</span></div>
              <div className="case-num"><span className="case-num-val">&gt;97%</span><span className="case-num-label">cobertura clínica</span></div>
            </div>
          </Link>
        </div>
      </section>

      {/* DOS MODOS DE TRABAJO */}
      <section className="section">
        <div className="section-kicker">Por qué importa el rol</div>
        <h2 className="section-h2">Dos modos de trabajo · <em>cuándo pedir cuál</em></h2>
        <p className="section-sub">No es una cuestión de seniority. Es una cuestión de qué tipo de problema estás resolviendo, y ambos modos son necesarios.</p>

        <div className="modes-intro">
          <div className="modes-frame">Hay momentos en los que necesitas <strong>ejecutar bien</strong>: una feature definida, un bug acotado, una migración con scope claro. Para eso, un <strong>dev senior</strong> es exactamente lo correcto: rápido, confiable, fluido en el stack.</div>
          <div className="modes-frame">Hay otros momentos en los que necesitas <strong>liderar la decisión antes de ejecutar</strong>: cuestionar el reporte, conectar al negocio, dejar criterio escrito para que el equipo siga decidiendo. Para eso, un <strong>Tech Lead con criterio</strong>.</div>
        </div>

        <div className="dual-block">
          <div className="dual-cell exec">
            <div className="dual-label"><span className="lab-num">Modo 01</span> · Ejecución senior</div>
            <div className="dual-sub">mejor cuando el problema ya está bien planteado</div>
            <div className="dual-list">
              <div className="dual-item"><strong>Implementa la solución acordada</strong> — la conversación de qué hacer ya pasó</div>
              <div className="dual-item"><strong>Optimiza el código</strong> — limpio, performante, testeado</div>
              <div className="dual-item"><strong>Entrega features con velocidad</strong> — la velocidad es el activo</div>
              <div className="dual-item"><strong>Documenta lo que hizo</strong> — para que el siguiente entienda el qué</div>
            </div>
          </div>
          <div className="dual-cell lead">
            <div className="dual-label"><span className="lab-num">Modo 02</span> · Tech Lead con criterio</div>
            <div className="dual-sub">mejor cuando el problema aún no está bien planteado</div>
            <div className="dual-list">
              <div className="dual-item"><strong>Cuestiona el problema primero</strong> — el reporte casi nunca es la causa raíz</div>
              <div className="dual-item"><strong>Conecta cada decisión al negocio</strong> — −58% AWS, $20K/año en licencias</div>
              <div className="dual-item"><strong>Lidera para que el equipo decida</strong> — no para que dependa de él</div>
              <div className="dual-item"><strong>Documenta el criterio</strong> — el porqué, con contexto y argumento</div>
            </div>
          </div>
        </div>

        <div className="modes-closer"><strong>Ambos modos son necesarios.</strong> La diferencia es saber cuándo pedir cuál. Los proyectos costosos son casi siempre los que pidieron ejecución cuando hacía falta criterio.</div>
      </section>

      {/* TRES REGLAS INNEGOCIABLES */}
      <section className="section">
        <div className="section-kicker">Criterio · Contexto · Intención</div>
        <h2 className="section-h2">Tres reglas <em>innegociables</em></h2>
        <p className="section-sub">Los valores que no negocio en ningún proyecto, sin importar el deadline ni el stack.</p>

        <div className="reglas-grid">
          <div className="regla-cell">
            <div className="regla-cell-num"><b>01</b> · CRITERIO</div>
            <div className="regla-h">Criterio antes que stack</div>
            <div className="regla-body">Evalúo el resto de las alternativas antes de decidir. No es una guerra de stacks: es una decisión técnica defendible. El stack es el que mejor se ajusta, no el que más conozco.</div>
          </div>
          <div className="regla-cell">
            <div className="regla-cell-num"><b>02</b> · CONTEXTO</div>
            <div className="regla-h">Contexto documentado</div>
            <div className="regla-body">Cada decisión importante queda escrita en un ADR. El equipo siguiente debe poder entender por qué se hizo cada elección. Si no está en un ADR, no existe el criterio.</div>
          </div>
          <div className="regla-cell">
            <div className="regla-cell-num"><b>03</b> · INTENCIÓN</div>
            <div className="regla-h">Intención en cada línea</div>
            <div className="regla-body">La IA no reemplaza la intención. Cada línea de código tiene un propósito claro, validado y revisable. Si la IA escribe algo que yo no defendería, no entra al merge.</div>
          </div>
        </div>
      </section>

      {/* CTA BIFURCADO */}
      <div className="cta-bifurcado">
        <div className="section-kicker">¿Tu próximo paso?</div>
        <h2 className="cta-bifurcado-h">¿Empezar uno nuevo,<br />o <em>rescatar uno existente?</em></h2>
        <p className="cta-bifurcado-sub">Dos caminos distintos requieren conversaciones distintas. Cuéntame en cuál estás.</p>

        <div className="cta-paths">
          <Link className="cta-path new" href="/contact?ctx=nuevo">
            <div className="cta-path-label">Camino 01 · Proyecto nuevo</div>
            <div className="cta-path-h">Empezar uno <em>nuevo</em></div>
            <div className="cta-path-body">Hay una idea, hay un equipo, hay urgencia. Necesitas decisiones arquitectónicas correctas desde el día 1 y un Tech Lead que lidere mientras el equipo crece. Trabajemos juntos los primeros 3–6 meses críticos.</div>
            <div className="cta-path-cta">Hablemos del nuevo proyecto →</div>
          </Link>
          <Link className="cta-path rescue" href="/contact?ctx=rescate">
            <div className="cta-path-label">Camino 02 · Rescate</div>
            <div className="cta-path-h">Rescatar el <em>actual</em></div>
            <div className="cta-path-body">Hay un sistema que ya existe pero algo está roto: deuda técnica, factura cloud descontrolada, equipo dependiente de una persona. Necesitas un diagnóstico honesto y un plan ejecutable, no un reescribir desde cero.</div>
            <div className="cta-path-cta">Hablemos del rescate →</div>
          </Link>
        </div>
      </div>

    </div>
  )
}
