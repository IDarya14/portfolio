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
    'I’m a Full-Stack Developer. On the frontend I have 5+ years as a Lead and Strong Middle in React / TypeScript. On the backend I am a Junior in Node.js and Next.js.',
    'At my current FinTech company, I own the frontend of a multi-tenant B2B platform for consumer financing, turning a complex financing process into a single product for merchants — from application and lender offers to funding, billing, and reporting. I’ve led frontend architecture, built 15+ lender-specific flows, implemented granular RBAC and real-time features, and worked closely with the team on technical decisions and code quality. I also integrated AI into my development workflow, reducing UI implementation time by about 40% and speeding up code analysis, problem-solving, and refactoring.',
    'On another B2B SaaS product, I helped digitize a complex school procurement process, covering the workflow from tender creation and supplier evaluation to pitching and awarding.',
    'On the backend I am a junior. I am ready to grow into full-stack under mentorship, taking on Node.js and Next.js next to the frontend I already own.',
    'I enjoy turning complex business rules into simple, predictable products that can scale.',
  ],
  lookingFor:
    'Open to full-stack roles: Strong Middle React / TypeScript on the frontend, Junior Node.js and Next.js on the backend.',
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
      'USA FinTech. B2B SaaS for POS consumer financing: applications, lender offers, funding, billing, and reporting.',
    points: [
      'Owned the frontend of a multi-tenant financing platform in React 18 and TypeScript, setting architecture, RBAC, and engineering standards so loan, funding, and billing flows shipped on one codebase.',
      'Built the SPA from scratch, including architecture, the data layer, reusable components, and development standards across the lifecycle from application through funding and reporting.',
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
      'Built a React 18 and TypeScript SPA for B2B school procurement, focusing on role-based UI, tender workflows, and real-time collaboration so schools and suppliers could complete a tender in one product.',
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
      'Software development company in Kyiv delivering web products for clients across industries, with fast-changing requirements, architectures, and technology stacks.',
    points: [
      'Developed and maintained React, TypeScript, and JavaScript web applications, building reusable UI components and responsive interfaces from Figma.',
      'Integrated REST APIs and implemented client-side authentication, authorization, role-based access, and protected routes.',
      'Built forms with complex validation and dynamic fields, plus tables, filters, pagination, sorting, modals, multi-step flows, and dashboards.',
      'Implemented data visualization with Chart.js, real-time updates with WebSockets, and styling with SCSS, Tailwind CSS, and Styled Components.',
      'Adapted to new requirements, frontend architectures, and UI libraries including Ant Design and Material UI.',
      'Worked with Redux, Redux Toolkit, RTK Query, React Router, React Hook Form, Formik, and Yup.',
      'Joined code reviews, debugging, refactoring, and performance work in Agile.',
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
      'Complexity translation',
      'Tradeoff clarity',
      'Product judgment',
      'Scope discipline',
      'Systems thinking',
      'Review as teaching',
      'Agile',
      'Cross-functional Collaboration',
      'Communication',
      'Problem Solving',
      'Attention to Detail',
    ],
  },
]
