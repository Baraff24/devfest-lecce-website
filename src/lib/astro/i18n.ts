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
    cfp: 'https://sessionize.com/devfest-lecce-2026',
    tickets: '#tickets',
    calendar: 'https://gdg.community.dev/events/details/google-gdg-lecce-presents-devfest-lecce-2026/',
    sponsorEmail: 'mailto:info@gdglecce.it?subject=Sponsor%20DevFest%20Lecce%202026',
    email: 'mailto:info@gdglecce.it',
    phone: 'tel:+393394311707',
    linkedin: 'https://www.linkedin.com/company/gdg-lecce',
    instagram: 'https://www.instagram.com/gdg_lecce',
    directions: 'https://www.google.com/maps/dir//Studium+2000,+Via+di+Valesio,+Lecce',
}

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
            viewCfp: 'Call for Speaker chiusa',
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
            secondaryCta: 'Call for Speaker chiusa',
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
                title: 'Call for Speaker chiusa',
                subtitle:
                    'La Call for Speaker di DevFest Lecce 2026 è chiusa. Grazie a tutte le persone che hanno inviato una proposta: stiamo finalizzando la selezione.',
                cta: 'Chiusa',
            },
            sponsors: {
                title: 'Call for Sponsor',
                intro: [
                    'Sostenere DevFest Lecce significa investire nella crescita tech del territorio e posizionare il proprio brand davanti a una platea qualificata di sviluppatori, studenti e professionisti.',
                    "Offriamo quattro livelli di sponsorizzazione, pensati per esigenze e budget diversi, oltre a un'opzione dedicata al recruiting: TalentConnect.",
                    "Tutti i contributi coprono esclusivamente i costi dell'evento: location, catering, materiali e ospitalità speaker, permettendoci di mantenere l'ingresso gratuito ai partecipanti.",
                ],
                cta: 'Diventa sponsor',
                logoTitle: 'Sponsor',
                logoEmpty: 'Sponsor in arrivo',
                tierLabels: {
                    platinum: 'Platinum',
                    gold: 'Gold',
                    silver: 'Silver',
                    bronze: 'Bronze',
                },
                tiers: [
                    {
                        name: 'Bronze',
                        contribution: '250 euro',
                        description: 'Supporto semplice e visibilità base.',
                        perks: [
                            'Logo sul sito ufficiale',
                            'Logo sui social GDG Lecce',
                            'Menzione nel post di ringraziamento',
                        ],
                    },
                    {
                        name: 'Silver',
                        contribution: '500 euro',
                        description: "Visibilità dedicata prima e durante l'evento.",
                        perks: [
                            'Tutti i benefit Bronze',
                            'Post social dedicato',
                            'Materiale promozionale nella welcome bag',
                        ],
                    },
                    {
                        name: 'Gold',
                        contribution: '1.000 euro',
                        description: 'Presenza fisica e brand sui materiali ufficiali.',
                        perks: [
                            'Tutti i benefit Silver',
                            "Stand per tutta la durata dell'evento",
                            'Accesso a TalentConnect',
                        ],
                    },
                    {
                        name: 'Platinum',
                        contribution: '2.000 euro',
                        description: 'Massima visibilità.',
                        perks: [
                            'Tutti i benefit Gold',
                            'Logo su magliette, welcome bag e materiali stampati',
                            'Keynote di chiusura in plenaria',
                            'After party brandizzato',
                        ],
                    },
                ],
                talentConnectTitle: 'TalentConnect',
                talentConnectText:
                    'TalentConnect facilita il contatto tra aziende e professionisti tech. I partecipanti potranno inviare il CV tramite form e, durante DevFest, sarà attivo un desk dedicato. I CV saranno riservati agli sponsor Gold e Platinum.',
            },
        },
        about: {
            title: 'Chi siamo',
            intro: "GDG Lecce e DevFest Lecce nascono per far crescere l'ecosistema tecnologico del territorio e connetterlo con il resto d'Italia.",
            sections: [
                {
                    title: 'Google Developer Group Lecce',
                    text: "Google Developer Group Lecce è una community indipendente e no-profit di sviluppatori, studenti e professionisti del tech. Organizziamo talk, workshop e momenti di networking aperti a tutti, con l'obiettivo di far crescere l'ecosistema tecnologico del territorio e connetterlo con il resto d'Italia. Siamo parte del network globale dei Google Developer Groups, presente in oltre 100 paesi.",
                },
                {
                    title: "Cos'è DevFest",
                    text: "DevFest è il più grande festival tech organizzato dalle community GDG in tutto il mondo. DevFest Lecce ne è l'edizione salentina: una giornata di talk, workshop e hackathon su AI, Web & Mobile, Cloud, Cybersecurity, Data Science e Soft Skills. Un'occasione unica nel Sud Italia per imparare dai migliori speaker nazionali e internazionali, fare networking e incontrare le aziende del settore.",
                },
                {
                    title: 'DevFest Lecce 2026',
                    text: 'DevFest Lecce 2026 si terrà sabato 17 ottobre 2026 a Lecce, presso Studium 2000, Università del Salento. Sono attesi oltre 20 talk e più di 500 partecipanti.',
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
                'Il team GDG Lecce cura programma, community, speaker, sponsor e accoglienza per costruire una DevFest utile, accessibile e ben organizzata.',
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
            activitiesTitle: 'Attività previste',
            activities: [
                { title: 'Talk', text: 'Sessioni frontali con speaker esperti sui temi più attuali del tech.' },
                { title: 'Workshop', text: 'Sessioni pratiche hands-on in gruppi ristretti.' },
                { title: 'Lightning Talk', text: 'Interventi rapidi e ad alta densità.' },
                { title: 'Hackathon', text: 'Una sfida a squadre per mettere in pratica le competenze.' },
                { title: 'Area Networking', text: 'Momenti di scambio tra partecipanti, speaker e aziende.' },
                { title: 'Area svago', text: "Spazi relax e gaming per staccare tra una sessione e l'altra." },
                {
                    title: 'After party',
                    text: 'Chiusura in festa per continuare il networking in un contesto informale.',
                },
            ],
        },
        speakers: {
            title: 'Speaker',
            body: 'La Call for Speaker di DevFest Lecce 2026 è chiusa. La line-up sarà pubblicata dopo la selezione.',
            cards: ['AI', 'Web & Mobile', 'Cloud', 'Cybersecurity', 'Data Science', 'Soft Skills'],
            subtitle:
                'La Call for Speaker di DevFest Lecce 2026 è chiusa. La line-up sarà pubblicata dopo la selezione.',
            emptyTitle: 'Speaker in arrivo',
            emptyText:
                'Stiamo costruendo un programma con voci nazionali e internazionali su AI, sviluppo, cloud, sicurezza, dati e competenze trasversali.',
            cfpTitle: 'Vuoi salire sul palco?',
            cfpText: 'La Call for Speaker è chiusa. La line-up sarà pubblicata dopo la selezione.',
            cfpCta: 'Call chiusa',
        },
        schedule: {
            title: 'Agenda',
            body: 'Il programma completo sarà pubblicato qui non appena avremo chiuso la selezione di talk, workshop e attività.',
            cards: ['Talk', 'Workshop', 'Lightning Talk', 'Hackathon', 'Networking', 'After party'],
            subtitle:
                'Il programma completo sarà pubblicato qui non appena avremo chiuso la selezione di talk, workshop e attività.',
            emptyTitle: 'Agenda in preparazione',
            emptyText:
                'Aspettati una giornata piena di sessioni tecniche, workshop pratici, networking e momenti community.',
            cfpCta: 'Call chiusa',
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
            venueAddress: 'Via di Valesio, angolo Viale San Nicola, 73100 Lecce',
            mapTitle: 'Studium 2000',
            mapText:
                'Il complesso si trova in Via di Valesio, vicino al centro storico di Lecce e raggiungibile dalla stazione e dalle principali direttrici cittadine.',
            mapCta: 'Apri indicazioni',
            infoTitle: 'Studium 2000',
            info: [
                "DevFest Lecce 2026 si terrà sabato 17 ottobre 2026 nel complesso Studium 2000 dell'Università del Salento, con punto principale nell'Edificio 3.",
                'Studium 2000 è un polo urbano vicino al centro storico: ospita biblioteca, spazi museali, aule, sale conferenza e ambienti adatti a sessioni parallele, networking e attività community.',
                "Una volta arrivati al punto indicato da Google Maps, la segnaletica DevFest guiderà verso check-in, aule, area sponsor e spazi di pausa all'interno del complesso.",
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
                    text: 'Zone per networking, sponsor, TalentConnect e pause tra una track e l’altra.',
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
                        label: 'Sponsor',
                        room: 'Foyer / area networking',
                        track: 'Sponsor, TalentConnect e community',
                        description: 'Area per stand sponsor, recruiting, pausa caffè e incontri tra partecipanti.',
                        x: '64%',
                        y: '62%',
                        w: '28%',
                        h: '26%',
                        accent: '#8ab4f8',
                    },
                ],
            },
            findUs: 'Come arrivare',
            directionsTitle: 'Indicazioni',
            trainTitle: 'In treno',
            train: 'La stazione di Lecce collega la città con Bari, Brindisi e le principali destinazioni nazionali.',
            planeTitle: 'In aereo',
            plane: "L'aeroporto di Brindisi è lo scalo più vicino, con collegamenti shuttle e treno verso Lecce.",
            carTitle: 'In città',
            car: 'Studium 2000 è vicino al centro storico e può essere raggiunto con mezzi pubblici, taxi o percorsi pedonali.',
            directions: [
                {
                    title: 'In treno',
                    text: 'La stazione di Lecce collega la città con Bari, Brindisi e le principali destinazioni nazionali.',
                },
                {
                    title: 'In aereo',
                    text: "L'aeroporto di Brindisi è lo scalo più vicino, con collegamenti shuttle e treno verso Lecce.",
                },
                {
                    title: 'In città',
                    text: 'Studium 2000 è vicino al centro storico e può essere raggiunto con mezzi pubblici, taxi o percorsi pedonali.',
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
                {
                    question: 'Posso candidarmi come speaker?',
                    answer: 'La Call for Speaker è chiusa. La line-up sarà pubblicata dopo la selezione.',
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
            viewCfp: 'Call for Speakers closed',
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
            secondaryCta: 'Call for Speakers closed',
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
                title: 'Call for Speakers closed',
                subtitle:
                    'The DevFest Lecce 2026 Call for Speakers is closed. Thanks to everyone who submitted a proposal: we are finalizing the selection.',
                cta: 'Closed',
            },
            sponsors: {
                title: 'Call for Sponsors',
                intro: [
                    'Supporting DevFest Lecce means investing in the growth of the local tech ecosystem and positioning your brand in front of a qualified audience of developers, students and professionals.',
                    'We offer four sponsorship levels, designed for different needs and budgets, plus a recruiting-focused option: TalentConnect.',
                    'All contributions cover event costs only: venue, catering, materials and speaker hospitality, helping us keep admission free for attendees.',
                ],
                cta: 'Become a sponsor',
                logoTitle: 'Sponsors',
                logoEmpty: 'Sponsors coming soon',
                tierLabels: {
                    platinum: 'Platinum',
                    gold: 'Gold',
                    silver: 'Silver',
                    bronze: 'Bronze',
                },
                tiers: [
                    {
                        name: 'Bronze',
                        contribution: '250 euro',
                        description: 'Simple support and basic visibility.',
                        perks: [
                            'Logo on the official website',
                            'Logo on GDG Lecce social channels',
                            'Mention in the thank-you post',
                        ],
                    },
                    {
                        name: 'Silver',
                        contribution: '500 euro',
                        description: 'Dedicated visibility before and during the event.',
                        perks: [
                            'All Bronze benefits',
                            'Dedicated social post',
                            'Promotional material in the welcome bag',
                        ],
                    },
                    {
                        name: 'Gold',
                        contribution: '1,000 euro',
                        description: 'On-site presence and brand visibility on official materials.',
                        perks: ['All Silver benefits', 'Stand for the full event', 'Access to TalentConnect'],
                    },
                    {
                        name: 'Platinum',
                        contribution: '2,000 euro',
                        description: 'Maximum visibility.',
                        perks: [
                            'All Gold benefits',
                            'Logo on official t-shirts, welcome bags and printed materials',
                            'Closing keynote in the plenary room',
                            'Branded after party',
                        ],
                    },
                ],
                talentConnectTitle: 'TalentConnect',
                talentConnectText:
                    'TalentConnect helps companies connect with tech professionals. Attendees will be able to submit their CV through a form and a dedicated desk will be active during DevFest. CV access is reserved for Gold and Platinum sponsors.',
            },
        },
        about: {
            title: 'About',
            intro: 'GDG Lecce and DevFest Lecce exist to grow the local tech ecosystem and connect it with the rest of Italy.',
            sections: [
                {
                    title: 'Google Developer Group Lecce',
                    text: 'Google Developer Group Lecce is an independent, non-profit community of developers, students and tech professionals. We organize talks, workshops and networking moments open to everyone, with the goal of growing the local technology ecosystem and connecting it with the rest of Italy. We are part of the global Google Developer Groups network, active in more than 100 countries.',
                },
                {
                    title: 'What DevFest is',
                    text: 'DevFest is the largest tech festival organized by GDG communities around the world. DevFest Lecce is its Salento edition: a day of talks, workshops and hackathons on AI, Web & Mobile, Cloud, Cybersecurity, Data Science and Soft Skills. It is a unique opportunity in Southern Italy to learn from top national and international speakers, network and meet companies in the field.',
                },
                {
                    title: 'DevFest Lecce 2026',
                    text: 'DevFest Lecce 2026 will take place on Saturday, October 17, 2026 in Lecce, at Studium 2000, University of Salento. We expect more than 20 talks and over 500 attendees.',
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
                'The GDG Lecce team curates the program, community, speakers, sponsors and attendee experience to build a useful, accessible and well-organized DevFest.',
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
            activitiesTitle: 'Planned activities',
            activities: [
                { title: 'Talks', text: 'Front-facing sessions with expert speakers on the most current tech topics.' },
                { title: 'Workshops', text: 'Hands-on practical sessions in smaller groups.' },
                { title: 'Lightning Talks', text: 'Fast, dense sessions with a focused idea.' },
                { title: 'Hackathon', text: 'A team challenge to put skills into practice.' },
                { title: 'Networking Area', text: 'Moments for attendees, speakers and companies to connect.' },
                { title: 'Leisure Area', text: 'Relax and gaming spaces between sessions.' },
                { title: 'After party', text: 'A closing celebration to keep networking in an informal setting.' },
            ],
        },
        speakers: {
            title: 'Speakers',
            body: 'The DevFest Lecce 2026 Call for Speakers is closed. The line-up will be published after the selection.',
            cards: ['AI', 'Web & Mobile', 'Cloud', 'Cybersecurity', 'Data Science', 'Soft Skills'],
            subtitle:
                'The DevFest Lecce 2026 Call for Speakers is closed. The line-up will be published after the selection.',
            emptyTitle: 'Speakers coming soon',
            emptyText:
                'We are building a program with national and international voices on AI, development, cloud, security, data and soft skills.',
            cfpTitle: 'Want to take the stage?',
            cfpText: 'The Call for Speakers is closed. The line-up will be published after the selection.',
            cfpCta: 'Call closed',
        },
        schedule: {
            title: 'Schedule',
            body: 'The full program will be published here as soon as talks, workshops and activities are finalized.',
            cards: ['Talks', 'Workshops', 'Lightning Talks', 'Hackathon', 'Networking', 'After party'],
            subtitle:
                'The full program will be published here as soon as talks, workshops and activities are finalized.',
            emptyTitle: 'Schedule in progress',
            emptyText:
                'Expect a full day of technical sessions, practical workshops, networking and community moments.',
            cfpCta: 'Call closed',
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
            venueAddress: 'Via di Valesio, corner of Viale San Nicola, 73100 Lecce',
            mapTitle: 'Studium 2000',
            mapText:
                'The complex is in Via di Valesio, close to Lecce historic center and reachable from the station and the city main routes.',
            mapCta: 'Open directions',
            infoTitle: 'Studium 2000',
            info: [
                'DevFest Lecce 2026 will take place on Saturday, October 17, 2026 in the University of Salento Studium 2000 complex, with the main reference point in Building 3.',
                'Studium 2000 is an urban campus near the historic center: it hosts a library, museum spaces, classrooms, conference rooms and areas suitable for parallel sessions, networking and community activities.',
                'Once attendees arrive at the Google Maps point, DevFest signage will guide them to check-in, rooms, sponsor area and break spaces inside the complex.',
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
                    text: 'Areas for networking, sponsors, TalentConnect and breaks between tracks.',
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
                        label: 'Sponsors',
                        room: 'Foyer / networking area',
                        track: 'Sponsors, TalentConnect and community',
                        description: 'Area for sponsor booths, recruiting, coffee breaks and attendee conversations.',
                        x: '64%',
                        y: '62%',
                        w: '28%',
                        h: '26%',
                        accent: '#8ab4f8',
                    },
                ],
            },
            findUs: 'How to get there',
            directionsTitle: 'Directions',
            trainTitle: 'By train',
            train: 'Lecce railway station connects the city with Bari, Brindisi and major national destinations.',
            planeTitle: 'By plane',
            plane: 'Brindisi Airport is the closest airport, with shuttle and train connections to Lecce.',
            carTitle: 'In the city',
            car: 'Studium 2000 is close to the historic center and can be reached by public transport, taxi or on foot.',
            directions: [
                {
                    title: 'By train',
                    text: 'Lecce railway station connects the city with Bari, Brindisi and major national destinations.',
                },
                {
                    title: 'By plane',
                    text: 'Brindisi Airport is the closest airport, with shuttle and train connections to Lecce.',
                },
                {
                    title: 'In the city',
                    text: 'Studium 2000 is close to the historic center and can be reached by public transport, taxi or on foot.',
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
                {
                    question: 'Can I apply as a speaker?',
                    answer: 'The Call for Speakers is closed. The line-up will be published after the selection.',
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
