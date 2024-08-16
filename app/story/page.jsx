import Image from "next/image";
import Link from "next/link";

function Story() {
  return (
    <div className="w-full justify-center flex">
      <div className="max-w-3xl flex items-center flex-col gap-3 my-12">
        <div className="text-4xl font-bold selection:bg-purple-300 text-center p-0">
          Story
        </div>
        <p className="w-3/4 text-center text-lg selection:bg-purple-400 ">
          little about me. also, it’s not that hard to find my contact just
          search polakisaikiran.
        </p>

        <div className="flex items-center gap-2 justify-center select-none">
          <span className="flex-1 bg-balck">───────────</span>
          <span className="text-sm ">✦</span>
          <span className="text-2xl text-foreground">✦</span>
          <span className="text-sm">✦</span>
          <span className="flex-1 bg-balck">───────────</span>
        </div>

        <div className="rounded-3xl shadow-xl flex flex-col my-0 p-0">
          <Image
            width={1100}
            height={700}
            alt={"setup image"}
            src={"/setup.JPG"}
            className="rounded-3xl p-0 shadow-2xl "
          />
        </div>
        <div className="text-gray-400 text-md font-semibold tracking-wide p-0 selection:text-purple-900">
          WHAT WILL BE ON MY DESK FOREVER
        </div>
        <div className="w-3/4 text-lg tracking-normal my-10 gap-4 flex flex-col">
          <p className="text-justify">
            yo, i'm <strong>sai</strong>. building and breaking web applications
            is what i do for living. well, i'm a{" "}
            <strong>full-stack web developer</strong>, but my current primary
            field of work is <strong>devops</strong>. i currently reside in
            hyderabad and am 22 years old. i am spiderman because i make web 🕷.
          </p>
          <div className="mt-7 ext-start text-gray-300 text-md font-semibold tracking-wide p-0 selection:text-purple-900">
            CURRENT
          </div>
          <p className="text-justify">
            <strong>developer</strong>, i have used nextjs, react, expressjs,
            hono, and tailwind, as well as databases such as postgresql,
            mongodb, and redis, among others. see my works{" "}
            <Link href={"/work"} className="hover:text-purple-600">
              <strong>here</strong>.
            </Link>
          </p>
          <p className="text-justify">
            <strong>devops engineer</strong>, i have used tools such as docker,
            kubernetes, workers, nginx, aws, azure devops and linux. explored
            teraform, ansible in free time. see my entire work experience{" "}
            <Link href={"/timeline"} className="hover:text-purple-600">
              <strong>here</strong>.
            </Link>
          </p>
          <p>
            <strong>freelance</strong> and build stuff on{" "}
            <Link
              href={"https://github.com/>KiranPolaki"}
              className="hover:text-purple-600"
            >
              <strong>github</strong>.
            </Link>
          </p>
          <p className="text-justify">
            i have also performed end-to-end testing and automation using
            cypress and powershell. for open-sourse projects and company stuff.
          </p>
        </div>
        <div className="w-3/4 text-lg tracking-normal gap-4 flex flex-col">
          <div className="text-start text-gray-300 text-md font-semibold tracking-wide p-0 selection:text-purple-900">
            CONTACTS & SOCIAL MEDIA LINKS
          </div>
          <p className="justify-content">
            You can find me on everywhere with handle{" "}
            <strong>
              <Link
                className="hover:text-purple-600"
                href={
                  "https://www.google.com/search?q=polaki+sai+kiran&oq=polaki+sai+kiran&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGEAyCggCEAAYgAQYogQyCggDEAAYgAQYogQyCggEEAAYgAQYogQyBggFEEUYPDIGCAYQRRg8MgYIBxBFGD3SAQgzOTM2ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8"
                }
              >
                @polakisaikiran
              </Link>
            </strong>
            . Also see all social links <strong>here</strong>.
          </p>
          <div className="justify-content flex flex-col gap-2"></div>
          <p className="">
            For partnerships, collaborations, sponsorships, commissions, events,
            you can reach out to me at{" "}
            <Link href={"mailto:polakisaikiran1@gmail.com"}>
              <strong>polakisaikiran1</strong>
            </Link>{" "}
            .
          </p>
          <span className="text-start text-gray-400 text-sm tracking-wide font-semibold p-0 selection:text-purple-900">
            PS: I'll reply back to email in 1-2 working days.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Story;
