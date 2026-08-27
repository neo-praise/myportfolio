import { ArrowUp } from "lucide-react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#02000e]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div>
          <p className="text-sm font-semibold text-white">Osondu E. Praise</p>

          <p className="mt-1 text-xs text-zinc-500">
            © {new Date().getFullYear()} Osondu E. Praise. All rights reserved.
          </p>
        </div>

        <SocialLinks />

        <a
          href="#home"
          aria-label="Back to top"
          className="flex size-9 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition-colors hover:border-violet-500/30 hover:text-violet-400"
        >
          <ArrowUp className="size-4" />
        </a>
      </div>
    </footer>
  );
}
