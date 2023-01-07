import Image from "next/image";
import Link from "next/link";
import projects from "../projects.json";
import { redirect } from "next/navigation";

interface HomePageProps {}

async function HomePage({}: HomePageProps) {
  redirect("/landjaeger-mit-brot");
  return (
    <div className="prose grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto max-w-3xl py-8 px-3">
      {projects.map((project) => (
        <Link key={project.id} href={`/${project.id}`}>
          <Image
            width={376}
            height={300}
            className="block rounded relative object-cover my-0 w-[376px] h-[300px]"
            src={`/projects/${project.id}.png`}
            alt={`Thumbnail for: ${project.title}`}
          />
          <h2 className="mt-4">{project.title}</h2>
        </Link>
      ))}
    </div>
  );
}

export default HomePage;
