"use client"

import Link from "next/link"
import type { SideProject, GitHubCommit } from "@/lib/labs"

const STATUS_COLOR: Record<string, string> = {
  live:          'var(--green)',
  'en-progreso': 'var(--amber)',
  stable:        'var(--blue)',
  pausado:       'var(--text-3)',
  descontinuado: 'var(--text-3)',
}

const STATUS_LABEL: Record<string, string> = {
  live:          'Live',
  'en-progreso': 'En progreso',
  stable:        'Stable',
  pausado:       'Pausado',
  descontinuado: 'Archivado',
}

const COMMIT_COLOR: Record<string, string> = {
  feat:     'var(--green)',
  fix:      'var(--amber)',
  docs:     'var(--blue)',
  init:     'var(--violet)',
  release:  'var(--green)',
  refactor: 'var(--blue)',
  chore:    'var(--text-3)',
}

interface Props {
  project: SideProject
  commits: GitHubCommit[]
  repoInfo: {
    stars: number
    forks: number
    watchers: number
    openIssues: number
    language: string
    updatedAt: string
    description: string
  } | null
  statusConfig: Record<string, { label: string; color: string; emoji: string; bgColor: string; borderColor: string }>
  commitTypeConfig: Record<string, { label: string; color: string }>
}

export function LabDetailClient({ project, commits, repoInfo }: Props) {
  const color = STATUS_COLOR[project.estado] || 'var(--text-3)'
  const label = STATUS_LABEL[project.estado] || project.estado

  const commitsByDate = commits.reduce((acc, commit) => {
    if (!acc[commit.fecha]) acc[commit.fecha] = []
    acc[commit.fecha].push(commit)
    return acc
  }, {} as Record<string, GitHubCommit[]>)

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <>
      <div className="page-header">
        <div className="section-kicker">Labs</div>
        <h1 className="page-h1" style={{ borderLeft: `3px solid ${color}`, paddingLeft: '20px' }}>
          {project.nombre}
        </h1>
        <p className="page-sub">{project.tagline}</p>
        <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <span style={{
            fontFamily: 'var(--ff-mono)', fontSize: '10px', letterSpacing: '.12em',
            textTransform: 'uppercase', color, border: `1px solid ${color}`,
            padding: '3px 10px', borderRadius: '2px',
          }}>
            {label}
          </span>
          {repoInfo?.language && (
            <span style={{ fontFamily: 'var(--ff-mono)', fontSize: '11px', color: 'var(--text-3)' }}>
              ● {repoInfo.language}
            </span>
          )}
        </div>
      </div>

      <div className="page-wrap">

        {/* Back link */}
        <Link href="/labs" style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          fontFamily: 'var(--ff-mono)', fontSize: '11px', color: 'var(--text-3)',
          textDecoration: 'none', marginBottom: '40px', letterSpacing: '.06em',
          transition: 'color .15s',
        }}
        onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
        onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-3)')}>
          ← Volver a Labs
        </Link>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: '48px', alignItems: 'start' }}>

          {/* ── MAIN ── */}
          <div>
            {/* Description */}
            <p style={{ fontSize: '15px', color: 'var(--text-2)', lineHeight: 1.7, marginBottom: '28px' }}>
              {project.descripcion}
            </p>

            {/* Stack */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '32px' }}>
              {project.stack.map(t => <span key={t} className="tag">{t}</span>)}
            </div>

            {/* Progress bar */}
            {project.progreso !== undefined && (
              <div style={{ marginBottom: '40px' }}>
                <div style={{
                  display: 'flex', justifyContent: 'space-between',
                  fontFamily: 'var(--ff-mono)', fontSize: '10px',
                  color: 'var(--text-3)', letterSpacing: '.1em', marginBottom: '8px',
                }}>
                  <span>Progreso</span>
                  <span>{project.progreso}%</span>
                </div>
                <div style={{ height: '2px', background: 'var(--border)' }}>
                  <div style={{ height: '100%', width: `${project.progreso}%`, background: 'var(--green)' }} />
                </div>
              </div>
            )}

            {/* Changelog */}
            <div>
              <div style={{
                fontFamily: 'var(--ff-mono)', fontSize: '11px', color: 'var(--text-3)',
                letterSpacing: '.14em', textTransform: 'uppercase',
                marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px',
              }}>
                <span style={{ display: 'block', width: '24px', height: '1px', background: 'var(--border-2, var(--border))' }} />
                Changelog · últimos {commits.length} commits
              </div>

              {commits.length > 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  {Object.entries(commitsByDate).map(([date, dateCommits]) => (
                    <div key={date}>
                      <div style={{
                        fontFamily: 'var(--ff-mono)', fontSize: '10px', color: 'var(--text-3)',
                        letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '12px',
                      }}>
                        {formatDate(date)}
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '16px', borderLeft: '1px solid var(--border)' }}>
                        {dateCommits.map((commit, idx) => (
                          <div key={`${commit.commitHash}-${idx}`} style={{
                            display: 'flex', alignItems: 'baseline', gap: '12px',
                            padding: '12px 16px', background: 'var(--bg)',
                            border: '1px solid var(--border)',
                          }}>
                            <span style={{
                              fontFamily: 'var(--ff-mono)', fontSize: '10px',
                              color: COMMIT_COLOR[commit.tipo] || 'var(--text-3)',
                              letterSpacing: '.08em', flexShrink: 0,
                            }}>
                              {commit.tipo}
                            </span>
                            <span style={{ fontSize: '13px', color: 'var(--text)', flex: 1 }}>
                              {commit.titulo}
                            </span>
                            {commit.url ? (
                              <a href={commit.url} target="_blank" rel="noopener noreferrer"
                                style={{ fontFamily: 'var(--ff-mono)', fontSize: '10px', color: 'var(--green)', textDecoration: 'none', flexShrink: 0 }}>
                                {commit.commitHash}
                              </a>
                            ) : (
                              <span style={{ fontFamily: 'var(--ff-mono)', fontSize: '10px', color: 'var(--text-3)', flexShrink: 0 }}>
                                {commit.commitHash}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '12px', color: 'var(--text-3)', padding: '32px 0' }}>
                  No hay commits disponibles.
                  {project.githubRepo && (
                    <a href={`https://github.com/${project.githubRepo}/commits`} target="_blank" rel="noopener noreferrer"
                      style={{ color: 'var(--green)', textDecoration: 'none', marginLeft: '8px' }}>
                      Ver en GitHub →
                    </a>
                  )}
                </div>
              )}

              {commits.length > 0 && project.githubRepo && (
                <div style={{ marginTop: '20px' }}>
                  <a href={`https://github.com/${project.githubRepo}/commits`} target="_blank" rel="noopener noreferrer"
                    style={{ fontFamily: 'var(--ff-mono)', fontSize: '11px', color: 'var(--text-3)', textDecoration: 'none', letterSpacing: '.08em' }}>
                    Ver historial completo en GitHub →
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* ── SIDEBAR ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', position: 'sticky', top: '80px' }}>

            {/* Links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                  className="btn btn-primary" style={{ textAlign: 'center', fontSize: '13px' }}>
                  Ver demo →
                </a>
              )}
              {project.githubRepo && (
                <a href={`https://github.com/${project.githubRepo}`} target="_blank" rel="noopener noreferrer"
                  className="btn btn-secondary" style={{ textAlign: 'center', fontSize: '13px' }}>
                  GitHub →
                </a>
              )}
            </div>

            {/* GitHub stats */}
            {repoInfo && (
              <div style={{ border: '1px solid var(--border)', padding: '20px' }}>
                <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '9px', color: 'var(--text-3)', letterSpacing: '.14em', textTransform: 'uppercase', marginBottom: '16px' }}>
                  GitHub
                </div>
                {[
                  { label: 'Stars', val: repoInfo.stars },
                  { label: 'Forks', val: repoInfo.forks },
                  { label: 'Watchers', val: repoInfo.watchers },
                  { label: 'Issues', val: repoInfo.openIssues },
                ].map(({ label, val }) => (
                  <div key={label} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--border)', fontSize: '13px' }}>
                    <span style={{ color: 'var(--text-3)', fontFamily: 'var(--ff-mono)', fontSize: '11px' }}>{label}</span>
                    <span style={{ color: 'var(--text)', fontFamily: 'var(--ff-mono)', fontSize: '11px' }}>{val}</span>
                  </div>
                ))}
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', fontSize: '13px' }}>
                  <span style={{ color: 'var(--text-3)', fontFamily: 'var(--ff-mono)', fontSize: '11px' }}>Actualizado</span>
                  <span style={{ color: 'var(--text)', fontFamily: 'var(--ff-mono)', fontSize: '11px' }}>
                    {new Date(repoInfo.updatedAt).toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="cta-band" style={{ marginTop: '64px' }}>
          <div>
            <h3 className="cta-band-h">¿Te interesa este proyecto?<br /><em>Es open source.</em></h3>
            <p className="cta-band-sub">Puedes usarlo, hacer fork o contribuir directamente.</p>
          </div>
          <div className="cta-band-btns">
            {project.githubRepo && (
              <a className="btn btn-primary" href={`https://github.com/${project.githubRepo}`} target="_blank" rel="noopener noreferrer">
                Ver código →
              </a>
            )}
            <Link className="btn btn-secondary" href="/labs">Ver otros proyectos</Link>
          </div>
        </div>

      </div>
    </>
  )
}
