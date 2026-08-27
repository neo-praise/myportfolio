import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-white/5 -mt-2">
      <div className="mx-auto max-w-7xl px-5 py-2 lg:px-8 bg-[#02000e]">
        <div className="rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 via-white/[0.02] to-blue-500/5 p-8 sm:p-12 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-3 text-sm font-medium text-violet-400">
                ● Contact
              </p>

              <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
                Let's work together.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400">
                I'm open to frontend opportunities, collaborations and
                interesting projects. If you have an idea or opportunity, feel
                free to reach out.
              </p>

              <Button
                asChild
                size="lg"
                className="mt-8 bg-violet-600 hover:bg-violet-500"
              >
                <a href="mailto:emmanuelpreiz9@gmail.com">
                  <Mail className="mr-2 size-4" />
                  Get In Touch
                  <ArrowUpRight className="ml-2 size-4" />
                </a>
              </Button>
            </div>

            <div className="space-y-4 text-sm text-zinc-400">
              <div className="flex items-center gap-3">
                <Mail className="size-4 text-violet-400" />
                emmanuelpreiz9@gmail.com
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="size-4 text-violet-400" />
                Nigeria
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
