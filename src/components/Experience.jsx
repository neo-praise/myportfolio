import { BriefcaseBusiness, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-white/5 py-5 lg:py-15 bg-[#02000e] scroll-mt-15"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="mb-3 text-sm font-medium text-violet-400">
              ● Experience
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              My Experience
            </h2>
          </div>

          <div className="relative">
            <div className="absolute bottom-0 left-[7px] top-0 w-px bg-white/10" />

            <div className="relative flex gap-6">
              <div className="relative z-10 mt-2 flex size-4 shrink-0 items-center justify-center rounded-full border border-violet-500 bg-black">
                <div className="size-1.5 rounded-full bg-violet-400" />
              </div>

              <Card className="flex-1 border-white/10 bg-white/[0.02]">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex gap-4">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10">
                        <BriefcaseBusiness className="size-5 text-violet-400" />
                      </div>

                      <div>
                        <h3 className="font-semibold text-white">
                          Frontend Developer Intern
                        </h3>

                        <p className="mt-1 text-sm text-violet-400">
                          Wigxel Corp
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                      <Calendar className="size-3.5" />
                      2024 — Present
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-zinc-400">
                    Working on real-world frontend projects, building responsive
                    interfaces, integrating APIs and collaborating with other
                    developers to deliver web applications.
                  </p>
                </CardContent>
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex gap-4">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10">
                        <BriefcaseBusiness className="size-5 text-violet-400" />
                      </div>

                      <div>
                        <h3 className="font-semibold text-white">
                          Frontend Developer Volunteer
                        </h3>

                        <p className="mt-1 text-sm text-violet-400">Clax App</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                      <Calendar className="size-3.5" />
                      2023 — 2024
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-zinc-400">
                    Contributed to the development of Clax App, a startup, by
                    designing and building most of the frontend user interface.
                    Worked on creating responsive, user-friendly interfaces and
                    translating product ideas into functional web experiences
                    while collaborating with the team throughout development.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
