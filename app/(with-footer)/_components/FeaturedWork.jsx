"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import BlurFade from "@/components/magicui/blur-fade";
import { projects } from "@/app/data/projectsData";

// The three case studies that carry the most weight, in order.
const FEATURED = ["fluent-pro", "conquer", "udyogam"];

export default function FeaturedWork() {
  const featured = FEATURED.map((id) => projects.find((p) => p.id === id)).filter(Boolean);

  return (
    <div className="space-y-5">
      {featured.map((project, i) => {
        const cover = project.media?.shots?.[project.media?.hero]?.src || project.img;
        return (
          <BlurFade key={project.id} delay={0.05 * i} inView>
            <Link
              href={`/case-study/${project.id}`}
              className="group block surface surface-hover overflow-hidden"
            >
              <div className="grid sm:grid-cols-5">
                {cover && (
                  <div className="sm:col-span-2 relative aspect-[16/10] sm:aspect-auto sm:min-h-[168px] bg-zinc-100 dark:bg-zinc-900 overflow-hidden">
                    <Image
                      src={cover}
                      alt={project.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 320px"
                      className="object-cover object-left-top transition-transform duration-500 group-hover:scale-[1.03]"
                      placeholder="blur"
                    />
                  </div>
                )}
                <div className="sm:col-span-3 p-5 flex flex-col justify-center gap-2">
                  <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-brand">
                    {project.category}
                    {project.ongoing && (
                      <span className="text-green-600 dark:text-green-400 normal-case tracking-normal font-medium">
                        · live
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold leading-snug text-zinc-900 dark:text-zinc-100">
                    {project.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 line-clamp-3">
                    {project.description}
                  </p>
                  <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                    Read the case study
                    <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          </BlurFade>
        );
      })}
    </div>
  );
}
