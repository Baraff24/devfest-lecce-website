# Sponsor Logos

This folder is ready for DevFest Lecce 2026 sponsor logos.

1. Add the logo file here, preferably as SVG or PNG.
2. Import it in `index.ts`.
3. Add the sponsor to the correct tier: `platinum`, `gold`, `silver`, or `bronze`.

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

