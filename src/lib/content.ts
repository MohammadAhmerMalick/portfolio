import { site } from '@/lib/site'

export const cvPath = '/mohammad-ahmer-malick-cv.pdf'

export const hero = {
  availability: 'Immediately available',
  headline: 'Full-stack Software Engineer',
  location: 'Based in the UAE',
  locationDetail: 'Immediately available',
  punchline: 'I build fast, user-focused and scalable web applications.',
  summary:
    'Frontend Developer with 7+ years of experience building high-performance web apps using React, Next.js, TypeScript and modern web technologies.',
  yearsLabel: 'Years of experience',
  yearsValue: '7+',
} as const

export { deviconIconSlugs, technologies } from '@/lib/technologies'

export const services = [
  {
    description:
      'Responsive, accessible interfaces with React, Next.js, Vue.js, and TypeScript.',
    icon: 'code',
    title: 'Frontend Development',
  },
  {
    description:
      'Products built from scratch, including multi-country booking and service platforms.',
    icon: 'cube',
    title: 'Product Engineering',
  },
  {
    description:
      'Lighthouse and Core Web Vitals raised from ~40% to ~91%, with an SEO score of 100%.',
    icon: 'chart',
    title: 'Performance Optimization',
  },
  {
    description:
      'Figma prototypes turned into production Next.js and Nuxt applications for international clients.',
    icon: 'users',
    title: 'Team Collaboration',
  },
] as const

export const stats = [
  { label: 'Years of experience', value: '7+' },
  {
    label: 'Markets: UAE, Oman, UK, Qatar',
    value: '4',
  },
  { label: 'Core Web Vitals', value: '~91%' },
  { label: 'Projects shipped', value: '[PROJECTS SHIPPED]' },
] as const

export const projects = [
  {
    description:
      'Multi-country car rental platform built from scratch with Next.js 15, React 19, TypeScript, and Tailwind. Lighthouse and Core Web Vitals improved from ~40% to ~91%, and the SEO score reached 100%.',
    href: 'https://autorent-me.com',
    name: 'AutoRent',
    stack: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS'],
    tone: 'dark',
  },
  {
    description:
      'Enterprise car servicing platform across the UAE, Oman, the UK, and Qatar, with a real-time service tracking dashboard, document management, and CRM workflows.',
    href: 'https://servicemycar.com',
    name: 'ServiceMyCar.com',
    stack: ['Next.js', 'React', 'Laravel', 'SQL'],
    tone: 'light',
  },
] as const

export const experience = [
  {
    bullets: [
      'Built AutoRent from scratch and raised Lighthouse and Core Web Vitals from ~40% to ~91%, with an SEO score of 100%.',
    ],
    company: 'Service My Car',
    dates: 'Jan 2023 – Jul 2026',
    location: 'Dubai, UAE',
    mark: 'SM',
    role: 'Full Stack Developer',
  },
  {
    bullets: [
      'Turned Figma prototypes into production-ready Next.js and Nuxt applications for international clients.',
    ],
    company: 'Denovers',
    dates: 'Dec 2021 – Dec 2022',
    location: 'Remote International',
    mark: 'D',
    role: 'Full Stack Developer',
  },
  {
    bullets: [
      'Rebuilt legacy projects in React and Vue.js with cross-browser support across Chrome, Safari, Firefox, and Edge.',
    ],
    company: 'Phoenix Technologies',
    dates: 'May 2021 – Nov 2021',
    location: 'Pakistan',
    mark: 'P',
    role: 'Front End Developer',
  },
  {
    bullets: [
      'Built an email-marketing automation dashboard that removed 40% of the manual workflow.',
    ],
    company: 'Bizz World Communications',
    dates: 'Aug 2019 – Jan 2021',
    location: 'Pakistan',
    mark: 'B',
    role: 'Web Developer',
  },
] as const

export const skillGroups = [
  {
    items: [
      'React.js',
      'Next.js',
      'Vue.js',
      'TypeScript',
      'JavaScript (ES6+)',
      'React Native',
      'jQuery',
      'SSR',
      'i18n',
      'Zustand',
      'Redux',
    ],
    title: 'Frontend',
  },
  {
    items: [
      'Tailwind CSS',
      'Shadcn/UI',
      'SCSS/SASS',
      'Bootstrap',
      'CSS Animations',
      'React Aria',
      'Figma',
      'Adobe XD',
      'Photoshop',
      'Illustrator',
      'Lottie',
      'SVG Animation',
    ],
    title: 'Styling and design',
  },
  {
    items: [
      'Node.js',
      'PHP',
      'Laravel',
      'REST APIs',
      'Drizzle ORM',
      'Prisma',
      'PostgreSQL',
      'MongoDB',
      'Firebase',
    ],
    title: 'Backend and data',
  },
  {
    items: [
      'Docker',
      'Vercel',
      'Git',
      'GitHub',
      'Webpack',
      'Vite',
      'Agile/Scrum',
      'Jira',
      'WordPress',
      'Cursor',
      'Claude Code',
    ],
    title: 'DevOps and workflow',
  },
] as const

export const education = {
  cgpa: 'CGPA 3.22',
  dates: '2017 – 2020',
  degree: 'Bachelor of Science in Computer Science',
  school: 'University of Karachi',
  schoolDetail: 'UBIT – Umaer Basha Institute of Information Technology',
} as const

export const contact = {
  email: site.email,
  github: site.github,
  linkedin: 'https://www.linkedin.com/in/mohammadahmermalick',
  phoneDisplay: '+971 545149849',
  phoneHref: `tel:${site.telephone}`,
} as const
