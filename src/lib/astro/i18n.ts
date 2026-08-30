export const languages = ['it', 'en'] as const

export type Lang = (typeof languages)[number]

export const defaultLang: Lang = 'it'

export const langLabels: Record<Lang, string> = {
    it: 'Italiano',
    en: 'English',
}

export const eventLinks = {
    gdg: 'https://gdg.community.dev/gdg-lecce/',
    gdgGlobal: 'https://developers.google.com/community/gdg',
    devfest: 'https://developers.google.com/community/devfest',
    wtm: 'https://developers.google.com/womentechmakers',
    // Keep this URL updated and flip `eventFeatureFlags.showCallForSpeakers`
    // when speaker submissions reopen for a future edition.
    cfp: 'https://sessionize.com/devfest-lecce-2026',
    tickets: '#tickets',
    calendar: 'https://gdg.community.dev/events/details/google-gdg-lecce-presents-devfest-lecce-2026/',
    email: 'mailto:info@gdglecce.it',
    phone: 'tel:+393394311707',
    linkedin: 'https://www.linkedin.com/company/gdg-lecce',
    instagram: 'https://www.instagram.com/gdg_lecce',
    directions: 'https://www.google.com/maps/dir//Studium+2000,+Via+di+Valesio,+Lecce',
    train: 'https://www.trenitalia.com/it.html',
    brindisiAirPortLink: 'https://www.trenitalia.com/it/regionale/collegamenti-regionale/brindisi-air-port-link.html',
    sgmLecce: 'https://www.sgmlecce.it/servizi/trasporto-pubblico/mappa-linee',
}

// Flip these for future editions when public calls reopen.
export const eventFeatureFlags = {
    showCallForSpeakers: false,
} as const

