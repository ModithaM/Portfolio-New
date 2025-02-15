"use client";

import React from "react";
import { useRef } from "react";
import SectionHeading from "./ui/sectionHeading";
import { motion, useScroll, useTransform } from "framer-motion";
import { EducationCard } from "./ui/education-card";

export default function Education() {

   const education = [
        {
          school: "SLIIT",
          href: "https://www.sliit.lk/",
          degree: "Bachelor's Degree of Information Technology (BCS)",
          logoUrl: "/sliit.png",
          start: "2023",
          end: "Present",
        },
        {
          school: "Kegalu Vidyalaya",
          href: "https://kegaluvidyalaya.lk/",
          degree: "GCE Advanced Level",
          logoUrl: "/kv.jpeg",
          start: "2009",
          end: "2022",
        },
      ];

    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
      });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.section
      className="max-w-[45rem] text-center sm:mb-2 scroll-mt-28 w-full"
      id="education"
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
    >
      <SectionHeading>Education</SectionHeading>
      
      <div className="flex min-h-0 flex-col gap-y-3 ">
          {education.map((education) => (
              <EducationCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
          ))}
        </div>

    </motion.section>
  );
}
