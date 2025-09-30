"use client";

import React from "react";
import { useRef } from "react";
import SectionHeading from "./ui/sectionHeading";
import { motion, useScroll, useTransform } from "framer-motion";
import { EducationCard } from "./ui/education-card";

export default function Experience() {

    const experience = [
        {
            company: "Revocare Solutions",
            href: "https://revocaresolutions.com/",
            position: "Intern Software Engineer",
            logoUrl: "/revocare.jpeg",
            start: "2025",
            end: "Present",
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
            id="experience"
            ref={ref}
            style={{
                scale: scaleProgess,
                opacity: opacityProgess,
            }}
        >
            <SectionHeading>Experience</SectionHeading>

            <div className="flex min-h-0 flex-col gap-y-3 ">
                {experience.map((experience) => (
                    <EducationCard
                        key={experience.company}
                        href={experience.href}
                        logoUrl={experience.logoUrl}
                        altText={experience.company}
                        title={experience.position}
                        subtitle={experience.company}
                        period={`${experience.start} - ${experience.end}`}
                    />
                ))}
            </div>

        </motion.section>
    );
}
