# Website DevFest Lecce 2026

Official website for **DevFest Lecce 2026**, the community-driven technology conference organized by [GDG Lecce](https://gdg.community.dev/gdg-lecce/).

The event is scheduled for **October 17, 2026** in Lecce, Italy. The final venue, tickets, speakers, and schedule are shown as “coming soon” until GDG Lecce publishes the official details.

## Stack

- **Framework**: [Astro 7](https://astro.build)
- **UI islands**: [Preact 10](https://preactjs.com)
- **Language**: TypeScript
- **Styling**: plain CSS with project-level design tokens
- **Icons**: `astro-icon` with Material Symbols and Material Design Icons
- **Package manager**: npm

Astro 7 requires Node.js `>=22.12.0`. This repository includes an `.nvmrc` and matching `package.json` engines field.

## Commands

Run every command from the project root.

| Command                   | Action                                          |
| :------------------------ | :---------------------------------------------- |
| `npm install`             | Installs dependencies                           |
| `npm run dev`             | Starts the local dev server at `localhost:4321` |
| `npm run build`           | Builds the production site to `./dist/`         |
| `npm run preview`         | Previews the production build locally           |
| `npm run astro ...`       | Runs Astro CLI commands like `astro check`      |
| `npm run astro -- --help` | Shows Astro CLI help                            |

## Multilanguage

The site is available in Italian and English:

- `/it/` is the default public language.
- `/en/` is the English version.
- Root-level routes such as `/`, `/schedule`, `/speakers`, and `/news` redirect to the Italian version.

Shared copy, links, and route helpers live in `src/lib/astro/i18n.ts`. Add or update text there first, then use it from Astro pages and components.

## Project Structure

```text
src/
├── assets/                 # Images, videos, local content, and structured data
├── components/
│   ├── astro/              # Server-rendered Astro components
│   └── preact/             # Interactive Preact components
├── layouts/                # Page layouts and redirect shell
├── lib/
│   ├── astro/              # Astro-side utilities, including i18n
│   └── client/             # Browser utilities
├── pages/
│   ├── [lang]/             # Localized pages for it/en
│   └── *.astro             # Backward-compatible redirects
└── styles/                 # Global styles and component CSS
```

## Content Notes

- The current public pages avoid showing previous-edition speaker, agenda, ticket, sponsor, and venue data as if it belonged to Lecce.
- The old Sessionize export and historical news are still in the repository as source material, but they are not used by the active localized news pages.
- When official Lecce speaker and schedule exports become available, replace the data in `src/assets/sessionize/` and reconnect the schedule/speaker pages.

## Deployment

Build command:

```bash
npm run build
```

Publish directory:

```text
dist
```
