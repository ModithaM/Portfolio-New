"use client";

import React from "react";
import SectionHeading from "./sectionHeading";
import { motion } from "framer-motion";
import { EducationCard } from "./ui/education-card";

export default function Education() {

   const education = [
        {
          school: "Sri Lanka Institute of Information Technology (SLIIT)",
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

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center sm:mb-40 scroll-mt-28 w-full"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="education"
    >
      <SectionHeading>Education</SectionHeading>
      
      <div className="flex min-h-0 flex-col gap-y-3 ">
          {education.map((education, id) => (
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
