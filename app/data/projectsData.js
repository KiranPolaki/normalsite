import xzult1 from "@/public/xzult/xzult1.png";
import xzult2 from "@/public/xzult/xzult2.png";
import xzult3 from "@/public/xzult/xzult3.png";

import tfs1 from "@/public/tfs/tfs1.jpg";
import tfs2 from "@/public/tfs/tfs2.jpg";
import tfs3 from "@/public/tfs/tfs3.jpg";
import tfs5 from "@/public/tfs/tfs5.jpg";
import tfs6 from "@/public/tfs/tfs6.jpg";

import yantram from "@/public/yantram/yantram1.jpg";
import yantram2 from "@/public/yantram/yantam2.jpg";
import yantram3 from "@/public/yantram/yantram3.jpg";

import ngb1 from "@/public/ngb/ngb-1.jpg";
import ngb2 from "@/public/ngb/ngb-2.jpg";
import ngb3 from "@/public/ngb/ngb-3.jpg";

import gurucodes from "@/public/gurucodes/gurucodes1.png";
import gurucodes2 from "@/public/gurucodes/gurucodes2.png";

import three from "@/public/three.png";
import two from "@/public/two.png";
import one from "@/public/one.png";

import fpDashboard from "@/public/fluentpro/dashboard.png";
import fpBooksAdmin from "@/public/fluentpro/books-admin.png";
import fpBookPages from "@/public/fluentpro/book-pages-editor.png";
import fpChatbotsAdmin from "@/public/fluentpro/chatbots-admin.png";
import fpStudentHome from "@/public/fluentpro/student-home.png";
import fpStudentChatbots from "@/public/fluentpro/student-chatbots.png";
import fpStudentQuiz from "@/public/fluentpro/student-quiz.png";
import fpParentReport from "@/public/fluentpro/parent-report.png";
import fpSupportTickets from "@/public/fluentpro/support-tickets.png";
import fpSchoolSections from "@/public/fluentpro/school-sections.png";
import fpUsersAdmin from "@/public/fluentpro/users-admin.png";

// Conquer
import cqDashboard from "@/public/conquer/dashboard.png";
import cqStorefront from "@/public/conquer/storefront.png";
import cqOrders from "@/public/conquer/orders.png";
import cqOrganizations from "@/public/conquer/organizations.png";
import cqVariants from "@/public/conquer/variants.png";
import cqAttributes from "@/public/conquer/attributes.png";
import cqBulkUpload from "@/public/conquer/bulk-upload.png";
import cqCustomers from "@/public/conquer/customers.png";
import cqProducts from "@/public/conquer/products.png";

// Udyogam
import udLanding from "@/public/udyogam/landing.png";
import udLandingFeatures from "@/public/udyogam/landing-features.png";
import udLandingFlow from "@/public/udyogam/landing-flow.png";
import udPricing from "@/public/udyogam/pricing.png";
import udDashboard from "@/public/udyogam/dashboard.png";
import udResume from "@/public/udyogam/resume.png";
import udProfile from "@/public/udyogam/profile.png";
import udLogin from "@/public/udyogam/login.png";

// Beyond Basics
import bb0 from "@/public/beyondbasics/bb-00.png";
import bb1 from "@/public/beyondbasics/bb-01.png";
import bb2 from "@/public/beyondbasics/bb-02.png";
import bb3 from "@/public/beyondbasics/bb-03.png";
import bb4 from "@/public/beyondbasics/bb-04.png";
import bb5 from "@/public/beyondbasics/bb-05.png";
import bb6 from "@/public/beyondbasics/bb-06.png";

import athCover from "@/public/ath/cover.png";
import athHero from "@/public/ath/ath-hero.webp";
import athPoster from "@/public/ath/ath-poster.png";
import athPageHero from "@/public/ath/page-hero.png";
import athPageProblem from "@/public/ath/page-problem.png";
import athPageSolution from "@/public/ath/page-solution.png";

// Udyogam — live product
import udLiveJobs from "@/public/udyogam/live-jobs.png";
import udLiveJobDetail from "@/public/udyogam/live-job-detail.png";
import udLiveLanding from "@/public/udyogam/live-landing.png";
import udLiveLanding2 from "@/public/udyogam/live-landing-2.png";
import udLiveLanding3 from "@/public/udyogam/live-landing-3.png";

// CodeDale
import cdHome from "@/public/codedale/home.png";
import cdHomeWork from "@/public/codedale/home-work.png";
import cdHomeServices from "@/public/codedale/home-services.png";
import cdHomeProcess from "@/public/codedale/home-process.png";
import cdHomeAchievements from "@/public/codedale/home-achievements.png";
import cdHomeTestimonials from "@/public/codedale/home-testimonials.png";
import cdProjectConquer from "@/public/codedale/project-conquer.png";
import cdProjectTfs from "@/public/codedale/project-tfs.png";
import cdProjectPayatom from "@/public/codedale/project-payatom.png";

// Xzult site
import xsHome from "@/public/xultsite/home.png";
import xsHome1 from "@/public/xultsite/home-1.png";
import xsHome2 from "@/public/xultsite/home-2.png";
import xsHome3 from "@/public/xultsite/home-3.png";
import xsServices from "@/public/xultsite/services.png";
import xsPricing from "@/public/xultsite/pricing.png";
import xsPartner from "@/public/xultsite/partner.png";

