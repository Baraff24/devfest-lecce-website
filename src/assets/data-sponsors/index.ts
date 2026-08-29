// Add sponsor logo files in this folder, import them here, then add each company to the matching tier.
// Example:
// import companyLogo from './company-logo.svg'

type SponsorLogo = {
    src: string
    width?: number
    height?: number
    format?: string
}

export type SponsorTier = 'platinum' | 'gold' | 'silver' | 'bronze'

export type Sponsor = {
    name: string
    logo: SponsorLogo
    url?: string
}

export const sponsorTierOrder: SponsorTier[] = ['platinum', 'gold', 'silver', 'bronze']

export const sponsors = {
    platinum: [
        // { name: 'Company name', logo: companyLogo, url: 'https://example.com' },
    ],
    gold: [],
    silver: [],
    bronze: [],
} satisfies Record<SponsorTier, Sponsor[]>

