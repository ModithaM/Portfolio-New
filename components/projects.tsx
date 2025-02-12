"use client";

import React from "react";
import SectionHeading from "./ui/sectionHeading";
import { ProjectCard } from "./ui/project-card";
import { Icons } from "./ui/icons";

export default function Projects() {

    const Projects = [{
        title: "Online Pharmacy Portal",
        href: "",
        dates: "Aug 2024 - Dec 2024",
        active: true,
        description:
          "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
        technologies: [
          "HTML",
          "CSS",
          "JavaScript",
          "PHP",
          "MYSQL",
        ],
        links: [
          {
            type: "Source",
            href: "https://github.com/ModithaM/Online_Pharmacy_Portal",
            icon: <Icons.github className="size-3" />,
          },
        ],
        image: "/pharmacyportal.png",
        video:
          "",
      },
      {
        title: "Portfolio Website",
        href: "",
        dates: "Aug 2024 - Dec 2024",
        active: true,
        description:
          "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
        technologies: [
          "Next.js",
          "Framer Motion",
          "Tailwind CSS",
          "TypeScript",
        ],
        links: [
          {
            type: "Source",
            href: "https://github.com/ModithaM/Online_Pharmacy_Portal",
            icon: <Icons.github className="size-3" />,
          },
          {
            type: "Website",
            href: "/",
            icon: <Icons.globe className="size-3" />,
          },
        ],
        image: "/portfolio.png", 
        video:
          "",
      },
      {
        title: "Movie Gallery",
        href: "",
        dates: "Aug 2024 - Dec 2024",
        active: true,
        description:
          "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
        technologies: [
          "React",
          "CSS",
          "JavaScript",
          "Spring Boot",
          "MongoDB",
        ],
        links: [
          {
            type: "Source Frontend",
            href: "https://github.com/ModithaM/Online_Pharmacy_Portal",
            icon: <Icons.github className="size-3" />,
          },
          {
            type: "Source Backend",
            href: "https://github.com/ModithaM/Online_Pharmacy_Portal",
            icon: <Icons.github className="size-3" />,
          },
        ],
        image: "/moviegallery.png",
        video:
          "",
      },
      {
        title: "Blog Website",
        href: "",
        dates: "Aug 2024 - Dec 2024",
        active: true,
        description:
          "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
        technologies: [
          "HTML",
          "CSS",
          "Hugo",
          "JavaScript",
          "Markdown",
        ],
        links: [
          {
            type: "Website",
            href: "https://github.com/ModithaM/Online_Pharmacy_Portal",
            icon: <Icons.globe className="size-3" />,
          },
        ],
        image: "/blog.png",
        video:
          "",
      }];

  return (
    <div id="projects">
      <SectionHeading>Projects</SectionHeading>
      
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {Projects.map((project, id) => (
              <div key={id}>
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </div>
            ))}
          </div>
    </div>
  );
}
