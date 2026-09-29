export const profile = {
  name: 'Daria Kurylenko',
  role: 'Full-Stack Developer',
  headline:
    'Full-Stack Developer. Frontend: 5+ years, Lead, Strong Middle, React / TypeScript. Backend: Junior, Node.js, Next.js.',
  location: 'Ukraine, Kyiv',
  email: 'idarya1401@gmail.com',
  phone: '+380 93 339 70 00',
  phoneHref: 'tel:+380933397000',
  availability: 'Open to hybrid work in Kyiv Oblast and remote roles',
  linkedin: 'https://www.linkedin.com/in/daria-kurylenko/',
  telegram: 'https://t.me/Daria_Kurylenko',
  focus: [
    'React',
    'TypeScript',
    'Redux Toolkit',
    'RTK Query',
    'React Query',
    'Vite',
    'Ant Design',
    'Pusher',
  ],
  about: [
    'I’m a full-stack developer. Frontend is my stronger side: 5+ years in React and TypeScript, as a lead at a strong-middle level. On the backend I am a junior in Node.js and Next.js.',
    'At my current fintech company I own the frontend of a multi-tenant B2B platform for consumer financing. Merchants move through one product, from the application and lender offers to funding, billing, and reporting. I set the frontend architecture, shipped 15+ lender-specific flows, added role-based access and real-time updates, and mentored junior developers. I also use AI in daily development. That cut UI implementation time by about 40% and sped up analysis, debugging, and refactoring.',
    'Alongside that, I worked on a B2B SaaS product for school procurement and carried the flow from tender creation and supplier evaluation through pitches and the award.',
    'I want to keep owning the frontend and grow the backend under a mentor.',
    'I like turning complex business rules into products that stay simple and predictable as they scale.',
  ],
  lookingFor:
    'Open to full-stack roles: strong-middle React and TypeScript on the frontend, and a junior path in Node.js and Next.js on the backend.',
  education: {
    school:
      'Hryhorii Skovoroda Pereiaslav-Khmelnytskyi State Pedagogical University',
    degree: 'Bachelor’s Degree, Philology (English Language)',
    dates: 'Sep 2013 — May 2017',
  },
} as const

export type Experience = {
  role: string
  company: string
  employment: string
  dates: string
  place: string
  summary: string
  points: string[]
  stack: string
}

