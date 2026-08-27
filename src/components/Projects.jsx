import { ArrowUpRight } from "lucide-react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "Expense Tracker",
    description:
      "A modern expense tracking application for managing personal finances, transactions and spending.",
    image: "/projects/expense-tracker.png",
    technologies: ["React", "Tailwind CSS", "LocalStorage"],
    liveUrl: "#",
    githubUrl: "https://github.com/neo-praise/expense-tracker",
  },
  {
    name: "Student Management System",
    description:
      "A student management application for collecting, searching and managing student records.",
    image: "/projects/weatherapp.png",
    technologies: ["React", "Vite", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    name: "Community App",
    description:
      "A community platform built with modern frontend technologies and real-world application architecture.",
    image: "/projects/community.png",
    technologies: ["Next.js", "TypeScript", "Convex"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-white/5 py-4 lg:py-10 bg-[#02000e]"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-sm font-medium text-violet-400">
              ● Projects
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Featured Projects
            </h2>
          </div>

          <a
            href="https://github.com/neo-praise?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="flex items-center text-sm text-violet-400 transition-colors hover:text-violet-300"
          >
            View all projects
            <ArrowUpRight className="ml-1 size-4" />
          </a>
        </div>

        <div className="grid md:gap-6 gap-2 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
