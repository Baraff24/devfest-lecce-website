export const languages = ['it', 'en'] as const;

export type Lang = (typeof languages)[number];

export const defaultLang: Lang = 'it';

export const langLabels: Record<Lang, string> = {
    it: 'Italiano',
    en: 'English',
};

export const eventLinks = {
    gdg: 'https://gdg.community.dev/gdg-lecce/',
    gdgGlobal: 'https://developers.google.com/community/gdg',
    devfest: 'https://developers.google.com/community/devfest',
    cfp: 'https://sessionize.com/devfest-lecce-2026',
    tickets: '#tickets',
    calendar: 'https://gdg.community.dev/events/details/google-gdg-lecce-presents-devfest-lecce-2026/',
    sponsorEmail: 'mailto:info@gdglecce.it?subject=Sponsor%20DevFest%20Lecce%202026',
    email: 'mailto:info@gdglecce.it',
    phone: 'tel:+393394311707',
    linkedin: 'https://www.linkedin.com/company/gdg-lecce',
    instagram: 'https://www.instagram.com/gdg_lecce',
    directions: 'https://www.google.com/maps/dir//Studium+2000,+Via+di+Valesio,+Lecce',
};

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
            viewCfp: 'Vai alla Call for Speaker',
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
            heroLocation: 'Studium 2000, Universita del Salento',
            primaryCta: 'Prenota il tuo posto',
            secondaryCta: 'Proponi un talk',
            announcementTitle: 'DevFest Lecce sta arrivando',
            announcementText:
                'Il programma ruotera intorno a Intelligenza Artificiale, Web & Mobile Development, Cloud, Cybersecurity, Data Science e Soft Skills.',
            statsIntro: 'Nell edizione precedente',
            stats: [
                { value: '350', label: 'Partecipanti' },
                { value: '26', label: 'Speaker' },
                { value: '8', label: 'Sponsor' },
                { value: '9', label: 'Partner' },
                { value: '1542', label: 'Challenge completate' },
            ],
            tickets: {
                title: 'Biglietti',
                subtitle:
                    'L ingresso sara gratuito. Le registrazioni apriranno qui non appena finalizzeremo programma e capienza.',
                badge: 'Coming soon',
                cta: 'Seguici su GDG Lecce',
            },
            cfp: {
                title: 'Call for Speaker aperta',
                subtitle:
                    'Hai un esperienza, una demo o una storia utile alla community? Invia la tua proposta per DevFest Lecce 2026.',
                cta: 'Invia proposta',
            },
            sponsors: {
                title: 'Call for Sponsor',
                intro: [
                    'Sostenere DevFest Lecce significa investire nella crescita tech del territorio e posizionare il proprio brand davanti a una platea qualificata di sviluppatori, studenti e professionisti.',
                    "Offriamo quattro livelli di sponsorizzazione, pensati per esigenze e budget diversi, oltre a un'opzione dedicata al recruiting: TalentConnect.",
                    "Tutti i contributi coprono esclusivamente i costi dell'evento: location, catering, materiali e ospitalita speaker, permettendoci di mantenere l ingresso gratuito ai partecipanti.",
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
                        description: 'Supporto semplice e visibilita base.',
                        perks: ['Logo sul sito ufficiale', 'Logo sui social GDG Lecce', 'Menzione nel post di ringraziamento'],
                    },
                    {
                        name: 'Silver',
                        contribution: '500 euro',
                        description: "Visibilita dedicata prima e durante l'evento.",
                        perks: ['Tutti i benefit Bronze', 'Post social dedicato', 'Materiale promozionale nella welcome bag'],
                    },
                    {
                        name: 'Gold',
                        contribution: '1.000 euro',
                        description: 'Presenza fisica e brand sui materiali ufficiali.',
                        perks: ['Tutti i benefit Silver', "Stand per tutta la durata dell'evento", 'Accesso a TalentConnect'],
                    },
                    {
                        name: 'Platinum',
                        contribution: '2.000 euro',
                        description: 'Massima visibilita.',
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
                    'TalentConnect facilita il contatto tra aziende e professionisti tech. I partecipanti potranno inviare il CV tramite form e, durante DevFest, sara attivo un desk dedicato. I CV saranno riservati agli sponsor Gold e Platinum.',
            },
        },
        about: {
            title: 'Chi siamo',
            intro:
                'GDG Lecce e DevFest Lecce nascono per far crescere l ecosistema tecnologico del territorio e connetterlo con il resto d Italia.',
            sections: [
                {
                    title: 'Google Developer Group Lecce',
                    text: 'Google Developer Group Lecce e una community indipendente e no-profit di sviluppatori, studenti e professionisti del tech. Organizziamo talk, workshop e momenti di networking aperti a tutti, con l obiettivo di far crescere l ecosistema tecnologico del territorio e connetterlo con il resto d Italia. Siamo parte del network globale dei Google Developer Groups, presente in oltre 100 paesi.',
                },
                {
                    title: "Cos'e DevFest",
                    text: "DevFest e il piu grande festival tech organizzato dalle community GDG in tutto il mondo. DevFest Lecce ne e l edizione salentina: una giornata di talk, workshop e hackathon su AI, Web & Mobile, Cloud, Cybersecurity, Data Science e Soft Skills. Un occasione unica nel Sud Italia per imparare dai migliori speaker nazionali e internazionali, fare networking e incontrare le aziende del settore.",
                },
                {
                    title: 'DevFest Lecce 2026',
                    text: 'DevFest Lecce 2026 si terra sabato 17 ottobre 2026 a Lecce, presso Studium 2000, Universita del Salento. Sono attesi oltre 20 talk e piu di 500 partecipanti.',
                },
            ],
            facts: [
                { label: 'Quando', value: 'Sabato 17 ottobre 2026' },
                { label: 'Dove', value: 'Studium 2000, Lecce' },
                { label: 'Talk attesi', value: '20+' },
                { label: 'Partecipanti attesi', value: '500+' },
            ],
            activitiesTitle: 'Attivita previste',
            activities: [
                { title: 'Talk', text: 'Sessioni frontali con speaker esperti sui temi piu attuali del tech.' },
                { title: 'Workshop', text: 'Sessioni pratiche hands-on in gruppi ristretti.' },
                { title: 'Lightning Talk', text: 'Interventi rapidi e ad alta densita.' },
                { title: 'Hackathon', text: 'Una sfida a squadre per mettere in pratica le competenze.' },
                { title: 'Area Networking', text: 'Momenti di scambio tra partecipanti, speaker e aziende.' },
                { title: 'Area svago', text: "Spazi relax e gaming per staccare tra una sessione e l'altra." },
                { title: 'After party', text: 'Chiusura in festa per continuare il networking in un contesto informale.' },
            ],
        },
        speakers: {
            title: 'Speaker',
            body: 'La line-up di DevFest Lecce 2026 sarà pubblicata dopo la selezione della Call for Speaker.',
            cards: ['AI', 'Web & Mobile', 'Cloud', 'Cybersecurity', 'Data Science', 'Soft Skills'],
            subtitle:
                'La line-up di DevFest Lecce 2026 sara pubblicata dopo la selezione della Call for Speaker.',
            emptyTitle: 'Speaker in arrivo',
            emptyText:
                'Stiamo costruendo un programma con voci nazionali e internazionali su AI, sviluppo, cloud, sicurezza, dati e competenze trasversali.',
            cfpTitle: 'Vuoi salire sul palco?',
            cfpText: 'La Call for Speaker e aperta su Sessionize.',
            cfpCta: 'Invia la tua proposta',
        },
        schedule: {
            title: 'Agenda',
            body: 'Il programma completo sarà pubblicato qui non appena avremo chiuso la selezione di talk, workshop e attività.',
            cards: ['Talk', 'Workshop', 'Lightning Talk', 'Hackathon', 'Networking', 'After party'],
            subtitle:
                'Il programma completo sara pubblicato qui non appena avremo chiuso la selezione di talk, workshop e attivita.',
            emptyTitle: 'Agenda in preparazione',
            emptyText:
                'Aspettati una giornata piena di sessioni tecniche, workshop pratici, networking e momenti community.',
            cfpCta: 'Proponi un talk',
        },
        news: {
            title: 'News',
            shareText: 'Leggi questa news da DevFest Lecce 2026',
            subtitle:
                'Aggiornamenti, annunci e storie dalla community arriveranno qui durante il percorso verso DevFest Lecce 2026.',
            emptyTitle: 'Nessuna news pubblicata',
            emptyText: 'Torna presto per novita su biglietti, programma e sponsor.',
        },
        iwd: {
            title: 'Inclusione',
            subtitle:
                'DevFest Lecce vuole essere uno spazio aperto, accogliente e rispettoso per tutte le persone.',
            cards: [
                {
                    title: 'Community aperta',
                    text: 'Talk, workshop e networking sono pensati per studenti, professionisti, designer, developer e persone curiose di tecnologia.',
                },
                {
                    title: 'Relazioni reali',
                    text: 'L evento mette al centro confronto, mentoring e connessioni che continuano oltre la giornata della conferenza.',
                },
                {
                    title: 'Codice di condotta',
                    text: 'Ogni partecipante, speaker, volontario e sponsor e tenuto a rispettare il nostro codice di condotta.',
                },
            ],
        },
        location: {
            title: 'Dove',
            heroTitle: 'Studium 2000, Universita del Salento',
            subtitle:
                'DevFest Lecce 2026 si terra sabato 17 ottobre 2026 nel complesso Studium 2000 dell Universita del Salento.',
            venueName: 'Studium 2000 - Universita del Salento',
            venueAddress: 'Via di Valesio, angolo Viale San Nicola, 73100 Lecce',
            mapTitle: 'Studium 2000',
            mapText:
                'Il complesso si trova in Via di Valesio, vicino al centro storico di Lecce e raggiungibile dalla stazione e dalle principali direttrici cittadine.',
            mapCta: 'Apri indicazioni',
            infoTitle: 'Studium 2000',
            info: [
                'DevFest Lecce 2026 si terrà sabato 17 ottobre 2026 a Studium 2000, Università del Salento.',
                'La venue ospiterà talk, workshop, networking, area svago e after party per una giornata intera dedicata alla community tech.',
            ],
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
                    text: 'La stazione di Lecce collega la citta con Bari, Brindisi e le principali destinazioni nazionali.',
                },
                {
                    title: 'In aereo',
                    text: "L'aeroporto di Brindisi e lo scalo piu vicino, con collegamenti shuttle e treno verso Lecce.",
                },
                {
                    title: 'In citta',
                    text: 'Studium 2000 e vicino al centro storico e puo essere raggiunto con mezzi pubblici, taxi o percorsi pedonali.',
                },
            ],
        },
        faq: {
            title: 'FAQ',
            items: [
                {
                    question: 'Quando si terra DevFest Lecce 2026?',
                    answer: 'Sabato 17 ottobre 2026 a Lecce, presso Studium 2000, Universita del Salento.',
                },
                {
                    question: 'I biglietti sono disponibili?',
                    answer: "Non ancora. L ingresso sara gratuito e le registrazioni apriranno piu avanti.",
                },
                {
                    question: 'Posso candidarmi come speaker?',
                    answer: 'Si. La Call for Speaker e aperta su Sessionize.',
                },
            ],
        },
        coc: {
            title: 'Codice di condotta',
            description:
                'Tutti gli eventi GDG seguono linee guida pensate per garantire un ambiente rispettoso e sicuro.',
            cta: 'Leggi il codice GDG',
        },
        notFound: {
            title: 'Pagina non trovata',
            text: 'Questa pagina non esiste o e stata spostata.',
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
            viewCfp: 'Open the Call for Speakers',
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
                { value: '1542', label: 'Challenges completed' },
            ],
            tickets: {
                title: 'Tickets',
                subtitle:
                    'Admission will be free. Registration will open here as soon as the program and capacity are finalized.',
                badge: 'Coming soon',
                cta: 'Follow GDG Lecce',
            },
            cfp: {
                title: 'Call for Speakers is open',
                subtitle:
                    'Have an experience, demo or useful story for the community? Send your proposal for DevFest Lecce 2026.',
                cta: 'Submit a talk',
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
                        perks: ['Logo on the official website', 'Logo on GDG Lecce social channels', 'Mention in the thank-you post'],
                    },
                    {
                        name: 'Silver',
                        contribution: '500 euro',
                        description: 'Dedicated visibility before and during the event.',
                        perks: ['All Bronze benefits', 'Dedicated social post', 'Promotional material in the welcome bag'],
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
            intro:
                'GDG Lecce and DevFest Lecce exist to grow the local tech ecosystem and connect it with the rest of Italy.',
            sections: [
                {
                    title: 'Google Developer Group Lecce',
                    text: 'Google Developer Group Lecce is an independent, non-profit community of developers, students and tech professionals. We organize talks, workshops and networking moments open to everyone, with the goal of growing the local technology ecosystem and connecting it with the rest of Italy. We are part of the global Google Developer Groups network, active in more than 100 countries.',
                },
                {
                    title: 'What DevFest is',
                    text: "DevFest is the largest tech festival organized by GDG communities around the world. DevFest Lecce is its Salento edition: a day of talks, workshops and hackathons on AI, Web & Mobile, Cloud, Cybersecurity, Data Science and Soft Skills. It is a unique opportunity in Southern Italy to learn from top national and international speakers, network and meet companies in the field.",
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
            body: 'The DevFest Lecce 2026 line-up will be published after the Call for Speakers selection.',
            cards: ['AI', 'Web & Mobile', 'Cloud', 'Cybersecurity', 'Data Science', 'Soft Skills'],
            subtitle:
                'The DevFest Lecce 2026 line-up will be published after the Call for Speakers selection.',
            emptyTitle: 'Speakers coming soon',
            emptyText:
                'We are building a program with national and international voices on AI, development, cloud, security, data and soft skills.',
            cfpTitle: 'Want to take the stage?',
            cfpText: 'The Call for Speakers is open on Sessionize.',
            cfpCta: 'Submit your proposal',
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
            cfpCta: 'Submit a talk',
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
            subtitle:
                'DevFest Lecce aims to be an open, welcoming and respectful space for everyone.',
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
                'DevFest Lecce 2026 will take place on Saturday, October 17, 2026 at Studium 2000, University of Salento.',
                'The venue will host talks, workshops, networking, leisure spaces and the after party for a full community tech day.',
            ],
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
                    answer: 'Yes. The Call for Speakers is open on Sessionize.',
                },
            ],
        },
        coc: {
            title: 'Code of Conduct',
            description:
                'All GDG events follow guidelines designed to ensure a respectful and safe environment.',
            cta: 'Read the GDG code',
        },
        notFound: {
            title: 'Page not found',
            text: 'This page does not exist or has been moved.',
            cta: 'Back to home',
        },
    },
} as const;

export const isLang = (value: string | undefined): value is Lang =>
    languages.includes(value as Lang);

export const withoutLangPrefix = (pathname: string) => {
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length && isLang(segments[0])) {
        return `/${segments.slice(1).join('/')}`.replace(/\/$/, '') || '/';
    }

    return pathname || '/';
};

export const routePath = (lang: Lang, path = '/') => {
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    return `/${lang}${normalizedPath === '/' ? '' : normalizedPath}`;
};

export const getLangFromUrl = (url: URL): Lang => {
    const [, lang] = url.pathname.split('/');
    return isLang(lang) ? lang : defaultLang;
};

export const switchLangPath = (pathname: string, lang: Lang) => {
    const rest = withoutLangPrefix(pathname);
    return routePath(lang, rest);
};

export const localizedStaticPaths = () =>
    languages.map((lang) => ({
        params: { lang },
        props: { lang },
    }));
