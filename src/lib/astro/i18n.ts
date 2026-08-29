export const defaultLang = 'it'

export const languages = {
    it: 'Italiano',
    en: 'English',
} as const

export type Lang = keyof typeof languages

export const eventLinks = {
    cfp: 'https://sessionize.com/devfest-lecce-2026/',
    gdg: 'https://gdg.community.dev/gdg-lecce/',
    linkedin: 'https://www.linkedin.com/company/gdg-lecce',
    email: 'mailto:info@gdglecce.it',
    devfest: 'https://developers.google.com/community/devfest',
    gdgGlobal: 'https://developers.google.com/groups/',
    wtm: 'https://developers.google.com/womentechmakers',
}

export function isLang(value: string | undefined): value is Lang {
    return !!value && Object.keys(languages).includes(value)
}

export function getLangFromUrl(url: URL): Lang {
    const [, lang] = url.pathname.split('/')
    return isLang(lang) ? lang : defaultLang
}

export function localizedStaticPaths() {
    return Object.keys(languages).map(lang => ({ params: { lang } }))
}

export function routePath(lang: Lang, path = '') {
    const cleanPath = path.replace(/^\/+|\/+$/g, '')
    return cleanPath ? `/${lang}/${cleanPath}` : `/${lang}/`
}

export function switchLangPath(pathname: string, nextLang: Lang) {
    const segments = pathname.split('/').filter(Boolean)

    if (isLang(segments[0])) {
        segments.shift()
    }

    return routePath(nextLang, segments.join('/'))
}

