'use client'

import { useState } from 'react'
import Link from 'next/link'

type Filter = 'all' | 'healthcare' | 'product' | 'clients' | 'peers'

interface Testimonial {
  id: string
  cat: Filter
  accent: boolean
  ctx: string
  yr: string
  quote: string
  av: string
  nm: string
  ro: string
  co: string
  metric: string
  metricNeutral?: boolean
  link: { href: string; label: string } | null
  linkedin?: string
}

const testimonials: Testimonial[] = [
  {
    id: 'jessel', cat: 'healthcare', accent: true,
    ctx: 'MediRec · Compliance', yr: '2023',
    quote: 'En Compliance no perdonamos atajos. Moisés llevó la recertificación de ePrescribing y la migración de licencias farmacéuticas a NLM <em>sin un solo incidente regulatorio</em>. Validó técnica y clínicamente cada decisión antes de tocar producción.',
    av: 'J', nm: 'Jessel', ro: 'Compliance Lead', co: 'MediRec',
    metric: 'PR-21677 · 0 incidencias',
    link: { href: '/casos-de-exito/detail/surescripts-certification', label: 'Ver caso' },
    linkedin: 'https://www.linkedin.com/in/jessel-cajigas/',
  },
  {
    id: 'karen', cat: 'healthcare', accent: true,
    ctx: 'T-Cuida · CEO', yr: '2022 — 2024',
    quote: 'Cuando construyes una startup de salud desde cero, necesitas a alguien que piense más allá del código. Moisés entendió la visión de T-Cuida <em>desde el día uno</em> — no solo entregó software, ayudó a definir qué software valía la pena construir.',
    av: 'K', nm: 'Karen', ro: 'CEO', co: 'T-Cuida',
    metric: '+400% throughput IoT',
    link: { href: '/casos-de-exito', label: 'Ver casos' },
    linkedin: 'https://www.linkedin.com/in/karen-del-castillo-/',
  },
  {
    id: 'luiggi', cat: 'healthcare', accent: false,
    ctx: 'T-Cuida · QA', yr: '2023',
    quote: 'Trabajé bajo Moisés en T-Cuida como QA. Lo que aprecié es que <em>defendía el tiempo necesario</em> para hacer las cosas bien — incluso cuando la presión empujaba a saltarse pasos. Me hizo mejor profesional sin que se sintiera como mentoría formal.',
    av: 'L', nm: 'Luiggi', ro: 'QA Engineer', co: 'T-Cuida',
    metric: '0 defectos en producción',
    link: { href: '/metodologia', label: 'Ver método' },
    linkedin: 'https://www.linkedin.com/in/luiggipasache/',
  },
  {
    id: 'ricardo', cat: 'healthcare', accent: false,
    ctx: 'T-Cuida · CMO', yr: '2023 — 2024',
    quote: 'Como CMO necesitaba números defendibles para el pitch de Series A, no promesas. Moisés tradujo la arquitectura técnica en algo que un inversionista entendía en dos minutos: <em>la plataforma escala, está validada, y el equipo puede sostenerla.</em> Eso cambió cómo contábamos la historia de T-Cuida.',
    av: 'R', nm: 'Ricardo Carrillo', ro: 'CMO', co: 'T-Cuida',
    metric: '20K usuarios validados',
    link: { href: '/casos-de-exito/detail/t-cuida-multitenant', label: 'Ver caso' },
    linkedin: 'https://www.linkedin.com/in/recu/',
  },
  {
    id: 'michael', cat: 'product', accent: true,
    ctx: 'Indexum · Lead', yr: '2018 — 2020',
    quote: 'Moisés se incorporó como dev senior y en 6 meses ya estaba liderando arquitectura. La capacidad de absorber contexto y devolverlo en <em>decisiones técnicas</em> es lo que separa a un dev senior de un Tech Lead. Él hizo esa transición en mi equipo.',
    av: 'MT', nm: 'Michael Terrones', ro: 'Lead', co: 'Indexum',
    metric: 'Promoción · 6 meses',
    link: null,
    linkedin: 'https://www.linkedin.com/in/michael-terrones-msc-pmp-248a1b6/',
  },
  {
    id: 'gabriel', cat: 'clients', accent: false,
    ctx: 'Cliente · Web profesional', yr: '2024',
    quote: 'Necesitaba una web profesional en tiempo récord para lanzar mi consulta. Moisés <em>respondía cualquier ajuste el mismo día</em> y me explicó cada decisión técnica de forma que entendí qué estaba pagando.',
    av: 'GN', nm: 'Gabriel Niezen Matos', ro: 'Cliente', co: 'Web profesional',
    metric: 'Site live · 2 semanas',
    link: null,
    linkedin: 'https://www.linkedin.com/in/gabriel-niezen-matos-46197589/',
  },
  {
    id: 'jose', cat: 'clients', accent: false,
    ctx: 'Cliente · Web personal', yr: '2024 — 2025',
    quote: 'Gabriel me recomendó a Moisés para mi web. Trabajamos tres semanas en remoto y <em>cada llamada cerraba un milestone concreto</em>. Ningún "casi terminamos" eterno.',
    av: 'JD', nm: 'José Dergan', ro: 'Cliente', co: 'Web personal',
    metric: '3 sprints · entregado',
    link: null,
    linkedin: 'https://www.linkedin.com/in/jose-dergan-psy-d-baa19919/',
  },
  {
    id: 'samuel', cat: 'peers', accent: false,
    ctx: 'Ex-colega · 4 proyectos', yr: '2020 — 2022',
    quote: 'Trabajé con Moisés antes de que fuera Tech Lead. Lo recomendaría como colega <em>no</em> por ser mi primo, sino porque <em>mantiene la palabra que da</em>. Si dice que entrega el viernes, entrega el viernes.',
    av: 'S', nm: 'Samuel', ro: 'Engineer', co: 'Ex-colega & familia',
    metric: '4 proyectos · 2 años',
    metricNeutral: true,
    link: null,
    linkedin: 'https://www.linkedin.com/in/samuelab2',
  },
  {
    id: 'romaira', cat: 'peers', accent: true,
    ctx: 'Colega · 2025', yr: '2025',
    quote: 'Trabajé con Moisés en el último año. Lo que más me sorprendió fue su <em>disciplina con la documentación</em>: cada decisión técnica importante quedaba escrita. Eso transformó cómo el equipo onboardeaba a nuevos miembros.',
    av: 'R', nm: 'Romaira', ro: 'Engineer', co: 'Colega reciente',
    metric: 'Onboarding 48h',
    link: { href: '/metodologia', label: 'Ver método' },
    linkedin: 'https://www.linkedin.com/in/romaira-brito-215860129/',
  },
  {
    id: 'heymis', cat: 'peers', accent: false,
    ctx: 'Mentee · Mentoría informal', yr: '2024 — 2025',
    quote: 'Moisés me ayudó con problemas de código durante meses — <em>sin pedir nada a cambio</em>. No solo respondía la pregunta puntual: me hacía entender el porqué. Es el tipo de mentor que cualquier dev junior quiere tener cerca.',
    av: 'H', nm: 'Heymis', ro: 'Dev', co: 'Mentoría informal',
    metric: '+1 año mentoría',
    link: { href: '/metodologia', label: 'Ver enfoque' },
    linkedin: 'https://www.linkedin.com/in/heimysa/',
  },
]

