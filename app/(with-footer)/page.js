import Image from "next/image";
import Link from "next/link";
import story from "../../public/story.jpeg";
import WorkExperience from "@/components/work/WorkExperience";
import Work from "@/components/work/Work";
import FeaturedWork from "./_components/FeaturedWork";
import BlurFade from "@/components/magicui/blur-fade";

const DOMAINS = ["EdTech", "B2B Commerce", "Fintech", "AI", "MedTech"];

const LINKS = [
  { label: "X", href: "https://x.com/saiiiii_k" },
  { label: "GitHub", href: "https://github.com/KiranPolaki" },
  { label: "Instagram", href: "https://www.instagram.com/hastag_developer/" },
];

function ArrowUpRight({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

function SectionLabel({ children, action }) {
  return (
    <div className="flex items-baseline justify-between mb-5">
      <h2 className="m-0 opacity-100 eyebrow">{children}</h2>
      {action}
    </div>
  );
}

export default function Home() {
  return (
    <div className="w-full">
      <div className="page-shell pb-24">
        {/* ------------------------------------------------------------ hero */}
        <BlurFade>
          <header className="pt-14 sm:pt-20">
            <div className="flex items-center gap-4">
              <Image
                alt="Sai Kiran Polaki"
                placeholder="blur"
                width={200}
                height={200}
                src={story}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover ring-1 ring-zinc-200 dark:ring-zinc-800"
              />
              <div>
                <p className="text-2xl sm:text-3xl font-semibold tracking-tight">
                  Sai Kiran Polaki
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                  Lead Foundational Engineer at CodeDale · Hyderabad, India
                </p>
              </div>
            </div>

            <p className="mt-8 text-xl sm:text-2xl leading-relaxed tracking-tight text-zinc-800 dark:text-zinc-100">
              I build the platforms behind other people&apos;s businesses —
              multi-tenant products where the hard part is the data model, the
              money, or the trust, not the UI.
            </p>
            <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              Full-stack, mostly Next.js and Postgres, end to end: schema,
              payments, auth, AI budgets, admin tooling and the deploy pipeline.
              I lead small teams and still write the code.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {DOMAINS.map((d) => (
                <span
                  key={d}
                  className="chip"
                >
                  {d}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
              {LINKS.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  className="inline-flex items-center gap-1 text-zinc-600 dark:text-zinc-400 hover:text-brand dark:hover:text-brand transition-colors"
                >
                  {l.label}
                  <ArrowUpRight />
                </Link>
              ))}
            </div>
          </header>
        </BlurFade>

        {/* -------------------------------------------------- featured work */}
        <section className="mt-16">
          <SectionLabel
            action={
              <Link
                href="/works"
                className="inline-flex items-center gap-1 text-sm text-zinc-500 dark:text-zinc-400 hover:text-brand dark:hover:text-brand transition-colors"
              >
                all work
                <ArrowUpRight />
              </Link>
            }
          >
            Selected work
          </SectionLabel>
          <FeaturedWork />
        </section>

        {/* ------------------------------------------------------ experience */}
        <section className="mt-16">
          <SectionLabel>Experience</SectionLabel>
          <WorkExperience />
        </section>

        {/* ---------------------------------------------------- everything else */}
        <section className="mt-16">
          <SectionLabel>Everything else</SectionLabel>
          <Work />
        </section>

        {/* ----------------------------------------------------------- contact */}
        <BlurFade inView>
          <section className="mt-20 surface p-6 sm:p-8">
            <h2 className="m-0 opacity-100 text-xl sm:text-2xl font-semibold tracking-tight">
              Building something that needs a real backend?
            </h2>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400 leading-relaxed">
              I take on work where the schema matters — marketplaces, B2B
              platforms, anything multi-tenant, anything metering AI. Happy to
              look at what you have and say whether I&apos;m the right person.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="https://x.com/saiiiii_k"
                target="_blank"
                className="btn-primary"
              >
                Say hello on X
                <ArrowUpRight />
              </Link>
              <Link
                href="/works"
                className="btn-secondary"
              >
                Browse the case studies
              </Link>
            </div>
          </section>
        </BlurFade>
      </div>
    </div>
  );
}
