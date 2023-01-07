import { marked } from "marked";
import projects from "../../projects.json";
import { readFile } from "fs/promises";
import path from "path";
import Link from "next/link";

interface ProjectPageProps {
  params: {
    "project-slug": string;
  };
}

async function getProjectBySlug(projectSlug: string) {
  const foundProject = projects.find((project) => project.id === projectSlug);
  if (!foundProject) {
    throw new Error("No project found with slug: " + projectSlug);
  }

  // try {
  // } catch (error) {
  //   console.error(error);
  // }
  const descPath = path.join(
    process.cwd(),
    "public",
    "projects",
    `${projectSlug}.md`
  );
  const descMD = await readFile(descPath);

  const desc = marked.parse(descMD.toString());

  return { ...foundProject, description: desc };
}

export const dynamicParams = false; // Dynamic segments not included in generateStaticParams will return a 404.
export async function generateStaticParams() {
  return projects.map((project) => ({
    "project-slug": project.id,
  }));
}

async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProjectBySlug(params["project-slug"]);
  return (
    <div className="text-sm">
      {/* <Link
        href="/"
        className="absolute p-4 block top-0 left-0 transition-transform hover:-translate-x-1"
      >
        &#8592; Home
      </Link> */}
      <div className="prose max-w-3xl">
        <div className="mb-4">
          <iframe
            src={project["driver-embed"]}
            width="640"
            height="480"
            allow="autoplay"
          />
        </div>
        <div>{project.title}</div>

        <div dangerouslySetInnerHTML={{ __html: project.description }} />
      </div>
    </div>
  );
}

export default ProjectPage;