export const projects = [
  {
    id: "fluent-pro",
    name: "Fluent Pro — AI Reading Platform for Schools",
    description:
      "A multi-tenant English fluency platform for K-12 schools: a game-like reading app for kids, an authoring and analytics console for admins, a progress portal for parents, and an AI tutor that is token-budgeted and safety-filtered before a single word reaches a child.",
    detailedDescription:
      "Fluent Pro is one Next.js codebase serving four completely different audiences — students, school admins, teachers and parents — on top of a shared 25-table Postgres schema. Kids get a full-screen, animated reading world: page-flip books, read-aloud with word-level highlighting, hard-word drills, quizzes and level unlocks. Schools get the opposite of that: a dense console for authoring books page by page, building quizzes, configuring AI tutors, onboarding hundreds of students through CSV, and reading a live analytics dashboard. Parents get a quiet third surface where they can see exactly what their child read, scored, and asked the AI. The hard part was never any single screen — it was keeping four products coherent inside one deployment, one auth system and one schema, while every AI call had to be cheap, logged and safe for a seven-year-old.",
    context:
      "Indian schools were buying reading apps built for consumers: no class structure, no teacher visibility, no parent trail, and an AI chatbot with an unbounded bill. Fluent Pro was built to be the opposite — school-shaped from the database up, where a student belongs to a section, a section belongs to a school, and every book, quiz and AI conversation is attributable up that tree.",
    myRole:
      "I was the lead contributor on the project — 254 of the 674 commits across a 7-person team — owning the student experience, the analytics dashboard, the Drizzle schema and migrations, and most of the admin console.",
    roleBullets: [
      "Designed the multi-tenant schema (25 tables, 53 migrations) covering schools, sections, memberships, books, quizzes, attempts, AI threads and support tickets",
      "Built the analytics service that powers the admin dashboard — 20+ aggregate queries behind a single page render",
      "Built the student interface: reading flow, book stages, hard-word practice, quizzes, level unlocks and points",
      "Built the admin console screens for books, pages, quizzes, chatbots, schools, sections and users",
      "Owned auth and role routing across four sign-in surfaces, plus the bulk onboarding path for schools",
    ],
    challenges: [
      {
        shot: "student-home",
        title: "One codebase, four products",
        problem:
          "A 7-year-old and a school administrator cannot share a navigation model, a font size, or an error message — but they do share a session, a database and a deployment.",
        solution:
          "Next.js route groups split the app into (user-interface), (admin), (parent) and (auth) worlds, each with its own layout and design language. Middleware reads the JWT role on every request and routes people into their own world, so an admin URL typed by a student is a redirect, not a 403 page.",
        outcome:
          "Four genuinely different UIs — a playful full-screen app and a dense data console among them — ship from one build with no duplicated auth, data or deployment.",
      },
      {
        shot: "users-admin",
        title: "Kids do not have email addresses",
        problem:
          "Standard auth assumes an email inbox. Primary-school students have neither an inbox nor the patience for a password reset flow.",
        solution:
          "Three credential providers sit side by side in NextAuth v5: admins and teachers sign in with email, parents with email, and students with a school-issued ID like GIS0004 generated from a per-school prefix and an atomic counter. Students get a default password, a mustChangePassword flag, and a middleware gate that will not let them anywhere else until it is changed.",
        outcome:
          "A school can onboard an entire grade from a CSV and hand out printable IDs the same afternoon — no student email addresses required.",
      },
      {
        shot: "chatbots-admin",
        title: "Making an AI tutor safe and affordable for children",
        problem:
          "An open-ended chatbot in a children's product is both a safety surface and an unbounded invoice.",
        solution:
          "Every message passes through a pre-filter that detects and masks harmful words before they are stored or displayed, then a child-safety system prompt is prepended to the model call, and replies stream back over SSE so the UI feels instant. Cost is capped in the schema itself: each student carries a daily token balance, every message deducts from it, and a secured cron endpoint refills the whole table overnight. Every thread and message is persisted so parents can read the entire conversation.",
        outcome:
          "AI spend per student became a number the business could predict instead of a risk, and nothing a child types or reads is invisible to their parent.",
      },
      {
        shot: "dashboard",
        title: "A live analytics dashboard without a data warehouse",
        problem:
          "Admins wanted daily active readers, time spent, weekly books opened, AI token burn, quiz pass and retake rates, feature adoption by month and the most-read books — all school-scoped, all on one screen, with no analytics infrastructure to lean on.",
        solution:
          "A single analytics service composes 20+ aggregate SQL queries with Drizzle, computing period-over-period deltas in the database rather than in JavaScript. Every group of queries runs through Promise.allSettled behind React's cache(), so a slow or failing query degrades one card instead of blanking the dashboard.",
        outcome:
          "The whole dashboard is one server render against Postgres — no ETL, no warehouse, and no half-rendered page when a single aggregate misbehaves.",
      },
      {
        shot: "parent-report",
        title: "Turning reading aloud into measurable data",
        problem:
          "Reading fluency is a physical act; a web app only sees clicks.",
        solution:
          "Each page read is recorded as a reading attempt: audio goes to speech-to-text, the transcript is stored next to the analytics payload (accuracy, words per minute, mispronounced count), and text-to-speech plus word-level highlighting drives the read-aloud mode. Attempt start and end timestamps double as the source of truth for every time-spent metric on the dashboard.",
        outcome:
          "One event model feeds three audiences at once — practice for the child, evidence for the parent, and engagement metrics for the school.",
      },
      {
        shot: "book-pages-editor",
        title: "Schools need to author content, not file tickets",
        problem:
          "If publishing a book requires a developer, the platform stops growing the day the team gets busy.",
        solution:
          "A full authoring pipeline in the console: rich-text book pages with images, per-book instructions and estimated reading time, hard-word lists, a quiz builder supporting single-correct, multi-correct and true/false questions with points and passing scores, and AI tutors whose system prompts are written and published from the same editor.",
        outcome:
          "Content, assessments and AI behaviour are all configuration — the product team ships new material without a deploy.",
      },
    ],
    architecture: {
      summary:
        "Server-first Next.js App Router: server components and server actions talk to Postgres through Drizzle, with a thin model / service / types layer per domain so the same logic backs both the console and the student app.",
      layers: [
        {
          name: "Data",
          detail:
            "Postgres + Drizzle ORM. 25 tables, 53 migrations, enum-typed roles and statuses, cascade rules that make a school deletion safe.",
        },
        {
          name: "Domain",
          detail:
            "Every feature is a folder of model / service / types — books, quizzes, chatbots, schools, sections, users, support tickets, analytics.",
        },
        {
          name: "Auth",
          detail:
            "NextAuth v5 with three credential providers, JWT role claims, and middleware that owns role routing and the forced password-change gate.",
        },
        {
          name: "AI",
          detail:
            "OpenAI for chat, text-to-speech and speech-to-text, wrapped in a safety filter, a token ledger and SSE streaming.",
        },
        {
          name: "Interface",
          detail:
            "Four route groups, Tailwind v4 + Radix primitives for the console, Framer Motion and a page-flip engine for the kids' app.",
        },
      ],
    },
    engineering: [
      "~52k lines of TypeScript across 451 files, 69 routes and 217 components",
      "25-table Postgres schema evolved through 53 Drizzle migrations",
      "Four sign-in surfaces and role-aware middleware in a single deployment",
      "20+ aggregate analytics queries composed into one cached dashboard render",
      "SSE streaming chat with a safety pre-filter and a per-student daily token ledger",
      "CSV bulk onboarding with auto-generated student IDs and forced password rotation",
      "Husky pre-push hook that runs a production build so main stays deployable",
    ],
    results: [
      { label: "Commits owned", value: "254 / 674", detail: "lead contributor in a 7-person team" },
      { label: "Tables in schema", value: "25", detail: "evolved over 53 migrations" },
      { label: "Role-based apps", value: "4", detail: "student, admin, teacher, parent" },
      { label: "Dashboard aggregates", value: "20+", detail: "one render, no warehouse" },
    ],
    learnings: [
      "Role boundaries belong in the router and the schema, not in conditional rendering — the moment a screen starts branching on role, the product has two products in it.",
      "Budget your AI in the database. A token column and a nightly cron turned an open-ended cost into a predictable one.",
      "Graceful degradation beats correctness theatre on a dashboard: one failed aggregate should cost you a card, never the page.",
      "Authoring tools are the real product for B2B EdTech — everything the school can change themselves is a support ticket that never gets filed.",
    ],
    /* ----------------------------------------------------------------
       SCREENSHOTS — flip `enabled: false` on any shot to hide it
       everywhere it is used (hero, a challenge, or the product tour).
       `showHero` / `showTour` switch off whole blocks.
       `tour` controls the order of the product-tour section; any shot
       already used as the hero or inside a challenge is skipped there.
    ---------------------------------------------------------------- */
    media: {
      showHero: true,
      showTour: true,
      hero: "dashboard",
      tour: [
        "student-quiz",
        "student-chatbots",
        "books-admin",
        "school-sections",
        "support-tickets",
      ],
      shots: {
        dashboard: {
          enabled: true,
          src: fpDashboard,
          title: "Admin analytics dashboard",
          caption:
            "Daily actives, time spent, AI token burn, quiz performance, feature usage and popular books — 20+ aggregates in a single server render.",
        },
        "student-home": {
          enabled: true,
          src: fpStudentHome,
          title: "Student home",
          caption:
            "The kid-facing world: recommended books, level progression and points, in a full-screen animated shell that shares nothing visually with the console.",
        },
        "users-admin": {
          enabled: true,
          src: fpUsersAdmin,
          title: "User management",
          caption:
            "Role-based administration with CSV bulk upload and generated student login IDs.",
        },
        "chatbots-admin": {
          enabled: true,
          src: fpChatbotsAdmin,
          title: "AI tutor configuration",
          caption:
            "Admins author each tutor's system prompt and publish it — AI behaviour is configuration, not code.",
        },
        "parent-report": {
          enabled: true,
          src: fpParentReport,
          title: "Parent progress report",
          caption:
            "Books completed with scores, books in progress, and every AI conversation the child has had.",
        },
        "book-pages-editor": {
          enabled: true,
          src: fpBookPages,
          title: "Book authoring",
          caption:
            "Books are written page by page in a rich-text editor, with per-page hard words the reading engine drills later.",
        },
        "student-quiz": {
          enabled: true,
          src: fpStudentQuiz,
          title: "Quiz intro",
          caption:
            "Section-scoped quizzes with time limits, marks, negative marking and a passing score.",
        },
        "student-chatbots": {
          enabled: true,
          src: fpStudentChatbots,
          title: "AI tutors, student side",
          caption:
            "The same tutors as the child sees them — token-budgeted, safety-filtered and fully logged for parents.",
        },
        "books-admin": {
          enabled: true,
          src: fpBooksAdmin,
          title: "Book catalogue",
          caption:
            "Every title with its level, category and publish state, filterable and exportable.",
        },
        "school-sections": {
          enabled: true,
          src: fpSchoolSections,
          title: "Schools and sections",
          caption:
            "The multi-tenant spine: schools contain sections, sections contain students, everything else hangs off that tree.",
        },
        "support-tickets": {
          enabled: true,
          src: fpSupportTickets,
          title: "Support desk",
          caption:
            "In-product ticketing with priorities, statuses, assignment and threaded replies between schools, parents and the team.",
        },
      },
    },
    features: [
      "Multi-tenant schools → sections → students hierarchy",
      "Four role-based experiences from one codebase",
      "Read-aloud reader with word-level highlighting",
      "Speech-to-text reading attempts with accuracy & WPM analytics",
      "Configurable AI tutors with published system prompts",
      "Child-safety filter + per-student daily AI token budget",
      "Quiz engine: single, multi-correct and true/false, with retake tracking",
      "Rich-text book authoring with pages, images and hard words",
      "Gamified levels, points and unlockable books",
      "Parent portal with progress reports and AI transcript review",
      "CSV bulk onboarding with auto-generated student IDs",
      "Admin analytics dashboard with period-over-period deltas",
      "In-product support ticketing with threaded messages",
    ],
    source: "https://github.com/codedale-tech/fluent-pro",
    type: "Web",
    live: "",
    start: "May 2025",
    end: "Oct 2025",
    hassource: false,
    islive: false,
    technology: [
      "Next.js 15 (App Router)",
      "React 19",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "NextAuth v5",
      "OpenAI (Chat, TTS, Whisper)",
      "Tailwind CSS v4",
      "Radix UI / shadcn",
      "TanStack Table",
      "Recharts & ApexCharts",
      "Tiptap",
      "Zustand",
      "Framer Motion",
      "Cloudinary",
      "Vercel",
    ],
    ongoing: false,
    category: "EdTech Platform",
    images: [fpDashboard, fpStudentHome, fpParentReport],
    img: fpDashboard,
    caseStudy: true,
    caseStudyLink: "/case-study/fluent-pro",
  },
  {
    id: "conquer",
    name: "Conquer — B2B Commerce for Employee Purchase Programmes",
    description:
      "An enterprise Apple store where no two companies see the same catalogue or the same price. Contract-linked SKU visibility, five layers of negotiated discounts, HR approval flows and two payment gateways — built on a 44-table Postgres schema.",
    detailedDescription:
      "Conquer Technologies sells Apple hardware to enterprises through employee purchase programmes. That business does not fit a normal storefront: what an employee is even allowed to see depends on their employer's contract, the price they pay is a stack of negotiated discounts resolved at render time, some purchases need HR approval, and each company has its own per-employee limits, order identifiers and notification rules. The platform models all of that in the database rather than in conditionals — organizations, contracts, five discount tables, attribute-driven variants, order approval state and an audit trail — and puts a fast admin console on top so the commercial team can configure a new client without a deploy. An employee whose company has no contract for a SKU does not see a 403; they simply never see the SKU.",
    context:
      "Conquer's customers are HR and IT teams buying devices for their staff. The commercial reality is that every one of those companies has signed a different agreement: different brands, different categories, different per-SKU pricing, different eligibility. A conventional e-commerce catalogue — one price list, one product grid — cannot represent that, and a spreadsheet-driven manual process does not scale past a handful of clients.",
    myRole:
      "I led the project end to end — scope, architecture, data model, reviews and delivery — and worked hands-on in the code alongside the team.",
    roleBullets: [
      "Owned the commerce data model: organizations, contracts, discount layers, attribute-driven variants, orders and audit trail",
      "Set the architecture for contract-scoped catalogue visibility, so eligibility is a query, not a UI condition",
      "Drove the admin console surface — products, variants, attributes, organizations, orders, coupons, delivery charges and exports",
      "Directed the payment integration strategy across Razorpay and Pine Labs / Plural, including webhook verification",
      "Ran code review and release discipline for a multi-developer team across ~100k lines of TypeScript",
    ],
    challenges: [
      {
        shot: "storefront",
        title: "The price is not a number on the product",
        problem:
          "Every buying organization negotiates separately: a blanket percentage off a brand, a sharper number on a category, an override on a specific product, and sometimes a hand-negotiated price on a single variant. Storing one price per SKU cannot express any of that.",
        solution:
          "Discounts live in five dedicated tables — brand, brand+category, product, product variant, and per-contract attribute-value restrictions — all keyed by organization. The catalogue query resolves the most specific applicable rule at render time, so the same SKU shows a different price to two employees of two different companies, from one product row.",
        outcome:
          "Adding a client became data entry instead of engineering, and the sales team could quote a contract knowing the store would honour it exactly.",
      },
      {
        shot: "products",
        title: "Visibility is part of the contract",
        problem:
          "Some catalogue items are simply not on offer to a given company. Showing them and blocking checkout is the wrong answer — it leaks the existence of pricing the customer was never offered.",
        solution:
          "Catalogue visibility is derived from the same contract tables: an organization sees only what its agreement covers. When a company has no contract rows at all, the storefront tells the employee to contact their IT/Admin rather than rendering an empty grid or an error.",
        outcome:
          "Eligibility became a property of the data, so no page ever has to remember to check it.",
      },
      {
        shot: "attributes",
        title: "A catalogue that filters itself",
        problem:
          "Laptops filter by processor, memory, storage and display; phones by colour and connectivity. Hard-coding filters per category would mean shipping code for every new product line.",
        solution:
          "Attributes are first-class rows — attributes, attribute values, category-to-attribute links, product attributes and variant attribute values — so the filter set for a category is generated from the data. Filter state lives in the URL through nuqs rather than client state, which means server components read the same filters, and a filtered catalogue is a shareable link.",
        outcome:
          "New categories arrive with working filters on day one, and filtered views are indexable and linkable.",
      },
      {
        shot: "bulk-upload",
        title: "Onboarding a catalogue, not a product",
        problem:
          "Clients do not arrive with one product; they arrive with a spreadsheet of hundreds of SKUs, in their own column layout, with attributes spread across it.",
        solution:
          "A CSV pipeline creates or reuses brands, categories, products and variants and wires up every attribute and junction row in one pass, plus an in-console bulk upload for ongoing changes and an export path back out. Seeding the demo catalogue from one file produced 91 products and 624 variants.",
        outcome:
          "Catalogue onboarding went from a developer task to a file upload.",
      },
      {
        shot: "orders",
        title: "An order is a workflow, not a transaction",
        problem:
          "An employee purchase is not a consumer checkout. It can need HR approval, it counts against a per-employee yearly limit, it may carry the company's own ticket identifier, and it moves through fulfilment — all of which must be reconstructible later.",
        solution:
          "Orders carry their type (EPP or SEPP), organization ticket ID, coupon and delivery components, and a rejection reason when HR declines. Status history and audit logs record every transition, and organizations configure their own approval mode, per-order and per-year limits, notification emails and domains.",
        outcome:
          "Support questions — why was this rejected, who approved it, what did they pay — are answered from the record rather than reconstructed.",
      },
      {
        shot: "customers",
        title: "Helping a customer without becoming them",
        problem:
          "Debugging 'I can't see the discount' means seeing what that specific employee sees. A shared login or an ad-hoc admin override is both a security hole and an accountability hole.",
        solution:
          "Impersonation is a first-class, time-boxed record: a super admin starts a session against a target user with a token and a hard expiry, the session carries the impersonation context, and the row shows who did it, to whom, and when it ended.",
        outcome:
          "Support can reproduce exactly what a customer sees, and every minute of it is on the record.",
      },
    ],
    architecture: {
      summary:
        "Next.js App Router with server actions over Drizzle and Postgres. Each domain — products, variants, attributes, contracts, orders, organizations — is its own actions module, so the storefront and the admin console share one set of rules.",
      layers: [
        {
          name: "Data",
          detail:
            "Postgres + Drizzle: 44 tables, 51 migrations, indexed on the access paths that matter (role, organization, order status, active impersonations).",
        },
        {
          name: "Pricing",
          detail:
            "Five contract discount tables plus attribute-value restrictions, resolved most-specific-first at query time.",
        },
        {
          name: "Auth",
          detail:
            "Auth.js with email magic links, an eight-role enum (user, admin, superAdmin, hr, sales, fulfilment, manager, employee) and organization-scoped sessions.",
        },
        {
          name: "Payments",
          detail:
            "Razorpay and Pine Labs / Plural, with webhook signature verification and a timestamp tolerance window to reject replays.",
        },
        {
          name: "Interface",
          detail:
            "Route groups split the admin console from the storefront; TanStack Table for data grids, nuqs for URL-resident filter state.",
        },
      ],
    },
    engineering: [
      "~101k lines of TypeScript across 609 files, 46 routes and 45 API endpoints",
      "44-table Postgres schema evolved through 51 Drizzle migrations",
      "Five-layer contract discount resolution, scoped per organization",
      "Attribute-driven variants with URL-resident filter state readable by server components",
      "CSV catalogue seeding plus in-console bulk upload and data export",
      "Dual payment gateways with signature-verified, replay-resistant webhooks",
      "Audited, expiring impersonation for customer support",
    ],
    results: [
      { label: "Tables in schema", value: "44", detail: "51 migrations" },
      { label: "Discount layers", value: "5", detail: "brand → variant, per organization" },
      { label: "Roles", value: "8", detail: "from employee to super admin" },
      { label: "Payment gateways", value: "2", detail: "Razorpay + Pine Labs" },
    ],
    learnings: [
      "When pricing is negotiated, price belongs in a relationship table, not on the product. Every shortcut around that turns into a migration later.",
      "Put eligibility in the query. A catalogue that filters itself never leaks what a customer was not offered.",
      "URL-resident filter state is worth the refactor: server components can read it, users can share it, and the back button behaves.",
      "Impersonation is a feature, not a hack — but only if it expires and leaves a record.",
    ],
    media: {
      showHero: true,
      showTour: true,
      hero: "dashboard",
      tour: ["organizations", "variants"],
      shots: {
        dashboard: {
          enabled: true,
          src: cqDashboard,
          title: "Admin dashboard",
          caption:
            "Revenue, order pipeline and support load in one view, with the order trend over the last three months.",
        },
        storefront: {
          enabled: true,
          src: cqStorefront,
          title: "Employee storefront",
          caption:
            "The same catalogue row, priced for this employee's employer — note the per-item discount badges resolved from their company's contract.",
        },
        products: {
          enabled: true,
          src: cqProducts,
          title: "Product catalogue",
          caption: "Admin-side catalogue with brand, category and publish state, filterable and exportable.",
        },
        attributes: {
          enabled: true,
          src: cqAttributes,
          title: "Attributes",
          caption:
            "Processor, memory, storage, colour — attributes are data, so a new category arrives with working filters.",
        },
        bulkUpload: {
          enabled: true,
          src: cqBulkUpload,
          title: "Bulk upload",
          caption: "Catalogue onboarding as a file upload rather than an engineering ticket.",
        },
        orders: {
          enabled: true,
          src: cqOrders,
          title: "Orders",
          caption:
            "Every order carries its organization, approval state and ticket ID — filterable by pipeline stage.",
        },
        customers: {
          enabled: true,
          src: cqCustomers,
          title: "Customers",
          caption: "Role-scoped customer administration, the surface support impersonates from.",
        },
        organizations: {
          enabled: true,
          src: cqOrganizations,
          title: "Organizations",
          caption:
            "Each buying company with its contract window, approval mode, purchase limits and domains.",
        },
        variants: {
          enabled: true,
          src: cqVariants,
          title: "Product variants",
          caption: "624 variants generated from a single client spreadsheet, each with its own SKU and pricing.",
        },
      },
    },
    features: [
      "Contract-scoped catalogue visibility per organization",
      "Five-layer negotiated discount resolution",
      "Attribute-driven product variants with generated filters",
      "Employee purchase programme rules (EPP / SEPP, per-year limits)",
      "HR approval flow with rejection reasons",
      "Coupon engine and pincode-based delivery charges",
      "CSV catalogue seeding, bulk upload and data export",
      "Razorpay + Pine Labs payments with verified webhooks",
      "Audited, expiring customer impersonation",
      "Order status history and audit logs",
      "In-product support ticketing",
      "Admin analytics dashboard",
    ],
    source: "https://github.com/vasantakmr/conquer",
    type: "Web",
    live: "",
    start: "Apr 2025",
    end: "Ongoing",
    hassource: false,
    islive: false,
    technology: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "Auth.js",
      "Razorpay",
      "Pine Labs / Plural",
      "UploadThing",
      "Resend",
      "TanStack Table",
      "nuqs",
      "Tailwind CSS",
      "Radix UI",
      "Vercel",
    ],
    ongoing: true,
    category: "B2B Commerce Platform",
    images: [cqDashboard, cqStorefront, cqOrders],
    img: cqDashboard,
    caseStudy: true,
    caseStudyLink: "/case-study/conquer",
  },
  {
    id: "udyogam",
    name: "Udyogam — AI Job Hunt Copilot",
    description:
      "A job platform that owns its own job feed, rewrites your resume for the exact role with AI, scores it against what the posting actually asks for, and meters every AI call through a credit ledger that reconciles with Razorpay.",
    detailedDescription:
      "Udyogam is built for Indian job seekers applying into applicant tracking systems that reject on keyword matching. Rather than reselling someone else's job API, it ingests and normalises its own job feed, stores each posting with derived location, salary and expiry data, and matches roles to a candidate's chosen fields with curated keyword sets instead of a category column the sources never provide. On top of that sits the paid product: resume parsing from PDF and DOCX into a structured document, AI tailoring against a specific job description, PDF generation, and interview preparation. All of it is metered — every user carries a credit balance, every AI action debits it, every purchase and refresh is a ledger row, and the Razorpay webhook that grants credits is idempotent by construction.",
    context:
      "Most job boards are a thin skin over a third-party API, which means the product cannot fix bad data, cannot rank for its own users, and dies when the vendor's terms change. Udyogam was built the other way round — own the feed, own the normalisation, and spend the AI budget on the part candidates actually feel: the resume that gets past the filter.",
    myRole:
      "Lead contributor and technical lead — 148 of the 214 commits — across the job ingestion pipeline, the credit and subscription system, the dashboard and the public product surface.",
    roleBullets: [
      "Designed the job ingestion and normalisation pipeline, including scheduled fetches, expiry sweeps and de-duplication by source job id",
      "Built the credit ledger and subscription flow against Razorpay, including webhook idempotency",
      "Built the candidate dashboard: job browser, filters, applied jobs, resume library and profile",
      "Owned the Drizzle schema across jobs, applications, resumes, credits, subscriptions and support",
      "Shipped the public surface — landing, pricing, waitlist, referrals and public candidate profiles",
    ],
    challenges: [
      {
        shot: "liveJobDetail",
        title: "Owning the job feed instead of renting it",
        problem:
          "Job sources disagree about everything: location is a string here and an object there, salary is a range or a sentence, and the same role appears three times from three aggregators.",
        solution:
          "Jobs are ingested through scheduled endpoints and upserted on the source's job id, so re-ingesting is safe. Each row keeps both the raw payload and derived fields — cities, regions, countries, remote flag, salary object, validity window — and background routes expire stale postings and purge out-of-scope ones.",
        outcome:
          "The product can improve the data it shows without waiting on an upstream vendor, and the same posting never appears twice.",
      },
      {
        shot: "resume",
        title: "A resume is a document, then a data structure, then a document again",
        problem:
          "Candidates upload PDFs and Word files. AI tailoring needs structure. Employers need a clean PDF back. Every conversion is a chance to lose the formatting people spent hours on.",
        solution:
          "Uploads are parsed into a structured resume schema, tailoring runs against that structure with the target job description as context, and generation renders it back to PDF. Each tailored version is stored as its own resume row, so an application can point at the exact version that was sent.",
        outcome:
          "Applying is one flow — pick a job, tailor, apply — and the record of what was actually sent survives.",
      },
      {
        shot: "pricing",
        title: "Metering AI so the unit economics survive contact with users",
        problem:
          "Every tailoring run and interview session costs money. A flat subscription with unlimited AI is a business that loses more the more it is loved.",
        solution:
          "Every user carries a credit balance; each AI action debits it; purchases, plan refreshes and referral rewards credit it. Each movement is a ledger row rather than a mutation, and the ledger carries a unique index on the Razorpay payment id so a webhook delivered twice can never grant credits twice.",
        outcome:
          "Cost per user is bounded and auditable, and double-delivery — the normal case in webhook systems — is a no-op instead of free credits.",
      },
      {
        shot: "landing",
        title: "Subscriptions are a state machine, not a checkout",
        problem:
          "A recurring plan emits activation, charge, halt, pending, cancel and completion events, often out of order, sometimes twice, occasionally days late. Treating payment as a one-time success callback loses money in both directions.",
        solution:
          "Subscription state — tier, status, billing period, current period end and the Razorpay customer and subscription ids — lives on the user row and is driven by signature-verified webhook events rather than by the browser returning from checkout.",
        outcome:
          "Access rights follow the payment processor's truth, not the optimism of a redirect.",
      },
      {
        shot: "landing",
        title: "Matching roles when the data has no categories",
        problem:
          "Job sources do not provide a category. Candidates still want to say 'show me software roles' and not see sales jobs.",
        solution:
          "Curated field definitions map each field to a keyword set matched against title and description, combined with URL-driven filters for location, work mode, experience and date posted. The list itself is virtualised so thousands of postings scroll without a frame drop.",
        outcome:
          "Useful filtering on messy third-party data, without pretending the sources gave us taxonomy they never had.",
      },
      {
        shot: "profile",
        title: "Growth loops that cost nothing to run",
        problem:
          "Paid acquisition is not an option for a bootstrapped product aimed at students.",
        solution:
          "Referral codes on the user row with reward tracking, a waitlist that captures the plan someone was interested in, and public candidate profiles at a username URL that a job seeker has a reason to share.",
        outcome:
          "The product's own users became the distribution channel, and the waitlist doubles as demand data for pricing.",
      },
    ],
    architecture: {
      summary:
        "Next.js App Router on serverless Postgres, with domain modules per feature (jobs, resume, profile, support, waitlist, feedback) and typed server actions between the UI and the data layer.",
      layers: [
        {
          name: "Data",
          detail:
            "Neon serverless Postgres with Drizzle: users and subscriptions, jobs, applied jobs, resumes, credit ledger, support tickets, waitlist and feedback.",
        },
        {
          name: "Ingestion",
          detail:
            "Scheduled and manual job fetch endpoints with upsert-by-source-id, expiry sweeps and scope purges, secured by shared secrets.",
        },
        {
          name: "AI",
          detail:
            "Google Gemini for resume tailoring and interview prep; parsing via pdf2json and mammoth; generation back out to PDF.",
        },
        {
          name: "Money",
          detail:
            "Razorpay orders and subscriptions with signature-verified webhooks; credits as an append-only ledger with idempotent payment ids.",
        },
        {
          name: "Interface",
          detail:
            "Dashboard with virtualised job list, URL-driven filters, resume library, billing and support; public landing, pricing, blog and profile pages.",
        },
      ],
    },
    engineering: [
      "~50k lines of TypeScript across 371 files, 31 routes and 24 API endpoints",
      "13-table schema covering jobs, applications, resumes, credits, subscriptions and support",
      "Idempotent credit grants via a unique index on the payment id",
      "Virtualised job list with keyword-based field matching over unstructured postings",
      "Scheduled ingestion, expiry and purge routes behind shared-secret auth",
      "Resume parsing (PDF/DOCX) → structured schema → AI tailoring → PDF generation",
    ],
    results: [
      { label: "Commits owned", value: "148 / 214", detail: "lead contributor" },
      { label: "API endpoints", value: "24", detail: "ingestion, AI, payments, cron" },
      { label: "Plan tiers", value: "3", detail: "free, pro, elite — monthly and yearly" },
      { label: "AI spend", value: "Metered", detail: "credit ledger per user" },
    ],
    learnings: [
      "If your product is data, own the pipeline. Renting a feed caps how good the product can ever get.",
      "Ledgers beat counters. A credits column alone cannot answer 'why does this user have 42 credits' — the ledger can.",
      "Assume every webhook arrives twice. A unique index turns that from a bug report into a no-op.",
      "Keyword matching is not glamorous, but it beats waiting for taxonomy that the upstream sources are never going to send.",
    ],
    media: {
      showHero: true,
      showTour: true,
      hero: "liveJobs",
      tour: ["landingFeatures", "landingFlow", "login"],
      shots: {
        landing: {
          enabled: true,
          src: udLiveLanding,
          title: "Landing — live",
          caption:
            "The promise in one line: rewrite the resume for the exact role, then score it against the posting.",
        },
        liveJobs: {
          enabled: true,
          src: udLiveJobs,
          title: "Job board — live",
          caption:
            "The owned feed in production: postings normalised from LinkedIn, Indeed and Adzuna into one shape, with URL-driven filters for location, job type, work mode, experience and date posted.",
        },
        liveJobDetail: {
          enabled: true,
          src: udLiveJobDetail,
          title: "Job detail — live",
          caption:
            "Every posting keeps its source and derived fields, and \"Apply with AI\" is where the resume tailoring flow starts.",
        },
        landingFeatures: {
          enabled: true,
          src: udLiveLanding2,
          title: "How it works",
          caption: "The candidate flow, explained on the way down the page.",
        },
        landingFlow: {
          enabled: true,
          src: udLiveLanding3,
          title: "Product story",
          caption: "Scroll-driven sections covering tailoring, scoring and interview preparation.",
        },
        dashboard: {
          enabled: false,
          src: udDashboard,
          title: "Job browser (local build)",
          caption: "Superseded by the live capture above.",
        },
        resume: {
          enabled: true,
          src: udResume,
          title: "Resume library",
          caption: "Base resume plus every AI-tailored version, each tied to the job it was written for.",
        },
        pricing: {
          enabled: true,
          src: udPricing,
          title: "Plans",
          caption: "Free, Pro and Elite — the tiers the credit ledger and Razorpay subscriptions enforce.",
        },
        profile: {
          enabled: true,
          src: udProfile,
          title: "Candidate profile",
          caption: "Preferences that drive matching, plus the public profile a candidate can share.",
        },
        login: {
          enabled: true,
          src: udLogin,
          title: "Sign in",
          caption: "Google OAuth and credentials side by side.",
        },
      },
    },
    features: [
      "Owned job feed with scheduled ingestion and de-duplication",
      "Derived location, salary, remote and expiry data per posting",
      "Keyword-based field matching over unstructured job data",
      "Virtualised job list with URL-driven filters",
      "Resume parsing from PDF and DOCX into a structured schema",
      "AI resume tailoring against a specific job description",
      "PDF generation of tailored resumes",
      "Interview preparation flow",
      "Credit ledger with idempotent Razorpay top-ups",
      "Subscription tiers driven by verified webhooks",
      "Referral rewards, waitlist and public candidate profiles",
      "In-product support tickets and feedback capture",
    ],
    source: "",
    type: "Web",
    live: "https://udyogam.in",
    start: "Jan 2025",
    end: "Ongoing",
    hassource: false,
    islive: true,
    technology: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Neon Postgres",
      "Drizzle ORM",
      "NextAuth",
      "Google Gemini",
      "Razorpay Subscriptions",
      "Redux Toolkit",
      "react-window",
      "Cloudinary",
      "Tailwind CSS",
      "Radix UI",
      "Vercel",
    ],
    ongoing: true,
    category: "AI Career Platform",
    images: [udLiveJobs, udLiveLanding, udResume],
    img: udLiveJobs,
    caseStudy: true,
    caseStudyLink: "/case-study/udyogam",
  },
  {
    id: "tfs", // Changed from "tfs-case-study" to match slug
    name: "TFS - Toshika Financial Services",
    description:
      "A comprehensive NBFC loan management platform featuring multi-tiered agent tracking, automated referral systems, and end-to-end loan processing. Built for both mobile and web to streamline loan operations, agent performance monitoring, and customer acquisition through structured referral networks.",
    detailedDescription:
      "Developed a complete financial services ecosystem that digitizes the entire loan lifecycle from application to disbursement. The platform features a sophisticated agent hierarchy system with real-time performance tracking, automated commission calculations, and multi-level referral management. Implemented secure KYC verification, credit scoring integration, document management, and automated approval workflows while ensuring RBI compliance and data security standards. We focused on scalability and security, utilizing AWS infrastructure and robust authentication mechanisms to handle sensitive financial data and a growing user base of agents and customers. The mobile-first design for agents ensures ease of use in the field, while the comprehensive web admin panel provides powerful oversight and management capabilities.",
    context:
      "Thoshika Financial Services is an NBFC in Miyapur, Hyderabad. Before this engagement they had been through three IT vendors without a shipped product — the CEO had a clear picture of the business he wanted and no remaining confidence that software teams could deliver it. The brief was not only a mobile app; it was to rebuild trust in technology partners at the same time as building the thing.",
    myRole:
      "I led the engagement end to end — requirements with the CEO, architecture, the agent hierarchy model, and delivery across mobile and the web admin — and worked hands-on in the code.",
    roleBullets: [
      "Owned the data model for the agent hierarchy, referral chains and commission calculation",
      "Led the mobile build for field agents, including offline-tolerant behaviour",
      "Built out the admin console for loan operations, approvals and agent performance",
      "Drove compliance-minded decisions on KYC, document handling and audit trails",
      "Shipped the product in two months, against competitors quoting a year or more",
    ],
    challenges: [
      {
        shot: "app",
        title: "Four financial products, one app a field agent can use one-handed",
        problem:
          "Loans, insurance, property services and legal consultation each have their own paperwork, eligibility rules and timelines. Modelling them as four separate flows would have produced four apps stapled together — unusable for an agent standing in a customer's living room.",
        solution:
          "A single application journey with product-specific steps injected into it, so the agent always sees the same shape: capture the customer, capture the documents, submit, track. Live status tracking runs on the same record regardless of product.",
        outcome: "Agents learn one flow and sell four products from it.",
      },
      {
        shot: "agents",
        title: "Commission is a tree, not a number",
        problem:
          "The business runs on a multi-level referral network: agents recruit agents, and a payout depends on where in that tree a customer entered and what the downstream chain did.",
        solution:
          "The referral relationship is modelled explicitly, with commissions computed from the chain rather than entered by hand, and agent performance surfaced back to each agent in their own dashboard.",
        outcome:
          "Payouts stopped being a monthly spreadsheet argument, and agents could see their own numbers without asking head office.",
      },
      {
        shot: "rewards",
        title: "Retention for a product people use twice a year",
        problem:
          "A loan is an infrequent purchase. Without a reason to open the app between applications, an acquisition-heavy business keeps paying to reacquire the same customers.",
        solution:
          "A daily rewards and referral layer plus membership benefits gives customers a reason to return, and turns satisfied borrowers into the referral network the agent hierarchy already knows how to pay.",
        outcome:
          "The engagement loop and the acquisition channel became the same system rather than two budgets.",
      },
      {
        shot: "trust",
        title: "Rebuilding trust after three failed vendors",
        problem:
          "The hardest constraint was not technical. A client burned three times does not believe timelines, and every slipped week confirms the pattern they already expect.",
        solution:
          "Short, visible delivery increments against a scope the CEO could see moving, with the full product — mobile plus admin — in two months rather than a year-long roadmap of promises.",
        outcome:
          "In the client's words: \"CodeDale not only made it possible, they changed the way we think about technology partners.\" The relationship extended into further ventures.",
      },
    ],
    architecture: {
      summary:
        "A React Native app for agents and customers over a Next.js admin and API layer, with Postgres for the system of record and Redis for the hot paths.",
      layers: [
        { name: "Mobile", detail: "React Native for agents and customers, built for field conditions and patchy connectivity." },
        { name: "Admin", detail: "Next.js console for loan operations, approvals, agent management and reporting." },
        { name: "Data", detail: "PostgreSQL as the system of record with Redis caching; agent hierarchy and referral chains modelled explicitly." },
        { name: "Integrations", detail: "Razorpay for payments, Twilio for SMS, Firebase Cloud Messaging for push, all on AWS." },
      ],
    },
    engineering: [
      "Multi-level agent hierarchy with commission derived from the referral chain",
      "Single application journey parameterised across four financial products",
      "KYC and document handling with audit trails for compliance review",
      "Offline-tolerant mobile behaviour for field use",
      "Delivered in two months against a market norm of a year",
    ],
    results: [
      { label: "Time to ship", value: "2 months", detail: "competitors quoted 1+ year" },
      { label: "Products in one app", value: "4", detail: "loans, insurance, property, legal" },
      { label: "Social growth", value: "0 → 10k", detail: "Instagram followers in one month" },
      { label: "Prior vendors", value: "3", detail: "none of whom shipped" },
    ],
    learnings: [
      "When a client has been burned, visible increments beat an accurate roadmap. Trust is rebuilt in weeks, not in documents.",
      "Model the hierarchy, not the payout. Once the referral tree is a real relationship, commission is a query.",
      "For infrequent purchases, the retention loop and the acquisition loop should be the same system.",
    ],
    media: {
      showHero: true,
      showTour: true,
      hero: "app",
      tour: ["home", "membership"],
      shots: {
        app: { enabled: true, src: tfs1, title: "The agent app", caption: "One journey across loans, insurance, property and legal services." },
        agents: { enabled: true, src: tfs2, title: "Agent network", caption: "Multi-level referral hierarchy with performance visible to each agent." },
        rewards: { enabled: true, src: tfs3, title: "Rewards and referrals", caption: "The retention loop that doubles as the acquisition channel." },
        home: { enabled: true, src: tfs5, title: "Home", caption: "Product entry points and live application status in one screen." },
        membership: { enabled: true, src: tfs6, title: "Membership", caption: "Subscription benefits that give customers a reason to return between applications." },
        trust: { enabled: false, src: tfs1, title: "Delivery", caption: "Shipped in two months." },
      },
    },
    features: [
      "Multi-level agent hierarchy & tracking",
      "Automated referral commission system",
      "Real-time loan application processing",
      "KYC verification & document management",
      "Credit scoring & risk assessment",
      "Agent performance analytics dashboard",
      "Automated approval workflows",
      "Commission tracking & payouts",
      "Customer relationship management",
      "Compliance reporting & audit trails",
      "Push notifications & SMS alerts",
      "Offline data synchronization (for mobile)",
    ],
    source: "", // Add actual source if available
    type: "mobile", // "Mobile & Web" might be more accurate
    live: "https://play.google.com/store/apps/details?id=tech.codedale.tfsfinserv&hl=en_IN",
    start: "Feb 2024",
    end: "Ongoing",
    hassource: false, // Update if you have a public source
    islive: true,
    technology: [
      "React Native",
      "Next.js (Admin)",
      "PostgreSQL",
      "Redis",
      "AWS EC2",
      "JWT Auth",
      "Razorpay",
      "Twilio",
      "Firebase (FCM)",
      "TypeScript",
    ],
    ongoing: true,
    category: "Fintech Platform",
    images: [tfs1, tfs2, tfs3], // Use the imported image objects
    img: tfs1, // Main card image
    caseStudy: true,
    caseStudyLink: "/case-study/tfs",
    // You can add more fields specific to case studies here:
    // e.g., challenge: "The primary challenge was...", solution: "We developed a multi-platform solution..."
  },
  {
    id: "xzult", // Changed from "xzult-case-study"
    name: "Xzult Educations",
    description:
      "An overseas education partner who bridges the gap between academic excellence and career success, helping students thrive both at home and abroad. Created a comprehensive website to generate leads with integrated Razorpay payments, WhatsApp communication, and advanced SEO optimization using Next.js.",
    detailedDescription:
      "Built a performance-optimized website for Xzult Educations, a leading overseas education consultancy. The platform serves as a comprehensive lead generation system with seamless payment integration for consultation fees, automated WhatsApp communication for instant student support, and advanced SEO strategies including structured data, sitemap generation, and keyword optimization. This significantly improved organic traffic, search engine rankings, and conversion rates for new student inquiries. The site also features a dynamic blog and resources section managed through a simple interface.",
    context:
      "Xzult Eduventures place Indian students into overseas universities. In that market the website is the sales floor: families compare three or four consultancies in an evening, and the one that looks credible and answers fastest gets the enquiry. The old site did neither.",
    myRole:
      "I led and built this one — design direction, front-end, payments, WhatsApp routing and the SEO work.",
    roleBullets: [
      "Owned the site architecture: home, services, pricing, partner and policy surfaces",
      "Built the lead capture path end to end, from form to WhatsApp handoff",
      "Integrated Razorpay for consultation fees so intent converts to payment in one session",
      "Ran the technical SEO work — structured data, sitemaps, metadata and performance",
    ],
    challenges: [
      {
        shot: "home",
        title: "Credibility in the first viewport",
        problem:
          "Study-abroad consultancies all make the same claims. A family deciding where to send their child is scanning for signals of legitimacy in seconds, not reading copy.",
        solution:
          "A dark, premium frame with an animated world map making the destination network tangible, social proof — student count and ratings — in the hero, and the services grid immediately under it.",
        outcome: "The proposition and the proof land before the first scroll.",
      },
      {
        shot: "services",
        title: "Turning a consultancy's services into a buyable list",
        problem:
          "Consultancy work is a bundle of advisory steps — counselling, applications, visas, loans, accommodation. Presented as prose, nobody knows what they are paying for.",
        solution:
          "Each service is its own card with a defined outcome, and the pricing page turns advisory work into packages a family can compare and buy.",
        outcome: "The ambiguity that makes people postpone a decision is removed from the page.",
      },
      {
        shot: "pricing",
        title: "Collecting the consultation fee before the intent cools",
        problem:
          "A lead that has to wait for a callback to pay is a lead that goes back to comparing competitors.",
        solution:
          "Razorpay checkout sits directly in the pricing flow, supporting the payment methods Indian families actually use, with WhatsApp as the immediate follow-up channel rather than an email ticket.",
        outcome: "Intent converts in the same session it is created.",
      },
      {
        shot: "partner",
        title: "Two audiences, one site",
        problem:
          "The business also recruits partner agents and campus ambassadors — a completely different pitch to the student-and-parent audience the homepage is written for.",
        solution:
          "A dedicated partner surface with its own argument and its own call to action, kept out of the student journey so neither audience reads the other's page.",
        outcome: "One site serves recruitment and acquisition without diluting either.",
      },
    ],
    architecture: {
      summary:
        "A statically rendered Next.js marketing site with animated components, payment integration and a measurement layer wired in from day one.",
      layers: [
        { name: "Pages", detail: "Home, services, pricing, partner and policy routes, statically rendered for speed and indexing." },
        { name: "Motion", detail: "Framer Motion and Lottie for the hero and section transitions; a dotted world map for the destination network." },
        { name: "Conversion", detail: "Razorpay checkout, WhatsApp handoff and enquiry capture." },
        { name: "Measurement", detail: "Vercel Analytics and Speed Insights alongside structured data and sitemap generation." },
      ],
    },
    engineering: [
      "Statically rendered marketing site tuned for Core Web Vitals and indexing",
      "Razorpay checkout embedded in the pricing flow",
      "WhatsApp handoff as the primary response channel",
      "Structured data, sitemaps and metadata for organic acquisition",
      "Animated destination map and Lottie-driven section transitions",
    ],
    results: [
      { label: "Surfaces", value: "5", detail: "home, services, pricing, partner, policy" },
      { label: "Audiences", value: "2", detail: "students and partner agents" },
      { label: "Payments", value: "In-session", detail: "consultation fees via Razorpay" },
    ],
    learnings: [
      "For a consultancy, the pricing page is the product page. Ambiguity about what you are buying is the main reason people stall.",
      "WhatsApp is not a nice-to-have in this market — it is the response-time channel that decides who wins the enquiry.",
      "Motion should carry information. The map is not decoration; it is the destination network stated visually.",
    ],
    media: {
      showHero: true,
      showTour: true,
      hero: "home",
      tour: ["homeNetwork"],
      shots: {
        home: { enabled: true, src: xsHome, title: "Homepage", caption: "Positioning, social proof and the destination network in the first screen." },
        homeNetwork: { enabled: true, src: xsHome1, title: "Destination network", caption: "The animated map that makes the reach of the consultancy tangible." },
        homeProof: { enabled: true, src: xsHome2, title: "Proof and process", caption: "How the consultancy actually works, laid out as steps." },
        services: { enabled: true, src: xsServices, title: "Services", caption: "Advisory work broken into defined, comparable outcomes." },
        pricing: { enabled: true, src: xsPricing, title: "Pricing", caption: "Packages with Razorpay checkout in the same flow." },
        partner: { enabled: true, src: xsPartner, title: "Partner programme", caption: "A second audience with its own page and its own pitch." },
      },
    },
    features: [
      "Lead generation forms & CRM integration",
      "Razorpay payment integration",
      "WhatsApp API for direct messaging",
      "Advanced SEO (On-page, Technical)",
      "Mobile-responsive & accessible design",
      "Student inquiry management system",
      "Dynamic course & university catalog",
      "Consultation booking & scheduling",
      "Blog and content management",
    ],
    source: "",
    type: "Web",
    live: "https://xzult.com",
    hassource: false,
    islive: true,
    start: "Jun 2023",
    end: "Aug 2023",
    technology: [
      "Next.js",
      "Razorpay",
      "WhatsApp API",
      "SEO",
      "Tailwind CSS",
      "Vercel Analytics",
      "Google Analytics",
    ],
    ongoing: false,
    category: "Web Application",
    images: [xzult1, xzult2, xzult3],
    img: three, // Assuming 'three' is xzult1 or a representative image
    caseStudy: true,
    caseStudyLink: "/case-study/xzult",
  },
  {
    id: "yantram", // Changed from "yantram-case-study"
    name: "NVcore - Yantram Medtech",
    description:
      "A comprehensive medical device integration solution that bridges hardware and software through seamless Android connectivity. The project involved fixing critical background processing issues, establishing reliable Bluetooth Low Energy communication protocols, and implementing automated deployment pipelines.",
    detailedDescription:
      "Tackled complex challenges in medical device connectivity for Yantram Medtech's NVcore system. The existing Android application struggled with maintaining background operations for data syncing and often faced Bluetooth communication failures with proprietary medical hardware. My role involved re-architecting background services using Android WorkManager for reliability, implementing robust BLE communication protocols with comprehensive error handling and auto-reconnection logic. Additionally, I set up CI/CD pipelines using AWS Elastic Beanstalk and CodePipeline for streamlined, automated deployments, significantly reducing manual intervention and deployment errors.",
    context:
      "Yantram Medtech's NVcore product is a medical device with an Android companion app. The hardware was ready; the software around it was not — background sync died silently, Bluetooth sessions dropped mid-reading, and every release was a manual, error-prone ritual. In a clinical context those are not annoyances, they are missing data.",
    myRole:
      "I led the remediation — diagnosing the failure modes, re-architecting the background and connectivity layers, and putting a deployment pipeline under the whole thing.",
    roleBullets: [
      "Diagnosed and re-architected background processing around Android WorkManager",
      "Rebuilt the Bluetooth Low Energy layer with error handling and auto-reconnection",
      "Introduced buffering so readings survive a dropped link instead of being lost",
      "Set up AWS CI/CD (Elastic Beanstalk, CodePipeline) to remove manual deployment steps",
    ],
    challenges: [
      {
        shot: "device",
        title: "Android will kill your background work, and it will not tell you",
        problem:
          "Data sync ran as ordinary background work. Under Doze and aggressive OEM battery management it stopped silently — the app looked fine and the readings simply never arrived.",
        solution:
          "Sync was rebuilt on WorkManager with constraints and retry policy, so the system schedules it, survives process death and reboots, and failures are observable instead of silent.",
        outcome: "Sync became something the platform guarantees rather than something the app hopes for.",
      },
      {
        shot: "ble",
        title: "BLE with proprietary medical hardware",
        problem:
          "Bluetooth Low Energy against a proprietary device fails in ways a happy-path implementation never sees: mid-session drops, stale GATT caches, reconnect storms, partial reads.",
        solution:
          "A connectivity layer with explicit state handling, auto-reconnection, and diagnostics around each failure class, plus buffering so a reading taken during a drop is delivered when the link returns.",
        outcome: "Sessions recover on their own, and a dropped connection costs a delay instead of a data point.",
      },
      {
        shot: "pipeline",
        title: "Manual deployment is a clinical risk, not just a chore",
        problem:
          "Releases were assembled by hand. In a medical context, an untracked build is an untraceable one.",
        solution:
          "Automated pipelines on AWS Elastic Beanstalk and CodePipeline, so every deployment is reproducible and attributable.",
        outcome: "Releases stopped depending on one person remembering the steps.",
      },
    ],
    architecture: {
      summary:
        "A React Native application with native Android modules for the parts that must be reliable — background scheduling and Bluetooth — behind an automated AWS deployment pipeline.",
      layers: [
        { name: "App", detail: "React Native shell with native Android (Java/Kotlin) modules for scheduling and connectivity." },
        { name: "Background", detail: "WorkManager-based sync with constraints, retries and reboot survival." },
        { name: "Connectivity", detail: "Bluetooth Low Energy with explicit state handling, auto-reconnection and buffering." },
        { name: "Delivery", detail: "AWS Elastic Beanstalk and CodePipeline for reproducible deployments." },
      ],
    },
    engineering: [
      "Background sync rebuilt on WorkManager with retry and reboot survival",
      "BLE layer with auto-reconnection, diagnostics and read buffering",
      "Local buffering so data survives connectivity loss",
      "Automated AWS deployment pipeline replacing manual releases",
    ],
    results: [
      { label: "Failure mode fixed", value: "Silent sync", detail: "now platform-scheduled" },
      { label: "Connectivity", value: "Self-healing", detail: "auto-reconnect + buffering" },
      { label: "Releases", value: "Automated", detail: "Elastic Beanstalk + CodePipeline" },
    ],
    learnings: [
      "On Android, 'it works on my phone' is a statement about one OEM's battery policy, not about your code.",
      "In device software, buffering is the feature. The link will drop; the question is whether the reading survives it.",
      "Reliability work is invisible until you make the failures observable. Instrument first, then fix.",
    ],
    media: {
      showHero: true,
      showTour: false,
      hero: "device",
      shots: {
        device: { enabled: true, src: yantram, title: "NVcore companion app", caption: "The Android application paired with the medical device." },
        ble: { enabled: true, src: yantram2, title: "Connectivity", caption: "BLE sessions with auto-reconnection and buffered readings." },
        pipeline: { enabled: true, src: yantram3, title: "Data flow", caption: "Readings synced through platform-scheduled background work." },
      },
    },
    features: [
      "Robust background service optimization (WorkManager)",
      "Stable Bluetooth Low Energy (BLE) integration",
      "Real-time data synchronization & buffering",
      "AWS CI/CD pipeline automation (Elastic Beanstalk)",
      "Adherence to medical device software compliance needs",
      "Error handling & diagnostics for connectivity",
      "Secure data transmission protocols",
    ],
    source: "",
    type: "mobile",
    live: "",
    start: "Jan 2024",
    end: "Ongoing",
    hassource: false,
    islive: false,
    technology: [
      "React Native",
      "Native Android (Java/Kotlin)",
      "Bluetooth LE",
      "WebRTC (for future features)",
      "AWS (EC2, EBS, CodePipeline)",
      "Metro Bundler",
      "SQLite",
    ],
    ongoing: true,
    category: "Mobile App / MedTech",
    images: [yantram, yantram2, yantram3],
    img: one, // Assuming 'one' is yantram or a representative image
    caseStudy: true,
    caseStudyLink: "/case-study/yantram",
  },
  {
    id: "ngb", // Changed from "ngb-case-study"
    name: "NGB Mobile Learning Platform",
    description:
      "A feature-rich mobile Learning Management System built for Nawin Golden Boy's educational platform. Enables seamless course delivery, live streaming, community engagement, and secure payment processing with advanced video content protection.",
    detailedDescription:
      "Developed a comprehensive mobile Learning Management System (LMS) for Nawin Golden Boy, catering to students preparing for competitive exams. The platform supports the entire student learning journey, from course discovery and enrollment to content consumption and community interaction. Key integrations include VdoCipher for DRM-protected video streaming to prevent piracy, real-time chat and discussion forums for community engagement, and a robust payment system using Razorpay, supporting various Indian payment methods. The app also features progress tracking, quizzes, and offline content download capabilities.",
    context:
      "Nawin Golden Boy teaches students preparing for competitive exams — an audience that studies on mid-range Android phones, on shared data plans, and in a market where recorded lectures get pirated the week they are released. The platform had to hold up on all three fronts at once.",
    myRole:
      "I led the mobile platform build — content delivery architecture, DRM strategy, payments and the community layer.",
    roleBullets: [
      "Owned the learning journey: discovery, enrolment, consumption, assessment and community",
      "Integrated DRM-protected video delivery to stop lecture piracy",
      "Built the payment path around the methods Indian students actually use",
      "Added offline download support for students on constrained data",
    ],
    challenges: [
      {
        shot: "app",
        title: "Content that cannot leak",
        problem:
          "Recorded lectures are the entire asset. Plain HLS or a signed URL is a speed bump: one student screen-records or shares a link and the course is on Telegram by evening.",
        solution:
          "Video is delivered through VdoCipher's DRM pipeline rather than raw streams, so playback is tied to the authorised session instead of to a URL anyone can pass around.",
        outcome: "The business's core asset stops being one shared link away from free.",
      },
      {
        shot: "learning",
        title: "Studying without a stable connection",
        problem:
          "Students watch on the move, on patchy mobile data, and cannot re-download a lecture every time they revise.",
        solution:
          "Offline download support with progress tracking that reconciles when the device comes back online, so watching offline still counts toward completion.",
        outcome: "The app is usable on the commute, not just on wifi.",
      },
      {
        shot: "community",
        title: "Completion is a social problem, not a content problem",
        problem:
          "Self-paced courses have brutal drop-off. More content does not fix it; isolation is what kills the cohort.",
        solution:
          "Real-time chat, discussion forums and live sessions inside the app, alongside quizzes and progress tracking, so students see each other making progress.",
        outcome: "The platform gives students a reason to come back that is not just the next video.",
      },
      {
        shot: "payments",
        title: "Payments that match how students actually pay",
        problem:
          "Card-first checkout excludes a large share of this audience, and a failed payment at enrolment is usually a lost sale rather than a retry.",
        solution:
          "Razorpay with UPI, netbanking and wallets, wired into enrolment so access is granted the moment payment settles.",
        outcome: "Enrolment completes on the student's terms rather than the gateway's.",
      },
    ],
    architecture: {
      summary:
        "A React Native application over a Next.js API layer, with third-party services carrying the hard parts — DRM video, payments and push.",
      layers: [
        { name: "App", detail: "React Native client covering discovery, enrolment, playback, quizzes and community." },
        { name: "Content", detail: "VdoCipher DRM-protected streaming with offline download support." },
        { name: "Backend", detail: "Next.js API with NextAuth-based sessions and progress tracking." },
        { name: "Commerce", detail: "Razorpay covering UPI, netbanking, cards and wallets." },
        { name: "Engagement", detail: "Real-time chat and forums, with Firebase Cloud Messaging for push." },
      ],
    },
    engineering: [
      "DRM-protected video delivery tied to the authorised session",
      "Offline download with progress reconciliation on reconnect",
      "Real-time chat and discussion forums inside the learning flow",
      "Razorpay integration covering India-first payment methods",
      "Quizzes and progress tracking across the course journey",
    ],
    results: [
      { label: "Content protection", value: "DRM", detail: "VdoCipher-backed playback" },
      { label: "Offline", value: "Supported", detail: "downloads with synced progress" },
      { label: "Payment methods", value: "UPI+", detail: "netbanking, cards, wallets" },
    ],
    learnings: [
      "If your content is the business, protecting it is a product feature, not an infrastructure detail.",
      "Design for the commute, not the desk. Offline support decides whether the app is used daily or weekly.",
      "Course completion is a social problem. Community features move the metric that more content cannot.",
    ],
    media: {
      showHero: true,
      showTour: true,
      hero: "app",
      tour: [],
      shots: {
        app: { enabled: true, src: ngb1, title: "Course experience", caption: "Discovery through to playback in one mobile journey." },
        learning: { enabled: true, src: ngb2, title: "Learning flow", caption: "Lectures, quizzes and progress tracking, online or offline." },
        community: { enabled: true, src: ngb3, title: "Community", caption: "Chat and discussion inside the app, where completion is actually won." },
        payments: { enabled: false, src: ngb1, title: "Enrolment", caption: "Razorpay checkout with India-first payment methods." },
      },
    },
    features: [
      "DRM Encrypted video streaming (VdoCipher)",
      "Live class & webinar integration",
      "Community forums & real-time chat",
      "Multi-payment gateway support (Razorpay)",
      "Student progress tracking & analytics",
      "Offline content download & access",
      "Push notifications for updates & reminders",
      "Quiz & assignment modules",
    ],
    source: "",
    type: "mobile",
    live: "", // Add Play Store/App Store link if available
    start: "Sep 2023",
    end: "Feb 2024",
    hassource: false,
    islive: false,
    technology: [
      "React Native",
      "Next.js (Backend API)",
      "VdoCipher",
      "NextAuth.js",
      "Razorpay",
      "Tailwind CSS (for web components)",
      "REST API",
      "Firebase (FCM)",
    ],
    ongoing: false,
    category: "Mobile LMS App",
    images: [ngb1, ngb3, ngb2],
    img: two, // Assuming 'two' is ngb1 or a representative image
    caseStudy: true,
    caseStudyLink: "/case-study/ngb",
  },
  {
    id: "gurucodes", // Changed from "gurucodes-case-study"
    name: "GuruCodes Academy",
    description:
      "A high-converting course landing page and learning platform that drives significant traffic and sales. Features modern design, seamless payment integration, and comprehensive analytics to optimize conversion rates.",
    detailedDescription:
      "Built a performance-optimized landing page and integrated learning environment for GuruCodes Academy's flagship DSA course. The platform consistently attracts over 100 daily organic visitors and achieves industry-leading conversion rates. Implemented A/B testing capabilities for headlines and CTAs, integrated advanced analytics (Google Analytics, Hotjar) for user behavior tracking, and created a streamlined, mobile-first checkout process using Razorpay. This resulted in over 300 course sales within the first quarter of launch. The design focuses on clarity, trust-building elements, and a compelling value proposition.",
    context:
      "GuruCodes Academy sell a single flagship DSA course. With one product and no sales team, the landing page is the entire funnel — it has to do the work a salesperson would do, and it has to do it to developers, who are a famously advertising-resistant audience.",
    myRole:
      "I led and built the conversion surface — the page, the checkout path, the experimentation setup and the analytics behind it.",
    roleBullets: [
      "Built the landing page and the post-purchase access flow",
      "Set up A/B testing on headlines and calls to action",
      "Instrumented behaviour analytics to find where the page lost people",
      "Integrated Razorpay checkout with transactional email on purchase",
    ],
    challenges: [
      {
        shot: "landing",
        title: "Selling to developers, who can smell a funnel",
        problem:
          "The usual conversion playbook — urgency banners, fake scarcity, testimonial walls — actively repels a technical audience evaluating whether the instructor knows the material.",
        solution:
          "The page leads with the curriculum and the problem-solving approach, using clarity as the persuasion mechanism: what you will be able to do, in what order, with what support.",
        outcome: "The pitch is the content, which is also the thing being sold.",
      },
      {
        shot: "conversion",
        title: "Guessing is not optimisation",
        problem:
          "Opinions about headlines are cheap and usually wrong, and a single landing page gives no way to tell which opinion was right.",
        solution:
          "An A/B testing setup on headlines and CTAs with behaviour analytics and heatmaps underneath, so drop-off points were observed rather than argued about.",
        outcome: "Copy decisions became measurements instead of debates.",
      },
      {
        shot: "checkout",
        title: "The gap between 'yes' and 'enrolled'",
        problem:
          "Every step between deciding to buy and having access is a place the sale evaporates — especially on mobile, where most of the traffic lands.",
        solution:
          "A mobile-first Razorpay checkout with immediate course access on success and transactional email confirming it, so the purchase completes in one sitting.",
        outcome: "The distance from intent to access is short enough that momentum carries the buyer across it.",
      },
    ],
    architecture: {
      summary:
        "A statically rendered Next.js landing page with a checkout path, an experimentation layer and analytics instrumentation.",
      layers: [
        { name: "Page", detail: "Next.js with Magic UI components and Tailwind, tuned for fast first paint on mobile." },
        { name: "Experimentation", detail: "A/B variants on headline and call-to-action copy." },
        { name: "Measurement", detail: "Google Analytics for funnels, Hotjar for heatmaps and session behaviour." },
        { name: "Commerce", detail: "Razorpay checkout with SendGrid transactional email and immediate access provisioning." },
      ],
    },
    engineering: [
      "Statically rendered, mobile-first landing page",
      "A/B testing framework over headline and CTA variants",
      "Heatmap and funnel instrumentation to locate drop-off",
      "Razorpay checkout with automated access and confirmation email",
      "SEO work driving sustained organic traffic",
    ],
    results: [
      { label: "Course sales", value: "300+", detail: "in the first quarter after launch" },
      { label: "Daily organic", value: "100+", detail: "visitors from search" },
      { label: "Funnel", value: "1 page", detail: "no sales team in the loop" },
    ],
    learnings: [
      "To a technical audience, clarity converts better than urgency. The curriculum is the persuasion.",
      "Instrument before optimising. Heatmaps answered in a week what the team had been debating for a month.",
      "Shorten the distance between intent and access. Every extra step is a place the sale leaks out.",
    ],
    media: {
      showHero: true,
      showTour: false,
      hero: "landing",
      shots: {
        landing: { enabled: true, src: gurucodes, title: "Landing page", caption: "Curriculum-forward pitch aimed at a technical audience." },
        conversion: { enabled: true, src: gurucodes2, title: "Course detail", caption: "The problem-solving approach made concrete before the price appears." },
        checkout: { enabled: false, src: gurucodes, title: "Checkout", caption: "Mobile-first Razorpay flow with immediate access." },
      },
    },
    features: [
      "High-conversion landing page design",
      "A/B testing framework for optimization",
      "Advanced analytics & heatmaps (Hotjar)",
      "Secure payment processing (Razorpay)",
      "SEO optimization for organic traffic",
      "Mobile-responsive and fast-loading",
      "Testimonial and social proof sections",
      "Simple course access post-purchase",
    ],
    source: "",
    type: "Web",
    live: "https://academy.gurucodes.dev/problem-solving-and-dsa-in-cpp",
    hassource: false,
    islive: true,
    start: "Jun 2023",
    end: "Aug 2023",
    technology: [
      "Next.js",
      "Razorpay",
      "Magic UI (components)",
      "Tailwind CSS",
      "Google Analytics",
      "Hotjar",
      "SendGrid (Transactional Emails)",
    ],
    ongoing: false,
    category: "Web Application / EdTech",
    images: [gurucodes, gurucodes2], // Add more if available
    img: three, // Re-evaluate which image 'three' refers to, or use gurucodes directly
    caseStudy: true,
    caseStudyLink: "/case-study/gurucodes",
  },
  {
    id: "beyond-basics",
    name: "Beyond Basics — Cohort Learning Landing Experience",
    description:
      "A 13,000-pixel scrolling pitch for a cohort-based upskilling programme: motion-led sections, an interactive curriculum breakdown and a pricing story, built to convert a scroll into a cohort signup.",
    detailedDescription:
      "Beyond Basics sells a six-month, learn-by-doing programme — the kind of purchase people research rather than impulse-buy. The site is the whole funnel: it has to establish that the curriculum is real, that the mentors exist, that the outcomes are credible, and that the price is fair, all before the visitor reaches a form. The build is a single Next.js route composed of section components, each with its own motion treatment, riding on a smooth-scroll layer so the page reads as one continuous narrative rather than a stack of blocks. Everything is typed, static and image-optimised so the motion never costs the page its load time.",
    context:
      "Indian upskilling is a crowded, sceptical market: every programme claims placements and every landing page looks the same. The brief was to make the curriculum itself the argument — show the modules, the tech stacks, the mentors and the community, rather than asserting outcomes in a headline.",
    myRole:
      "I led the project — design direction with the client, the section-by-section narrative, and the front-end build.",
    roleBullets: [
      "Turned a Figma concept into a component-per-section Next.js build",
      "Owned the motion system: scroll-linked reveals, marquee bands and a smooth-scroll layer",
      "Built the curriculum breakdown as an interactive accordion rather than a static list",
      "Kept the page fast despite its length — static rendering, optimised imagery, no heavy runtime",
    ],
    challenges: [
      {
        shot: "hero",
        title: "Motion that sells without a jank tax",
        problem:
          "Scroll-driven animation is what makes a page like this feel premium, and it is also the fastest way to make a page stutter on a mid-range Android phone — which is most of the audience.",
        solution:
          "A smooth-scroll layer drives the page, with motion kept to transform and opacity so the compositor does the work. Each section animates on entry and then stops; nothing runs continuously off-screen.",
        outcome: "The page reads as one cinematic scroll while staying usable on the devices the audience actually owns.",
      },
      {
        shot: "curriculum",
        title: "Making a curriculum legible in ten seconds",
        problem:
          "A six-month syllabus dumped on a page is a wall of text nobody reads, but hiding it behind 'request the brochure' loses the sceptical buyer you were trying to convince.",
        solution:
          "The curriculum is an interactive module breakdown — each module expands in place, and the tech-stack and Gen-AI panels give a visual answer to 'what will I actually learn' before anyone opens a single module.",
        outcome: "The strongest sales asset — the syllabus — is on the page instead of behind a form.",
      },
      {
        shot: "social",
        title: "Proof, not adjectives",
        problem: "Claims about outcomes are worthless on a page where every competitor claims the same thing.",
        solution:
          "Proof is shown as artefacts: mentor cards, community and LinkedIn-style evidence, progress widgets, and a calendar that makes the cohort's cadence concrete.",
        outcome: "The page argues with evidence rather than adjectives.",
      },
    ],
    architecture: {
      summary:
        "A single statically rendered Next.js route composed from independent section components, with shared UI primitives and a typed content layer.",
      layers: [
        { name: "Structure", detail: "Route groups per narrative block — landing, introduction, why-join, video, FAQ, pricing — composed into one page." },
        { name: "Motion", detail: "Framer Motion for entry animation, Lenis for smooth scrolling, a marquee for the logo and social bands." },
        { name: "UI", detail: "Tailwind CSS with Radix primitives; accordion-based curriculum and calendar widgets." },
        { name: "Delivery", detail: "Static rendering with next/image optimisation, deployed on Vercel." },
      ],
    },
    engineering: [
      "Single route, ~13,000px of scroll, composed from independent section components",
      "Motion limited to compositor-friendly properties to protect mid-range device performance",
      "Interactive curriculum accordion driven by typed content, not hard-coded markup",
      "Image-optimised throughout so length does not become weight",
    ],
    results: [
      { label: "Page length", value: "13k px", detail: "one continuous narrative" },
      { label: "Route count", value: "1", detail: "section components, not pages" },
      { label: "Runtime deps", value: "Lean", detail: "motion + UI primitives only" },
    ],
    learnings: [
      "On a long-form sales page, the scroll is the storyboard. If a section does not advance the argument, it is decoration.",
      "Put the syllabus on the page. Gating your strongest proof behind a form optimises for lead count over conversion.",
      "Animate on entry, then stop. Continuous motion off-screen is the tax nobody notices until the phone gets warm.",
    ],
    media: {
      showHero: true,
      showTour: true,
      hero: "hero",
      tour: ["stacks", "pricing", "faq"],
      shots: {
        hero: { enabled: true, src: bb0, title: "Hero", caption: "\"No Boring Lectures\" — the positioning stated in the first viewport, with the cohort CTA above the fold." },
        social: { enabled: true, src: bb1, title: "Proof band", caption: "Community and mentor evidence instead of outcome claims." },
        stacks: { enabled: true, src: bb2, title: "What you will learn", caption: "Tech-stack and Gen-AI panels answering the question before the syllabus does." },
        curriculum: { enabled: true, src: bb3, title: "Curriculum", caption: "Modules expand in place — the syllabus is the sales asset, so it lives on the page." },
        mentors: { enabled: true, src: bb4, title: "Mentors", caption: "The people behind the cohort, made concrete." },
        pricing: { enabled: true, src: bb5, title: "Pricing", caption: "The commercial ask, after the argument has been made." },
        faq: { enabled: true, src: bb6, title: "FAQ", caption: "The objections handled last, where they belong." },
      },
    },
    features: [
      "Scroll-linked motion narrative",
      "Smooth-scroll layer across the full page",
      "Interactive curriculum module accordion",
      "Tech stack and Gen-AI showcase panels",
      "Mentor and community proof sections",
      "Cohort calendar widget",
      "Pricing and FAQ sections",
      "Fully responsive, image-optimised build",
    ],
    source: "https://github.com/codedale-tech/beyond-basics",
    type: "Web",
    live: "",
    start: "Feb 2025",
    end: "Mar 2025",
    hassource: false,
    islive: false,
    technology: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Lenis",
      "Radix UI",
      "Magic UI",
      "Vercel",
    ],
    ongoing: false,
    category: "Marketing Experience / EdTech",
    images: [bb0, bb3, bb5],
    img: bb0,
    caseStudy: true,
    caseStudyLink: "/case-study/beyond-basics",
  },
  {
    id: "ath",
    name: "ATH — All Time High",
    description:
      "A shader-driven 3D web experience for a Dubai crypto launch firm: a living depth field in the hero, motion-guided reveals down the page, and a minimalist frame that keeps the credibility signals legible on a phone.",
    detailedDescription:
      "All Time High manage token launches and market strategy — a category where the website is the credibility. The brief was immersive, but the constraint was ruthless: real-time 3D that stays smooth on mainstream devices, without burying the trust signals a crypto client is judged on. The build leans on GLSL shader work rather than heavy 3D scenes, so the hero renders a responsive, lit depth field at a fraction of the cost of a model-based approach, and the rest of the page uses parallax and motion-guided reveals to keep the momentum without adding weight.",
    context:
      "ATH are a small Dubai team working with founders who are, by definition, evaluating whether this is a serious operation. An over-produced site reads as noise; a plain one reads as a template. The experience had to feel engineered.",
    myRole:
      "Led the engagement end to end — creative direction with the client, the performance strategy for the 3D work, and delivery.",
    roleBullets: [
      "Set the creative and technical direction: shader-based visuals over model-heavy 3D",
      "Owned the performance budget across mobile and mainstream desktop hardware",
      "Directed the scroll narrative — hero depth field, parallax reveals, ambient motion footer",
      "Ran the client relationship and delivery to launch",
    ],
    challenges: [
      {
        shot: "scroll",
        title: "Immersive and fast are usually a trade — here they could not be",
        problem:
          "Real-time 3D on the web normally means shipping geometry, textures and a renderer, which is exactly what kills a first visit on a phone over mobile data.",
        solution:
          "The hero is mathematics, not models: GLSL shaders render a living depth field with responsive lighting, so the visual weight is in the fragment shader rather than in downloaded assets.",
        outcome:
          "The client's summary of it was the brief met exactly — \"immersive, fast, and exactly on brand.\"",
      },
      {
        title: "Minimalism that still carries credibility signals",
        problem:
          "Crypto audiences look for specific proof — who the team is, what they have launched, how to reach them. A maximalist 3D site tends to bury all of it.",
        solution:
          "The 3D work is confined to the hero and an ambient footer layer; the middle of the page is a restrained, typographic frame where the credibility content sits without competing with motion.",
        outcome: "The experience feels alive at the edges and stays legible in the middle, where the decisions get made.",
      },
      {
        title: "Mobile stability as a launch gate",
        problem:
          "Shader-driven pages can pass on a developer's laptop and thermally throttle or crash on a mid-range phone — the device most of the audience will open the link on.",
        solution:
          "The motion budget was capped by device class, with reveals tied to scroll position rather than continuous loops, and the effect tuned down instead of switched off on constrained hardware.",
        outcome: "One experience that degrades gracefully instead of two codebases that drift apart.",
      },
    ],
    architecture: {
      summary:
        "A marketing site whose visual identity lives in shader code: a GLSL hero layer, a scroll-driven reveal system, and a conventional, fast, accessible document underneath.",
      layers: [
        { name: "Visual", detail: "GLSL fragment shaders producing a depth field with responsive lighting — no model or texture payload." },
        { name: "Motion", detail: "Parallax and scroll-position reveals, plus an ambient motion layer in the footer." },
        { name: "Frame", detail: "Minimal typographic layout carrying the credibility content between the animated bookends." },
        { name: "Budget", detail: "Motion scaled by device capability so mobile stability is a design constraint, not an afterthought." },
      ],
    },
    engineering: [
      "Shader-based hero visuals instead of downloaded 3D assets",
      "Scroll-position-driven reveals rather than continuous animation loops",
      "Device-aware motion budget for mobile stability",
      "Minimalist frame keeping trust signals above the noise floor",
    ],
    results: [
      { label: "Client", value: "ATH", detail: "crypto launch firm, Dubai" },
      { label: "Hero payload", value: "Shader", detail: "maths, not models" },
      { label: "Services", value: "3", detail: "web development, landing page, UI/UX" },
    ],
    learnings: [
      "Shaders are the cheapest way to buy depth on the web — the cost is in the maths, not in the download.",
      "Put the spectacle at the edges of the page and leave the middle calm. That is where people actually read.",
      "If the audience opens it on a phone, mobile stability is not QA — it is the design constraint.",
    ],
    media: {
      showHero: true,
      showTour: true,
      hero: "hero",
      tour: ["page", "problem", "solution"],
      shots: {
        hero: {
          enabled: true,
          src: athHero,
          title: "The shader hero",
          caption:
            "A living depth field with responsive lighting, rendered in GLSL — no models, no textures, no download.",
        },
        scroll: {
          enabled: true,
          video: "/ath/ath-scroll.mp4",
          poster: athPoster,
          title: "The experience in motion",
          caption:
            "Parallax reveals and the ambient motion layer, recorded from the live site — this is the thing a still image cannot show.",
        },
        page: {
          enabled: true,
          src: athPageHero,
          title: "Case study page",
          caption: "How the work is presented on the studio site.",
        },
        problem: {
          enabled: true,
          src: athPageProblem,
          title: "The brief",
          caption: "Balancing heavy real-time 3D against performance, accessibility and mobile stability.",
        },
        solution: {
          enabled: true,
          src: athPageSolution,
          title: "The solution",
          caption: "Shader mathematics in the hero, restraint everywhere else.",
        },
      },
    },
    features: [
      "Interactive shader-based 3D hero",
      "Responsive lighting and living depth field",
      "Parallax scrolling with motion-guided reveals",
      "Ambient motion footer layer",
      "Minimalist, credibility-first content frame",
      "Mobile-stable performance budget",
    ],
    source: "",
    type: "Web",
    live: "https://www.codedale.tech/projects/ATH",
    start: "2025",
    end: "2025",
    hassource: false,
    islive: true,
    technology: ["GLSL Shaders", "WebGL", "Next.js", "Motion", "Tailwind CSS", "Vercel"],
    ongoing: false,
    category: "3D Web Experience",
    images: [athHero],
    img: athHero,
    caseStudy: true,
    caseStudyLink: "/case-study/ath",
  },
  {
    id: "codedale",
    name: "CodeDale — Studio Site & Case Study System",
    description:
      "The studio's own front door: a conversion-focused landing page and a repeatable case study system that turns each client engagement into a page with its own hero media, problem statement, outcomes and testimonial.",
    detailedDescription:
      "CodeDale sells engineering work to founders, which makes the site a sales instrument rather than a brochure. The landing page has to establish credibility in the first screen — real client quotes, real product shots, a visible booking path — and then hand the visitor to individual project pages that argue each engagement on its merits. The interesting part is the system underneath: every project page is generated from one content shape (client, industry, problem, what was built, features, outcomes, testimonial, services), so publishing a new case study is a content task rather than a build. Media is treated seriously too — a project can lead with a video of the work in motion, which for something like the ATH shader site is the only honest way to show it.",
    context:
      "Agencies are judged on their own website before anyone reads a proposal. If the studio's site is slower or blander than the work it claims to produce, the pitch is over before the call. The brief was to prove the capability on the artefact itself.",
    myRole:
      "I led the site — positioning and narrative with the team, the case study content system, the build and the launch.",
    roleBullets: [
      "Set the narrative: credibility in the first screen, then proof, then the booking path",
      "Designed a single content shape every project page renders from",
      "Built the project pages, including video-led hero media for motion-heavy work",
      "Wrote and structured the case studies for TFS, Fluent Pro, Conquer, ATH and PayAtom",
    ],
    challenges: [
      {
        shot: "home",
        title: "Credibility has to land in the first screen",
        problem:
          "A founder evaluating an agency gives the homepage seconds. Generic claims — \"world-class\", \"end to end\" — are what every competitor writes, so they carry no information.",
        solution:
          "The hero pins named client quotes either side of the positioning, with the review count and a single booking CTA. Directly underneath, real product screenshots from shipped work scroll past — the proof is the work, not the adjectives.",
        outcome: "The homepage answers \"are these people real?\" before the visitor has to scroll for it.",
      },
      {
        shot: "projectPage",
        title: "One content shape, every case study",
        problem:
          "Hand-built project pages rot. The third one gets rushed, the fifth never ships, and the site slowly stops reflecting what the studio actually does.",
        solution:
          "Every engagement renders from the same structure — client, industry, size, the problem, what was built, key features, tech, outcomes, testimonial, services — so a new case study is written, not built.",
        outcome: "Publishing a project is a content task, which is why there are five of them rather than one.",
      },
      {
        shot: "services",
        title: "Selling range without sounding like a template shop",
        problem:
          "The studio genuinely does mobile, web, AI, design and marketing. Listing all of that reads as \"we'll do anything\", which is the opposite of credible.",
        solution:
          "Services are framed through the work that demonstrates them, and each project page tags exactly which services were delivered — so breadth is evidenced per engagement instead of claimed in a grid.",
        outcome: "Range reads as track record rather than as a menu.",
      },
    ],
    architecture: {
      summary:
        "A statically rendered Next.js marketing site with a structured content layer for projects, optimised media, and a booking path as the single conversion goal.",
      layers: [
        { name: "Content", detail: "One project shape covering client, problem, build, features, outcomes, testimonial and services." },
        { name: "Media", detail: "Optimised imagery plus inline video for motion-led work, so the hero can show the thing rather than describe it." },
        { name: "Narrative", detail: "Hero proof → work → services → process → achievements → testimonials → booking." },
        { name: "Delivery", detail: "Static rendering, image optimisation and analytics, deployed on Vercel." },
      ],
    },
    engineering: [
      "Structured, repeatable case study system — new projects are content, not code",
      "Video-capable project heroes for motion-heavy engagements",
      "Statically rendered and image-optimised throughout",
      "Named-client social proof wired into the hero rather than buried in a carousel",
    ],
    results: [
      { label: "Case studies live", value: "5", detail: "TFS, Fluent Pro, Conquer, ATH, PayAtom" },
      { label: "Conversion goal", value: "1", detail: "book a 30-minute call" },
      { label: "Reviews shown", value: "30+", detail: "surfaced in the hero" },
    ],
    learnings: [
      "An agency site is a work sample. If it is slower or blander than what you sell, nothing on it is believed.",
      "Build the case study system before the second case study, or the third one never ships.",
      "Breadth is only credible when it is evidenced per engagement. A services grid claims; a project page proves.",
    ],
    media: {
      showHero: true,
      showTour: true,
      hero: "home",
      tour: ["work", "process", "achievements", "testimonials", "projectConquer", "projectTfs"],
      shots: {
        home: { enabled: true, src: cdHome, title: "Homepage", caption: "Positioning flanked by named client quotes, a single booking CTA, and shipped product shots immediately below." },
        work: { enabled: true, src: cdHomeWork, title: "Our work", caption: "The portfolio strip — each card opens its own case study." },
        services: { enabled: true, src: cdHomeServices, title: "Services", caption: "Capability framed through the engagements that demonstrate it." },
        process: { enabled: true, src: cdHomeProcess, title: "Process", caption: "How an engagement actually runs, stated before the call rather than in it." },
        achievements: { enabled: true, src: cdHomeAchievements, title: "Achievements", caption: "Outcomes across clients, kept concrete." },
        testimonials: { enabled: true, src: cdHomeTestimonials, title: "Testimonials", caption: "Named founders and operators, not anonymous praise." },
        projectPage: { enabled: true, src: cdProjectConquer, title: "Project page — Conquer", caption: "Every engagement renders from the same content shape." },
        projectConquer: { enabled: false, src: cdProjectConquer, title: "Conquer case study", caption: "B2B commerce engagement." },
        projectTfs: { enabled: true, src: cdProjectTfs, title: "Project page — TFS", caption: "The same structure carrying a fintech mobile engagement." },
        projectPayatom: { enabled: true, src: cdProjectPayatom, title: "Project page — PayAtom", caption: "3D-led fintech site, presented in the same frame." },
      },
    },
    features: [
      "Conversion-focused landing narrative",
      "Named client testimonials in the hero",
      "Repeatable case study content system",
      "Video-capable project heroes",
      "Services evidenced per engagement",
      "Process and achievements sections",
      "Single booking call-to-action",
      "Static rendering with optimised media",
    ],
    source: "",
    type: "Web",
    live: "https://www.codedale.tech/",
    start: "2024",
    end: "Ongoing",
    hassource: false,
    islive: true,
    technology: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Motion", "Vercel"],
    ongoing: true,
    category: "Studio Site",
    images: [cdHome, cdHomeWork, cdProjectTfs],
    img: cdHome,
    caseStudy: true,
    caseStudyLink: "/case-study/codedale",
  },
];
