import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ThemeContextProvider from '@/context/theme-context'
import './globals.css'
import { Dock } from '@/components/dock'
import { Person, WithContext, Organization, WebSite } from 'schema-dts'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Moditha Marasingha',
  description:
    'Explore the portfolio of Moditha Marasingha, a passionate Software Engineering undergraduate specializing in backend development, web solutions, and IoT projects. Showcasing expertise in Java, Spring Boot, React, MongoDB, and more.',
  openGraph: {
    title: 'Moditha Marasingha',
    description:
      'Explore the portfolio of Moditha Marasingha, a passionate Software Engineering undergraduate specializing in backend development, web solutions, and IoT projects. Showcasing expertise in Java, Spring Boot, React, MongoDB, and more.',
    url: 'https://www.moditha.me/',
    type: 'website',
    images: [
      {
        url: '/me.jpeg',
        width: 1200,
        height: 630,
        alt: 'Portfolio Banner',
      },
    ],
  },
}

// Person Schema - Main profile
const personSchema: WithContext<Person> = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Moditha Marasingha',
  jobTitle: [
    'Software Engineering Undergraduate',
    'Backend Developer',
    'Web Developer',
    'IoT Enthusiast',
    'Software Engineer',
  ],
  image: 'https://www.moditha.me/me.jpeg',
  url: 'https://www.moditha.me',
  sameAs: [
    'https://www.linkedin.com/in/moditha-marasingha',
    'https://github.com/ModithaM',
    'https://medium.com/@moditham',
    'https://www.instagram.com/moditha_marasingha',
  ],
  knowsAbout: [
    'Software Engineering',
    'Web Development',
    'Backend Development',
    'IoT Projects',
    'Java',
    'Spring Boot',
    'React',
    'MongoDB',
    'PostgreSQL',
    'TypeScript',
    'Next.js',
    'Tailwind CSS',
  ],
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.moditha.me',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+94',
    contactType: 'Customer Service',
    email: 'contact@moditha.me',
  },
}

// Organization Schema
const organizationSchema: WithContext<Organization> = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Moditha Marasingha',
  url: 'https://www.moditha.me',
  logo: 'https://www.moditha.me/me.jpeg',
  sameAs: [
    'https://www.linkedin.com/in/moditha-marasingha',
    'https://github.com/ModithaM',
    'https://medium.com/@moditham',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    email: 'contact@moditha.me',
  },
}

// Website Schema with search action
const websiteSchema: WithContext<WebSite> = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: 'https://www.moditha.me',
  name: 'Moditha Marasingha - Portfolio',
  description: 'Full-stack developer portfolio showcasing projects and skills',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.moditha.me#search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
} as never

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} relative mx-auto max-w-2xl scroll-smooth bg-gray-50 pt-3 text-gray-950 sm:pt-16 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <ThemeContextProvider>
          {children}
          <Dock />
        </ThemeContextProvider>
      </body>
    </html>
  )
}
