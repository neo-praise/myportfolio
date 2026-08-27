import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/neo-praise",
    icon: FaGithubSquare,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/praise-osondu-b90051255",
    icon: FaLinkedin,
  },
  {
    label: "Twitter",
    href: "https://x.com/neo_praisee",
    icon: FaSquareXTwitter,
  },
  {
    label: "Email",
    href: "mailto:emmanuelpreiz9@gmail.com",
    icon: MdEmail,
  },
];

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      {socials.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
          aria-label={label}
          className="text-zinc-400 transition-all hover:-translate-y-0.5 hover:text-violet-400"
        >
          <Icon className="size-5" />
        </a>
      ))}
    </div>
  );
}
