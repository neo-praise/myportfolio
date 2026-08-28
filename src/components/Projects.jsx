import { ArrowUpRight } from "lucide-react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "Expense Tracker",
    description:
      "A modern expense tracking application for managing personal finances, transactions and spending.",
    image: "/projects/expense-tracker.png",
    technologies: ["React", "Tailwind CSS", "LocalStorage"],
    liveUrl: "https://my-expense-tracker-praise14.vercel.app/",
    githubUrl: "https://github.com/neo-praise/expense-tracker",
  },
  {
    name: "Weather App",
    description:
      "A responsive weather application that provides real-time weather information for searched locations, including temperature, weather conditions, humidity, wind speed, and forecasts.",
    image: "/projects/weatherapp.png",
    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "Tailwind CSS",
      "Weather API",
    ],
    liveUrl: "https://praiseweatherapp.netlify.app/",
    githubUrl: "https://github.com/neo-praise/weatherapp",
  },
  {
    name: "Notes App",
    description:
      "A simple and intuitive note-taking application built to manage personal notes efficiently, with support for creating, editing, deleting, and persisting notes.",
    image: "/projects/notes-app.png",
    technologies: ["React.js", "JavaScript", "CSS", "LocalStorage"],
    liveUrl: "https://praise-mynotesapp.netlify.app/",
    githubUrl: "https://github.com/neo-praise/myNotesApp",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-white/5 py-4 lg:py-10 bg-[#02000e] scroll-mt-15"
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
