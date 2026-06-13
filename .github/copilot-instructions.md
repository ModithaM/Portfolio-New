# Copilot Instructions for Portfolio Project

## Build & Development Commands

**Development:**
```bash
npm run dev           # Start dev server with Turbopack (http://localhost:3000)
```

**Production:**
```bash
npm run build         # Build for production
npm run start         # Start production server
```

**Code Quality:**
```bash
npm run lint          # Run Next.js linter (ESLint + TypeScript)
npm run format        # Format all files with Prettier
npm run format:check  # Check formatting without changes
```

## Architecture Overview

### Project Structure
- **Single-page portfolio** with smooth scrolling between sections
- Built with **Next.js 15** (App Router) + **TypeScript**
- Styled with **Tailwind CSS** + custom components
- Animations via **Framer Motion**
- Dark/light theme support via React Context + localStorage

### Key Directories
- `/app` - Next.js app router pages and root layout
- `/components` - React components organized by section (home, about, education, etc.)
  - `/ui` - Reusable UI components (cards, badges, dock, etc.)
- `/context` - React Context providers (theme management)
- `/services` - Utilities for external data (blog posts, form submissions)
- `/lib` - Utility functions (e.g., `cn()` for Tailwind class merging)
- `/public` - Static assets

### Data Flow
- **Static sections**: Homepage, About, Education, Skills rendered from component props
- **Dynamic sections**: Blog posts fetched via `/services/blogposts.ts`, projects loaded from external source
- **Theme state**: Managed via `ThemeContext`, persisted to localStorage

## Code Conventions & Patterns

### Component Structure
- **Client components** use `'use client'` directive (most components are client-side due to interactivity)
- **Functional components** with TypeScript types
- Components in `/components/ui` are reusable building blocks
- Section components (home, about, etc.) are self-contained and imported into `app/page.tsx`

### Styling
- **Tailwind CSS** for all styling with `prettier-plugin-tailwindcss` auto-sorting classes
- Use `cn()` function from `lib/utils.tsx` to merge Tailwind classes conditionally:
  ```tsx
  import { cn } from '@/lib/utils'
  className={cn('base-classes', condition && 'conditional-classes')}
  ```
- **No CSS modules or styled-components** — all styles via Tailwind utilities

### Animations
- **Framer Motion** for animations via `<motion.div>`, `<motion.span>`, etc.
- Common patterns: fade-in with `initial={{ opacity: 0 }}`, slide animations with `y: 100`, scale transitions
- Use `transition` prop with `type`, `duration`, `delay`, and `stiffness` for springs

### Context & Hooks
- **Theme Context** pattern in `/context/theme-context.tsx` — exports both provider and `useTheme()` hook
- Always check for context null and throw descriptive error if used outside provider

### Type Definitions
- Use TypeScript generics for Context types: `createContext<ThemeContextType | null>(null)`
- Define prop types inline as generic components or exported types: `type ThemeContextProviderProps = { ... }`

### Imports & Aliases
- Use path alias `@/` for all non-relative imports (e.g., `@/components/home`, `@/lib/utils`)
- Relative imports only in the same or adjacent directories for clarity

### Image Handling
- Use Next.js `Image` component with `priority={true}` for above-the-fold images
- Remote images from `unsplash.com` and `medium.com` configured in `next.config.ts`
- Set `quality="95"` for high-quality images

### Linting & Formatting Rules
- **ESLint**: Extends Next.js recommended + TypeScript + Prettier + jsx-a11y
- **Prettier**: Single quotes, trailing commas, 80-char line width, 2-space tabs, no semicolons
- **Accessibility**: jsx-a11y rules set to warn (not error) — add alt text to images, ARIA attributes where needed

### Metadata & SEO
- **root layout** sets global metadata and JSON-LD schema (`Person` type)
- Metadata includes OpenGraph tags for social sharing
- Schema-dts package used for type-safe structured data

## Common Tasks

### Adding a New Section
1. Create component in `/components/{section-name}.tsx` with `'use client'` if interactive
2. Import and add to `app/page.tsx` in the correct order
3. Use `section` HTML element with an `id` for navigation (e.g., `id="education"`)
4. Apply Tailwind classes: `max-w-[50rem]` for width, `scroll-mt-[100rem]` for nav offset

### Adding Reusable UI Components
1. Create in `/components/ui/{component-name}.tsx`
2. Export as default component
3. Include TypeScript prop types
4. Use `cn()` for conditional class merging

### Theme Integration
1. Import `useTheme()` hook from context
2. Access `theme` (string) and `toggleTheme` (function)
3. Use dark mode classes: `dark:bg-gray-900`, `dark:text-gray-50`

### Linking Between Sections
1. Use Next.js `Link` with href pointing to section id: `href="#about"`
2. Add smooth scroll handler with `scrollIntoView({ behavior: 'smooth' })`
3. Add `scroll-mt-[100rem]` to section for scroll padding offset

## SEO & Structured Data

**Schema.org Integration:**
- **Person Schema** — Main profile with job titles, skills, contact info, social profiles
- **Organization Schema** — Portfolio entity with contact details and social links
- **Website Schema** — Site-level metadata with search action capability
- **BreadcrumbList Schema** — Navigation hierarchy for rich snippet display
- **CreativeWork/Collection Schemas** — Individual projects with metadata (use `lib/schemas.ts` utilities)

**Adding Project Schema:**
Import `generateProjectSchema()` and `generateProjectCollectionSchema()` from `lib/schemas.ts` to generate CreativeWork schemas for projects. Inject via `<script type="application/ld+json">` tags.

**Schema Testing:**
Validate structured data at [Google Rich Results Test](https://search.google.com/test/rich-results)
