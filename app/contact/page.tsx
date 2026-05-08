"use client"

export default function ContactPage() {
  const WA = "https://wa.me/51938804597?text=Hola%20Moisés%2C%20te%20contacto%20desde%20tu%20portfolio."

  return (
    <>
      <div className="page-header">
        <div className="section-kicker">Contacto</div>
        <h1 className="page-h1">¿Tienes un problema<br /><em>técnico que resolver?</em></h1>
        <p className="page-sub">
          Si tu plataforma AWS está fuera de control, tu infraestructura creció sin orden o necesitas criterio técnico real en tu equipo, cuéntamelo. Sin formularios genéricos.
        </p>
      </div>

      <div className="page-wrap">
        <div className="contact-layout">

          {/* ── CANALES ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>

            {/* WhatsApp — primario */}
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: '20px',
                padding: '28px', textDecoration: 'none',
                background: 'var(--bg)', border: '1px solid var(--border)',
                borderLeft: '3px solid var(--green)',
                transition: 'border-color .15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--green)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
            >
              <div style={{
                width: '44px', height: '44px', borderRadius: '50%',
                background: '#25D366', display: 'flex', alignItems: 'center',
                justifyContent: 'center', flexShrink: 0,
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.526 5.845L.057 23.885a.5.5 0 0 0 .638.606l6.208-1.633A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.9 9.9 0 0 1-5.031-1.369l-.361-.214-3.735.982.998-3.648-.235-.374A9.86 9.86 0 0 1 2.1 12C2.1 6.533 6.533 2.1 12 2.1S21.9 6.533 21.9 12 17.467 21.9 12 21.9z"/>
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontFamily: 'var(--ff-display)', fontSize: '17px', fontWeight: 500,
                  color: 'var(--text)', marginBottom: '4px',
                }}>
                  WhatsApp
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-2)' }}>
                  La forma más rápida — respondo en minutos
                </div>
              </div>
              <div style={{
                fontFamily: 'var(--ff-mono)', fontSize: '11px',
                color: 'var(--green)', letterSpacing: '.08em',
              }}>
                Abrir →
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:moisesdavidaaron@gmail.com"
              style={{
                display: 'flex', alignItems: 'center', gap: '20px',
                padding: '24px 28px', textDecoration: 'none',
                background: 'var(--bg)', border: '1px solid var(--border)',
                transition: 'border-color .15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--text-2)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
            >
              <div style={{
                width: '44px', height: '44px', borderRadius: '50%',
                background: 'var(--border)', display: 'flex', alignItems: 'center',
                justifyContent: 'center', flexShrink: 0,
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--text-2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontFamily: 'var(--ff-display)', fontSize: '17px', fontWeight: 500,
                  color: 'var(--text)', marginBottom: '4px',
                }}>
                  Email
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-3)', fontFamily: 'var(--ff-mono)' }}>
                  moisesdavidaaron@gmail.com
                </div>
              </div>
              <div style={{
                fontFamily: 'var(--ff-mono)', fontSize: '11px',
                color: 'var(--text-3)', letterSpacing: '.08em',
              }}>
                Escribir →
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/modavidc"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: '20px',
                padding: '24px 28px', textDecoration: 'none',
                background: 'var(--bg)', border: '1px solid var(--border)',
                transition: 'border-color .15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--text-2)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
            >
              <div style={{
                width: '44px', height: '44px', borderRadius: '50%',
                background: '#0A66C2', display: 'flex', alignItems: 'center',
                justifyContent: 'center', flexShrink: 0,
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontFamily: 'var(--ff-display)', fontSize: '17px', fontWeight: 500,
                  color: 'var(--text)', marginBottom: '4px',
                }}>
                  LinkedIn
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-2)' }}>
                  Para propuestas formales o networking
                </div>
              </div>
              <div style={{
                fontFamily: 'var(--ff-mono)', fontSize: '11px',
                color: 'var(--text-3)', letterSpacing: '.08em',
              }}>
                Ver perfil →
              </div>
            </a>

          </div>

          {/* ── ASIDE ── */}
          <div className="contact-aside">
            <div className="contact-aside-section">
              <div className="contact-aside-label">Disponibilidad</div>
              <div className="contact-info-item">
                <span className="contact-info-key">Estado</span>
                <span className="contact-info-val" style={{ color: 'var(--green)' }}>Proyectos seleccionados</span>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-key">Respuesta</span>
                <span className="contact-info-val">Menos de 24h</span>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-key">Zona horaria</span>
                <span className="contact-info-val">Lima, Perú — UTC-5</span>
              </div>
            </div>

            <div className="contact-aside-section">
              <div className="contact-aside-label">Trabajo bien en proyectos de</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '8px' }}>
                <span className="cat-badge cat-green"><span className="dot" />FinOps</span>
                <span className="cat-badge cat-violet"><span className="dot" />Healthcare</span>
                <span className="cat-badge cat-blue"><span className="dot" />SaaS</span>
                <span className="cat-badge cat-amber"><span className="dot" />IoT</span>
              </div>
            </div>

            <div className="contact-aside-section">
              <div className="contact-aside-label">Preferencia de contacto</div>
              <div style={{ fontSize: '13px', color: 'var(--text-2)', lineHeight: 1.6, marginTop: '8px' }}>
                WhatsApp para conversaciones rápidas. Email para propuestas con contexto. LinkedIn si llegaste por ahí.
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
