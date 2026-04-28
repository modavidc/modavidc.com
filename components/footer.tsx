"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      background: 'var(--bg)',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '48px 48px 32px',
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: '48px',
        alignItems: 'start',
      }}>

        {/* Brand */}
        <div>
          <Link href="/" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '8px' }}>
            <div style={{
              fontFamily: 'var(--ff-display)',
              fontSize: '20px',
              fontWeight: 400,
              letterSpacing: '-.025em',
              color: 'var(--text)',
            }}>
              <span style={{ color: 'var(--green)' }}>mo</span>davidc
            </div>
          </Link>
          <div style={{
            fontFamily: 'var(--ff-mono)',
            fontSize: '10px',
            color: 'var(--text-3)',
            letterSpacing: '.12em',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}>
            Honest work. Efficient architectures.
          </div>
          <div style={{
            fontFamily: 'var(--ff-mono)',
            fontSize: '10px',
            color: 'var(--text-3)',
            letterSpacing: '.08em',
            textTransform: 'uppercase',
          }}>
            Solutions Architect · FinOps &amp; Cloud
          </div>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '48px', alignItems: 'start' }}>
          <div>
            <div style={{
              fontFamily: 'var(--ff-mono)',
              fontSize: '9px',
              color: 'var(--text-3)',
              letterSpacing: '.14em',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}>
              Sitio
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { href: '/experiencia', label: 'Experiencia' },
                { href: '/casos-de-exito', label: 'Casos de Éxito' },
                { href: '/metodologia', label: 'Metodología' },
                { href: '/testimonials', label: 'Testimonios' },
              ].map(({ href, label }) => (
                <Link key={href} href={href} style={{
                  fontSize: '13px',
                  color: 'var(--text-3)',
                  textDecoration: 'none',
                  transition: 'color .15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-3)')}>
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div style={{
              fontFamily: 'var(--ff-mono)',
              fontSize: '9px',
              color: 'var(--text-3)',
              letterSpacing: '.14em',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}>
              Contacto
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { href: 'mailto:hola@modavidc.com', label: 'Email' },
                { href: 'https://linkedin.com/in/modavidc', label: 'LinkedIn' },
                { href: 'https://github.com/modavidc', label: 'GitHub' },
              ].map(({ href, label }) => (
                <a key={href} href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  style={{
                    fontSize: '13px',
                    color: 'var(--text-3)',
                    textDecoration: 'none',
                    transition: 'color .15s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-3)')}>
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '16px 48px',
        borderTop: '1px solid var(--border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <div style={{
          fontFamily: 'var(--ff-mono)',
          fontSize: '10px',
          color: 'var(--text-3)',
          letterSpacing: '.06em',
        }}>
          © {new Date().getFullYear()} Moisés Cedeño
        </div>
        <div style={{
          fontFamily: 'var(--ff-mono)',
          fontSize: '10px',
          color: 'var(--text-3)',
          letterSpacing: '.06em',
        }}>
          Lima, Perú
        </div>
      </div>
    </footer>
  )
}
