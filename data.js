const portfolioData = {
    // Header
    navbar: {
        logo: "George Lima",
        links: [
            { text: "About", href: "#about" },
            { text: "Experience", href: "#experience" },
            { text: "Research", href: "#research" },
            { text: "Publications", href: "#publications" },
            { text: "Contact", href: "#contact", class: "btn-primary" }
        ]
    },

    // Hero Section
    hero: {
        eyebrow: "Computer Science Professor & Researcher",
        name: "George Marconi <br> de Araújo Lima",
        bio: "Interested in the advancement of <strong>Real-Time Systems</strong>, including the following topics: scheduling, schedulability analysis, probabilistic analysis, fault tolerance.",
        buttons: [
            { text: "View Research", href: "#research", class: "btn-primary" },
            { text: "Lattes CV", href: "http://lattes.cnpq.br/5391801774050611", class: "btn-secondary", icon: "external-link", target: "_blank" }
        ],
        image: "Home-Page-Picture3.png"
    },

    // Stats Section
    stats: [
        { number: "30+", label: "Years Experience" },
        { number: "110+", label: "Publications" },
        { number: "PhD", label: "University of York, UK" }
    ],

    // About Section
    about: {
        title: "Academic Background",
        text_1: "I am a Full Professor at the <strong>Federal University of Bahia (UFBA)</strong>, where I have been contributing to the Department of Computer Science since 2004. My academic journey is rooted in a deep curiosity for computing systems, leading me to obtain my PhD from the <strong>University of York (UK)</strong> in 2003, with a focus on Fault Tolerance in Real-Time Distributed Systems.",
        text_2: "Throughout my career, I have held visiting positions at prestigious institutions like <strong>INRIA Paris</strong> and <strong>UFPE</strong>. My research philosophy integrates theoretical analysis with practical mechanism design, aiming to build predictable and reliable real-time systems. ",
        education: [
            { year: "2003", title: "PhD in Computer Science", institution: "University of York, UK" },
            { year: "1996", title: "MSc in Computer Science", institution: "UNICAMP, Brazil" },
            { year: "1993", title: "BSc in Computer Science", institution: "UFBA, Brazil" }
        ],
        interests: [
            { icon: "clock", text: "Real-Time Systems" },
            { icon: "shield-check", text: "Fault Tolerance" },
            { icon: "cpu", text: "Embedded Systems" }
        ]
    },

    // Experience Section
    experience: {
        title: "Academic Journey",
        timeline: [
            {
                period: "2024 - Present",
                role: "Full Professor (Titular)",
                institution: "Universidade Federal da Bahia (UFBA)",
                description: "Dedication to teaching, research, and department leadership in Computer Science."
            },
            {
                period: "2019 & 2017",
                role: "Visiting Researcher",
                institution: "Centre de Recherche INRIA Paris",
                description: "Collaborative research with the AOESTE group on real-time systems."
            },
            {
                period: "2015 - 2016",
                role: "Visiting Researcher (sabbatical period)",
                institution: "Universidade Federal de Pernambuco (UFPE)",
                description: "Scientific sabbatical focused on Measurement-Based Probabilistic Timing Analysis (MBPTA)."
            },
            {
                period: "2013 - 2023",
                role: "Associate Professor",
                institution: "Universidade Federal da Bahia (UFBA)",
                description: "Extensive teaching in OS, Real-Time Systems, and Algorithms. Mentorship of MSc and PhD students. Head of Gratuate Programa (2014-2015)"
            },
            {
                period: "2004 - 2013",
                role: "Adjunct Professor",
                institution: "Universidade Federal da Bahia (UFBA)",
                description: "Teaching undergraduate and graduate courses (OS, Algorithms and Data Structures), coordinating seminars, and research supervision of Undergrad, MSc and PhD students. Head of Department (2006-2008)."
            }
        ]
    },

    // Research Section
    research: {
        title: "Recent Research Projects",
        projects: [
	    {
                title: "Parallelism and Uncertainties in Real-Time Systems",
                period: "2025 - Present",
                description: "Addressing execution time uncertainties and scheduling in parallel architectures using probabilistic approaches.",
                tags: ["Parallelism", "Uncertainty", "Scheduling"]
            },
            {
                title: "Giordano",
                period: "2025 - Current",
                description: "Guaranteeing Time and Data for Efficient Autonomous Cyber-Physical Systems. Focused on multicore platforms and probabilistic timing analysis. In collaboration with INRIA/Paris.",
                tags: ["CPS", "Scheduling", "Multicore", "Probabilistic Timing Analysis"]
            },
            {
                title: "Kepler",
                period: "2020 - 2024",
                description: "Probabilistic foundations for time, a key concept for cyber-physical systems certification. In collaboration with INRIA/Paris.",
                tags: ["CPS", "Certification", "Probabilistic Time Analysis"]
            },
          ]
    },

    // Publications Section
    publications: {
        title: "Selected Publications",
        items: [
	    {
                year: "2003",
                title: "An Optimal Fixed-Priority Assignment Algorithm for Supporting Fault Tolerant Hard Real-Time Systems",
                details: "IEEE Transactions on Computers. Lima, G.; Burns, A."
            },
            {
                year: "2011",
                title: "Run: Optimal multiprocessor real-time scheduling via reduction to uniprocessor",
                details: "IEEE Real-Time Systems Symposium (RTSS). Regnier, P.; Lima, G.; et al."
            },
	    {
                year: "2014",
                title: "Optimal and Adaptive Multiprocessor Real-Time Scheduling: The Quasi-Partitioning Approach",
                details: "Euromicro Conference on Real-Time Systems (ECRTS). Massa, E.; Lima, G.; et al."
            },
            {
                year: "2016",
                title: "Extreme Value Theory for Estimating Task Execution Time Bounds: A Careful Look",
                details: "Euromicro Real-Time Systems Conference (ECRTS). G. Lima, D. Dias, E. Barros."
            },
	    
        ],
        links: [
            { text: "Lattes CV \u2192", href: "http://lattes.cnpq.br/5391801774050611" },
            { text: "Google Scholar Profile \u2192", href: "https://scholar.google.com/citations?user=2Zl0hwwAAAAJ&hl=en" }
        ]
    },

    // Contact Section
    contact: {
        title: "Get in Touch",
        description: "",
        items: [
            { icon: "map-pin", text: "IC - INSTITUTO DE COMPUTAÇÃO/UFBA<br>Avenida Milton Santos, s/n - Campus de Ondina<br>PAF 2 - Salvador - Bahia, CEP 40.170-110" },
            { icon: "phone", text: "(71) 3283-5760" }
        ],
        footer: "&copy; 2026 George Marconi de Araújo Lima."
    }
};