function Card({ t }: { t: Testimonial }) {
  return (
    <article className={`t2-card${t.accent ? ' accent' : ''}`}>
      <div className="t2-card-head">
        <span className="t2-ctx">{t.ctx}</span>
        <span className="t2-yr">{t.yr}</span>
      </div>
      <blockquote
        className="t2-card-quote"
        dangerouslySetInnerHTML={{ __html: t.quote }}
      />
      <cite className="t2-card-author">
        <div className="t2-mono-av" aria-hidden="true">{t.av}</div>
        <div className="t2-card-id">
          <div className="cnm">
            {t.nm}
            {t.linkedin && (
              <a
                href={t.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`LinkedIn de ${t.nm}`}
                style={{
                  marginLeft: '6px',
                  fontFamily: 'var(--ff-mono)',
                  fontSize: '11px',
                  fontWeight: 600,
                  color: 'var(--green)',
                  textDecoration: 'none',
                  border: '1px solid var(--green)',
                  borderRadius: '3px',
                  padding: '1px 5px',
                  verticalAlign: 'middle',
                }}
              >
                in
              </a>
            )}
          </div>
          <div className="cro"><b>{t.co}</b> · {t.ro}</div>
        </div>
      </cite>
      <div className="t2-card-foot">
        <span className={`t2-metric-chip${t.metricNeutral ? ' neutral' : ''}`}>{t.metric}</span>
        {t.link
          ? <Link href={t.link.href} className="t2-card-link">{t.link.label} →</Link>
          : <span className="t2-card-link-muted">relación de confianza</span>
        }
      </div>
    </article>
  )
}

