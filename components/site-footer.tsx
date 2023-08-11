import Link from "next/link";

import { siteConfig } from "@/config/site";
import { ThemeToggle } from "./theme-toggle";
import { Github, Mountain, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

export function SiteFooter() {
  return (
    <header className="w-full border-t bg-background">
      <div className="container flex h-16 items-center justify-between space-x-4">
        <div className="mr-2 flex items-center space-x-2 md:mr-6">
          <Image
            alt="profile pic"
            src="https://avatars.githubusercontent.com/u/33996870"
            width={28}
            height={28}
          />
          <span className="hidden font-bold md:inline-block">
            Pritish Mishra
          </span>
        </div>
        <div className="mr-2 flex items-center space-x-2 md:mr-6">
          <a href="https://twitter.com/PritishhMishraa" target="_blank">
            <Button variant="outline" size="icon">
              <Twitter className="h-[1.2rem] w-[1.2rem]" />
            </Button>
          </a>
          <a href="https://github.com/PritishMishraa" target="_blank">
            <Button variant="outline" size="icon">
              <Github className="h-[1.2rem] w-[1.2rem]" />
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