export const content = {
    it: {
        site: {
            title: 'DevFest Lecce 2026',
            description:
                'DevFest Lecce 2026, la conferenza tech GDG Lecce dedicata ad AI, Web, Mobile, Cloud, Cybersecurity, Data Science e community.',
        },
        meta: {
            title: 'DevFest Lecce 2026',
            description:
                'DevFest Lecce 2026, la conferenza tech GDG Lecce dedicata ad AI, Web, Mobile, Cloud, Cybersecurity, Data Science e community.',
        },
        common: {
            contactUs: 'Contattaci',
            newsletter: 'Segui GDG Lecce',
            details: 'Dettagli',
            bio: 'Bio',
            abstract: 'Abstract',
        },
        nav: {
            home: 'Home',
            speakers: 'Speaker',
            schedule: 'Agenda',
            news: 'News',
            iwd: 'Inclusione',
            location: 'Dove',
            about: 'Chi siamo',
            cta: 'Biglietti',
        },
        footer: {
            description:
                'DevFest Lecce 2026 è organizzata da GDG Lecce: una giornata per imparare, condividere e creare relazioni nella community tech salentina.',
            social: 'Social',
            community: 'Community',
            resources: 'Risorse',
            follow: 'Seguici',
            about: 'Chi siamo',
            contact: 'Contatti',
            gdgLecce: 'GDG Lecce',
            gdg: 'Google Developer Groups',
            devfest: 'DevFest',
            gdgPlatform: 'Pagina GDG Lecce',
            codeOfConduct: 'Codice di condotta',
            faq: 'FAQ',
            madeBy: 'Made with care by GDG Lecce',
            copyright: 'DevFest Lecce 2026',
        },
        home: {
            heroEyebrow: 'GDG Lecce presenta',
            heroTitle: 'DevFest Lecce 2026',
            heroSubtitle:
                'Una giornata intera dedicata a sviluppatori, designer, studenti e professionisti tech che vogliono imparare, confrontarsi e costruire relazioni reali.',
            heroDate: 'Sabato 17 ottobre 2026',
            heroLocation: 'Studium 2000, Università del Salento',
            primaryCta: 'Prenota il tuo posto',
            secondaryCta: 'Proponi un talk',
            announcementTitle: 'DevFest Lecce sta arrivando',
            announcementText:
                'Il programma ruoterà intorno a Intelligenza Artificiale, Web & Mobile Development, Cloud, Cybersecurity, Data Science e Soft Skills.',
            statsIntro: "Nell'edizione precedente",
            stats: [
                { value: '350', label: 'Partecipanti' },
                { value: '26', label: 'Speaker' },
                { value: '8', label: 'Sponsor' },
                { value: '9', label: 'Partner' },
            ],
            tickets: {
                title: 'Biglietti',
                subtitle:
                    "L'ingresso sarà gratuito. Le registrazioni apriranno qui non appena finalizzeremo programma e capienza.",
                badge: 'Coming soon',
                cta: 'Seguici su GDG Lecce',
            },
            cfp: {
                title: 'Proponi un talk',
                subtitle:
                    'Quando le proposte speaker saranno aperte, potrai candidare talk e workshop da questa sezione.',
                cta: 'Invia proposta',
            },
            gallery: {
                title: 'La community dal vivo',
                intro: 'Volti, sale piene, talk e momenti insieme: DevFest Lecce è soprattutto una giornata da vivere con altre persone.',
            },
            sponsors: {
                title: 'Sponsor e partner',
                logoTitle: 'Sponsor e partner',
                logoEmpty: 'Sponsor e partner saranno annunciati qui.',
                tierLabels: {
                    platinum: 'Platinum',
                    gold: 'Gold',
                    silver: 'Silver',
                    bronze: 'Bronze',
                },
            },
        },
        about: {
            title: 'Chi siamo',
            intro: 'GDG Lecce è una community indipendente e no-profit. DevFest Lecce è il nostro momento annuale per mettere insieme persone, competenze e territorio.',
            sections: [
                {
                    title: 'Google Developer Group Lecce',
                    text: "Organizziamo talk, workshop e momenti di networking aperti a sviluppatori, studenti, designer e professionisti tech, con l'obiettivo di far crescere l'ecosistema locale.",
                },
                {
                    title: 'DevFest Lecce',
                    text: 'DevFest Lecce è una giornata community-driven su AI, Web & Mobile, Cloud, Cybersecurity, Data Science e Soft Skills, con talk, workshop e networking.',
                },
            ],
            facts: [
                { label: 'Quando', value: 'Sabato 17 ottobre 2026' },
                { label: 'Dove', value: 'Studium 2000, Lecce' },
                { label: 'Talk attesi', value: '20+' },
                { label: 'Partecipanti attesi', value: '500+' },
            ],
            organizersTitle: 'Organizers',
            organizersIntro:
                'Il team GDG Lecce cura programma, community, speaker e accoglienza per costruire una DevFest utile, accessibile e ben organizzata.',
            organizers: [
                {
                    id: 'raffaele-grieco',
                    name: 'Raffaele Grieco',
                    role: 'GDG Organizer',
                    title: 'Backend Developer',
                    company: '',
                    profileUrl: 'https://gdg.community.dev/u/m4j59y/',
                },
                {
                    id: 'martino-scarcia',
                    name: 'Martino Scarcia',
                    role: 'GDG Organizer',
                    title: 'Backend Developer',
                    company: 'Hybris Hub',
                    profileUrl: 'https://gdg.community.dev/u/m2jda5/',
                },
            ],
        },
        speakers: {
            title: 'Speaker',
            body: 'La prima line-up confermata di DevFest Lecce 2026 è online: bio, talk e dettagli verranno aggiornati lungo il percorso verso l’evento.',
            cards: ['AI', 'Web & Mobile', 'Cloud', 'Cybersecurity', 'Data Science', 'Soft Skills'],
            subtitle: 'Speaker confermati per DevFest Lecce 2026.',
            lineupTitle: 'Speaker confermati',
            lineupIntro:
                'Scopri chi salirà sul palco: ogni card collega la persona alla sessione proposta e raccoglie i dettagli senza appesantire la pagina.',
            sessionLabel: 'Sessione',
            sessionsLabel: 'Sessioni',
            bioFallback: 'Bio in aggiornamento.',
            emptyTitle: 'Speaker in arrivo',
            emptyText:
                'Stiamo costruendo un programma con voci nazionali e internazionali su AI, sviluppo, cloud, sicurezza, dati e competenze trasversali.',
        },
        schedule: {
            title: 'Agenda',
            body: 'Le sessioni accettate sono online. Orari, aule e track interne saranno aggiunti appena chiuderemo la pianificazione logistica.',
            cards: ['Talk', 'Workshop', 'Lightning Talk', 'Hackathon', 'Networking', 'After party'],
            subtitle: 'Sessioni confermate e dettagli in aggiornamento.',
            acceptedTitle: 'Sessioni accettate',
            acceptedIntro:
                'Questa lista arriva dall’export Sessionize. La griglia con orari e aule verrà pubblicata quando la venue map e le track saranno definitive.',
            talksCountLabel: 'sessioni accettate',
            speakersCountLabel: 'speaker confermati',
            unscheduledNote: 'Orario e aula in definizione',
            meta: {
                track: 'Track',
                format: 'Formato',
                level: 'Livello',
                language: 'Lingua',
                room: 'Aula',
                time: 'Orario',
            },
            emptyTitle: 'Agenda in preparazione',
            emptyText:
                'Aspettati una giornata piena di sessioni tecniche, workshop pratici, networking e momenti community.',
        },
        news: {
            title: 'News',
            shareText: 'Leggi questa news da DevFest Lecce 2026',
            subtitle:
                'Aggiornamenti, annunci e storie dalla community arriveranno qui durante il percorso verso DevFest Lecce 2026.',
            emptyTitle: 'Nessuna news pubblicata',
            emptyText: 'Torna presto per novità su biglietti, programma e sponsor.',
        },
        iwd: {
            title: 'Inclusione',
            introTitle: 'Inclusione e community',
            intro: [
                'DevFest Lecce vuole essere uno spazio aperto, accogliente e rispettoso per tutte le persone.',
                'Women Techmakers e le iniziative community aiutano a creare occasioni di confronto, crescita e visibilità per chi vive il tech da prospettive diverse.',
            ],
            themeTitle: 'Spazi aperti, tecnologia per tutti',
            theme: [
                'DevFest Lecce mette al centro una community accessibile, curiosa e rispettosa.',
                'Talk, workshop e networking sono pensati per studenti, professionisti, designer, developer e persone curiose di tecnologia.',
                'Ogni partecipante, speaker, volontario e sponsor è tenuto a rispettare il codice di condotta.',
            ],
            cta: 'Scopri Women Techmakers',
            subtitle: 'DevFest Lecce vuole essere uno spazio aperto, accogliente e rispettoso per tutte le persone.',
            cards: [
                {
                    title: 'Community aperta',
                    text: 'Talk, workshop e networking sono pensati per studenti, professionisti, designer, developer e persone curiose di tecnologia.',
                },
                {
                    title: 'Relazioni reali',
                    text: "L'evento mette al centro confronto, mentoring e connessioni che continuano oltre la giornata della conferenza.",
                },
                {
                    title: 'Codice di condotta',
                    text: 'Ogni partecipante, speaker, volontario e sponsor è tenuto a rispettare il nostro codice di condotta.',
                },
            ],
        },
        location: {
            title: 'Dove',
            heroTitle: 'Studium 2000, Università del Salento',
            subtitle:
                "DevFest Lecce 2026 si terrà sabato 17 ottobre 2026 nel complesso Studium 2000 dell'Università del Salento.",
            venueName: 'Studium 2000 - Università del Salento',
            venueAddress: 'Edificio 3, Via di Valesio 3, 73100 Lecce',
            mapTitle: 'Studium 2000',
            mapText:
                'Il complesso si trova tra Via di Valesio e Viale San Nicola, vicino a Porta Napoli e al centro storico di Lecce.',
            mapCta: 'Apri indicazioni',
            infoTitle: 'Studium 2000',
            info: [
                "DevFest Lecce 2026 si terrà sabato 17 ottobre 2026 nel complesso Studium 2000 dell'Università del Salento, con punto principale nell'Edificio 3.",
                'Studium 2000 è un polo urbano vicino al centro storico: ospita biblioteca, spazi museali, aule, sale conferenza e ambienti adatti a sessioni parallele, networking e attività community.',
                "Una volta arrivati al punto indicato da Google Maps, la segnaletica DevFest guiderà verso check-in, aule, area community e spazi di pausa all'interno del complesso.",
            ],
            venueHighlights: [
                {
                    title: 'Edificio 3',
                    text: 'Punto di riferimento per check-in, aule e orientamento interno della giornata.',
                },
                {
                    title: 'Spazi conferenza',
                    text: 'Aule e sale pensate per talk, workshop e sessioni parallele.',
                },
                {
                    title: 'Area community',
                    text: 'Zone per networking, partner e pause tra una track e l’altra.',
                },
            ],
            indoor: {
                title: 'Mappa interna - Studium 2000 Edificio 3',
                subtitle:
                    'Dopo essere arrivati a Studium 2000, usa questa mappa orientativa per capire dove si trovano check-in, aule e track principali.',
                note: 'La disposizione e i nomi delle track potranno essere aggiornati con la segnaletica definitiva della venue.',
                entrance: 'Ingresso da Via di Valesio',
                corridor: 'Corridoio principale',
                detailsTitle: 'Dettaglio area',
                rooms: [
                    {
                        id: 'checkin',
                        label: 'Check-in',
                        room: 'Atrio Edificio 3',
                        track: 'Accoglienza e badge',
                        description:
                            'Primo punto per registrazione, badge, welcome kit e informazioni di orientamento.',
                        x: '6%',
                        y: '64%',
                        w: '22%',
                        h: '20%',
                        accent: '#4285f4',
                    },
                    {
                        id: 'main',
                        label: 'Main Track',
                        room: 'Aula ex Mediateca',
                        track: 'Keynote, AI e Cloud',
                        description: 'Sala principale per apertura, talk plenari e sessioni con maggiore affluenza.',
                        x: '34%',
                        y: '12%',
                        w: '26%',
                        h: '28%',
                        accent: '#ea4335',
                    },
                    {
                        id: 'web-mobile',
                        label: 'Web & Mobile',
                        room: 'Aula 3D',
                        track: 'Web & Mobile Development',
                        description: 'Track dedicata a frontend, mobile, UX tecnica e sviluppo applicativo.',
                        x: '64%',
                        y: '12%',
                        w: '28%',
                        h: '28%',
                        accent: '#34a853',
                    },
                    {
                        id: 'data-security',
                        label: 'Data & Security',
                        room: 'Sala studio Edificio 3',
                        track: 'Cybersecurity e Data Science',
                        description: 'Spazio per sessioni su sicurezza, dati, analisi e casi pratici.',
                        x: '34%',
                        y: '62%',
                        w: '26%',
                        h: '26%',
                        accent: '#fbbc04',
                    },
                    {
                        id: 'networking',
                        label: 'Community',
                        room: 'Foyer / area networking',
                        track: 'Partner, networking e community',
                        description: 'Area per partner, pausa caffè e incontri tra partecipanti.',
                        x: '64%',
                        y: '62%',
                        w: '28%',
                        h: '26%',
                        accent: '#8ab4f8',
                    },
                ],
            },
            findUs: 'Come arrivare',
            directionsTitle: 'Come raggiungerci',
            directionsIntro:
                'Punta a Studium 2000 - Edificio 3. L’ingresso evento sarà indicato dalla segnaletica DevFest appena dentro il complesso universitario.',
            directions: [
                {
                    icon: 'mdi:map-marker-path',
                    title: 'Punto di arrivo',
                    text: 'Imposta Studium 2000 su Google Maps e raggiungi l’area tra Via di Valesio e Viale San Nicola. Il check-in sarà nell’Edificio 3.',
                    details: [
                        'Cerca il percorso verso Studium 2000, Via di Valesio 3.',
                        'Una volta arrivato, segui cartelli e volontari DevFest verso check-in e aule.',
                    ],
                    cta: 'Apri Google Maps',
                    href: eventLinks.directions,
                },
                {
                    icon: 'mdi:train',
                    title: 'In treno',
                    text: 'Arriva alla stazione di Lecce, collegata con Bari, Brindisi, Roma, Bologna e Milano. Da lì puoi proseguire verso Studium 2000 a piedi, in taxi o con trasporto urbano.',
                    details: [
                        'Dal centro storico l’area di Studium 2000 è comoda da raggiungere passando da Porta Napoli.',
                        'Per i bus urbani controlla linee e fermate aggiornate sul sito SGM Lecce.',
                    ],
                    cta: 'Cerca treni',
                    href: eventLinks.train,
                },
                {
                    icon: 'mdi:airplane',
                    title: 'In aereo',
                    text: 'Lo scalo più comodo è Brindisi. Puoi arrivare alla stazione di Brindisi con Brindisi Air&Port Link e poi prendere il treno per Lecce.',
                    details: [
                        'L’aeroporto di Bari è un’alternativa più distante, utile se trovi voli migliori.',
                        'Per navette o taxi condivisi conviene prenotare con anticipo nei giorni vicini all’evento.',
                    ],
                    cta: 'Brindisi Air&Port Link',
                    href: eventLinks.brindisiAirPortLink,
                },
                {
                    icon: 'mdi:bus',
                    title: 'Bus urbano',
                    text: 'Se parti da hotel, B&B o zone fuori dal centro, controlla la mappa SGM e scegli la fermata più vicina a Via di Valesio, Porta Napoli o Viale De Pietro.',
                    details: [
                        'Le linee e le fermate possono cambiare: verifica sempre la mappa aggiornata il giorno prima.',
                        'Tieni qualche minuto extra per orientarti dentro il complesso.',
                    ],
                    cta: 'Mappa SGM Lecce',
                    href: eventLinks.sgmLecce,
                },
                {
                    icon: 'mdi:car-outline',
                    title: 'In auto',
                    text: 'Arrivando da fuori città, segui le indicazioni per Lecce centro e poi per Via di Valesio / Viale San Nicola. Prevedi un po’ di margine per parcheggio e check-in.',
                    details: [
                        'Imposta la destinazione prima di partire: la zona è centrale e può avere traffico nelle fasce universitarie.',
                        'Dopo aver parcheggiato, raggiungi l’Edificio 3 a piedi seguendo la segnaletica DevFest.',
                    ],
                    cta: 'Apri indicazioni',
                    href: eventLinks.directions,
                },
            ],
        },
        faq: {
            title: 'FAQ',
            intro: 'Le informazioni principali su DevFest Lecce 2026.',
            items: [
                {
                    question: 'Quando si terrà DevFest Lecce 2026?',
                    answer: 'Sabato 17 ottobre 2026 a Lecce, presso Studium 2000, Università del Salento.',
                },
                {
                    question: 'I biglietti sono disponibili?',
                    answer: "Non ancora. L'ingresso sarà gratuito e le registrazioni apriranno più avanti.",
                },
            ],
        },
        coc: {
            title: 'Codice di condotta',
            description:
                'Tutti gli eventi GDG seguono linee guida pensate per garantire un ambiente rispettoso e sicuro.',
            cta: 'Leggi il codice GDG',
            sections: [
                {
                    title: 'Ambiente rispettoso',
                    body: [
                        'DevFest Lecce vuole essere un evento accogliente per ogni partecipante, speaker, volontario e sponsor.',
                    ],
                },
                {
                    title: 'Contatti',
                    body: ['Per qualsiasi segnalazione o richiesta puoi contattare il team GDG Lecce.'],
                },
            ],
        },
        notFound: {
            title: 'Pagina non trovata',
            subtitle: 'Pagina non trovata',
            home: 'Torna alla home',
            text: 'Questa pagina non esiste o è stata spostata.',
            cta: 'Torna alla home',
        },
    },
    en: {
        site: {
            title: 'DevFest Lecce 2026',
            description:
                'DevFest Lecce 2026, the GDG Lecce tech conference for AI, Web, Mobile, Cloud, Cybersecurity, Data Science and community.',
        },
        meta: {
            title: 'DevFest Lecce 2026',
            description:
                'DevFest Lecce 2026, the GDG Lecce tech conference for AI, Web, Mobile, Cloud, Cybersecurity, Data Science and community.',
        },
        common: {
            contactUs: 'Contact us',
            newsletter: 'Follow GDG Lecce',
            details: 'Details',
            bio: 'Bio',
            abstract: 'Abstract',
        },
        nav: {
            home: 'Home',
            speakers: 'Speakers',
            schedule: 'Schedule',
            news: 'News',
            iwd: 'Inclusion',
            location: 'Venue',
            about: 'About',
            cta: 'Tickets',
        },
        footer: {
            description:
                'DevFest Lecce 2026 is organized by GDG Lecce: a full day to learn, share and build relationships in the local tech community.',
            social: 'Social',
            community: 'Community',
            resources: 'Resources',
            follow: 'Follow us',
            about: 'About',
            contact: 'Contact',
            gdgLecce: 'GDG Lecce',
            gdg: 'Google Developer Groups',
            devfest: 'DevFest',
            gdgPlatform: 'GDG Lecce page',
            codeOfConduct: 'Code of Conduct',
            faq: 'FAQ',
            madeBy: 'Made with care by GDG Lecce',
            copyright: 'DevFest Lecce 2026',
        },
        home: {
            heroEyebrow: 'GDG Lecce presents',
            heroTitle: 'DevFest Lecce 2026',
            heroSubtitle:
                'A full day for developers, designers, students and tech professionals who want to learn, exchange ideas and build real connections.',
            heroDate: 'Saturday, October 17, 2026',
            heroLocation: 'Studium 2000, University of Salento',
            primaryCta: 'Reserve your seat',
            secondaryCta: 'Submit a talk',
            announcementTitle: 'DevFest Lecce is coming',
            announcementText:
                'The program will focus on Artificial Intelligence, Web & Mobile Development, Cloud, Cybersecurity, Data Science and Soft Skills.',
            statsIntro: 'Previous edition',
            stats: [
                { value: '350', label: 'Attendees' },
                { value: '26', label: 'Speakers' },
                { value: '8', label: 'Sponsors' },
                { value: '9', label: 'Partners' },
            ],
            tickets: {
                title: 'Tickets',
                subtitle:
                    'Admission will be free. Registration will open here as soon as the program and capacity are finalized.',
                badge: 'Coming soon',
                cta: 'Follow GDG Lecce',
            },
            cfp: {
                title: 'Submit a talk',
                subtitle: 'When speaker submissions reopen, this section can be used to collect talks and workshops.',
                cta: 'Submit proposal',
            },
            gallery: {
                title: 'The community, live',
                intro: 'Faces, full rooms, talks and shared moments: DevFest Lecce is first of all a day to experience with other people.',
            },
            sponsors: {
                title: 'Sponsors and partners',
                logoTitle: 'Sponsors and partners',
                logoEmpty: 'Sponsors and partners will be announced here.',
                tierLabels: {
                    platinum: 'Platinum',
                    gold: 'Gold',
                    silver: 'Silver',
                    bronze: 'Bronze',
                },
            },
        },
        about: {
            title: 'About',
            intro: 'GDG Lecce is an independent, non-profit community. DevFest Lecce is our annual moment to bring people, skills and the local ecosystem together.',
            sections: [
                {
                    title: 'Google Developer Group Lecce',
                    text: 'We organize talks, workshops and networking moments open to developers, students, designers and tech professionals, with the goal of growing the local ecosystem.',
                },
                {
                    title: 'DevFest Lecce',
                    text: 'DevFest Lecce is a community-driven day about AI, Web & Mobile, Cloud, Cybersecurity, Data Science and Soft Skills, with talks, workshops and networking.',
                },
            ],
            facts: [
                { label: 'When', value: 'Saturday, October 17, 2026' },
                { label: 'Where', value: 'Studium 2000, Lecce' },
                { label: 'Expected talks', value: '20+' },
                { label: 'Expected attendees', value: '500+' },
            ],
            organizersTitle: 'Organizers',
            organizersIntro:
                'The GDG Lecce team curates the program, community, speakers and attendee experience to build a useful, accessible and well-organized DevFest.',
            organizers: [
                {
                    id: 'raffaele-grieco',
                    name: 'Raffaele Grieco',
                    role: 'GDG Organizer',
                    title: 'Backend Developer',
                    company: '',
                    profileUrl: 'https://gdg.community.dev/u/m4j59y/',
                },
                {
                    id: 'martino-scarcia',
                    name: 'Martino Scarcia',
                    role: 'GDG Organizer',
                    title: 'Backend Developer',
                    company: 'Hybris Hub',
                    profileUrl: 'https://gdg.community.dev/u/m2jda5/',
                },
            ],
        },
        speakers: {
            title: 'Speakers',
            body: 'The first confirmed DevFest Lecce 2026 line-up is online: bios, talks and details will be updated on the road to the event.',
            cards: ['AI', 'Web & Mobile', 'Cloud', 'Cybersecurity', 'Data Science', 'Soft Skills'],
            subtitle: 'Confirmed speakers for DevFest Lecce 2026.',
            lineupTitle: 'Confirmed speakers',
            lineupIntro:
                'Meet the people taking the stage: each card connects the speaker with their session and keeps details easy to scan.',
            sessionLabel: 'Session',
            sessionsLabel: 'Sessions',
            bioFallback: 'Bio being updated.',
            emptyTitle: 'Speakers coming soon',
            emptyText:
                'We are building a program with national and international voices on AI, development, cloud, security, data and soft skills.',
        },
        schedule: {
            title: 'Schedule',
            body: 'Accepted sessions are now online. Times, rooms and internal tracks will be added once logistics are finalized.',
            cards: ['Talks', 'Workshops', 'Lightning Talks', 'Hackathon', 'Networking', 'After party'],
            subtitle: 'Confirmed sessions and details being updated.',
            acceptedTitle: 'Accepted sessions',
            acceptedIntro:
                'This list comes from the Sessionize export. The timed grid with rooms will be published once the venue map and tracks are final.',
            talksCountLabel: 'accepted sessions',
            speakersCountLabel: 'confirmed speakers',
            unscheduledNote: 'Time and room being defined',
            meta: {
                track: 'Track',
                format: 'Format',
                level: 'Level',
                language: 'Language',
                room: 'Room',
                time: 'Time',
            },
            emptyTitle: 'Schedule in progress',
            emptyText:
                'Expect a full day of technical sessions, practical workshops, networking and community moments.',
        },
        news: {
            title: 'News',
            shareText: 'Read this update from DevFest Lecce 2026',
            subtitle:
                'Updates, announcements and community stories will appear here on the road to DevFest Lecce 2026.',
            emptyTitle: 'No news yet',
            emptyText: 'Come back soon for updates on tickets, program and sponsors.',
        },
        iwd: {
            title: 'Inclusion',
            introTitle: 'Inclusion and community',
            intro: [
                'DevFest Lecce aims to be an open, welcoming and respectful space for everyone.',
                'Women Techmakers and community initiatives help create opportunities for dialogue, growth and visibility for people experiencing tech from different perspectives.',
            ],
            themeTitle: 'Open spaces, technology for everyone',
            theme: [
                'DevFest Lecce puts an accessible, curious and respectful community at the center.',
                'Talks, workshops and networking are designed for students, professionals, designers, developers and everyone curious about technology.',
                'Every attendee, speaker, volunteer and sponsor is expected to follow the code of conduct.',
            ],
            cta: 'Discover Women Techmakers',
            subtitle: 'DevFest Lecce aims to be an open, welcoming and respectful space for everyone.',
            cards: [
                {
                    title: 'Open community',
                    text: 'Talks, workshops and networking are designed for students, professionals, designers, developers and everyone curious about technology.',
                },
                {
                    title: 'Real connections',
                    text: 'The event focuses on dialogue, mentoring and relationships that continue beyond the conference day.',
                },
                {
                    title: 'Code of Conduct',
                    text: 'Every attendee, speaker, volunteer and sponsor is expected to follow our code of conduct.',
                },
            ],
        },
        location: {
            title: 'Venue',
            heroTitle: 'Studium 2000, University of Salento',
            subtitle:
                'DevFest Lecce 2026 will take place on Saturday, October 17, 2026 at the University of Salento Studium 2000 complex.',
            venueName: 'Studium 2000 - University of Salento',
            venueAddress: 'Building 3, Via di Valesio 3, 73100 Lecce',
            mapTitle: 'Studium 2000',
            mapText:
                'The complex sits between Via di Valesio and Viale San Nicola, close to Porta Napoli and Lecce historic center.',
            mapCta: 'Open directions',
            infoTitle: 'Studium 2000',
            info: [
                'DevFest Lecce 2026 will take place on Saturday, October 17, 2026 in the University of Salento Studium 2000 complex, with the main reference point in Building 3.',
                'Studium 2000 is an urban campus near the historic center: it hosts a library, museum spaces, classrooms, conference rooms and areas suitable for parallel sessions, networking and community activities.',
                'Once attendees arrive at the Google Maps point, DevFest signage will guide them to check-in, rooms, community area and break spaces inside the complex.',
            ],
            venueHighlights: [
                {
                    title: 'Building 3',
                    text: 'Reference point for check-in, rooms and indoor orientation throughout the day.',
                },
                {
                    title: 'Conference spaces',
                    text: 'Classrooms and rooms designed for talks, workshops and parallel sessions.',
                },
                {
                    title: 'Community area',
                    text: 'Areas for networking, partners and breaks between tracks.',
                },
            ],
            indoor: {
                title: 'Indoor map - Studium 2000 Building 3',
                subtitle:
                    'After arriving at Studium 2000, use this orientation map to understand where check-in, rooms and the main tracks are located.',
                note: 'The track layout and room names can be updated with the final venue signage.',
                entrance: 'Entrance from Via di Valesio',
                corridor: 'Main corridor',
                detailsTitle: 'Area details',
                rooms: [
                    {
                        id: 'checkin',
                        label: 'Check-in',
                        room: 'Building 3 atrium',
                        track: 'Welcome and badges',
                        description: 'First stop for registration, badges, welcome kit and orientation information.',
                        x: '6%',
                        y: '64%',
                        w: '22%',
                        h: '20%',
                        accent: '#4285f4',
                    },
                    {
                        id: 'main',
                        label: 'Main Track',
                        room: 'Former Mediateca room',
                        track: 'Keynotes, AI and Cloud',
                        description: 'Main room for opening, plenary talks and sessions with the largest attendance.',
                        x: '34%',
                        y: '12%',
                        w: '26%',
                        h: '28%',
                        accent: '#ea4335',
                    },
                    {
                        id: 'web-mobile',
                        label: 'Web & Mobile',
                        room: 'Aula 3D',
                        track: 'Web & Mobile Development',
                        description: 'Track dedicated to frontend, mobile, technical UX and application development.',
                        x: '64%',
                        y: '12%',
                        w: '28%',
                        h: '28%',
                        accent: '#34a853',
                    },
                    {
                        id: 'data-security',
                        label: 'Data & Security',
                        room: 'Building 3 study room',
                        track: 'Cybersecurity and Data Science',
                        description: 'Space for sessions on security, data, analytics and practical use cases.',
                        x: '34%',
                        y: '62%',
                        w: '26%',
                        h: '26%',
                        accent: '#fbbc04',
                    },
                    {
                        id: 'networking',
                        label: 'Community',
                        room: 'Foyer / networking area',
                        track: 'Partners, networking and community',
                        description: 'Area for partners, coffee breaks and attendee conversations.',
                        x: '64%',
                        y: '62%',
                        w: '28%',
                        h: '26%',
                        accent: '#8ab4f8',
                    },
                ],
            },
            findUs: 'How to get there',
            directionsTitle: 'How to reach us',
            directionsIntro:
                'Head to Studium 2000 - Building 3. DevFest signs will guide you to the event entrance as soon as you enter the university complex.',
            directions: [
                {
                    icon: 'mdi:map-marker-path',
                    title: 'Arrival point',
                    text: 'Set Studium 2000 on Google Maps and head to the area between Via di Valesio and Viale San Nicola. Check-in will be in Building 3.',
                    details: [
                        'Search for Studium 2000, Via di Valesio 3.',
                        'Once you arrive, follow DevFest signs and volunteers toward check-in and rooms.',
                    ],
                    cta: 'Open Google Maps',
                    href: eventLinks.directions,
                },
                {
                    icon: 'mdi:train',
                    title: 'By train',
                    text: 'Arrive at Lecce railway station, connected with Bari, Brindisi, Rome, Bologna and Milan. From there, continue to Studium 2000 on foot, by taxi or by local transport.',
                    details: [
                        'From the historic center, Studium 2000 is convenient to reach via Porta Napoli.',
                        'For local buses, check updated lines and stops on the SGM Lecce website.',
                    ],
                    cta: 'Search trains',
                    href: eventLinks.train,
                },
                {
                    icon: 'mdi:airplane',
                    title: 'By plane',
                    text: 'The most convenient airport is Brindisi. You can reach Brindisi railway station with Brindisi Air&Port Link and then take the train to Lecce.',
                    details: [
                        'Bari Airport is a farther alternative if it has better flights for you.',
                        'For shuttles or shared taxis, booking in advance is recommended close to the event date.',
                    ],
                    cta: 'Brindisi Air&Port Link',
                    href: eventLinks.brindisiAirPortLink,
                },
                {
                    icon: 'mdi:bus',
                    title: 'Local bus',
                    text: 'If you are leaving from hotels, B&Bs or areas outside the center, check the SGM map and choose the closest stop to Via di Valesio, Porta Napoli or Viale De Pietro.',
                    details: [
                        'Lines and stops may change: always check the updated map the day before.',
                        'Keep a few extra minutes to orient yourself inside the complex.',
                    ],
                    cta: 'SGM Lecce map',
                    href: eventLinks.sgmLecce,
                },
                {
                    icon: 'mdi:car-outline',
                    title: 'By car',
                    text: 'When arriving from outside the city, follow signs to Lecce center and then to Via di Valesio / Viale San Nicola. Allow time for parking and check-in.',
                    details: [
                        'Set your destination before leaving: the area is central and can be busy during university hours.',
                        'After parking, walk to Building 3 following DevFest signage.',
                    ],
                    cta: 'Open directions',
                    href: eventLinks.directions,
                },
            ],
        },
        faq: {
            title: 'FAQ',
            intro: 'The key information about DevFest Lecce 2026.',
            items: [
                {
                    question: 'When is DevFest Lecce 2026?',
                    answer: 'Saturday, October 17, 2026 in Lecce, at Studium 2000, University of Salento.',
                },
                {
                    question: 'Are tickets available?',
                    answer: 'Not yet. Admission will be free and registration will open later.',
                },
            ],
        },
        coc: {
            title: 'Code of Conduct',
            description: 'All GDG events follow guidelines designed to ensure a respectful and safe environment.',
            cta: 'Read the GDG code',
            sections: [
                {
                    title: 'Respectful environment',
                    body: [
                        'DevFest Lecce aims to be a welcoming event for every attendee, speaker, volunteer and sponsor.',
                    ],
                },
                {
                    title: 'Contact',
                    body: ['For any report or request, you can contact the GDG Lecce team.'],
                },
            ],
        },
        notFound: {
            title: 'Page not found',
            subtitle: 'Page not found',
            home: 'Back to home',
            text: 'This page does not exist or has been moved.',
            cta: 'Back to home',
        },
    },
} as const

export const isLang = (value: string | undefined): value is Lang => languages.includes(value as Lang)

export const withoutLangPrefix = (pathname: string) => {
    const segments = pathname.split('/').filter(Boolean)
    if (segments.length && isLang(segments[0])) {
        return `/${segments.slice(1).join('/')}`.replace(/\/$/, '') || '/'
    }

    return pathname || '/'
}

export const routePath = (lang: Lang, path = '/') => {
    const normalizedPath = path.startsWith('/') ? path : `/${path}`
    return `/${lang}${normalizedPath === '/' ? '' : normalizedPath}`
}

export const getLangFromUrl = (url: URL): Lang => {
    const [, lang] = url.pathname.split('/')
    return isLang(lang) ? lang : defaultLang
}

export const switchLangPath = (pathname: string, lang: Lang) => {
    const rest = withoutLangPrefix(pathname)
    return routePath(lang, rest)
}

export const localizedStaticPaths = () =>
    languages.map(lang => ({
        params: { lang },
        props: { lang },
    }))
