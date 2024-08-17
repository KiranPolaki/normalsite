"use client";
import Image from "next/image";
import dummy from "../../public/dummywork.png";
import { useState } from "react";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { GitHubLogoIcon, GlobeIcon } from "@radix-ui/react-icons";
function Work() {
  const [projects, setProjects] = useState([
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
      img: "",
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
      ongoing: false,
      img: "",
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
      img: "",
    },
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
      img: "",
    },
  ]);
  return (
    <div className="w-full">
      <div className="p-4 flex gap-5 flex-wrap justify-center">
        {projects.map((project, i) => (
          <div
            className="border rounded-2xl cursor-pointer hover:shadow-lg transition-all ease-in-out max-w-80"
            key={i}
          >
            <Image
              src={dummy}
              width={280}
              height={100}
              placeholder="blur"
              alt="work"
              className="rounded-t-2xl"
            />
            <div className="p-3">
              <div>
                <p className="text-sm font-bold">{project.name}</p>
              </div>
              <div className="justify-content h-32 text-xs/[14px] py-2">
                {project.description}
              </div>
              <div className="flex items-center gap-1 flex-wrap">
                {project.technology.map((tech, i) => {
                  return (
                    <Badge
                      variant={"outline"}
                      key={i}
                      className="hover:bg-purple-400"
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
                  <></>
                )}
                {project.islive ? (
                  <Link href={project.live}>
                    <Badge className="flex gap-1 w-full bg-emerald-100 py-1 text-emerald-700 hover:bg-emerald-200">
                      <GlobeIcon />
                      Live
                    </Badge>
                  </Link>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
