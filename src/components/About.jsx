import { GraduationCap, MapPin, BriefcaseBusiness } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    value: "B.Sc. Computer Science",
    description: "University of Benin",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Nigeria",
    description: "Available for work",
  },
  {
    icon: BriefcaseBusiness,
    title: "Focus",
    value: "Frontend Development",
    description: "React & modern web tools",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-white/5 bg-[#02000e] py-10 lg:py-5 scroll-mt-15"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-1 text-sm font-medium text-violet-400">
              ● About Me
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Get to know me
            </h2>
          </div>

          <div>
            <p className="max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">
              I’m a passionate Frontend Developer who enjoys building beautiful,
              responsive, and functional web applications. I love turning ideas
              into real-world products, solving problems, and creating intuitive
              interfaces that deliver great user experiences. I’m always eager
              to learn, improve my skills, and grow through new challenges and
              opportunities.
            </p>

            <div className="grid md:gap-4 gap-1 sm:grid-cols-3">
              {highlights.map(({ icon: Icon, title, value, description }) => (
                <Card
                  key={title}
                  className="border-white/10 bg-white/[0.02] transition-colors hover:border-violet-500/30"
                >
                  <CardContent className="p-5">
                    <Icon className="mb-4 size-5 text-violet-400" />

                    <p className="text-xs text-zinc-500">{title}</p>

                    <p className="mt-1 text-sm font-semibold text-white">
                      {value}
                    </p>

                    <p className="mt-1 text-xs text-zinc-500">{description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
