import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconArticle,
  IconHome,
  IconBrandLinkedin,
  IconTerminal2,
} from "@tabler/icons-react";

export function Dock() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
      newTab: false,
    },
    {
      title: "Blog",
      icon: (
        <IconArticle className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/blog",
      newTab: false,
    },
    {
      title: "Projects",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/#projects",
      newTab: false,
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/moditha-marasingha",
      newTab: true,
    },
    {
        title: "GitHub",
        icon: (
          <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "https://github.com/ModithaM",
        newTab: true,
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/moditha_marasingha",
      newTab: true,
    },
  ];
  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-center pb-4">
      <FloatingDock
        items={links}
      />
    </div>
  );
}
