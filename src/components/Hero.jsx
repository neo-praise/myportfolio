import { ArrowRight } from "lucide-react";
import { FaGithubSquare } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SocialLinks from "./SocialLinks";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#02000e]"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute right-1/4 top-1/3 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
        {/* Content */}
        <div className="max-w-2xl">
          <Badge
            variant="outline"
            className="mb-6 border-violet-500/40 bg-violet-500/5 px-4 py-1.5 text-violet-300"
          >
            <span className="mr-2 size-1.5 rounded-full bg-violet-400" />
            Frontend Developer
          </Badge>

          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              Osondu
            </span>
            <br />
            E. Praise
          </h1>

          <h2 className="mt-4 text-3xl font-semibold text-violet-400 sm:text-4xl">
            Frontend Developer
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
            I build clean, responsive and user-focused web experiences with
            React, JavaScript and modern frontend tools.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-violet-600 text-white shadow-lg shadow-violet-600/20 hover:bg-violet-500"
            >
              <a href="#projects">
                View My Work
                <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white"
            >
              <a
                href="https://github.com/neo-praise"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithubSquare className="mr-2 size-4" />
                GitHub
              </a>
            </Button>
          </div>

          <div className="mt-8 flex justify-center md:justify-start">
            <SocialLinks />
          </div>
        </div>

        {/* Profile */}
        <div className="relative mx-auto w-full max-w-md lg:ml-auto">
          <div className="absolute inset-10 rounded-full bg-violet-600/20 blur-[80px]" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-2 shadow-2xl">
            <div className="overflow-hidden rounded-[1.5rem] bg-zinc-900">
              <img
                src="/profile.jpeg"
                alt="Osondu E. Praise"
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -right-3 top-16 h-16 w-16 rounded-2xl border border-violet-500/30 bg-violet-500/10 backdrop-blur-xl" />
          <div className="absolute -bottom-3 -left-3 h-20 w-20 rounded-full border border-blue-500/20 bg-blue-500/10 blur-sm" />
        </div>
      </div>
    </section>
  );
}
