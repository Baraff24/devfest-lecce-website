# Sponsor Logos

This folder is ready for DevFest Lecce 2026 sponsor logos.

1. Add the logo file here, preferably as SVG or PNG.
2. Import it in `index.ts`.
3. Add the sponsor to the correct display group: `platinum`, `gold`, `silver`, or `bronze`.

These groups are only used to organize logos on the website. Public sponsor-package amounts are intentionally not shown.

Example:

```ts
import companyLogo from './company-logo.svg'

export const sponsors = {
    platinum: [{ name: 'Company', logo: companyLogo, url: 'https://example.com' }],
    gold: [],
    silver: [],
    bronze: [],
}
```
