"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { getSideProjects, type SideProject, type SideProjectStatus } from "@/lib/labs"

interface RepoInfo {
  stars: number
  forks: number
  language: string
}

interface CommitInfo {
  fecha: string
  titulo: string
  commitHash: string
  url: string
}

const STATUS_COLOR: Record<SideProjectStatus, string> = {
  live:           'var(--green)',
  'en-progreso':  'var(--amber)',
  stable:         'var(--blue)',
  pausado:        'var(--text-3)',
  descontinuado:  'var(--text-3)',
}

const STATUS_LABEL: Record<SideProjectStatus, string> = {
  live:           'Live',
  'en-progreso':  'En progreso',
  stable:         'Stable',
  pausado:        'Pausado',
  descontinuado:  'Archivado',
}

function ProjectCard({ project }: { project: SideProject }) {
  const [repoInfo, setRepoInfo]     = useState<RepoInfo | null>(null)
  const [lastCommit, setLastCommit] = useState<CommitInfo | null>(null)

  const color = STATUS_COLOR[project.estado]
  const label = STATUS_LABEL[project.estado]

  useEffect(() => {
    if (!project.githubRepo) return

    fetch(`https://api.github.com/repos/${project.githubRepo}`)
      .then(r => r.ok ? r.json() : null)
      .then(d => d && setRepoInfo({ stars: d.stargazers_count, forks: d.forks_count, language: d.language }))
      .catch(() => {})

    fetch(`https://api.github.com/repos/${project.githubRepo}/commits?per_page=1`)
      .then(r => r.ok ? r.json() : null)
      .then(d => d?.[0] && setLastCommit({
        fecha: new Date(d[0].commit.author.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'short' }),
        titulo: d[0].commit.message.split('\n')[0].substring(0, 60),
        commitHash: d[0].sha.substring(0, 7),
        url: d[0].html_url,
      }))
      .catch(() => {})
  }, [project.githubRepo])

  return (
    <div style={{
      background: 'var(--bg)',
      border: '1px solid var(--border)',
      borderLeft: `3px solid ${color}`,
      padding: '28px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
    }}>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px' }}>
        <div>
          <div style={{
            fontFamily: 'var(--ff-display)', fontSize: '18px', fontWeight: 500,
            letterSpacing: '-.02em', marginBottom: '4px',
          }}>
            {project.nombre}
          </div>
          <div style={{ fontSize: '13px', color: 'var(--text-2)' }}>{project.tagline}</div>
        </div>
        <span style={{
          fontFamily: 'var(--ff-mono)', fontSize: '10px', letterSpacing: '.12em',
          textTransform: 'uppercase', color, border: `1px solid ${color}`,
          padding: '3px 8px', borderRadius: '2px', whiteSpace: 'nowrap', flexShrink: 0,
        }}>
          {label}
        </span>
      </div>

      {/* Stack */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {project.stack.map(t => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>

      {/* GitHub stats */}
      {repoInfo && (
        <div style={{ display: 'flex', gap: '16px', fontFamily: 'var(--ff-mono)', fontSize: '11px', color: 'var(--text-3)' }}>
          {repoInfo.stars > 0   && <span>★ {repoInfo.stars}</span>}
          {repoInfo.forks > 0   && <span>⑂ {repoInfo.forks}</span>}
          {repoInfo.language    && <span style={{ color: 'var(--green)' }}>● {repoInfo.language}</span>}
        </div>
      )}

      {/* Last commit */}
      {lastCommit && (
        <div style={{
          background: 'var(--bg-2, #111316)',
          border: '1px solid var(--border)',
          padding: '10px 14px',
          fontFamily: 'var(--ff-mono)',
          fontSize: '11px',
        }}>
          <div style={{ color: 'var(--text-3)', marginBottom: '4px', letterSpacing: '.04em' }}>
            ↳ último commit · {lastCommit.fecha}
          </div>
          <div style={{ color: 'var(--text-2)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {lastCommit.titulo}
          </div>
          <a
            href={lastCommit.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--green)', textDecoration: 'none', marginTop: '4px', display: 'inline-block' }}
          >
            {lastCommit.commitHash}
          </a>
        </div>
      )}

      {/* Progress bar */}
      {project.progreso !== undefined && (
        <div>
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            fontFamily: 'var(--ff-mono)', fontSize: '10px',
            color: 'var(--text-3)', letterSpacing: '.08em', marginBottom: '8px',
          }}>
            <span>Progreso</span>
            <span>{project.progreso}%</span>
          </div>
          <div style={{ height: '2px', background: 'var(--border)', position: 'relative' }}>
            <div style={{
              position: 'absolute', inset: '0 auto 0 0',
              width: `${project.progreso}%`, background: 'var(--green)',
            }} />
          </div>
        </div>
      )}

      {/* Links */}
      <div style={{ display: 'flex', gap: '10px', marginTop: 'auto', paddingTop: '8px' }}>
        {project.githubRepo && (
          <a
            href={`https://github.com/${project.githubRepo}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ fontSize: '12px', padding: '7px 16px' }}
          >
            GitHub →
          </a>
        )}
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ fontSize: '12px', padding: '7px 16px' }}
          >
            Ver demo →
          </a>
        )}
      </div>
    </div>
  )
}

export default function LabsPage() {
  const projects = getSideProjects()

  return (
    <>
      <div className="page-header">
        <div className="section-kicker">Labs</div>
        <h1 className="page-h1">Lo que construyo cuando<br /><em>nadie me paga.</em></h1>
        <p className="page-sub">
          Side projects, experimentos y herramientas que construyo por curiosidad, para aprender, o para resolver mis propios problemas.
        </p>
      </div>

      <div className="page-wrap">

        {/* Status legend */}
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '32px', paddingBottom: '24px', borderBottom: '1px solid var(--border)' }}>
          {(Object.entries(STATUS_COLOR) as [SideProjectStatus, string][]).map(([key, color]) => (
            <div key={key} style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              fontFamily: 'var(--ff-mono)', fontSize: '10px',
              color: 'var(--text-3)', letterSpacing: '.12em', textTransform: 'uppercase',
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: color, display: 'inline-block' }} />
              {STATUS_LABEL[key]}
            </div>
          ))}
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
          gap: '16px',
          marginBottom: '64px',
        }}>
          {projects.map(p => <ProjectCard key={p.id} project={p} />)}

          {projects.length === 0 && (
            <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '13px', color: 'var(--text-3)', padding: '48px 0' }}>
              Próximamente más proyectos...
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="cta-band">
          <div>
            <h3 className="cta-band-h">¿Curioso por el código?<br /><em>Todo es open source.</em></h3>
            <p className="cta-band-sub">Puedes ver el código, contribuir o simplemente curiosear cómo están construidos estos proyectos.</p>
          </div>
          <div className="cta-band-btns">
            <a className="btn btn-primary" href="https://github.com/modavidc" target="_blank" rel="noopener noreferrer">
              Ver GitHub →
            </a>
            <Link className="btn btn-secondary" href="/casos-de-exito">
              Ver trabajo profesional
            </Link>
          </div>
        </div>

      </div>
    </>
  )
}