export const content = {
    it: {
        site: {
            title: 'DevFest Lecce 2026',
            description:
                'DevFest Lecce 2026 è la conferenza tech community-driven organizzata da GDG Lecce: una giornata di talk, workshop e networking il 17 ottobre 2026 a Lecce.',
        },
        nav: {
            speakers: 'Speaker',
            schedule: 'Agenda',
            news: 'News',
            iwd: 'Inclusione',
            location: 'Dove',
            team: 'Team',
        },
        common: {
            comingSoon: 'In arrivo',
            learnMore: 'Scopri di più',
            viewCfp: 'Vedi la Call for Speakers',
            contactUs: 'Contattaci',
            newsletter: 'Segui GDG Lecce',
        },
        footer: {
            social: 'Social',
            about: 'Info',
            community: 'Community',
            resources: 'Risorse',
            gdgLecce: 'GDG Lecce',
            gdg: 'Google Developer Groups',
            devfest: 'DevFest',
            gdgPlatform: 'Pagina community GDG Lecce',
            codeOfConduct: 'Codice di condotta',
            faq: 'FAQ',
            madeBy: 'Realizzato dalla community GDG Lecce',
            copyright: 'GDG Lecce 2026',
        },
        home: {
            hero: {
                title: 'DevFest Lecce 2026',
                subtitle: '17 ottobre 2026 - Lecce, Italia',
                motto: '// Community, codice e futuro nel Salento',
                primaryCta: 'Segui gli aggiornamenti',
                secondaryCta: 'Call for Speakers',
                logoAlt: 'Logo DevFest Lecce 2026',
            },
            tickets: {
                title: 'Registrazioni',
                body: "I biglietti non sono ancora pubblicati. Segui GDG Lecce per ricevere l'annuncio appena le registrazioni saranno aperte.",
                cta: 'Segui GDG Lecce',
            },
            cfp: {
                title: 'Call for Speakers',
                badge: 'Chiusa',
                body: [
                    'La Call for Speakers di DevFest Lecce 2026 si è chiusa il 31 luglio 2026. Il team sta lavorando alla selezione del programma.',
                    'Le sessioni possono essere in italiano o in inglese, con talk da 45 minuti, workshop hands-on e lightning talk.',
                ],
                cta: 'Pagina Sessionize',
            },
            intro: {
                title: 'DevFest Lecce sta arrivando',
                body: [
                    'Una giornata intera dedicata a sviluppatori, designer, studenti e professionisti tech che vogliono imparare, confrontarsi e costruire relazioni reali.',
                    'Il programma ruoterà intorno a Intelligenza Artificiale, Web & Mobile Development, Cloud, Cybersecurity, Data Science e Soft Skills.',
                ],
                cta: 'Scopri la community',
            },
            stats: [
                { value: '1', label: 'giornata community' },
                { value: '6', label: 'aree tematiche' },
                { value: 'IT/EN', label: 'lingue benvenute' },
                { value: '100%', label: 'energia GDG' },
            ],
            topicsTitle: 'Aree tematiche',
            topics: ['AI', 'Web & Mobile', 'Cloud', 'Cybersecurity', 'Data Science', 'Soft Skills'],
            partners: {
                title: 'Partner e sponsor',
                body: 'Le partnership per DevFest Lecce 2026 sono in definizione. Per collaborazioni, sponsorship o community partnership puoi scrivere al team GDG Lecce.',
                cta: 'Scrivi a GDG Lecce',
            },
        },
        speakers: {
            title: 'Speaker',
            body: 'La selezione degli speaker è in corso dopo la chiusura della Call for Speakers. Pubblicheremo qui il lineup appena il programma sarà confermato.',
            cards: ['Talk tecnici e casi reali', 'Workshop pratici da 60-90 minuti', 'Lightning talk da 10-15 minuti'],
        },
        schedule: {
            title: 'Agenda',
            body: "L'agenda ufficiale di DevFest Lecce 2026 sarà pubblicata dopo la review delle proposte. Per ora puoi tenere libero il 17 ottobre 2026: sarà una giornata piena di sessioni tecniche, workshop e networking.",
            cards: ['Talk da 45 minuti', 'Workshop hands-on', 'Networking e momenti community'],
        },
        news: {
            title: 'News',
            shareText: 'Leggi questa news su DevFest Lecce 2026.',
        },
        location: {
            title: 'Dove',
            heroTitle: 'Lecce, Italia',
            venueName: 'Venue in arrivo',
            venueAddress: 'La sede definitiva sarà annunciata da GDG Lecce.',
            mapCta: 'Apri la mappa',
            infoTitle: 'Informazioni sulla sede',
            info: [
                'DevFest Lecce 2026 si terrà a Lecce il 17 ottobre 2026. La venue ufficiale non è ancora stata pubblicata, quindi il sito mostra la città senza indicare un indirizzo non confermato.',
                "Appena la sede sarà annunciata, questa pagina potrà includere indirizzo, mappa precisa, accessibilità e indicazioni per raggiungere l'evento.",
            ],
            findUs: 'Trova Lecce',
            mapTitle: 'Lecce',
            mapText:
                'La mappa punta al centro di Lecce come riferimento temporaneo fino alla pubblicazione della venue ufficiale.',
            directionsTitle: 'Come arrivare',
            trainTitle: 'In treno',
            train: 'Lecce è servita da collegamenti ferroviari regionali e nazionali. Una volta annunciata la sede, aggiungeremo il percorso più comodo dalla stazione.',
            planeTitle: 'In aereo',
            plane: "L'aeroporto più vicino è Brindisi, collegato a Lecce tramite servizi bus e transfer. I dettagli saranno raffinati quando la venue sarà ufficiale.",
            carTitle: 'In auto',
            car: 'Lecce è raggiungibile dalle principali direttrici stradali del Salento. Le indicazioni parcheggio saranno aggiunte insieme alla sede.',
        },
        team: {
            title: 'Team',
            body: 'DevFest Lecce 2026 è organizzato da GDG Lecce, la community locale dei Google Developer Groups.',
            organizers: [
                { name: 'Martino Scarcia', role: 'GDG Organizer' },
                { name: 'Raffaele Grieco', role: 'GDG Organizer' },
            ],
        },
        iwd: {
            title: 'Inclusione e community',
            introTitle: 'Una community aperta',
            intro: [
                'DevFest è uno spazio per imparare e crescere insieme. Inclusione, rispetto e rappresentazione sono parte del modo in cui vogliamo costruire la community tech locale.',
                "L'ecosistema Women Techmakers ispira molte iniziative GDG nel mondo: visibilità, community e risorse per rendere il settore tech più accessibile.",
            ],
            themeTitle: 'Break the Pattern',
            theme: [
                'Rompere il pattern significa smettere di accettare le cose solo perché sono sempre state così.',
                'Anche a DevFest Lecce vogliamo portare questo spirito: più voci, più percorsi, più possibilità per chi costruisce tecnologia.',
            ],
            cta: 'Scopri Women Techmakers',
        },
        faq: {
            title: 'FAQ',
            intro: 'Alcune risposte rapide su DevFest Lecce 2026. Aggiorneremo questa pagina man mano che programma, biglietti e venue saranno confermati.',
            items: [
                {
                    q: 'Quando si terrà DevFest Lecce 2026?',
                    a: 'DevFest Lecce 2026 si terrà il 17 ottobre 2026 a Lecce, Italia.',
                },
                {
                    q: 'Le registrazioni sono aperte?',
                    a: "Non ancora. Segui GDG Lecce per ricevere l'annuncio appena i biglietti saranno disponibili.",
                },
                {
                    q: 'La Call for Speakers è aperta?',
                    a: 'No. La Call for Speakers si è chiusa il 31 luglio 2026 su Sessionize.',
                },
                {
                    q: 'Le sessioni saranno in italiano o inglese?',
                    a: 'Entrambe le lingue sono benvenute. Le sessioni saranno indicate chiaramente nel programma.',
                },
                {
                    q: "Dove si svolgerà l'evento?",
                    a: 'La venue ufficiale non è ancora pubblicata. Questa pagina verrà aggiornata appena GDG Lecce confermerà la sede.',
                },
            ],
        },
        coc: {
            title: 'Codice di condotta',
            sections: [
                {
                    title: 'Introduzione',
                    body: [
                        "GDG Lecce DevFest 2026 si impegna a offrire un'esperienza inclusiva e libera da molestie per ogni partecipante, indipendentemente da identità o espressione di genere, orientamento sessuale, disabilità, neurodiversità, aspetto fisico, corporatura, etnia, nazionalità, età, religione o altre caratteristiche personali.",
                        'Non tolleriamo molestie in alcuna forma. Le violazioni saranno prese seriamente e gestite in modo appropriato dal team organizzatore.',
                    ],
                },
                {
                    title: 'Policy',
                    body: [
                        "Trattiamo ogni persona con rispetto. Partecipiamo riconoscendo che tutte e tutti hanno diritto a vivere l'evento senza molestie, discriminazioni o comportamenti condiscendenti.",
                        "Se noti o subisci un comportamento non appropriato, contatta subito una persona dello staff. Il team potrà prendere le misure necessarie, incluso l'allontanamento dall'evento.",
                    ],
                },
                {
                    title: 'Segnalazioni',
                    body: [
                        "Per segnalare un incidente cerca una persona dello staff durante l'evento oppure contatta GDG Lecce tramite i canali ufficiali.",
                    ],
                },
                {
                    title: 'Attribuzione',
                    body: [
                        'Questa policy è basata su linee guida di community internazionali, tra cui ConfCodeofConduct.com, Geek Feminism Wiki e altri codici di condotta open community.',
                    ],
                },
            ],
        },
        notFound: {
            title: '404 - Pagina non trovata',
            subtitle: 'Route non trovata',
            home: 'Torna alla home',
        },
    },
    en: {
        site: {
            title: 'DevFest Lecce 2026',
            description:
                'DevFest Lecce 2026 is the community-driven tech conference organized by GDG Lecce: one day of talks, workshops, and networking on October 17, 2026 in Lecce, Italy.',
        },
        nav: {
            speakers: 'Speakers',
            schedule: 'Schedule',
            news: 'News',
            iwd: 'Inclusion',
            location: 'Location',
            team: 'Team',
        },
        common: {
            comingSoon: 'Coming soon',
            learnMore: 'Learn more',
            viewCfp: 'View Call for Speakers',
            contactUs: 'Contact us',
            newsletter: 'Follow GDG Lecce',
        },
        footer: {
            social: 'Social',
            about: 'About',
            community: 'Community',
            resources: 'Resources',
            gdgLecce: 'GDG Lecce',
            gdg: 'Google Developer Groups',
            devfest: 'DevFest',
            gdgPlatform: 'GDG Lecce community page',
            codeOfConduct: 'Code of Conduct',
            faq: 'FAQs',
            madeBy: 'Made by the GDG Lecce community',
            copyright: 'GDG Lecce 2026',
        },
        home: {
            hero: {
                title: 'DevFest Lecce 2026',
                subtitle: 'October 17, 2026 - Lecce, Italy',
                motto: '// Community, code, and future in Salento',
                primaryCta: 'Follow updates',
                secondaryCta: 'Call for Speakers',
                logoAlt: 'DevFest Lecce 2026 logo',
            },
            tickets: {
                title: 'Registration',
                body: 'Tickets have not been published yet. Follow GDG Lecce to get the announcement as soon as registration opens.',
                cta: 'Follow GDG Lecce',
            },
            cfp: {
                title: 'Call for Speakers',
                badge: 'Closed',
                body: [
                    'The DevFest Lecce 2026 Call for Speakers closed on July 31, 2026. The team is now reviewing proposals and shaping the program.',
                    'Sessions can be delivered in Italian or English, including 45-minute talks, hands-on workshops, and lightning talks.',
                ],
                cta: 'Sessionize page',
            },
            intro: {
                title: 'DevFest Lecce is coming',
                body: [
                    'A full day for developers, designers, students, and tech professionals who want to learn, exchange ideas, and build real community connections.',
                    'The program will focus on Artificial Intelligence, Web & Mobile Development, Cloud, Cybersecurity, Data Science, and Soft Skills.',
                ],
                cta: 'Meet the community',
            },
            stats: [
                { value: '1', label: 'community day' },
                { value: '6', label: 'topic areas' },
                { value: 'IT/EN', label: 'languages welcome' },
                { value: '100%', label: 'GDG energy' },
            ],
            topicsTitle: 'Topic areas',
            topics: ['AI', 'Web & Mobile', 'Cloud', 'Cybersecurity', 'Data Science', 'Soft Skills'],
            partners: {
                title: 'Partners and sponsors',
                body: 'Partnerships for DevFest Lecce 2026 are being defined. For sponsorships, collaborations, or community partnerships, you can reach the GDG Lecce team.',
                cta: 'Email GDG Lecce',
            },
        },
        speakers: {
            title: 'Speakers',
            body: 'Speaker selection is in progress after the Call for Speakers closed. The lineup will be published here as soon as the program is confirmed.',
            cards: [
                'Technical talks and real-world stories',
                'Hands-on workshops from 60-90 minutes',
                'Lightning talks from 10-15 minutes',
            ],
        },
        schedule: {
            title: 'Schedule',
            body: 'The official DevFest Lecce 2026 schedule will be published after proposal review. For now, save October 17, 2026: it will be a full day of technical sessions, workshops, and networking.',
            cards: ['45-minute talks', 'Hands-on workshops', 'Networking and community moments'],
        },
        news: {
            title: 'News',
            shareText: 'Read this DevFest Lecce 2026 news.',
        },
        location: {
            title: 'Location',
            heroTitle: 'Lecce, Italy',
            venueName: 'Venue coming soon',
            venueAddress: 'The final venue will be announced by GDG Lecce.',
            mapCta: 'Open map',
            infoTitle: 'Venue information',
            info: [
                'DevFest Lecce 2026 will take place in Lecce on October 17, 2026. The official venue has not been published yet, so the site shows the city without claiming an unconfirmed address.',
                'Once the venue is announced, this page can include the address, precise map, accessibility notes, and travel details.',
            ],
            findUs: 'Find Lecce',
            mapTitle: 'Lecce',
            mapText: 'The map points to central Lecce as a temporary reference until the official venue is published.',
            directionsTitle: 'Getting there',
            trainTitle: 'By train',
            train: 'Lecce is served by regional and national rail connections. When the venue is announced, we will add the easiest route from the station.',
            planeTitle: 'By plane',
            plane: 'The closest airport is Brindisi, connected to Lecce by bus and transfer services. Details will be refined when the venue is official.',
            carTitle: 'By car',
            car: 'Lecce is reachable from the main roads across Salento. Parking guidance will be added together with the venue.',
        },
        team: {
            title: 'Team',
            body: 'DevFest Lecce 2026 is organized by GDG Lecce, the local Google Developer Groups community.',
            organizers: [
                { name: 'Martino Scarcia', role: 'GDG Organizer' },
                { name: 'Raffaele Grieco', role: 'GDG Organizer' },
            ],
        },
        iwd: {
            title: 'Inclusion and community',
            introTitle: 'An open community',
            intro: [
                'DevFest is a space to learn and grow together. Inclusion, respect, and representation are part of how we want to build the local tech community.',
                'The Women Techmakers ecosystem inspires many GDG initiatives around the world: visibility, community, and resources to make tech more accessible.',
            ],
            themeTitle: 'Break the Pattern',
            theme: [
                'Breaking the pattern starts when we stop accepting things simply because they have always been done that way.',
                'At DevFest Lecce, we want to bring that spirit too: more voices, more paths, and more possibilities for people building technology.',
            ],
            cta: 'Explore Women Techmakers',
        },
        faq: {
            title: 'FAQs',
            intro: 'Quick answers about DevFest Lecce 2026. This page will be updated as the program, tickets, and venue are confirmed.',
            items: [
                {
                    q: 'When is DevFest Lecce 2026?',
                    a: 'DevFest Lecce 2026 will take place on October 17, 2026 in Lecce, Italy.',
                },
                {
                    q: 'Is registration open?',
                    a: 'Not yet. Follow GDG Lecce to get the announcement as soon as tickets are available.',
                },
                {
                    q: 'Is the Call for Speakers open?',
                    a: 'No. The Call for Speakers closed on July 31, 2026 on Sessionize.',
                },
                {
                    q: 'Will sessions be in Italian or English?',
                    a: 'Both languages are welcome. Session language will be clearly shown in the schedule.',
                },
                {
                    q: 'Where will the event take place?',
                    a: 'The official venue has not been published yet. This page will be updated as soon as GDG Lecce confirms it.',
                },
            ],
        },
        coc: {
            title: 'Code of Conduct',
            sections: [
                {
                    title: 'Introduction',
                    body: [
                        'GDG Lecce DevFest 2026 is dedicated to providing a harassment-free and inclusive event experience for everyone regardless of gender identity and expression, sexual orientation, disabilities, neurodiversity, physical appearance, body size, ethnicity, nationality, race, age, religion, or other protected category.',
                        'We do not tolerate harassment of event participants in any form. Violations will be taken seriously and handled appropriately by the organizing team.',
                    ],
                },
                {
                    title: 'Policy',
                    body: [
                        'Treat everyone with respect. Participate while acknowledging that everyone deserves to be here and to enjoy the event without harassment, discrimination, or condescension.',
                        'If you see or experience inappropriate behavior, contact an event staff member immediately. The team may take any action it deems appropriate, including removing a participant from the event.',
                    ],
                },
                {
                    title: 'Reporting',
                    body: [
                        'To report an incident, look for a staff member during the event or contact GDG Lecce through the official community channels.',
                    ],
                },
                {
                    title: 'Attribution',
                    body: [
                        'This policy is based on international community guidelines, including ConfCodeofConduct.com, Geek Feminism Wiki, and other open community codes of conduct.',
                    ],
                },
            ],
        },
        notFound: {
            title: '404 - Page Not Found',
            subtitle: 'Route not found',
            home: 'Return to homepage',
        },
    },
} as const
