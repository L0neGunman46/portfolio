import Image from "next/image";
// import path from "path";
import Socials from "@/components/Socials";
import { ArrowRightIcon, FileDown } from "lucide-react";
import Experience from "@/components/Experience";
import LinkWithIcon from "@/components/LinkWithIcon";
import Projects from "@/components/Projects";
import SkillsComp from "@/components/SkillsComp";
import ResumeButton from "@/components/ui/ResumeButton";
// import Posts from "@/components/Posts";
// import { getPosts } from "@/libs/posts";

// const blogDirectory = path.join(process.cwd(), "content");
const DISPLIMIT = 2;

export default async function HomePage() {
  // const posts = await getPosts(blogDirectory, LIMIT);
  const greyStr =
    "bg-gradient-to-r from-black via-gray-900 to-black bg-clip-text  text-transparent sm:text-base dark:from-slate-600 dark:via-slate-400 dark:to-slate-600";

  return (
    <article className="mt-8 flex flex-col gap-16 pb-16">
      <section className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
        <Image
          className="rounded-4xl"
          src="/profile_pic.jpeg"
          alt="Photo of Akshay"
          width={200}
          height={200}
          priority
        />
        <div className="flex max-w-[300px] flex-col items-start sm:max-w-full">
          <h1 className="title text-4xl text-balance sm:text-5xl">
            Akshay S Gaekwad
          </h1>

          <p className="mt-2 text-sm font-medium whitespace-nowrap sm:text-base">
            Computer Science Graduate.
          </p>
          <p className="mt-4 max-w-sm text-sm text-balance">
            <span className={greyStr}>Software Engineer</span> 💻 |{" "}
            <span className={greyStr}>Machine Learning</span> 🧠
          </p>

          <section className="mt-6 flex flex-wrap items-center gap-4">
            {/* <Link href="/resume.pdf" target="_blank">
              <Button variant="outline">
                <span className="font-semibold">Resume</span>
                <FileDown className="ml-2 size-5" />
              </Button>
            </Link> */}
            <ResumeButton />
            <Socials />
          </section>
        </div>
      </section>
      <Experience />

      {/* Skills Section */}
      <section className="flex flex-col gap-8">
        <div className="flex-start flex">
          <h2 className="title text-2xl sm:text-3xl">Skills</h2>
        </div>
        <SkillsComp />
      </section>
      {/* Featured projects */}

      <section className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h2 className="title text-2xl sm:text-3xl">Featured Projects</h2>
          <LinkWithIcon
            href=""
            position="right"
            icon={<ArrowRightIcon className="size-5" />}
            text="view more"
          />
        </div>
        {/* <Projects limit={DISPLIMIT} /> */}
      </section>

      {/* <section className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h2 className="title text-3xl">Recent Posts</h2>
          <LinkWithIcon
            href=""
            position="right"
            icon={<ArrowRightIcon className="size-5" />}
            text="view more"
          />
        </div>
      </section> */}
    </article>
  );
}
