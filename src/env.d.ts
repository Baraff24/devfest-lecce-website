declare module '@/assets/sessionize/sessions.json' {
    export type RawSession = {
        'Session Id': number
        'Title': string
        'Description': string
        'Owner': string
        'Owner Email': string
        'Speakers': string
        'Category': string
        'Session format': string
        'Session duration (workshops)': string | null
        'Level': string
        'Language': string
        'Are you a Google employee or GDE?': string | null
        'Country': string | null
        'Owner Informed': string
        'Owner Confirmed': string
        'Room': string | null
        'Scheduled At': string | null
        'Scheduled Duration': number | null
        'Live Link': string | null
        'Recording Link': string | null
        'Favorited Count': number
        'Speaker Ids': string
    }

    const value: RawSession[]
    export default value
}

declare module '@/assets/sessionize/speakers.json' {
    export type RawSpeaker = {
        'Speaker Id': string
        'FirstName': string
        'LastName': string
        'Email': string
        'TagLine': string | null
        'Bio': string | null
        'LinkedIn': string | null
        'Company Website': string | null
        'Instagram': string | null
        'X (Twitter)': string | null
        'Blog': string | null
        'Facebook': string | null
        'Profile Picture': string | null
    }

    const value: RawSpeaker[]
    export default value
}