export const experience: Experience[] = [
  {
    role: 'Frontend Lead',
    company: 'Magwitch',
    employment: 'Full-time',
    dates: 'Aug 2023 — Present',
    place: 'United States · Remote',
    summary:
      'US fintech. B2B SaaS for point-of-sale consumer financing, from applications and lender offers to funding, billing, and reporting.',
    points: [
      'Owned the React and TypeScript frontend of a multi-tenant financing platform: architecture, role-based access, and the standards that let loan, funding, and billing ship from one codebase.',
      'Built the SPA from an empty repository, including the data layer, reusable components, and the path from application through funding and reporting.',
      'Designed the data layer with Redux Toolkit and RTK Query across 20+ API slices, with a shared base query for auth, CSRF, errors, and cache invalidation.',
      'Implemented granular RBAC with module action permissions, route guards, and conditional UI for Super Admin, Admin, Main Account, and Partner roles.',
      'Shipped a real-time dashboard with Pusher, drag-and-drop widgets, charts, and live updates for application, offer, and funding status.',
      'Owned core flows from draft through offers, signatures, funding, delivery, and refunds, including 15+ lender-specific offer cards, subscriptions, billing, and reporting.',
      'Built a design system on Ant Design 5 with SCSS, BEM, and design tokens, plus responsive tables, filters, and forms for desktop, tablet, and mobile.',
      'Set up Vite builds for dev, QA, staging, and prod, with GitHub Actions CI/CD, Sentry, and Cypress end-to-end tests using the Page Object pattern.',
      'Partnered with backend, QA, product, and design to turn financial requirements into scalable frontend solutions across lenders and tenant roles.',
    ],
    stack:
      'React 18, TypeScript, React Router, Ant Design 5, SCSS, Redux Toolkit, RTK Query, REST, Axios, Pusher, Chart.js, Highcharts, Recharts, Vite, GitHub Actions, Cypress, Jest, Sentry',
  },
  {
    role: 'Frontend Engineer',
    company: 'Proco',
    employment: 'Part-time',
    dates: 'Aug 2023 — Present',
    place: 'Germany · Remote',
    summary:
      'Germany-based B2B SaaS for school procurement and supplier matchmaking in South Africa, from onboarding to award and contract closure.',
    points: [
      'Built a React and TypeScript SPA for school procurement, with role-based screens, tender workflows, and live updates, so a school and a supplier could finish a tender in one product.',
      'Implemented role-based UI for Super Admins, Tender Representatives, School Users, Onboarding Representatives, and Suppliers.',
      'Developed a 10+ phase tender workflow with tasks, approvals, deadlines, phase transitions, cancellation, restart, and multi-award scenarios.',
      'Built drag-and-drop form and scorecard builders with dynamic fields, linked fields, validation, preview, and draft/publish flows.',
      'Designed the data layer with Redux Toolkit and RTK Query across 140+ REST endpoints, including authentication, file uploads, and PDF downloads.',
      'Implemented a real-time messenger with Laravel Echo and Pusher, adding pagination, attachments, read receipts, and role-based filtering.',
      'Developed multi-step questionnaires with conditional fields, service-specific components, and backend error mapping.',
      'Delivered secure public supplier journeys via token and signed URLs for registration, verification, pitch scheduling, scorecards, feedback, and document downloads.',
      'Built Kanban dashboards and tables with filtering, sorting, pagination, and bulk actions, plus a reusable UI layer on Ant Design 5.',
      'Partnered with product and backend to ship frontend features across the full tender lifecycle.',
    ],
    stack:
      'React 18, TypeScript, Ant Design 5, SCSS, React Hook Form, Redux Toolkit, RTK Query, REST, Axios, Laravel Echo, Pusher, Vite, Git, CI/CD',
  },
  {
    role: 'Front-end Developer',
    company: 'Join to IT',
    employment: 'Full-time',
    dates: 'Jul 2021 — Aug 2023',
    place: 'Ukraine · Remote',
    summary:
      'Kyiv software company delivering web products for clients across industries, with requirements, architecture, and stacks that changed from project to project.',
    points: [
      'Developed and maintained React, TypeScript, and JavaScript web applications, building reusable UI components and responsive interfaces from Figma.',
      'Integrated REST APIs and implemented client-side authentication, authorization, role-based access, and protected routes.',
      'Built forms with complex validation and dynamic fields, plus tables, filters, pagination, sorting, modals, multi-step flows, and dashboards.',
      'Implemented data visualization with Chart.js, real-time updates with WebSockets, and styling with SCSS, Tailwind CSS, and Styled Components.',
      'Picked up new UI libraries, including Ant Design and Material UI, as project requirements changed.',
      'Worked with Redux, Redux Toolkit, RTK Query, React Router, React Hook Form, Formik, and Yup.',
      'Took part in code reviews, debugging, refactoring, and performance work in Agile.',
      'Collaborated with designers, backend, QA, and product managers to turn changing requirements into production-ready features.',
    ],
    stack:
      'React, TypeScript, JavaScript, HTML5, CSS3, SCSS, Tailwind CSS, Styled Components, Ant Design, Material UI, Redux Toolkit, RTK Query, REST, React Hook Form, Formik, Yup, Chart.js, WebSockets, Git, Figma',
  },
]

export const skillGroups: { title: string; items: string[] }[] = [
  {
    title: 'Interface',
    items: [
      'React.js',
      'TypeScript',
      'JavaScript',
      'HTML',
      'HTML5',
      'CSS',
      'SASS',
      'Tailwind CSS',
      'styled-components',
      'Ant Design',
      'Material-UI',
      'BEM',
      'Next.js',
      'Figma',
      'Single Page Applications',
      'PWA',
      'Frontend Architecture',
      'Front-end Development',
      'Web Development',
    ],
  },
  {
    title: 'State and data',
    items: [
      'Redux.js',
      'Redux Toolkit',
      'RTK Query',
      'React Query',
      'Zustand',
      'React Router',
      'React Hook Form',
      'Formik',
      'Yup',
      'REST APIs',
      'Axios',
      'Pusher',
      'WebSocket',
      'Laravel Echo',
      'Chart.js',
      'Highcharts',
      'Recharts',
    ],
  },
  {
    title: 'Delivery',
    items: [
      'Vite',
      'Webpack',
      'Git',
      'GitHub Actions',
      'CI/CD',
      'ESLint',
      'Prettier',
      'Jest',
      'Cypress',
      'Playwright',
      'Sentry',
      'Role-Based Access Control (RBAC)',
      'Code Review',
      'NestJS',
      'PostgreSQL',
      'Prisma ORM',
    ],
  },
  {
    title: 'Collaboration',
    items: [
      'Technical Leadership',
      'Mentoring',
      'Explaining complexity',
      'Clear tradeoffs',
      'Product sense',
      'Scope control',
      'Systems thinking',
      'Mentoring in review',
      'Agile',
      'Cross-functional Collaboration',
      'Communication',
      'Problem Solving',
      'Attention to Detail',
    ],
  },
]
