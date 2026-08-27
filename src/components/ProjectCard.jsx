import { ExternalLink } from "lucide-react";
import { FaGithubSquare } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProjectCard({ project }) {
  return (
    <Card className="group overflow-hidden border-white/10 bg-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:bg-white/[0.04]">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={`${project.name} screenshot`}
          className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105 brightness-75"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </div>

      <CardContent className="p-5">
        <h3 className="text-lg font-semibold text-white">{project.name}</h3>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-zinc-400">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <Badge
              key={technology}
              variant="secondary"
              className="bg-white/5 text-xs text-zinc-400"
            >
              {technology}
            </Badge>
          ))}
        </div>

        <div className="mt-5 flex gap-2">
          <Button
            asChild
            size="sm"
            className="bg-violet-600 hover:bg-violet-500"
          >
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              Live Demo
              <ExternalLink className="ml-2 size-3.5" />
            </a>
          </Button>

          <Button
            asChild
            size="sm"
            variant="outline"
            className="border-white/10 bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            <a href={project.githubUrl} target="_blank" rel="noreferrer">
              <FaGithubSquare className="mr-2 size-3.5" />
              GitHub
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
