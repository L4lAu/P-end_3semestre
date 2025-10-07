import { Separator } from "@/components/ui/separator";
import {
  DribbbleIcon,
  GithubIcon,
  TwitchIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";

const logo = { 
  titulo: "zenith",
};

const footerLinks = [
  {
    title: "Overview",
    href: "#",
  },
  {
    title: "Features",
    href: "#",
  },
  {
    title: "Pricing",
    href: "#",
  },
  {
    title: "Careers",
    href: "#",
  },
  {
    title: "Help",
    href: "#",
  },
  {
    title: "Privacy",
    href: "#",
  },
];

const Footer05Page = () => {
  return (
    <footer className="border-t">
      <div className="max-w-screen-xl mx-auto">
        <div className="py-12 flex flex-col justify-start items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={"https://i.pinimg.com/736x/3f/04/e7/3f04e7f9e1ae6b2a99d83bf319117e11.jpg"} 
              width="124"
              height="32"
            />
          </div>

          <ul className="mt-6 flex items-center gap-4 flex-wrap">
            {footerLinks.map(({ title, href }) => (
              <li key={title}>
                <Link href={href} className="text-muted-foreground hover:text-foreground">
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Separator />
        <div
          className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0"
        >
          {/* Copyright */}
          <span className="text-muted-foreground">
            &copy; {new Date().getFullYear()}{" "}
            <Link href="/" target="_blank">
              Shadcn UI Blocks
            </Link>
            . All rights reserved.
          </span>

          <div className="flex items-center gap-5 text-muted-foreground">
            <Link href="#" target="_blank">
              <TwitterIcon className="h-5 w-5" />
            </Link>
            <Link href="#" target="_blank">
              <DribbbleIcon className="h-5 w-5" />
            </Link>
            <Link href="#" target="_blank">
              <TwitchIcon className="h-5 w-5" />
            </Link>
            <Link href="#" target="_blank">
              <GithubIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer05Page;
