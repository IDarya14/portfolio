export const profile = {
  name: 'Daria Kurylenko',
  role: 'Lead Frontend Developer',
  location: 'Kyiv, Ukraine',
  email: 'idarya1401@gmail.com',
  phone: '+380 93 339 7000',
  phoneHref: 'tel:+380933397000',
  availability: 'Remote',
  linkedin: 'https://www.linkedin.com/in/daria-kurylenko/',
  telegram: 'https://t.me/Daria_Kurylenko',
  summary:
    'Lead frontend developer with 5+ years in React and TypeScript. I built the frontend of a multi-tenant fintech platform used by 600 merchants and 19 lenders, with 4,000+ applicants completing financing. I own the client application, the shared data layer, and the release path across 4 environments.',
  focus: [
    'React',
    'TypeScript',
    'Next.js',
    'Redux Toolkit',
    'RTK Query',
    'TanStack Query',
  ],
  about: [
    'I lead frontend on a multi-tenant fintech platform: the merchant portal and the client application, from an empty repository through production.',
    'A lender-agnostic application covers 19 lenders. Adding a new one dropped from a month to a week. The financing flow, from draft and offers through e-sign, down payment, and funding, has 4,000+ completed applications.',
    'I also led frontend for 2 frontend developers and reviewed UI written by 4 full-stack developers.',
  ],
  education: {
    school:
      'Hryhorii Skovoroda Pereiaslav-Khmelnytskyi State Pedagogical University',
    degree: "Bachelor's Degree, Philology (English Language)",
    dates: '2013 — 2017',
    note: 'Self-taught. Moved into commercial frontend in 2021.',
    languages:
      'Ukrainian — Native · English — Professional working proficiency',
  },
} as const

export const highlights = [
  { value: '600', label: 'active merchants on the platform' },
  { value: '19', label: 'lenders in one application' },
  { value: '4,000+', label: 'completed financing applications' },
  { value: '1 week', label: 'to add a lender, down from a month' },
] as const

export type Experience = {
  role: string
  company: string
  dates: string
  place: string
  impact: string
  summary: string
  points: string[]
  stack: string
}

export const experience: Experience[] = [
  {
    role: 'Lead Frontend Developer',
    company: 'Magwitch',
    dates: 'Aug 2023 — Present',
    place: 'USA · Remote',
    impact: '600 merchants, 19 lenders, 4,000+ completed applications.',
    summary:
      'Built the merchant portal and client application from scratch for a multi-tenant fintech platform.',
    points: [
      'Designed a lender-agnostic application for 19 lenders and cut each new lender from 1 month to 1 week.',
      'Owned the financing flow from spec to production: draft, offers, e-sign, down payment, and funding, for 4,000+ completed applications.',
      'Separated data access from UI in one shared baseQuery for both apps: cookie auth, CSRF, 20+ RTK Query slices, error handling, and caching.',
      'Defined access for 4 roles in one codebase: permissions, own/all scopes, route guards, and conditional UI.',
      'Implemented Stripe Payment Element, SetupIntent, and PaymentIntent for card collection and checkout inside the financing flow.',
      'Delivered e-sign in the merchant portal and the client app: agreements, document signing, and completion.',
      'Built Chart.js dashboard charts (line, bar, doughnut) with filters, date ranges, and live updates.',
      'Cut redundant requests on data-heavy screens with RTK Query prefetch and debounced search.',
      'Standardized UI and the release path across 4 environments: Ant Design 5, Vite, GitHub Actions, Sentry, Cypress, and Pusher. Used Figma MCP to speed up implementation from design.',
      'Led frontend for 2 frontend developers and reviewed UI written by 4 full-stack developers.',
    ],
    stack:
      'React, TypeScript, Ant Design 5, Vite, Redux Toolkit, RTK Query, Stripe, Chart.js, Cypress, Jest, Sentry, GitHub Actions, Pusher',
  },
  {
    role: 'Frontend Developer',
    company: 'Join to IT',
    dates: 'Jul 2021 — Aug 2023',
    place: 'Kyiv, Ukraine',
    impact: 'Four client products from scratch. Three clients came back.',
    summary:
      'Outsourcing frontend for client products: new builds and legacy codebases.',
    points: [
      'Delivered 4 client products from scratch; 3 clients returned for later versions.',
      'Independently shipped React, Next.js, and TypeScript products: auth, Stripe, and Chart.js dashboards.',
      'Shipped real-time chat over WebSockets with live message updates in the client UI.',
    ],
    stack: 'React, Next.js, TypeScript, Stripe, Chart.js, WebSockets',
  },
]

export const skillGroups: { title: string; items: string[] }[] = [
  {
    title: 'Frontend',
    items: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript ES6+',
      'HTML5',
      'CSS3',
      'Sass',
      'BEM',
      'React Router',
      'Browser APIs',
    ],
  },
  {
    title: 'State and data',
    items: [
      'Redux Toolkit',
      'RTK Query',
      'TanStack Query',
      'REST APIs',
      'Axios',
      'React Hook Form',
      'WebSockets',
      'Pusher',
    ],
  },
  {
    title: 'UI',
    items: ['Ant Design', 'Material UI', 'Tailwind CSS', 'Figma'],
  },
  {
    title: 'Testing and delivery',
    items: [
      'Jest',
      'Cypress',
      'Vite',
      'Git',
      'GitHub Actions',
      'CI/CD',
      'Sentry',
    ],
  },
  {
    title: 'Backend',
    items: ['NestJS', 'Prisma ORM', 'PostgreSQL', 'Supabase'],
  },
  {
    title: 'AI',
    items: ['Cursor', 'Claude', 'Figma MCP'],
  },
]
