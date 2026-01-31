// ============================================
// CE ALUMNI DATA - SINGLE SOURCE OF TRUTH
// ============================================
// Last updated: January 2025
// 
// HOW TO UPDATE:
// 1. Scroll to the section you need to update
// 2. Change the numbers
// 3. Save the file
// 4. All pages will automatically reflect the changes
//
// NOTE: Also update the meta description in dashboard.html
//       (line 8) when you change the summary numbers.
// ============================================


// ╔═══════════════════════════════════════════════════════════════╗
// ║                                                               ║
// ║              📊 UPDATE THESE NUMBERS ANNUALLY 📊              ║
// ║                                                               ║
// ╚═══════════════════════════════════════════════════════════════╝

const CE_DATA = {

    // ══════════════════════════════════════════
    // SECTION 1: SUMMARY STATISTICS
    // ══════════════════════════════════════════
    // These appear in the hero sections across all pages
    
    summary: {
        totalAlumni: 46,           // Total number of CE graduates
        nationalities: 15,         // Number of different nationalities
        countriesLivingIn: 10,     // Countries where alumni currently live
        universitiesAttended: 22,  // Master's universities attended
        programmeStartYear: 2021,  // Year CE programme started
        firstGraduationYear: 2024  // Year of first graduating class
    },


    // ══════════════════════════════════════════
    // SECTION 2: GRADUATION BY YEAR
    // ══════════════════════════════════════════
    // Add new years as cohorts graduate
    
    graduationByYear: [
        { year: 2024, count: 13 },
        { year: 2025, count: 33 }
        // { year: 2026, count: ?? },  // ← Add future years here
    ],


    // ══════════════════════════════════════════
    // SECTION 3: GENDER BREAKDOWN
    // ══════════════════════════════════════════
    // Updates the donut chart on the dashboard
    
    gender: {
        male: 23,
        malePercent: 50,
        female: 20,
        femalePercent: 43,
        notDisclosed: 3,
        notDisclosedPercent: 7
    },


    // ══════════════════════════════════════════
    // SECTION 4: CONCENTRATION BREAKDOWN
    // ══════════════════════════════════════════
    // Update the count and percentage for each track
    
    concentrations: [
        {
            name: "Sustainable Biotechnology",
            shortName: "Biotech",
            count: 17,           // ← Update this
            percentage: 37,      // ← Update this
            icon: "flask-conical",
            color: "#10B981",
            description: "Explore how cells, genes, enzymes, and microbes can be engineered to produce food, materials, energy, and pharmaceuticals sustainably.",
            fullDescription: "Build a strong foundation in molecular and cellular biology, and gain hands-on experience with biotechnological tools, fermentation, and bioprocess design. Emphasis is placed on the development of scalable, low-impact biotechnologies that close resource loops and reduce dependence on fossil-based systems.",
            careers: ["Life sciences", "Bio-based industries", "Environmental biotechnology", "Pharmaceutical production"],
            courses: ["Gene Technology", "Plant Biotechnology", "Bioreactors", "Microbiology & Fermentations", "Biotechnology for Sustainable Processes"]
        },
        {
            name: "Circular Chemical Engineering",
            shortName: "Chemical",
            count: 17,           // ← Update this
            percentage: 37,      // ← Update this
            icon: "atom",
            color: "#14B8A6",
            description: "Develop a deep understanding of how energy and materials flow through chemical systems, and how these systems can be redesigned for efficiency.",
            fullDescription: "Learn to model, analyse, and optimise industrial processes, from molecular-level transformations to full-scale production systems, while gaining practical skills in system design, operational control, and sustainability assessment. This track prepares you to lead change in the chemical industry and beyond.",
            careers: ["Chemical industry", "Process engineering", "Sustainability consulting", "Industrial optimization"],
            courses: ["Chemical Engineering Thermodynamics", "Reactor Engineering", "Separations Processes", "Chemical Plant Design", "Circular Process Design"]
        },
        {
            name: "Engineering Physics for Sustainable Manufacturing",
            shortName: "Physics",
            count: 12,           // ← Update this
            percentage: 26,      // ← Update this
            icon: "cpu",
            color: "#0EA5E9",
            description: "Design and optimise technologies that make production more efficient, intelligent, and circular.",
            fullDescription: "Build strong foundations in mechanics, materials, and electronics, learning how to sense, measure, and control physical systems with precision. Through applied design and advanced technical skills, you develop the capacity to engineer sustainable products and processes that reduce waste, extend product lifecycles, and enable smarter use of resources.",
            careers: ["Sensor-driven manufacturing", "Sustainable product development", "Smart systems", "Industrial automation"],
            courses: ["Mechanical Physics", "Sensors & Instrumentation", "Advanced Electronics", "Materials Engineering", "Product & Process Design"]
        }
    ],


    // ══════════════════════════════════════════
    // SECTION 5: TOP MASTER'S UNIVERSITIES
    // ══════════════════════════════════════════
    // Reorder by count (highest first), update counts
    // logo: null means no logo file (will show placeholder)
    
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


    // ══════════════════════════════════════════
    // SECTION 6: MASTER'S PROGRAMMES
    // ══════════════════════════════════════════
    // What programmes alumni are studying
    
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


    // ══════════════════════════════════════════
    // SECTION 7: COUNTRIES WHERE ALUMNI LIVE
    // ══════════════════════════════════════════
    // Update counts and cities list
    
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


    // ══════════════════════════════════════════
    // SECTION 8: TOP CITIES
    // ══════════════════════════════════════════
    // Cities with most alumni (for dashboard display)
    
    topCities: [
        { name: "Maastricht", country: "Netherlands", code: "nl", count: 10 },
        { name: "Lisbon", country: "Portugal", code: "pt", count: 3 },
        { name: "Stockholm", country: "Sweden", code: "se", count: 3 },
        { name: "Wageningen", country: "Netherlands", code: "nl", count: 3 },
        { name: "Delft", country: "Netherlands", code: "nl", count: 3 },
        { name: "Eindhoven", country: "Netherlands", code: "nl", count: 2 }
    ],


    // ══════════════════════════════════════════
    // SECTION 9: NATIONALITIES
    // ══════════════════════════════════════════
    // Where alumni are originally from (citizenship)
    
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

    // All nationality flag codes for the flag display
    // Add new codes when new nationalities join
    allNationalityFlags: ["be", "nl", "de", "it", "fr", "ro", "ec", "lb", "ie", "in", "hu", "es", "tt", "bg", "at"],


    // ══════════════════════════════════════════
    // SECTION 10: ORIGIN COUNTRIES
    // ══════════════════════════════════════════
    // Where alumni lived BEFORE starting CE (for Euregio stats)
    
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


    // ══════════════════════════════════════════
    // SECTION 11: REGIONAL / EUREGIO DATA
    // ══════════════════════════════════════════
    // Talent flow and regional retention statistics
    
    regionalData: {
        stayInMaastricht: 10,
        stayInMaastrichtPercent: 22,
        
        euregioOrigin: 19,
        euregioOriginPercent: 41,
        euregioDestination: 16,
        euregioDestinationPercent: 35,
        
        regionalRetention: 7,
        regionalRetentionPercent: 15,
        
        stayInNetherlands: 19,
        stayInNetherlandsPercent: 41
    },


    // ══════════════════════════════════════════
    // SECTION 12: EMPLOYMENT DATA
    // ══════════════════════════════════════════
    // Alumni working vs. studying
    
    employment: {
        studying: 31,
        working: 15,
        workingPercent: 33
    },

    // Notable employers (for considering-ce page)
    notableEmployment: [
        { company: "Lithium Ark", role: "Junior Engineer", sector: "Energy/Sustainability" },
        { company: "BASF", role: "Intern", sector: "Chemical Industry" },
        { company: "Verdalia Bioenergy", role: "Process Engineer", sector: "Renewable Energy" },
        { company: "Innosolids BS", role: "Research Fellow", sector: "Research" },
        { company: "dnata", role: "Sustainability Adviser", sector: "Aviation" },
        { company: "Maastricht University", role: "Research Intern", sector: "Academia" }
    ],


// ╔═══════════════════════════════════════════════════════════════╗
// ║                                                               ║
// ║     📚 REFERENCE DATA (Rarely needs updating)                 ║
// ║                                                               ║
// ╚═══════════════════════════════════════════════════════════════╝


    // ══════════════════════════════════════════
    // PROGRAMME INFORMATION
    // ══════════════════════════════════════════
    // General info about the CE programme
    
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
        
        highlights: [
            "Problem-Based Learning (PBL) in small groups of ~15 students",
            "Research-Based Learning (RBL) with real engineering challenges",
            "Collaboration with Brightlands innovation campuses",
            "State-of-the-art engineering laboratories",
            "Three specialisation concentrations in Year 3",
            "Design projects with industry partners"
        ],
        
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
        
        circularPrinciples: ["Reduce", "Reuse", "Remake", "Repair", "Recycle"]
    },


    // ══════════════════════════════════════════
    // REAL-LIFE CHALLENGES
    // ══════════════════════════════════════════
    // Example projects for prospective students page
    
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


    // ══════════════════════════════════════════
    // CAREER SECTORS
    // ══════════════════════════════════════════
    // Potential career paths for CE graduates
    
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


    // ══════════════════════════════════════════
    // MASTER'S PATHWAYS BY CONCENTRATION
    // ══════════════════════════════════════════
    // Suggested Master's programmes for each track
    
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

/**
 * Calculate SVG stroke-dashoffset for donut charts
 * circumference = 2 * PI * radius (for r=40, circumference ≈ 251.2)
 */
function getDonutOffset(percent, circumference = 251.2) {
    return circumference - (percent / 100) * circumference;
}
