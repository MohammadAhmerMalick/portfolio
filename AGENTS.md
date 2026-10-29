# Portfolio

Personal site for Mohammad Ahmer Malick. Single-page portfolio for hiring managers and clients. Use only the facts in this file. Leave unknown values as the placeholders below. Do not invent statistics, clients, testimonials, certifications, or a third project. Do not add a personal photo.

## Stack

- Astro 7, Tailwind CSS 4, Biome
- Identity and default SEO copy: `src/lib/site.ts`
- Document head (title, description, canonical, Open Graph, Twitter, JSON-LD): `src/components/layout/Layout.astro`
- Public origin: `https://www.mohammadahmermalick.com` (no trailing slash in `site` config). Homepage: `https://www.mohammadahmermalick.com/`
- `astro.config.mjs` sets Astro `site` from `site.url`

## Identity

- Name: Mohammad Ahmer Malick
- Role: Full-stack Software Engineer
- Location: United Arab Emirates
- Availability: Immediately available
- Experience: 7+ years
- Email: mohammadahmermalick@gmail.com
- Phone: +971 545149849
- LinkedIn: https://www.linkedin.com/in/mohammadahmermalick
- GitHub: https://github.com/MohammadAhmerMalick
- Photo: none. Do not use a portrait or a photo placeholder.

Hero headline: Full-stack Software Engineer.

Hero summary: I build performant, scalable web applications with React, Next.js, and Node.js. Based in the United Arab Emirates and immediately available.

## Pages

One page, in this order: Navigation, Hero, Stats, Featured projects, Experience, Skills, Education, Contact and footer. Do not add a testimonials section.

Navigation: initials or name, links to Work, Experience, Skills, and Contact, plus a "Let's talk" button.

Hero: availability badge, headline, two-line summary, "View my work" and "Download CV" buttons, and two floating stat cards. No personal photo.

Stats that are real: 7+ years, markets UAE / Oman / UK / Qatar, Core Web Vitals ~91%, SEO score 100%. The fourth stat stays [PROJECTS SHIPPED] until a real number is provided. Do not invent a project count or a user count.

## Projects

Only these two. Project previews stay [PROJECT SCREENSHOT] until real images are provided.

- AutoRent (https://autorent-me.com): multi-country car rental platform built from scratch with Next.js 15, React 19, TypeScript, and Tailwind. Lighthouse and Core Web Vitals improved from ~40% to ~91%, and the SEO score reached 100%.
- ServiceMyCar.com (https://servicemycar.com): enterprise car servicing platform across the UAE, Oman, the UK, and Qatar, with a real-time service tracking dashboard, document management, and CRM workflows.

## Experience

- Full Stack Developer, Service My Car, Dubai, UAE, Jan 2023 – Jul 2026. Built AutoRent from scratch and raised Lighthouse and Core Web Vitals from ~40% to ~91%, with an SEO score of 100%.
- Full Stack Developer, Denovers, Remote International, Dec 2021 – Dec 2022. Turned Figma prototypes into production-ready Next.js and Nuxt applications for international clients.
- Front End Developer, Phoenix Technologies, Pakistan, May 2021 – Nov 2021. Rebuilt legacy projects in React and Vue.js with cross-browser support across Chrome, Safari, Firefox, and Edge.
- Web Developer, Bizz World Communications, Pakistan, Aug 2019 – Jan 2021. Built an email-marketing automation dashboard that removed 40% of the manual workflow.

## Skills

- Frontend: React.js, Next.js, Vue.js, TypeScript, JavaScript (ES6+), React Native, jQuery, SSR, i18n, Zustand, Redux
- Styling and design: Tailwind CSS, Shadcn/UI, SCSS/SASS, Bootstrap, CSS Animations, React Aria, Figma, Adobe XD, Photoshop, Illustrator, Lottie, SVG Animation
- Backend and data: Node.js, PHP, Laravel, REST APIs, Drizzle ORM, Prisma, PostgreSQL, MongoDB, Firebase
- DevOps and workflow: Docker, Vercel, Git, GitHub, Webpack, Vite, Agile/Scrum, Jira, WordPress, Cursor, Claude Code

## Education

Bachelor of Science in Computer Science, 2017 – 2020, University of Karachi (UBIT – Umaer Basha Institute of Information Technology), CGPA 3.22. No certifications.

## Design

- Light theme: page background #F5F6F8, white cards, near-black text, one accent color
- Minimal and editorial. Rounded cards (20–28px), subtle borders, soft shadows. No gradient backgrounds, emojis, or stock illustrations
- Headings: a bold geometric sans (Manrope or Space Grotesk). Body: a neutral sans (Inter)
- Contrast at least 4.5:1, visible focus states, buttons at least 44px
- Content width 1200px, 32px side padding, about 96px between sections
- Desktop around 1440px. Stack on tablet and phone with no horizontal scroll

## Placeholders still open

[PROJECT SCREENSHOT], [PROJECTS SHIPPED]

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
