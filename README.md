# Website DevFest Lecce 2026

Official website for **DevFest Lecce 2026**, the community-driven technology conference organized by [GDG Lecce](https://gdg.community.dev/gdg-lecce/).

The event is scheduled for **October 17, 2026** at **Studium 2000, University of Salento**, in Lecce, Italy. Speakers and accepted sessions are populated from the Sessionize export; room and time details can be added when the final agenda is ready.

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

- Shared Italian and English copy lives in `src/lib/astro/i18n.ts`.
- The speaker-submission block is intentionally off through `eventFeatureFlags.showCallForSpeakers` in `src/lib/astro/i18n.ts`; flip it only when a future edition reopens submissions.
- Public sponsor-package pricing has been removed from the website. Only the logo area remains.
- The home page uses the previous-edition numbers from the DevFest Lecce 2026 source material: 350 attendees, 26 speakers, 8 sponsors, and 9 partners.
- The home gallery is populated from local images in `src/assets/gallery/`.
- News and Inclusion pages still exist, but they are hidden from the main navigation for the current DevFest Lecce 2026 public flow.
- The old Team page redirects to the new About page.

## Structured Data

### Speakers and Schedule

Yes: the repository already has a data pipeline for speaker and agenda content.

- Raw Sessionize exports live in `src/assets/sessionize/`.
- `speakers.json` and `sessions.json` are generated from the Sessionize XLSX export.
- `src/lib/astro/sessionize.ts` normalizes that data for Astro and Preact components.
- The public speaker and schedule pages read directly from the normalized Sessionize data.
- `src/components/preact/ScheduleSection.tsx` is the existing interactive timed schedule UI and can be reconnected when room and time assignments are complete.

### Sponsor Logos

Sponsor logos are prepared in `src/assets/data-sponsors/`.

Add logo files in that folder, import them in `src/assets/data-sponsors/index.ts`, then add each sponsor under `platinum`, `gold`, `silver`, or `bronze`. These labels are only display groupings for the logo area, without public sponsor-package amounts.

## Deployment

Build command:

```bash
npm run build
```

Publish directory:

```text
dist
```
