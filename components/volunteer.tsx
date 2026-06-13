'use client'

import React from 'react'
import { useRef } from 'react'
import SectionHeading from './ui/sectionHeading'
import { motion, useScroll, useTransform } from 'framer-motion'
import { EducationCard } from './ui/education-card'

export default function Volunteer() {
  const volunteer = [
    {
      school: 'Head of Development',
      href: 'https://msclubsliit.org/',
      degree: 'MS Club of SLIIT',
      logoUrl: '/msclub.png',
      start: 'Feb 2026',
      end: 'Present',
    },
    {
      school: 'Volunteer Developer, Event Organizer',
      href: 'https://msclubsliit.org/',
      degree: 'MS Club of SLIIT',
      logoUrl: '/msclub.png',
      start: '2025',
      end: 'Feb 2026',
    },
  ]

  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  })
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  return (
    <motion.section
      className="w-full max-w-[45rem] scroll-mt-28 text-center sm:mb-2"
      id="education"
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
    >
      <SectionHeading>Volunteering</SectionHeading>

      <div className="flex min-h-0 flex-col gap-y-3">
        {volunteer.map((volunteer) => (
          <EducationCard
            key={volunteer.school}
            href={volunteer.href}
            logoUrl={volunteer.logoUrl}
            altText={volunteer.school}
            title={volunteer.school}
            subtitle={volunteer.degree}
            period={`${volunteer.start} - ${volunteer.end}`}
          />
        ))}
      </div>
    </motion.section>
  )
}
