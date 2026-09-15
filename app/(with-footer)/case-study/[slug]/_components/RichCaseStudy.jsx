"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  ChevronLeftIcon,
  GitHubLogoIcon,
  GlobeIcon,
  CalendarIcon,
  CheckCircledIcon,
  RocketIcon,
  LightningBoltIcon,
  InfoCircledIcon,
  LayersIcon,
  PersonIcon,
  CodeIcon,
  QuoteIcon,
  ReaderIcon,
  ImageIcon,
} from "@radix-ui/react-icons";
import { asset } from "@/lib/base-path";

/* ------------------------------------------------------------------ */
/*  Image resolution                                                    */
/*                                                                      */
/*  Every screenshot lives in project.media.shots keyed by a short id.  */
/*  Flip `enabled: false` on any shot to remove it everywhere it is     */
/*  used (hero, challenge, tour) without touching the layout code.      */
/*  project.media.showHero / showTour turn whole blocks off.            */
/* ------------------------------------------------------------------ */

const getShot = (project, key) => {
  if (!key) return null;
  const shot = project?.media?.shots?.[key];
  if (!shot || shot.enabled === false || (!shot.src && !shot.video)) return null;
  return { key, ...shot };
};

const getTourShots = (project) => {
  const media = project?.media;
  if (!media || media.showTour === false) return [];
  const keys = media.tour?.length ? media.tour : Object.keys(media.shots || {});
  const used = new Set(
    [media.hero, ...(project.challenges || []).map((c) => c.shot)].filter(Boolean)
  );
  return keys
    .filter((k) => !(media.dedupe !== false && used.has(k)))
    .map((k) => getShot(project, k))
    .filter(Boolean);
};

