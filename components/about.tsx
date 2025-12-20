"use client";

import React from "react";
import SectionHeading from "./ui/sectionHeading";
import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <motion.section
      className=" text-center leading-8 sm:mb-2 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 text-left">
        <span className="font-medium">A Software Engineering undergraduate at </span>
        <span className="font-medium underline">
          <Link href="https://www.sliit.lk/" target="_blank">
            Sri Lanka Institute of Information Technology (SLIIT)
          </Link>
          ,
        </span>{" "}
        maintaining a 3.6/4 GPA and specializing in{" "}
        <span className="font-medium">backend development</span> and innovative web solutions.
        With <span className="font-medium">one year of industry experience</span> and strong
        expertise in <span className="font-medium">Java, Spring Boot, MongoDB, and MySQL</span>,
        I enjoy building scalable and efficient systems. Leading collaborative projects on GitHub
        has strengthened my ability to manage development workflows and contribute effectively
        within team-driven environments.
      </p>

      <p className="text-left">
        <span className="italic">Beyond software development,</span> I have a strong interest in{" "}
        <span className="font-medium">IoT and IIoT</span> and how they integrate with scalable
        backend systems and cloud-native architectures. With hands-on{" "}
        <span className="font-medium">experience in CI/CD pipelines</span>, I enjoy improving
        development workflows through automation, reliable deployments, and continuous
        improvement practices. Always eager to tackle complex problems, I continuously explore
        new technologies to refine my skills and contribute to impactful, production-ready
        solutions. Let&apos;s connect and build something amazing!
      </p>

    </motion.section>
  );
}
