import { Menu, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#02000e] backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-3"
          aria-label="Osondu E. Praise home"
        >
          <span className="text-xl font-bold tracking-tight text-violet-400">
            OP
          </span>

          <span className="hidden text-sm font-medium text-white sm:block">
            Osondu E. Praise
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button
            variant="outline"
            className="border-violet-500/60 bg-transparent text-white hover:bg-violet-500/10 hover:text-white"
          >
            <a
              href="/cv/Osondu_Emmanuel_Praise_Front_End_Developer_CV.pdf"
              download
              className="flex"
            >
              <Download className="mr-2 size-5" />
              Download CV
            </a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-zinc-300 hover:bg-white/10 hover:text-white md:hidden"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>

          <SheetContent className="border-white/10 bg-zinc-950 text-white">
            <SheetHeader>
              <SheetTitle className="text-left text-white">
                Osondu E. Praise
              </SheetTitle>
            </SheetHeader>

            <nav className="mt-8 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-4 py-3 text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <Button className="mt-6 w-full bg-violet-600 hover:bg-violet-500">
              <Download className="mr-2 size-4" />
              Download CV
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