function Shot({ shot, priority = false }) {
  if (!shot) return null;

  // A video shot renders inline, muted and looping, like the site it came from.
  if (shot.video) {
    return (
      <figure className="space-y-2.5">
        <div className="rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-black">
          <video
            src={asset(shot.video)}
            poster={shot.poster}
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="metadata"
            className="w-full h-auto block"
          />
        </div>
        {(shot.title || shot.caption) && (
          <figcaption className="text-[13px] leading-relaxed text-zinc-500 dark:text-zinc-400">
            {shot.title && (
              <span className="font-semibold text-zinc-700 dark:text-zinc-300">
                {shot.title}.{" "}
              </span>
            )}
            {shot.caption}
          </figcaption>
        )}
      </figure>
    );
  }

  // Phone / portrait captures are narrow. Full width makes them enormous and
  // unreadable, so they sit in a column beside their caption instead.
  const isPortrait =
    shot.orientation === "portrait" ||
    (shot.src?.height && shot.src?.width && shot.src.height > shot.src.width * 1.1);

  if (isPortrait) {
    return (
      <figure className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-start">
        <div className="w-40 sm:w-48 shrink-0 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 shadow-sm">
          <Image
            src={shot.src}
            alt={shot.title || "Screenshot"}
            className="w-full h-auto"
            placeholder="blur"
            priority={priority}
            sizes="200px"
          />
        </div>
        {(shot.title || shot.caption) && (
          <figcaption className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 sm:pt-2">
            {shot.title && (
              <span className="block font-semibold text-zinc-700 dark:text-zinc-300 mb-1">
                {shot.title}
              </span>
            )}
            {shot.caption}
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <figure className="space-y-2.5">
      <div className="rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 shadow-sm">
        <Image
          src={shot.src}
          alt={shot.title || "Screenshot"}
          className="w-full h-auto"
          placeholder="blur"
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 900px"
        />
      </div>
      {(shot.title || shot.caption) && (
        <figcaption className="text-[13px] leading-relaxed text-zinc-500 dark:text-zinc-400">
          {shot.title && (
            <span className="font-semibold text-zinc-700 dark:text-zinc-300">
              {shot.title}.{" "}
            </span>
          )}
          {shot.caption}
        </figcaption>
      )}
    </figure>
  );
}

// Portrait shots are grouped into a row so a mobile case study reads as a set of
// phones rather than a column of giant images.
function isPortraitShot(shot) {
  return (
    shot?.orientation === "portrait" ||
    (!shot?.video &&
      shot?.src?.height &&
      shot?.src?.width &&
      shot.src.height > shot.src.width * 1.1)
  );
}

function ShotGroup({ shots }) {
  const portrait = shots.filter(isPortraitShot);
  const landscape = shots.filter((s) => !isPortraitShot(s));
  return (
    <div className="space-y-8">
      {portrait.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-6">
          {portrait.map((shot) => (
            <figure key={shot.key} className="space-y-2">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 shadow-sm">
                <Image
                  src={shot.src}
                  alt={shot.title || "Screenshot"}
                  className="w-full h-auto"
                  placeholder="blur"
                  sizes="(max-width: 640px) 45vw, 260px"
                />
              </div>
              {shot.title && (
                <figcaption className="text-[12px] leading-snug text-zinc-500 dark:text-zinc-400">
                  <span className="font-semibold text-zinc-700 dark:text-zinc-300">
                    {shot.title}
                  </span>
                  {shot.caption ? ` — ${shot.caption}` : ""}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      )}
      {landscape.map((shot) => (
        <Shot key={shot.key} shot={shot} />
      ))}
    </div>
  );
}

function Section({ id, icon, eyebrow, title, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-5">
        {eyebrow && (
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-brand mb-2">
            {eyebrow}
          </p>
        )}
        <div className="flex items-center gap-2.5">
          {icon && (
            <span className="text-brand">
              {React.cloneElement(icon, { className: "w-5 h-5" })}
            </span>
          )}
          {/* globals.css has a legacy `h2 { opacity:0; margin:1.25rem }` card rule — override it here */}
          <h2 className="m-0 opacity-100 text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            {title}
          </h2>
        </div>
      </div>
      {children}
    </section>
  );
}

export default function RichCaseStudy({ project, prevProject, nextProject }) {
  const hero = getShot(project, project.media?.hero);
  const showHero = project.media?.showHero !== false && hero;
  const tour = getTourShots(project);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-slate-900 dark:text-slate-50">
      <main className="container max-w-4xl px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        {/* back */}
        <Link
          href="/works"
          className="inline-flex items-center gap-2 text-sm text-brand hover:underline group print:hidden mb-8"
        >
          <ChevronLeftIcon className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
          Back to All Projects
        </Link>

        {/* ---------------------------------------------------------- hero */}
        <header className="mb-10">
          <Badge
            variant="outline"
            className="mb-4 text-xs py-1 px-3 border-brand/30 text-brand bg-brand/10"
          >
            {project.category}
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] font-bold tracking-tight mb-4 text-slate-900 dark:text-slate-50">
            {project.name}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {project.start && (
              <span className="flex items-center gap-1.5">
                <CalendarIcon className="w-4 h-4" />
                {project.start} – {project.end}
                {project.ongoing && (
                  <span className="text-green-500 ml-1">(Ongoing)</span>
                )}
              </span>
            )}
            {project.islive && project.live && (
              <Link
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-brand transition-colors"
              >
                <GlobeIcon className="w-4 h-4" />
                View Live
              </Link>
            )}
            {project.hassource && project.source && (
              <Link
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-brand transition-colors"
              >
                <GitHubLogoIcon className="w-4 h-4" />
                View Source
              </Link>
            )}
          </div>
        </header>

        {showHero && (
          <div className="mb-10">
            <Shot shot={hero} priority />
          </div>
        )}

        {/* ------------------------------------------------------- metrics */}
        {project.results?.length > 0 && (
          <section className="mb-12 grid grid-cols-2 lg:grid-cols-4 divide-y divide-x divide-slate-200 dark:divide-zinc-800 border border-slate-200 dark:border-zinc-800 rounded-xl overflow-hidden">
            {project.results.map((r, i) => (
              <div key={i} className="p-4 sm:p-5">
                <p className="text-2xl font-bold text-slate-900 dark:text-slate-50">
                  {r.value}
                </p>
                <p className="text-xs font-semibold text-brand mt-1 uppercase tracking-wide">
                  {r.label}
                </p>
                {r.detail && (
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1.5 leading-snug">
                    {r.detail}
                  </p>
                )}
              </div>
            ))}
          </section>
        )}

        {/* ---------------------------------------------------- at a glance */}
        <section className="mb-14 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-900/60 p-5 sm:p-6">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-slate-500 dark:text-slate-400 mb-4">
            At a glance
          </p>
          <dl className="space-y-4 text-sm">
            {project.myRole && (
              <div className="flex flex-col sm:flex-row gap-1 sm:gap-6">
                <dt className="sm:w-24 flex-shrink-0 font-semibold text-slate-700 dark:text-slate-300">
                  Role
                </dt>
                <dd className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.myRole}
                </dd>
              </div>
            )}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
              <dt className="sm:w-24 flex-shrink-0 font-semibold text-slate-700 dark:text-slate-300">
                Stack
              </dt>
              <dd className="flex flex-wrap gap-1.5">
                {project.technology.map((tech, i) => (
                  <span
                    key={i}
                    className="text-[11px] px-2 py-1 rounded-md bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-600 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </section>

        {/* ------------------------------------------------------- content */}
        <div className="space-y-14">
          {project.context && (
            <Section
              id="setting"
              icon={<ReaderIcon />}
              eyebrow="01 — Context"
              title="The setting"
            >
              <p className="text-base leading-[1.75] text-slate-700 dark:text-slate-300">
                {project.context}
              </p>
            </Section>
          )}

          <Section
            id="overview"
            icon={<InfoCircledIcon />}
            eyebrow="02 — Overview"
            title="What it actually is"
          >
            <p className="text-base leading-[1.75] text-slate-700 dark:text-slate-300">
              {project.detailedDescription}
            </p>
          </Section>

          {project.roleBullets?.length > 0 && (
            <Section
              id="role"
              icon={<PersonIcon />}
              eyebrow="03 — My work"
              title="What I owned"
            >
              <ul className="space-y-3">
                {project.roleBullets.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-slate-700 dark:text-slate-300 leading-relaxed"
                  >
                    <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {project.challenges?.length > 0 && (
            <Section
              id="problems"
              icon={<LightningBoltIcon />}
              eyebrow="04 — The hard parts"
              title="Problems worth writing down"
            >
              <div className="space-y-12">
                {project.challenges.map((c, i) => {
                  const shot = getShot(project, c.shot);
                  return (
                    <article key={i} className="space-y-4">
                      <div className="flex items-baseline gap-3">
                        <span className="text-sm font-bold text-brand tabular-nums">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-slate-100 leading-snug">
                          {c.title}
                        </h3>
                      </div>

                      <div className="pl-0 sm:pl-9 space-y-4">
                        <div>
                          <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-rose-500 dark:text-rose-400 mb-1.5">
                            The problem
                          </p>
                          <p className="text-[15px] leading-[1.75] text-slate-600 dark:text-slate-400">
                            {c.problem}
                          </p>
                        </div>

                        <div>
                          <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-sky-600 dark:text-sky-400 mb-1.5">
                            What we built
                          </p>
                          <p className="text-[15px] leading-[1.75] text-slate-600 dark:text-slate-400">
                            {c.solution}
                          </p>
                        </div>

                        {shot && <Shot shot={shot} />}

                        {c.outcome && (
                          <p className="text-[15px] leading-[1.75] text-slate-800 dark:text-slate-200 bg-brand/10 border-l-2 border-brand rounded-r-lg px-4 py-3">
                            {c.outcome}
                          </p>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            </Section>
          )}

          {project.architecture && (
            <Section
              id="architecture"
              icon={<LayersIcon />}
              eyebrow="05 — Architecture"
              title="How it is built"
            >
              <p className="text-base leading-[1.75] text-slate-700 dark:text-slate-300 mb-6">
                {project.architecture.summary}
              </p>
              <div className="rounded-xl border border-slate-200 dark:border-zinc-800 overflow-hidden">
                {project.architecture.layers.map((layer, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row gap-1 sm:gap-6 p-4 border-b border-slate-200 dark:border-zinc-800 last:border-0 odd:bg-slate-50 dark:odd:bg-zinc-900/50"
                  >
                    <span className="text-xs font-bold uppercase tracking-wide text-brand sm:w-24 flex-shrink-0 sm:pt-0.5">
                      {layer.name}
                    </span>
                    <span className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {layer.detail}
                    </span>
                  </div>
                ))}
              </div>
            </Section>
          )}

          {tour.length > 0 && (
            <Section
              id="tour"
              icon={<ImageIcon />}
              eyebrow="06 — Product tour"
              title="The rest of the product"
            >
              <ShotGroup shots={tour} />
            </Section>
          )}

          {(project.features?.length > 0 || project.engineering?.length > 0) && (
            <Section
              id="details"
              icon={<CodeIcon />}
              eyebrow="07 — Details"
              title="Features & engineering notes"
            >
              <div className="grid md:grid-cols-2 gap-8">
                {project.features?.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-3">
                      What it does
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((f, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400"
                        >
                          <CheckCircledIcon className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {project.engineering?.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-3">
                      Under the hood
                    </h4>
                    <ul className="space-y-2">
                      {project.engineering.map((e, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400"
                        >
                          <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500 flex-shrink-0" />
                          <span>{e}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </Section>
          )}

          {project.learnings?.length > 0 && (
            <Section
              id="learnings"
              icon={<QuoteIcon />}
              eyebrow="08 — Takeaways"
              title="What I took away"
            >
              <div className="space-y-5">
                {project.learnings.map((item, i) => (
                  <p
                    key={i}
                    className="text-[15px] leading-[1.75] text-slate-700 dark:text-slate-300 border-l-2 border-brand/70 pl-4"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </Section>
          )}

          <Section
            id="stack"
            icon={<RocketIcon />}
            eyebrow="09 — Stack"
            title="Built with"
          >
            <div className="flex flex-wrap gap-2">
              {project.technology.map((tech, i) => (
                <Badge
                  key={i}
                  variant="secondary"
                  className="bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300 text-xs px-3 py-1"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </Section>
        </div>

        {/* ---------------------------------------------------- prev / next */}
        {(prevProject || nextProject) && (
          <nav className="mt-16 pt-8 border-t border-slate-200 dark:border-zinc-800 flex flex-col sm:flex-row justify-between gap-6 print:hidden">
            {prevProject ? (
              <Link href={`/case-study/${prevProject.id}`} className="group text-left">
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                  Previous Project
                </p>
                <span className="text-base font-medium text-brand group-hover:underline flex items-center gap-2">
                  <ChevronLeftIcon className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                  {prevProject.name}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {nextProject ? (
              <Link href={`/case-study/${nextProject.id}`} className="group text-right">
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                  Next Project
                </p>
                <span className="text-base font-medium text-brand group-hover:underline flex items-center gap-2 justify-end">
                  {nextProject.name}
                  <ChevronLeftIcon className="w-4 h-4 rotate-180 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ) : (
              <div />
            )}
          </nav>
        )}
      </main>
    </div>
  );
}
