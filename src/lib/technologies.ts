export type TechnologyItem = {
  /** Iconify name. Bare slugs resolve to `devicon:<slug>`. */
  icon?: string
  label: string
}

export type TechnologyGroup = {
  description: string
  items: TechnologyItem[]
  title: string
}

export type TechnologyKey =
  | 'architecture'
  | 'backend'
  | 'databases'
  | 'design'
  | 'devops'
  | 'frontend'
  | 'practices'
  | 'styling'

export const resolveTechnologyIcon = (icon: string) =>
  icon.includes(':') ? icon : `devicon:${icon}`

export const technologies: Record<TechnologyKey, TechnologyGroup> = {
  architecture: {
    description:
      'Patterns for auth, payments, i18n, and performance at product scale.',
    items: [
      { icon: 'coolicons:component', label: 'Component-Based Architecture' },
      { icon: 'openapi', label: 'API Integration' },
      { icon: 'oauth', label: 'Authentication' },
      { icon: 'coolicons:credit-card', label: 'Payment Integration' },
      { icon: 'coolicons:layers', label: 'State Management' },
      { icon: 'coolicons:translate', label: 'Internationalisation' },
      { icon: 'coolicons:gauge', label: 'Performance Optimisation' },
    ],
    title: 'Architecture & Engineering',
  },
  backend: {
    description:
      'APIs and server logic that power booking, payments, CRM, and service workflows.',
    items: [
      { icon: 'nodejs', label: 'Node.js' },
      { icon: 'php', label: 'PHP' },
      { icon: 'laravel', label: 'Laravel' },
      { icon: 'djangorest', label: 'REST APIs' },
      { icon: 'drizzle', label: 'Drizzle ORM' },
      { icon: 'prisma', label: 'Prisma' },
    ],
    title: 'Backend',
  },
  databases: {
    description:
      'Persistent data layers for catalogues, users, and operational systems.',
    items: [
      { icon: 'postgresql', label: 'PostgreSQL' },
      { icon: 'mongodb', label: 'MongoDB' },
      { icon: 'firebase', label: 'Firebase' },
      { icon: 'coolicons:database', label: 'SQL' },
    ],
    title: 'Databases',
  },
  design: {
    description:
      'Prototypes and motion translated into production-ready interfaces.',
    items: [
      { icon: 'figma', label: 'Figma' },
      { icon: 'xd', label: 'Adobe XD' },
      { icon: 'photoshop', label: 'Photoshop' },
      { icon: 'illustrator', label: 'Illustrator' },
      { icon: 'aftereffects', label: 'Lottie' },
      { icon: 'svgo', label: 'SVG Animation' },
    ],
    title: 'Design & Motion',
  },
  devops: {
    description: 'Build, ship, and host with modern CI-friendly tooling.',
    items: [
      { icon: 'docker', label: 'Docker' },
      { icon: 'vercel', label: 'Vercel' },
      { icon: 'git', label: 'Git' },
      { icon: 'github', label: 'GitHub' },
      { icon: 'webpack', label: 'Webpack' },
      { icon: 'vite', label: 'Vite' },
    ],
    title: 'DevOps & Tooling',
  },
  frontend: {
    description:
      'Interfaces and app shells with React, Next.js, and TypeScript across multi-country products.',
    items: [
      { icon: 'react', label: 'React.js' },
      { icon: 'nextjs', label: 'Next.js' },
      { icon: 'vuejs', label: 'Vue.js' },
      { icon: 'typescript', label: 'TypeScript' },
      { icon: 'javascript', label: 'JavaScript (ES6+)' },
      { icon: 'reactnative', label: 'React Native' },
      { icon: 'jquery', label: 'jQuery' },
      { icon: 'coolicons:server', label: 'SSR' },
      { icon: 'coolicons:file-code', label: 'SSG' },
      { icon: 'coolicons:reload', label: 'ISR' },
      { icon: 'coolicons:globe', label: 'i18n' },
      { icon: 'zustand', label: 'Zustand' },
      { icon: 'redux', label: 'Redux' },
      { icon: 'coolicons:table', label: 'TanStack React Query' },
    ],
    title: 'Frontend',
  },
  practices: {
    description:
      'Delivery habits that keep quality high under real product deadlines.',
    items: [
      { icon: 'coolicons:kanban', label: 'Agile/Scrum' },
      { icon: 'jira', label: 'Jira' },
      { icon: 'coolicons:git-pull-request', label: 'Code Review' },
      { icon: 'coolicons:recycle', label: 'Legacy Modernisation' },
      { icon: 'coolicons:devices', label: 'Responsive Web Development' },
    ],
    title: 'Development Practices',
  },
  styling: {
    description:
      'Design systems and responsive UI with Tailwind and accessible components.',
    items: [
      { icon: 'tailwindcss', label: 'Tailwind CSS' },
      { icon: 'coolicons:component', label: 'Shadcn/UI' },
      { icon: 'sass', label: 'SCSS/SASS' },
      { icon: 'bootstrap', label: 'Bootstrap' },
      { icon: 'css3', label: 'CSS Animations' },
      { icon: 'coolicons:accessibility', label: 'React Aria' },
    ],
    title: 'UI & Styling',
  },
}

/** Display order for the Skills section. */
export const skillGroupKeys: TechnologyKey[] = [
  'frontend',
  'backend',
  'databases',
  'styling',
  'architecture',
  'devops',
  'design',
  'practices',
]

/** Tool groups shown as chips in the hero (excludes soft-skill categories). */
export const heroTechnologyKeys: TechnologyKey[] = [
  'frontend',
  'backend',
  'databases',
  'styling',
  'devops',
  'design',
]

export const skillGroups: TechnologyGroup[] = skillGroupKeys.map(
  (key) => technologies[key]
)

const technologyIcons = Object.values(technologies).flatMap((group) =>
  group.items.flatMap((item) =>
    item.icon ? [resolveTechnologyIcon(item.icon)] : []
  )
)

const iconsByCollection = (collection: string) => [
  ...new Set(
    technologyIcons.flatMap((icon) => {
      const [set, name] = icon.split(':')
      return set === collection && name ? [name] : []
    })
  ),
]

export const cooliconTechSlugs = iconsByCollection('coolicons')
export const deviconIconSlugs = iconsByCollection('devicon')
