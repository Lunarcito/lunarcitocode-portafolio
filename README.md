# Carolina Calle — Frontend Engineer Portfolio

Personal portfolio for Carolina Calle, a Frontend Engineer focused on building accessible, responsive, and high-performance web applications with React, Next.js, and TypeScript.

The site presents selected work, including **Grounded**, a full-stack wellness and habit-tracking platform.

## Tech stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Next.js Metadata API
- Vitest
- React Testing Library
- ESLint
- Prettier
- Husky and lint-staged
- GitHub Actions

## Highlights

- Responsive, accessible portfolio UI built with reusable React components.
- Optimized project preview image using `next/image`, responsive `sizes`, and lazy loading.
- Native Next.js metadata, favicon, Open Graph defaults, and robots directives.
- Component test coverage for the Featured Project section.
- Automated local quality checks with Husky and lint-staged.
- Continuous integration that verifies formatting, linting, type safety, tests, and production builds on pushes and pull requests to `main`.

## Getting started

### Prerequisites

- Node.js 22 or later
- npm

### Install and run

```bash
git clone [https://github.com/Lunarcito/lunarcitocode-portafolio.git](https://github.com/Lunarcito/lunarcitocode-portafolio.git)
cd lunarcitocode-portafolio
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available scripts

| Command                | Purpose                                             |
| ---------------------- | --------------------------------------------------- |
| `npm run dev`          | Starts the local development server                 |
| `npm run build`        | Creates a production build                          |
| `npm run start`        | Starts the production server after a build          |
| `npm run lint`         | Runs ESLint across the project                      |
| `npm run typecheck`    | Checks TypeScript types without emitting files      |
| `npm run format`       | Formats supported files with Prettier               |
| `npm run format:check` | Verifies Prettier formatting without changing files |
| `npm run test`         | Runs Vitest in watch mode                           |
| `npm run test:run`     | Runs Vitest once for CI                             |

## Quality workflow

Before every commit, Husky runs `lint-staged` to format staged files and apply ESLint fixes where applicable.

GitHub Actions runs the following checks on pushes and pull requests targeting `main`:

1. Formatting check
2. Linting
3. Type checking
4. Unit and component tests
5. Production build

## Project structure

```text
src/
  app/                  Next.js routes, global styles, and metadata files
  components/
    sections/           Portfolio page sections
    ui/                 Shared presentation components
  data/                 Portfolio content and project data
public/
  images/               Static portfolio assets
.github/
  workflows/            GitHub Actions workflows
.husky/                 Local Git hooks
```

## Deployment

The portfolio is prepared for deployment with AWS Amplify Hosting. Amplify can connect directly to the GitHub repository, build the Next.js application, and deploy updates from the selected branch. [AWS Amplify deployment guide](https://docs.aws.amazon.com/amplify/latest/userguide/getting-started-next.html)

## License

This repository is intended as a personal portfolio and reference project. Reuse of the source code should include attribution.
