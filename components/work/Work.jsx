"use client";
import Image from "next/image";
import dummy from "../../public/dummywork.png";
import one from "../../public/one.png";
import two from "../../public/two.png";
import three from "../../public/three.png";
import four from "../../public/four.png";
import { useEffect, useState } from "react";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { GitHubLogoIcon, GlobeIcon, StackIcon } from "@radix-ui/react-icons";
import { isMobile as detectMobile } from "react-device-detect";

function Work() {
  const [projects, setProjects] = useState([
    {
      name: "Helper.ai",
      description:
        "A comprehensive AI-driven mock interview application using Next.js. Leveraged React for the frontend, Drizzle ORM for database management, Gemini AI for AI functionalities, and Clerk for authentication.",
      source: "",
      live: "",
      start: "",
      end: "",
      hassource: true,
      islive: true,
      technology: [
        "nextjs",
        "drizzle",
        "clerk",
        "react-webcam",
        "voice",
        "webrtc",
        "geminiai",
      ],
      ongoing: true,
      img: one,
    },
    {
      name: "Cs One Stop",
      description:
        "Optimized database models for 1000+ records using PrismaORM. Deployed NextAuth for authentication and added a portfolio interface. Integrated Judge0 IDE for real-time code execution, enhancing learning for 100+ students. Engineered a web scraping solution for job notifications.",
      source: "",
      live: "",
      start: "",
      end: "",
      hassource: true,
      islive: true,
      technology: [
        "nextjs",
        "nextauth",
        "prisma",
        "shadcn",
        "mdx",
        "webscrapping",
        "restapi",
      ],
      ongoing: true,
      img: two,
    },
    {
      name: "GuruCodes",
      description:
        "A high-converting course landing page, attracting over 100 daily visitors and facilitating 300+ course sales. Integrated Razorpay for secure transactions, directly contributing to revenue generation. Deployed and managed the application on AWS EC2, enhancing brand consistency and user trust.",
      source: "",
      live: "",
      hassource: true,
      islive: true,
      start: "",
      end: "",
      technology: ["nextjs", "razorpay", "magicui", "tailwind", "analytics"],
      ongoing: false,
      img: three,
    },
    {
      name: "HashBlog",
      description:
        "A blog application using React for the frontend and MongoDB for data storage. Integrated Quill for rich text editing, Cloudflare for security and performance, Hono for the backend, and Cloudinary for image management. ",
      source: "",
      live: "",
      start: "",
      end: "",
      hassource: true,
      islive: true,
      technology: [
        "react",
        "mongodb",
        "quill",
        "cloudflare",
        "hono",
        "cloudinary",
      ],
      ongoing: false,
      img: four,
    },
  ]);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setIsMobile(detectMobile);
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <div className="w-full">
      <div className="p-4 flex gap-5 flex-wrap justify-center">
        {!isMobile ? (
          <>
            {projects.map((project, i) => (
              <div
                className="border rounded-2xl cursor-pointer hover:shadow-lg transition-all ease-in-out max-w-80"
                key={i}
              >
                <div className="flex justify-center p-5">
                  <Image
                    src={project.img}
                    width={100}
                    height={20}
                    placeholder="blur"
                    alt="work"
                    className="rounded-t-2xl"
                  />
                </div>
                <div className="p-3">
                  <div className="flex gap-1 items-center">
                    <span className="text-sm font-bold">{project.name}</span>
                    {project.ongoing ? (
                      <span className="blink_me"></span>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="justify-content h-32 text-xs/[14px] py-2 text-slate-500 dark:text-slate-400 ">
                    {project.description}
                  </div>
                  <div className="flex items-center gap-1 flex-wrap">
                    {project.technology.map((tech, i) => {
                      return (
                        <Badge
                          variant={"outline"}
                          key={i}
                          className="hover:bg-purple-400 hover:text-white"
                        >
                          {tech}
                        </Badge>
                      );
                    })}
                  </div>
                  <div className="flex w-full items-center gap-2 mt-2">
                    {project.hassource ? (
                      <Link href={project.source}>
                        <Badge className="flex gap-1 w-full bg-emerald-100 text-emerald-700 py-1 hover:bg-emerald-200">
                          <GitHubLogoIcon />
                          Source
                        </Badge>
                      </Link>
                    ) : (
                      <div></div>
                    )}
                    {project.islive ? (
                      <Link href={project.live}>
                        <Badge className="flex gap-1 w-full bg-emerald-100 py-1 text-emerald-700 hover:bg-emerald-200">
                          <GlobeIcon />
                          Live
                        </Badge>
                      </Link>
                    ) : (
                      <div></div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="flex gap-4 flex-col">
            {projects.map((project, i) => (
              <div
                key={i}
                className="hover:border light:hover:bg-slate-200 rounded-lg"
              >
                <div className="flex w-full items-center justify-center p-3 gap-4">
                  <div>
                    <Image
                      src={project.img}
                      width={100}
                      height={20}
                      placeholder="blur"
                      alt="work"
                      className="rounded-t-2xl"
                    />
                  </div>
                  <div>
                    <div>
                      <span className="text-sm font-bold">{project.name}</span>
                      {project.ongoing ? (
                        <span className="blink_me"></span>
                      ) : (
                        <div></div>
                      )}
                    </div>
                    <div className="justify-content text-xs/[14px] py-2 text-slate-500 dark:text-slate-400 ">
                      {project.description.slice(0, 100)}...
                    </div>
                    <div className="flex w-full items-center gap-2 mt-2">
                      {project.hassource ? (
                        <Link href={project.source}>
                          <Badge className="flex gap-1 w-full bg-emerald-100 text-emerald-700 py-1 hover:bg-emerald-200">
                            <GitHubLogoIcon />
                            Source
                          </Badge>
                        </Link>
                      ) : (
                        <div></div>
                      )}
                      {project.islive ? (
                        <Link href={project.live}>
                          <Badge className="flex gap-1 w-full bg-emerald-100 py-1 text-emerald-700 hover:bg-emerald-200">
                            <GlobeIcon />
                            Live
                          </Badge>
                        </Link>
                      ) : (
                        <div></div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Work;
