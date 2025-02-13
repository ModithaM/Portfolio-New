"use client";

import React from "react";
import SectionHeading from "./ui/sectionHeading";
import { ProjectCard } from "./ui/project-card";
import { Icons } from "./ui/icons";

export default function Projects() {

    const Projects = [{
        title: "Online Pharmacy Portal (PharmacyX)",
        href: "",
        dates: "Aug 2024 - Dec 2024",
        active: true,
        description:
          "PharmacyX is an online pharmacy system for browsing medications, uploading prescriptions, and managing orders. Built with HTML, CSS, JavaScript, PHP, and MySQL, it was a group project where I managed development and collaboration using GitHub.",
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
          "This portfolio is a prime example of my web development skills, designed and coded entirely using HTML, CSS, and JavaScript without the use of any CSS libraries. It demonstrates my ability to create responsive, user-friendly, and visually appealing web designs through clean and efficient code.",
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
          "My movie gallery project showcases a dynamic platform for managing and displaying movie-related images. The frontend is built with React, ensuring a seamless and interactive user experience. The backend, developed using Spring Boot, features a RESTful API integrated with MongoDB for efficient image management.",
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
          "I developed and manage a custom-themed blog using Hugo, where I regularly share content on topics I'm passionate about. This blog showcases my skills in content creation, static site generation, and web design with Hugo, all while reflecting my unique personal style.",
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
