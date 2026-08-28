import {
  Code2,
  Braces,
  Atom,
  Palette,
  GitBranch,
  Terminal,
  Database,
} from "lucide-react";
import { FaGithubSquare } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { Badge } from "@/components/ui/badge";

const skills = [
  { name: "HTML", icon: Code2 },
  { name: "CSS", icon: Palette },
  { name: "JavaScript", icon: Braces },
  { name: "React", icon: Atom },
  { name: "Tailwind CSS", icon: Palette },
  { name: "Next.js", icon: Terminal },
  { name: "TypeScript", icon: Braces },
  { name: "Git", icon: GitBranch },
  { name: "GitHub", icon: FaGithubSquare },
  { name: "REST API", icon: Database },
  { name: "Vite", icon: Terminal },
  { name: "Figma", icon: IoLogoFigma },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-white/5 py-15 lg:py-20 bg-[#02000e] scroll-mt-15"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="mb-3 text-sm font-medium text-violet-400">● Skills</p>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Technologies I work with
            </h2>
          </div>

          <div className="flex flex-wrap content-start gap-3">
            {skills.map(({ name, icon: Icon }) => (
              <Badge
                key={name}
                variant="outline"
                className="gap-2 border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-zinc-300 hover:border-violet-500/40 hover:bg-violet-500/5"
              >
                <Icon className="size-4 text-violet-400" />
                {name}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
