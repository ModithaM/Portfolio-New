// Schema.org utility for structured data generation

export interface ProjectData {
  title: string
  description: string
  dates: string
  image: string
  technologies: string[]
  links: { type: string; href: string }[]
}

/**
 * Generate CreativeWork schema for projects
 * Improves SEO for individual project discovery
 */
export function generateProjectSchema(project: ProjectData) {
  const startDate = project.dates.split(' - ')[0]

  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    image: `https://www.moditha.me${project.image}`,
    author: {
      '@type': 'Person',
      name: 'Moditha Marasingha',
      url: 'https://www.moditha.me',
    },
    dateCreated: startDate,
    keywords: project.technologies.join(', '),
    url: 'https://www.moditha.me#projects',
  }
}

/**
 * Generate AggregateOffer schema for all projects
 * Shows portfolio as a collection of creative works
 */
export function generateProjectCollectionSchema(projects: ProjectData[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Projects Portfolio',
    description:
      'Collection of projects showcasing full-stack development expertise',
    url: 'https://www.moditha.me#projects',
    creator: {
      '@type': 'Person',
      name: 'Moditha Marasingha',
      url: 'https://www.moditha.me',
    },
    hasPart: projects.map((project) => generateProjectSchema(project)),
  }
}