const FILTERS: { f: Filter; label: string; cnt: number; dot?: boolean }[] = [
  { f: 'all', label: 'Todos', cnt: 11 },
  { f: 'healthcare', label: 'Healthcare / IoT', cnt: 5, dot: true },
  { f: 'product', label: 'Producto / SaaS', cnt: 1, dot: true },
  { f: 'clients', label: 'Clientes Web', cnt: 2, dot: true },
  { f: 'peers', label: 'Colegas & Mentoría', cnt: 3, dot: true },
]

export default function TestimonialsV2() {
  const [active, setActive] = useState<Filter>('all')

  const showAll = active === 'all'
  const visible = (cat: Filter) => showAll || cat === active
  const featVisible = showAll || active === 'healthcare'

  const byId = (id: string) => testimonials.find(t => t.id === id)!

  return (
    <div className="page-wrap">
      {/* HERO */}
      <section className="t2-hero">
        <div className="t2-eyebrow">Testimonios · 8 años de relaciones de trabajo</div>
        <div className="t2-pq-wrap">
          <span className="t2-pq-mark" aria-hidden="true">&ldquo;</span>
          <h1 className="t2-pq">
            La capacidad de absorber contexto y devolverlo en decisiones técnicas es lo que separa a un dev senior de un <em>Tech Lead.</em> Moisés hizo esa transición en mi equipo.
          </h1>
          <div className="t2-pq-cite">
            <b>Michael Terrones</b>
            <span className="dot" />
            <span>Lead · Indexum</span>
            <span className="dot" />
            <span>2018 — 2020</span>
          </div>
        </div>
        <div className="t2-hero-stats">
          <div className="t2-hero-stat"><div className="sv">11</div><div className="sl">Referencias</div></div>
          <div className="t2-hero-stat"><div className="sv">5</div><div className="sl">Sectores</div></div>
          <div className="t2-hero-stat"><div className="sv">4</div><div className="sl">Empresas</div></div>
          <div className="t2-hero-stat"><div className="sv">8 años</div><div className="sl">Track record</div></div>
        </div>
      </section>

      {/* FILTERS */}
      <div className="t2-filter-row">
        <div className="t2-filters">
          {FILTERS.map(({ f, label, cnt, dot }) => (
            <button
              key={f}
              className={`t2-filter${active === f ? ' active' : ''}`}
              onClick={() => setActive(f)}
            >
              {dot && <span className="fdot" />}
              {label}
              <span className="fcnt">{cnt}</span>
            </button>
          ))}
        </div>
        <div className="t2-filter-meta">▎ ordenado por <span>sector</span></div>
      </div>

      {/* FEATURED */}
      {featVisible && (
        <article className="t2-featured" aria-label="Testimonio destacado">
          <div className="t2-feat-l">
            <span className="t2-feat-tag">testimonio destacado · medirec</span>
            <blockquote className="t2-feat-quote">
              Moisés lideró la reducción de nuestra factura AWS de $912 a $318 mensuales. Pero lo que realmente importa es <em>cómo</em> lo hizo: cuatro fases auditadas, respaldos defensivos antes de tocar nada, y documentación que mi equipo puede mantener sin él.
            </blockquote>
            <div className="t2-feat-author">
              <div className="t2-feat-mono" aria-hidden="true">J</div>
              <cite className="t2-feat-id">
                <div className="nm">
                  Julio
                  <a
                    href="https://www.linkedin.com/in/julio-c-cajigas-jimenez-3818b3160/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn de Julio"
                    style={{
                      marginLeft: '6px',
                      fontFamily: 'var(--ff-mono)',
                      fontSize: '11px',
                      fontWeight: 600,
                      color: 'var(--green)',
                      textDecoration: 'none',
                      border: '1px solid var(--green)',
                      borderRadius: '3px',
                      padding: '1px 5px',
                      verticalAlign: 'middle',
                    }}
                  >
                    in
                  </a>
                </div>
                <div className="ro">Director · <b>MediRec, Inc.</b> · 2023 — 2024</div>
              </cite>
            </div>
          </div>
          <div className="t2-feat-r">
            <div className="t2-feat-r-bar">
              <span>▎ contexto del trabajo</span>
              <span>medirec · 5 años</span>
            </div>
            <div className="t2-feat-r-body">
              <div className="t2-feat-r-section">
                <span className="t2-feat-r-l">Rol durante la colaboración</span>
                <span className="t2-feat-r-v">Tech Lead · <span className="ac">AWS & FinOps</span></span>
              </div>
              <div className="t2-feat-r-section">
                <span className="t2-feat-r-l">Proyectos referenciables</span>
                <span className="t2-feat-r-v">Auditoría AWS · ePrescribing · Licencias NLM · PREIS</span>
              </div>
              <div className="t2-feat-r-metrics">
                <div className="t2-feat-r-m"><div className="rlbl">Factura AWS</div><div className="rnum">-65%</div></div>
                <div className="t2-feat-r-m"><div className="rlbl">Ahorro anual</div><div className="rnum">$7.1K</div></div>
                <div className="t2-feat-r-m"><div className="rlbl">Downtime</div><div className="rnum">0h</div></div>
                <div className="t2-feat-r-m"><div className="rlbl">Documentación</div><div className="rnum" style={{ fontSize: '14px' }}>Transferida</div></div>
              </div>
            </div>
            <div className="t2-feat-r-foot">
              <span>caso completo</span>
              <Link href="/casos-de-exito/detail/medirec-aws">Ver caso AWS →</Link>
            </div>
          </div>
        </article>
      )}

      {/* HEALTHCARE SECTION RULE */}
      {showAll && (
        <div className="t2-section-rule first">
          <span>Healthcare &amp; IoT · MediRec, T-Cuida</span>
          <span className="rcnt">4 más en este sector</span>
        </div>
      )}

      {/* GRID */}
      <div className="t2-grid">
        {visible('healthcare') && <Card t={byId('jessel')} />}
        {visible('healthcare') && <Card t={byId('karen')} />}
        {visible('healthcare') && <Card t={byId('luiggi')} />}
        {visible('healthcare') && <Card t={byId('ricardo')} />}

        {showAll && (
          <div className="t2-section-rule" style={{ gridColumn: '1 / -1' }}>
            <span>Producto &amp; SaaS · Indexum</span>
            <span className="rcnt">jefe directo · 2018 — 2020</span>
          </div>
        )}
        {visible('product') && <Card t={byId('michael')} />}

        {showAll && (
          <div className="t2-section-rule" style={{ gridColumn: '1 / -1' }}>
            <span>Clientes Web · Consultas profesionales</span>
            <span className="rcnt">2 clientes referidos</span>
          </div>
        )}
        {visible('clients') && <Card t={byId('gabriel')} />}
        {visible('clients') && <Card t={byId('jose')} />}

        {showAll && (
          <div className="t2-section-rule" style={{ gridColumn: '1 / -1' }}>
            <span>Colegas &amp; Mentoría · Relaciones largas</span>
            <span className="rcnt">3 voces que me conocen bien</span>
          </div>
        )}
        {visible('peers') && <Card t={byId('samuel')} />}
        {visible('peers') && <Card t={byId('romaira')} />}
        {visible('peers') && <Card t={byId('heymis')} />}
      </div>

      <div className="t2-topnote">▎ 11 / 11 referencias · jefes · colegas · subordinados · clientes</div>

      {/* CTA */}
      <div className="t2-end-cta">
        <div>
          <h3>¿Te suena alguna de estas <em>historias?</em></h3>
          <p>Si tu proyecto se parece a uno de los casos referenciados arriba, ya sé cómo abordarlo. Hablemos del tuyo.</p>
        </div>
        <div className="cta-actions">
          <Link href="/casos-de-exito">Ver casos de éxito</Link>
          <a
            href="mailto:moisesdavidaaron@gmail.com?subject=Quiero%20hablar%20sobre%20mi%20proyecto"
            className="primary"
          >
            Hablemos →
          </a>
        </div>
      </div>
    </div>
  )
}
