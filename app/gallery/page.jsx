import BlurFade from "@/components/magicui/blur-fade";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import profile from "../../public/profile.jpeg";
import Image from "next/image";

const images = Array.from({ length: 19 }, (_, i) => {
  const isLandscape = i % 2 === 0;
  const width = isLandscape ? 800 : 600;
  const height = isLandscape ? 600 : 800;
  return `https://picsum.photos/seed/${i + 1}/${width}/${height}`;
});

function Gallery() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="max-w-3xl flex items-center flex-col gap-3 mt-12">
        <div className="text-3xl font-bold selection:bg-purple-300 text-center p-0">
          Gallery
        </div>
        <p className="w-4/5 text-center text-md selection:bg-purple-400 ">
          i enjoy taking random photos and capturing special moments. sometimes,
          i find myself gazing at the sky.
        </p>
        <div className="flex items-center gap-2 justify-center select-none">
          <span className="flex-1 bg-balck text-gray-400">───────────</span>
          <span className="text-sm ">✦</span>
          <span className="text-2xl text-foreground">✦</span>
          <span className="text-sm">✦</span>
          <span className="flex-1 bg-balck text-gray-400">───────────</span>
        </div>
      </div>

      <div className="flex max-w-3xl justify-center flex-col gap-3 mt-12 ">
        <div
          className="card card0 cursor-cell"
          style={{
            backgroundImage: `url(${profile.src})`,
          }}
        >
          <div className="borders">
            <h2 className="text-lg font-semibold selection:bg-purple-400">
              Polaki Sai Kiran
            </h2>
            <div className="icons">
              <Link
                href={"https://www.instagram.com/polaki_kiran/"}
                target="_blank"
              >
                <InstagramLogoIcon
                  className="fa fa-instagram"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href={"https://x.com/saiiiii_k"} target="_blank">
                <TwitterLogoIcon
                  className="fa fa-twitter"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href={"https://github.com/KiranPolaki"} target="_blank">
                <GitHubLogoIcon
                  className="fa fa-facebook"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="text-gray-400 text-center text-md font-semibold tracking-wide p-0 selection:text-purple-900">
          YO! HOVER ON ME
        </div>
      </div>

      <div className="flex items-center gap-2 justify-center select-none mt-12">
        <span className="flex-1 bg-balck text-gray-400">───────────</span>
        <span className="text-sm ">✦</span>
        <span className="text-lg text-foreground">Here we go</span>
        <span className="text-sm">✦</span>
        <span className="flex-1 bg-balck text-gray-400">───────────</span>
      </div>

      <section id="photos" className="max-w-3xl mt-12 p-4">
        <div className="columns-2 gap-4 sm:columns-3">
          {images.map((imageUrl, idx) => (
            <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
              <img
                className="mb-4 size-full rounded-lg object-contain"
                src={imageUrl}
                alt={`Random stock image ${idx + 1}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Gallery;
