import { site } from '@/lib/site'

export const cvPath = '/mohammad-ahmer-malick-cv.pdf'

export const me = {
  firstName: 'Mohammad',
  getFullName: () => `${me.firstName} ${me.middleName} ${me.lastName}`,
  lastName: 'Malick',
  middleName: 'Ahmer',
  title: 'Software Engineer',
} as const

export const hero = {
  availability: 'Immediately available',
  greeting: "Hello 👋, I'm",
  headline: 'Full-stack Software Engineer',
  location: 'Based in the UAE',
  locationDetail: 'Immediately available',
  punchline: 'I build fast, user-focused and scalable applications.',
  summary:
    'Full-stack Software Engineer with 7+ years of experience building high-performance web apps using React, Next.js, TypeScript and modern web technologies.',
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
      'Built AutoRent (autorent-me.com) from scratch, a multi-country car rental web application using Next.js 15, React 19, TypeScript, and Tailwind, with multi-step booking, OTP auth, coupons/offers, Google Maps, CMS content, and region-specific market logic.',
      'Architected a multi-step booking flow using Server Actions, TanStack React Query, and Zustand, managing complex server/client state across search, vehicle selection, add-ons, checkout, and payment stages.',
      'Integrated multi-gateway payment systems with secure redirect and callback flows, enabling market-specific provider support across GCC and international markets, plus locale-aware routing.',
      'Engineered locale-aware routing and i18n configurations for seamless multi-country rollouts.',
      'Architected and built an interactive real-time dashboard for service tracking, document uploads, and in-platform customer support chat.',
      'Automated CRM workflows, reducing manual effort and improving service lifecycle visibility across multiple departments.',
      'Architected a modular, component-based automobile e-commerce platform featuring reusable UI components and API-driven catalogue flows, improving development velocity and maintainability.',
      'Led cross-functional code review initiatives, enforcing rigorous security standards and coding best practices to minimise software vulnerabilities.',
      'Improved Lighthouse and Core Web Vitals performance from ~40% to ~91%, and SEO score to 100%.',
    ],
    company: 'Service My Car',
    dates: 'Jan 2023 – Jul 2026',
    location: 'Dubai, UAE',
    mark: 'SM',
    role: 'Full Stack Developer',
  },
  {
    bullets: [
      'Designed and developed SaaS applications using Next.js, Nuxt, and Tailwind CSS for international clients.',
      'Transformed Figma prototypes into production-ready Next.js and Nuxt applications, collaborating directly with product and design leads.',
      'Managed multiple concurrent projects under tight deadlines while maintaining code quality and design fidelity.',
      'Debugged and refactored legacy applications, migrating them to modern frameworks and improving maintainability.',
    ],
    company: 'Denovers',
    dates: 'Dec 2021 – Dec 2022',
    location: 'Remote International',
    mark: 'D',
    role: 'Full Stack Developer',
  },
  {
    bullets: [
      'Re-engineered existing projects using modern libraries (React, Vue.js) to replace legacy implementations and ensure cross-browser compatibility across Chrome, Safari, Firefox, and Edge.',
      'Converted Figma and PSD designs into fully functioning, responsive React and vanilla JavaScript applications.',
      'Integrated third-party APIs into existing React and JavaScript applications to extend application functionality.',
      'Created custom SVG and Lottie micro-interactions in Adobe After Effects to enhance user engagement and perceived performance in client applications.',
    ],
    company: 'Phoenix Technologies',
    dates: 'May 2021 – Nov 2021',
    location: 'Pakistan',
    mark: 'P',
    role: 'Front End Developer',
  },
  {
    bullets: [
      'Developed an automation dashboard for email marketing campaigns, eliminating manual workflows by 40% and delivering consistent, predictable campaign outcomes.',
      'Redesigned and maintained multiple web projects while managing deployment, hosting and email infrastructure across the application lifecycle.',
      'Managed and updated the company’s WordPress and WooCommerce websites, configuring key plugins for additional functionality and ensuring mobile-first, responsive designs across all devices.',
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
