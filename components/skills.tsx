"use client";

import React from "react";
import SectionHeading from "./ui/sectionHeading";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";

export default function Skills() {

  const skills = [
    "Java",
    "Spring Boot",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "React Native",
    "HTML",
    "CSS",
    "IOT",
    "Git",
    "GitHub",
    "Docker",
    "MySQL",
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "Postman",
    "Azure",
    "AWS",
    "Liquibase",
    "CI/CD",
    "Nginx"
  ];

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <section
      className="max-w-[45rem] text-center sm:mb-2 scroll-mt-28 w-full"
      id="skills"
    >
      <SectionHeading>Skills</SectionHeading>

      <div className="flex min-h-0 flex-col gap-y-3">
        <div className="flex flex-wrap gap-1">
          {skills.map((skill, id) => (
            <motion.div
              variants={fadeInAnimationVariants}
              key={id}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={id}
            >
              <Badge key={skill}>{skill}</Badge>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
