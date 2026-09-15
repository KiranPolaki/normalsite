import Image from "next/image";
import Link from "next/link";
import { BorderBeam } from "@/components/magicui/border-beam";
import BlurFade from "@/components/magicui/blur-fade";
import setup from "../../../public/setup.jpeg";

const STACK = [
  {
    label: "Product & platform",
    items: ["Next.js", "React", "React Native", "TypeScript", "Node / Express"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "Drizzle ORM", "Prisma", "Redis", "MongoDB", "Neon"],
  },
  {
    label: "Money & auth",
    items: ["Razorpay", "Pine Labs", "NextAuth / Auth.js", "JWT", "Webhooks"],
  },
  {
    label: "AI",
    items: ["OpenAI", "Gemini", "Whisper / TTS", "Prompt + token budgeting"],
  },
  {
    label: "Infra",
    items: ["AWS", "Azure DevOps", "Docker", "Kubernetes", "Cloudflare", "Vercel"],
  },
];

const FACTS = [
  { value: "10", label: "Case studies", detail: "shipped products, written up" },
  { value: "5", label: "Industries", detail: "EdTech, commerce, fintech, AI, medtech" },
  { value: "3", label: "Teams led", detail: "as lead engineer at CodeDale" },
  { value: "2022", label: "Building since", detail: "freelance → studio lead" },
];

const CONTACTS = [
  { label: "Email", value: "polakisaikiran1@gmail.com", href: "mailto:polakisaikiran1@gmail.com" },
  { label: "X", value: "@saiiiii_k", href: "https://x.com/saiiiii_k" },
  { label: "GitHub", value: "KiranPolaki", href: "https://github.com/KiranPolaki" },
  { label: "Instagram", value: "hastag_developer", href: "https://www.instagram.com/hastag_developer/" },
];

function SectionLabel({ children }) {
  return <p className="eyebrow mb-4">{children}</p>;
}

export default function About() {
  return (
    <div className="w-full">
      <div className="page-shell py-14 sm:py-20 pb-24">
        {/* ------------------------------------------------------------ intro */}
        <BlurFade>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">About</h1>
          <p className="mt-4 text-lg sm:text-xl leading-relaxed text-zinc-700 dark:text-zinc-300">
            I&apos;m Sai Kiran — a full-stack engineer in Hyderabad who leads
            delivery at CodeDale and still spends most of the day in the
            codebase.
          </p>
          <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            The work I take on tends to look the same from the outside — a web
            app — and completely different underneath: a school platform serving
            four different audiences from one schema, a B2B store where the
            price depends on who is logged in, an AI product that has to meter
            its own spend. The interesting part is almost never the interface.
            It&apos;s the data model, the money, or the trust.
          </p>
        </BlurFade>

        {/* ------------------------------------------------------------ facts */}
        <section className="mt-12 grid grid-cols-2 lg:grid-cols-4 divide-x divide-y divide-zinc-200 dark:divide-zinc-800 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
          {FACTS.map((f) => (
            <div key={f.label} className="p-4 sm:p-5">
              <p className="text-2xl font-bold">{f.value}</p>
              <p className="text-xs font-semibold uppercase tracking-wide text-brand mt-1">
                {f.label}
              </p>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1.5 leading-snug">
                {f.detail}
              </p>
            </div>
          ))}
        </section>

        {/* ------------------------------------------------------------ setup */}
        <section className="mt-14">
          <SectionLabel>What will be on my desk forever</SectionLabel>
          <div className="relative rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
            <BorderBeam size={350} duration={9} delay={9} />
            <Image
              src={setup}
              width={1100}
              height={700}
              alt="My desk setup"
              placeholder="blur"
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* ---------------------------------------------------------- how i work */}
        <section className="mt-14">
          <SectionLabel>How I work</SectionLabel>
          <div className="space-y-4 text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
            <p>
              <strong>Schema first.</strong> Most of the bugs people call
              &quot;frontend bugs&quot; are a data model that could not express
              what the business actually does. I spend the first week on tables,
              not screens.
            </p>
            <p>
              <strong>Boundaries in the router and the database, not in
              conditionals.</strong> The moment a screen starts branching on
              role or plan, there are two products tangled in one file.
            </p>
            <p>
              <strong>Ship the boring path first.</strong> Onboarding, bulk
              import, password resets, admin tooling — the unglamorous flows
              decide whether a B2B product survives its first real customer.
            </p>
            <p>
              <strong>Lead by staying in the code.</strong> I review, I set
              architecture, and I take tickets. It is hard to argue about a
              schema you have not had to migrate.
            </p>
          </div>
        </section>

        {/* ------------------------------------------------------------ stack */}
        <section className="mt-14">
          <SectionLabel>Tools I reach for</SectionLabel>
          <div className="space-y-4">
            {STACK.map((group) => (
              <div key={group.label} className="flex flex-col sm:flex-row gap-2 sm:gap-6">
                <span className="sm:w-40 shrink-0 text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                  {group.label}
                </span>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------------- contact */}
        <section className="mt-14 surface p-6 sm:p-8">
          <SectionLabel>Get in touch</SectionLabel>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {CONTACTS.map((c) => (
              <div key={c.label} className="flex items-baseline justify-between gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-2">
                <span className="text-sm text-zinc-500 dark:text-zinc-400">{c.label}</span>
                <Link href={c.href} target="_blank" className="link-brand text-sm">
                  {c.value}
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-zinc-600 dark:text-zinc-400">
            Partnerships, collaborations, commissions and speaking — email is the
            fastest route. I reply within 1–2 working days.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/works" className="btn-primary">
              See the work
            </Link>
            <Link href="mailto:polakisaikiran1@gmail.com" className="btn-secondary">
              Email me
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
