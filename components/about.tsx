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
        
        <span className="font-medium">A Software Engineering undergraduate at </span><span className="font-medium underline"><Link href="https://www.sliit.lk/" target="_blank">Sri Lanka Institute of{" "}
        Information Technology (SLIIT)</Link>,</span> maintaining a 3.6/4 GPA and specializing in{" "}<span className="font-medium">backend 
        development</span> and innovative web solutions. With expertise in <span className="font-medium">Java, Spring 
        Boot, MongoDB and MySQL,</span>  I enjoy 
        building scalable and efficient systems. Mentoring others in Java MVC architecture 
        and leading collaborative projects on GitHub have strengthened my ability to guide 
        teams and manage development workflows effectively.
      </p>

      <p className="text-left">
      <span className="italic">Beyond software development,</span> I have a deep interest in{" "}
      <span className="font-medium">IoT and IIoT,</span> integrating{" "}
      <span className="font-medium">NodeMCU and Arduino</span>{" "}
      to create real-time sensor solutions. Always eager to tackle complex problems,{" "}
      I continuously explore new technologies to refine my skills and contribute to{" "}
      impactful projects. Let&apos;s connect and build something amazing!
      </p>
    </motion.section>
  );
}
