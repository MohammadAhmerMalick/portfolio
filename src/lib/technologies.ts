type TechnologyItem = {
  icon?: string
  label: string
}

interface TechnologyGroup {
  items: TechnologyItem[]
  title: string
}

export const technologies: Record<string, TechnologyGroup> = {
  backend: {
    items: [
      { icon: "nodejs", label: "Node.js" },
      { icon: "php", label: "PHP" },
      { icon: "laravel", label: "Laravel" },
      { label: "REST APIs" },
      { icon: "drizzle", label: "Drizzle ORM" },
      { icon: "prisma", label: "Prisma" },
    ],
    title: "Backend",
  },
  databases: {
    items: [
      { icon: "postgresql", label: "PostgreSQL" },
      { icon: "mongodb", label: "MongoDB" },
      { icon: "firebase", label: "Firebase" },
    ],
    title: "Databases",
  },
  design: {
    items: [
      { icon: "figma", label: "Figma" },
      { icon: "xd", label: "Adobe XD" },
      { icon: "photoshop", label: "Photoshop" },
      { icon: "illustrator", label: "Illustrator" },
      { label: "Lottie" },
      { icon: "svgo", label: "SVG Animation" },
    ],
    title: "Design",
  },
  devops: {
    items: [
      { icon: "docker", label: "Docker" },
      { icon: "vercel", label: "Vercel" },
      { icon: "git", label: "Git" },
      { icon: "github", label: "GitHub" },
      { icon: "webpack", label: "Webpack" },
      { icon: "vite", label: "Vite" },
    ],
    title: "DevOps",
  },
  frontend: {
    items: [
      { icon: "react", label: "React.js" },
      { icon: "nextjs", label: "Next.js" },
      { icon: "vuejs", label: "Vue.js" },
      { icon: "typescript", label: "TypeScript" },
      { icon: "javascript", label: "JavaScript (ES6+)" },
      { icon: "reactnative", label: "React Native" },
      { icon: "jquery", label: "jQuery" },
      { label: "SSR" },
      { label: "i18n" },
      { icon: "zustand", label: "Zustand" },
      { icon: "redux", label: "Redux" },
    ],
    title: "Frontend",
  },
  styling: {
    items: [
      { icon: "tailwindcss", label: "Tailwind CSS" },
      { label: "Shadcn/UI" },
      { icon: "sass", label: "SCSS/SASS" },
      { icon: "bootstrap", label: "Bootstrap" },
      { icon: "css3", label: "CSS Animations" },
      { label: "React Aria" },
    ],
    title: "Styling",
  },
  workflow: {
    items: [
      { label: "Agile/Scrum" },
      { icon: "jira", label: "Jira" },
      { icon: "wordpress", label: "WordPress" },
      { icon: "cursor", label: "Cursor" },
      { icon: "claudecode", label: "Claude Code" },
    ],
    title: "Workflow",
  },
}

export const deviconIconSlugs = [
  ...new Set(
    Object.values(technologies).flatMap((group) =>
      group.items.flatMap((item) => (item.icon ? [item.icon] : [])),
    ),
  ),
]
