// ============================================
// CE ALUMNI DATA - SINGLE SOURCE OF TRUTH
// ============================================
// Last updated: January 2025
// Update this file annually - all pages pull from here
// ============================================

const CE_DATA = {
    // ==========================================
    // SUMMARY STATISTICS
    // ==========================================
    summary: {
        totalAlumni: 46,
        nationalities: 15,
        countriesLivingIn: 10,
        universitiesAttended: 22,
        programmeStartYear: 2021,
        firstGraduationYear: 2024
    },

    // ==========================================
    // GRADUATION BY YEAR
    // ==========================================
    graduationByYear: [
        { year: 2024, count: 13 },
        { year: 2025, count: 33 }
    ],

    // ==========================================
    // CONCENTRATIONS
    // ==========================================
    concentrations: [
        {
            name: "Sustainable Biotechnology",
            shortName: "Biotech",
            count: 17,
            percentage: 37,
            icon: "flask-conical",
            color: "#10B981",
            description: "Biotechnological solutions for sustainability challenges"
        },
        {
            name: "Circular Chemical Engineering",
            shortName: "Chemical",
            count: 17,
            percentage: 37,
            icon: "atom",
            color: "#14B8A6",
            description: "Chemical processes for circular economy"
        },
        {
            name: "Engineering Physics for Sustainable Manufacturing",
            shortName: "Physics",
            count: 12,
            percentage: 26,
            icon: "cpu",
            color: "#0EA5E9",
            description: "Physics-based solutions for sustainable production"
        }
    ],

    // ==========================================
    // TOP MASTER'S UNIVERSITIES
    // ==========================================
    topUniversities: [
        { name: "TU Delft", count: 3, country: "Netherlands", logo: "tu-delft.png" },
        { name: "KTH Royal Institute of Technology", count: 3, country: "Sweden", logo: "kth-royal-institute-of-technology.png" },
        { name: "Wageningen University & Research", count: 3, country: "Netherlands", logo: "wageningen-university.png" },
        { name: "Eindhoven University of Technology", count: 2, country: "Netherlands", logo: "eindhoven-university.png" },
        { name: "Maastricht University", count: 2, country: "Netherlands", logo: "maastricht-university.png" },
        { name: "NOVA School of Business & Economics", count: 2, country: "Portugal", logo: null },
        { name: "Leiden University", count: 2, country: "Netherlands", logo: "leiden-university.png" },
        { name: "Technical University of Munich", count: 1, country: "Germany", logo: "technical-university-of-munich.png" },
        { name: "Technical University of Denmark", count: 1, country: "Denmark", logo: "technical-university-of-denmark.png" },
        { name: "RWTH Aachen University", count: 1, country: "Germany", logo: null },
        { name: "University of Southern Denmark", count: 1, country: "Denmark", logo: null },
        { name: "Instituto Superior Técnico Lisboa", count: 1, country: "Portugal", logo: null },
        { name: "Université Libre de Bruxelles", count: 1, country: "Belgium", logo: "universite-libre-de-bruxelles.png" },
        { name: "MCI - The Entrepreneurial School", count: 1, country: "Austria", logo: null },
        { name: "Universidad Politécnica de Madrid", count: 1, country: "Spain", logo: null },
        { name: "University of Seoul", count: 1, country: "South Korea", logo: null },
        { name: "University of Groningen", count: 1, country: "Netherlands", logo: "university-of-groningen.png" },
        { name: "KU Leuven", count: 1, country: "Belgium", logo: "ku-leuven.png" },
        { name: "University of Liège", count: 1, country: "Belgium", logo: "university-of-liege.png" },
        { name: "Institute for Advanced Architecture of Catalonia", count: 1, country: "Spain", logo: null },
        { name: "EU-CONEXUS", count: 1, country: "France", logo: null }
    ],

    // ==========================================
    // MASTER'S PROGRAMMES (What they're studying)
    // ==========================================
    mastersProgrammes: [
        { name: "Biotechnology", count: 3 },
        { name: "Biobased Materials", count: 2 },
        { name: "Chemical Engineering for Energy and Environment", count: 2 },
        { name: "Mechanical Engineering", count: 2 },
        { name: "Industrial Ecology", count: 2 },
        { name: "Environmental Engineering", count: 2 },
        { name: "Business Analytics", count: 1 },
        { name: "Automotive Engineering", count: 1 },
        { name: "Automation Engineering", count: 1 },
        { name: "Management (Sustainability)", count: 1 },
        { name: "Resilient Farming and Food Systems", count: 1 },
        { name: "Biochemistry and Molecular Biology", count: 1 }
    ],

    // ==========================================
    // COUNTRIES WHERE ALUMNI CURRENTLY LIVE
    // ==========================================
    countriesLivingIn: [
        { name: "Netherlands", code: "nl", count: 19, cities: ["Maastricht", "Delft", "Wageningen", "Eindhoven", "Groningen", "Amsterdam", "Sittard"] },
        { name: "Portugal", code: "pt", count: 3, cities: ["Lisbon"] },
        { name: "Sweden", code: "se", count: 3, cities: ["Stockholm"] },
        { name: "Germany", code: "de", count: 2, cities: ["Munich", "Aachen"] },
        { name: "Denmark", code: "dk", count: 2, cities: ["Copenhagen", "Odense"] },
        { name: "Belgium", code: "be", count: 3, cities: ["Brussels", "Leuven", "Liège"] },
        { name: "Spain", code: "es", count: 2, cities: ["Madrid", "Barcelona"] },
        { name: "France", code: "fr", count: 1, cities: ["La Rochelle"] },
        { name: "South Korea", code: "kr", count: 1, cities: ["Seoul"] },
        { name: "Moldova", code: "md", count: 1, cities: ["Chișinău"] }
    ],

    // ==========================================
    // TOP CITIES
    // ==========================================
    topCities: [
        { name: "Maastricht", country: "Netherlands", code: "nl", count: 10 },
        { name: "Lisbon", country: "Portugal", code: "pt", count: 3 },
        { name: "Stockholm", country: "Sweden", code: "se", count: 3 },
        { name: "Wageningen", country: "Netherlands", code: "nl", count: 3 },
        { name: "Delft", country: "Netherlands", code: "nl", count: 3 },
        { name: "Eindhoven", country: "Netherlands", code: "nl", count: 2 }
    ],

    // ==========================================
    // NATIONALITIES OF ALUMNI
    // ==========================================
    nationalities: [
        { name: "Belgium", code: "be", count: 8 },
        { name: "Netherlands", code: "nl", count: 6 },
        { name: "Germany", code: "de", count: 5 },
        { name: "Italy", code: "it", count: 3 },
        { name: "France", code: "fr", count: 2 },
        { name: "Romania", code: "ro", count: 2 },
        { name: "Ecuador", code: "ec", count: 1 },
        { name: "Lebanon", code: "lb", count: 1 },
        { name: "Ireland", code: "ie", count: 1 },
        { name: "India", code: "in", count: 1 },
        { name: "Hungary", code: "hu", count: 1 },
        { name: "Spain", code: "es", count: 1 },
        { name: "Trinidad and Tobago", code: "tt", count: 1 },
        { name: "Bulgaria", code: "bg", count: 1 },
        { name: "Austria", code: "at", count: 1 }
    ],

    // All nationality flags for display
    allNationalityFlags: ["be", "nl", "de", "it", "fr", "ro", "ec", "lb", "ie", "in", "hu", "es", "tt", "bg", "at"],

    // ==========================================
    // ORIGIN COUNTRIES (Where alumni came from)
    // ==========================================
    originCountries: [
        { name: "Belgium", code: "be", count: 14 },
        { name: "Netherlands", code: "nl", count: 8 },
        { name: "South Africa", code: "za", count: 3 },
        { name: "Germany", code: "de", count: 3 },
        { name: "USA", code: "us", count: 2 },
        { name: "Italy", code: "it", count: 2 },
        { name: "Moldova", code: "md", count: 2 },
        { name: "Ecuador", code: "ec", count: 1 },
        { name: "Canada", code: "ca", count: 1 },
        { name: "Lebanon", code: "lb", count: 1 },
        { name: "Chile", code: "cl", count: 1 },
        { name: "India", code: "in", count: 1 },
        { name: "Switzerland", code: "ch", count: 1 },
        { name: "Luxembourg", code: "lu", count: 1 },
        { name: "United Arab Emirates", code: "ae", count: 1 },
        { name: "Austria", code: "at", count: 1 }
    ],

    // ==========================================
    // REGIONAL / TALENT FLOW DATA
    // ==========================================
    regionalData: {
        // Where alumni are currently
        stayInMaastricht: 10,
        stayInMaastrichtPercent: 22,
        
        // Euregio metrics
        euregioOrigin: 19,
        euregioOriginPercent: 41,
        euregioDestination: 16,
        euregioDestinationPercent: 35,
        
        // Regional retention
        regionalRetention: 7,
        regionalRetentionPercent: 15,
        
        // Netherlands distribution
        stayInNetherlands: 19,
        stayInNetherlandsPercent: 41
    },

    // Talent flow breakdown
    talentFlow: [
        { flow: "International → International", count: 6 },
        { flow: "Euregio → International", count: 6 },
        { flow: "International → Limburg", count: 4 },
        { flow: "Euregio → Limburg", count: 4 },
        { flow: "Euregio → Euregio", count: 3 },
        { flow: "Netherlands → Limburg", count: 3 },
        { flow: "International → Netherlands", count: 3 },
        { flow: "Euregio → Netherlands", count: 2 },
        { flow: "Netherlands → Netherlands", count: 2 },
        { flow: "International → Euregio", count: 1 },
        { flow: "Limburg → Netherlands", count: 1 }
    ],

    // ==========================================
    // GENDER BREAKDOWN
    // ==========================================
    gender: {
        male: 23,
        malePercent: 50,
        female: 20,
        femalePercent: 43,
        notDisclosed: 3,
        notDisclosedPercent: 7
    },

    // ==========================================
    // EMPLOYMENT DATA (Alumni working vs studying)
    // ==========================================
    employment: {
        studying: 31,  // Pursuing Master's
        working: 15,   // In employment
        workingPercent: 33
    },

    // Notable employers/roles
    notableEmployment: [
        { company: "Lithium Ark", role: "Junior Engineer", sector: "Energy/Sustainability" },
        { company: "BASF", role: "Intern", sector: "Chemical Industry" },
        { company: "Verdalia Bioenergy", role: "Process Engineer", sector: "Renewable Energy" },
        { company: "Innosolids BS", role: "Research Fellow", sector: "Research" },
        { company: "dnata", role: "Sustainability Adviser", sector: "Aviation" },
        { company: "Maastricht University", role: "Research Intern", sector: "Academia" }
    ],

    // ==========================================
    // PROGRAMME INFO
    // ==========================================
    programmeInfo: {
        name: "Circular Engineering",
        faculty: "Faculty of Science and Engineering",
        university: "Maastricht University",
        degree: "Bachelor of Science",
        duration: "3 years",
        startYear: 2021,
        website: "https://www.maastrichtuniversity.nl/education/bachelor/circular-engineering",
        email: "fse-admissions@maastrichtuniversity.nl",
        alumniEmail: "fse-alumni@maastrichtuniversity.nl",
        
        // Key programme features
        highlights: [
            "Problem-Based Learning (PBL) in small groups of ~15 students",
            "Research-Based Learning (RBL) with real engineering challenges",
            "Collaboration with Brightlands innovation campuses",
            "State-of-the-art engineering laboratories",
            "Three specialisation concentrations in Year 3",
            "Design projects with industry partners"
        ],
        
        // Brightlands campuses connection
        brightlandsCampuses: [
            {
                name: "Brightlands Chemelot Campus",
                location: "Geleen",
                focus: "Chemistry, materials, and circular economy"
            },
            {
                name: "Brightlands Maastricht Health Campus",
                location: "Maastricht",
                focus: "Health, life sciences, and biotechnology"
            },
            {
                name: "Brightlands Smart Services Campus",
                location: "Heerlen",
                focus: "Digital services and smart technology"
            }
        ],
        
        // Core principles
        circularPrinciples: ["Reduce", "Reuse", "Remake", "Repair", "Recycle"]
    },

    // ==========================================
    // REAL-LIFE CHALLENGES (for prospective students)
    // ==========================================
    realLifeChallenges: [
        {
            title: "Disposable Medical Sensors",
            description: "Analyse pressure sensors used in Intensive Care units from a circularity perspective. Determine which parts can be reused, remade, or recycled — and design a technical solution to increase their circularity.",
            icon: "heart-pulse",
            tag: "Healthcare × Sustainability"
        },
        {
            title: "Plastic Food Packaging",
            description: "Analyse the entire packaging chain of a food product, identify all stakeholders, and determine sustainable alternatives. Help solve the plastic soup problem through engineering.",
            icon: "package",
            tag: "Circular Chemical Engineering"
        },
        {
            title: "Replacing Fossil Feedstock",
            description: "Select which biomass and technologies can replace fossil resources in chemical production. Optimise process design to minimise energy consumption across an entire production cluster.",
            icon: "factory",
            tag: "Chemical Industry"
        },
        {
            title: "Smart Food Production",
            description: "Design greenhouse systems using sensors and AI to optimise growing conditions. Apply engineering physics to solve challenges in sustainable agriculture.",
            icon: "sprout",
            tag: "Sustainable Biotechnology"
        }
    ],

    // ==========================================
    // CAREER SECTORS (from CE programme info)
    // ==========================================
    careerSectors: [
        { 
            name: "Sustainable Technology Development", 
            icon: "leaf",
            description: "SMEs focused on innovative sustainable product and process development"
        },
        { 
            name: "Biotechnology", 
            icon: "flask-conical",
            description: "Plant breeding, biological/chemical suppliers, biotech applications"
        },
        { 
            name: "Chemical Industry", 
            icon: "atom",
            description: "Chemical processes, process equipment design, circular transitions"
        },
        { 
            name: "Sustainability Consulting", 
            icon: "briefcase",
            description: "Consultancy firms focused on circularity and sustainability"
        },
        { 
            name: "Research & Academia", 
            icon: "graduation-cap",
            description: "PhD programmes and academic research positions"
        },
        { 
            name: "Renewable Energy", 
            icon: "zap",
            description: "Solar, biomethane, and sustainable energy systems"
        }
    ],

    // ==========================================
    // EXAMPLE MASTER'S PATHWAYS BY CONCENTRATION
    // ==========================================
    mastersPathways: {
        "Sustainable Biotechnology": [
            "Biotechnology",
            "Biobased Materials",
            "Biochemistry and Molecular Biology",
            "Resilient Farming and Food Systems"
        ],
        "Circular Chemical Engineering": [
            "Chemical Engineering",
            "Environmental Engineering",
            "Industrial Ecology",
            "Sustainable Energy Technology"
        ],
        "Engineering Physics for Sustainable Manufacturing": [
            "Mechanical Engineering",
            "Automation Engineering",
            "Applied Physics",
            "Business Analytics"
        ]
    }
};

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get percentage of total alumni
 */
function getPercentage(count) {
    return Math.round((count / CE_DATA.summary.totalAlumni) * 100);
}

/**
 * Get top N items from an array
 */
function getTopN(array, n) {
    return array.slice(0, n);
}

/**
 * Format number with locale
 */
function formatNumber(num) {
    return num.toLocaleString();
}

// ============================================
// EXPORT FOR USE IN HTML
// ============================================
// Access via CE_DATA.summary.totalAlumni, CE_DATA.topUniversities, etc.
