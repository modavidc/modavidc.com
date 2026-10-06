import sideProjectsJson from "@/data/side-projects.json"

// ============================================
// SIDE PROJECTS (Proyectos personales)
// ============================================
export type SideProjectStatus = 'live' | 'en-progreso' | 'stable' | 'pausado' | 'descontinuado'

export interface GitHubCommit {
  fecha: string
  tipo: 'feat' | 'fix' | 'docs' | 'init' | 'release' | 'refactor' | 'chore'
  titulo: string
  descripcion?: string
  commitHash: string
  url?: string
}

export interface SideProject {
  id: string
  slug: string
  nombre: string
  tagline: string
  descripcion: string
  estado: SideProjectStatus
  stack: string[]
  githubRepo?: string
  demoUrl?: string
  progreso?: number
  destacado: boolean
}

export const statusConfig: Record<SideProjectStatus, { label: string; color: string; emoji: string; bgColor: string; borderColor: string }> = {
  'live': {
    label: 'Live',
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500',
    emoji: '🟢',
  },
  'en-progreso': {
    label: 'En progreso',
    color: 'text-amber-500',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500',
    emoji: '🟡',
  },
  'stable': {
    label: 'Stable',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500',
    emoji: '🔵',
  },
  'pausado': {
    label: 'Pausado',
    color: 'text-gray-500',
    bgColor: 'bg-gray-500/10',
    borderColor: 'border-gray-500',
    emoji: '⚪',
  },
  'descontinuado': {
    label: 'Archivado',
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500',
    emoji: '🔴',
  },
}

export const commitTypeConfig: Record<GitHubCommit['tipo'], { label: string; color: string }> = {
  'feat': { label: 'feat', color: 'text-emerald-500' },
  'fix': { label: 'fix', color: 'text-amber-500' },
  'docs': { label: 'docs', color: 'text-blue-500' },
  'init': { label: 'init', color: 'text-violet-500' },
  'release': { label: 'release', color: 'text-fuchsia-500' },
  'refactor': { label: 'refactor', color: 'text-cyan-500' },
  'chore': { label: 'chore', color: 'text-gray-500' },
}

// Cargar side projects desde JSON
export const sideProjects: SideProject[] = sideProjectsJson as SideProject[]

export function getSideProjects(): SideProject[] {
  return sideProjects
}

export function getFeaturedSideProjects(): SideProject[] {
  return sideProjects.filter(p => p.destacado)
}

export function getSideProjectBySlug(slug: string): SideProject | undefined {
  return sideProjects.find(p => p.slug === slug)
}

// ============================================
// GITHUB API - Fetch commits automáticos
// ============================================
export async function fetchGitHubCommits(repo: string, limit = 10): Promise<GitHubCommit[]> {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${repo}/commits?per_page=${limit}`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        },
        next: { revalidate: 3600 }, // Cache 1 hora
      }
    )

    if (!response.ok) {
      console.error(`GitHub API error: ${response.status}`)
      return []
    }

    const commits = await response.json()

    return commits.map((commit: any) => {
      const message = commit.commit.message.split('\n')[0]

      // Detectar tipo de commit por prefijo convencional
      let tipo: GitHubCommit['tipo'] = 'feat'
      if (message.match(/^feat/i)) tipo = 'feat'
      else if (message.match(/^fix/i)) tipo = 'fix'
      else if (message.match(/^docs/i)) tipo = 'docs'
      else if (message.match(/^refactor/i)) tipo = 'refactor'
      else if (message.match(/^chore/i)) tipo = 'chore'
      else if (message.match(/^(init|initial)/i)) tipo = 'init'
      else if (message.match(/^(release|v\d)/i)) tipo = 'release'

      // Limpiar el mensaje
      const titulo = message
        .replace(/^(feat|fix|docs|refactor|chore|init|release)(\(.+\))?:\s*/i, '')
        .trim()

      return {
        fecha: commit.commit.author.date.split('T')[0],
        tipo,
        titulo: titulo || message,
        commitHash: commit.sha.substring(0, 7),
        url: commit.html_url,
      }
    })
  } catch (error) {
    console.error('Error fetching GitHub commits:', error)
    return []
  }
}

// Fetch repo info (stars, forks, etc)
export async function fetchGitHubRepoInfo(repo: string) {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${repo}`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        },
        next: { revalidate: 3600 },
      }
    )

    if (!response.ok) return null

    const data = await response.json()

    return {
      stars: data.stargazers_count,
      forks: data.forks_count,
      watchers: data.watchers_count,
      openIssues: data.open_issues_count,
      language: data.language,
      updatedAt: data.updated_at,
      description: data.description,
    }
  } catch (error) {
    console.error('Error fetching GitHub repo info:', error)
    return null
  }
}
