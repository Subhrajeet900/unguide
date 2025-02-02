const educationalFields = [
    {
        name: "Computer Science",
        icon: "fas fa-laptop-code",
        description: "Study of computers and computational systems",
        progress: 75,
        roadmap: {
            semesters: [
                {
                    name: "Foundation",
                    subjects: ["Programming Basics", "Mathematics", "Computer Architecture"],
                    projects: ["Calculator App", "Student Management System"],
                    resources: ["LeetCode", "GeeksforGeeks", "Coursera"]
                },
                {
                    name: "Core Concepts",
                    subjects: ["Data Structures", "Algorithms", "Database Management"],
                    projects: ["Social Media Clone", "E-commerce Website"],
                    resources: ["freeCodeCamp", "Udemy", "GitHub"]
                },
                {
                    name: "Advanced Topics",
                    subjects: ["Machine Learning", "Cloud Computing", "Web Development"],
                    projects: ["ML Model Deployment", "Cloud-based Application"],
                    resources: ["AWS Documentation", "TensorFlow Tutorials", "MDN Web Docs"]
                }
            ]
        }
    },
    {
        name: "Mechanical Engineering",
        icon: "fas fa-cogs",
        description: "Study of machinery and mechanical systems",
        progress: 60,
        roadmap: {
            semesters: [
                {
                    name: "Foundation",
                    subjects: ["Engineering Mathematics", "Engineering Drawing", "Physics"],
                    projects: ["3D CAD Design", "Simple Machine Design"],
                    resources: ["Engineering Drawing Tutorials", "CAD Software Guides"]
                },
                {
                    name: "Core Concepts",
                    subjects: ["Thermodynamics", "Fluid Mechanics", "Machine Design"],
                    projects: ["Heat Exchanger Design", "Pump System Design"],
                    resources: ["Engineering Forums", "Research Papers"]
                }
            ]
        }
    },
    {
        name: "Electrical Engineering",
        icon: "fas fa-bolt",
        description: "Study of electrical systems and electronics",
        progress: 45,
        roadmap: {
            semesters: [
                {
                    name: "Foundation",
                    subjects: ["Circuit Theory", "Digital Electronics", "Electromagnetic Theory"],
                    projects: ["Basic Circuit Design", "Digital Logic Gates"],
                    resources: ["Circuit Simulation Tools", "Electronics Tutorials"]
                },
                {
                    name: "Advanced Concepts",
                    subjects: ["Power Systems", "Control Systems", "Microprocessors"],
                    projects: ["Power Distribution Model", "Automated Control System"],
                    resources: ["IEEE Papers", "Industry Standards"]
                }
            ]
        }
    },
    {
        name: "Pharmacy (B.Pharm)",
        icon: "fas fa-pills",
        description: "Study of pharmaceutical sciences",
        progress: 30,
        roadmap: {
            semesters: [
                {
                    name: "Foundation",
                    subjects: ["Pharmaceutical Chemistry", "Human Anatomy", "Pharmacology"],
                    projects: ["Drug Formulation", "Pharmaceutical Analysis"],
                    resources: ["Medical Journals", "Pharmacy Guidelines"]
                },
                {
                    name: "Advanced Studies",
                    subjects: ["Clinical Pharmacy", "Pharmaceutical Technology", "Drug Design"],
                    projects: ["Drug Development Research", "Quality Control Analysis"],
                    resources: ["Clinical Studies", "FDA Guidelines"]
                }
            ]
        }
    },
    {
        name: "Nursing",
        icon: "fas fa-user-nurse",
        description: "Study of patient care and healthcare",
        progress: 85,
        roadmap: {
            semesters: [
                {
                    name: "Foundation",
                    subjects: ["Anatomy", "Physiology", "Basic Nursing"],
                    projects: ["Patient Care Plan", "Health Assessment"],
                    resources: ["Nursing Journals", "Healthcare Guidelines"]
                },
                {
                    name: "Clinical Practice",
                    subjects: ["Medical-Surgical Nursing", "Pediatric Care", "Emergency Care"],
                    projects: ["Clinical Rotations", "Case Studies"],
                    resources: ["Medical Databases", "Clinical Guidelines"]
                }
            ]
        }
    },
    {
        name: "Civil Engineering",
        icon: "fas fa-city",
        description: "Study of infrastructure and construction",
        progress: 50,
        roadmap: {
            semesters: [
                {
                    name: "Foundation",
                    subjects: ["Engineering Mathematics", "Engineering Mechanics", "Surveying"],
                    projects: ["Land Surveying", "Structural Analysis"],
                    resources: ["Engineering Textbooks", "Surveying Tools"]
                },
                {
                    name: "Core Concepts",
                    subjects: ["Structural Engineering", "Geotechnical Engineering", "Transportation Engineering"],
                    projects: ["Bridge Design", "Roadway Planning"],
                    resources: ["Civil Engineering Forums", "Research Papers"]
                }
            ]
        }
    },
    {
        name:"agriculture",
        icon:"fas fa-tractor",
        description:"Study of farming and agricultural practices",
        progress: 70,
        roadmap:{
            semesters:[
                {
                    name:"Foundation",
                    subjects:["Soil Science","Agricultural Engineering","Crop Science"],
                    projects:["Soil Testing","Crop Management"],
                    resources:["Agricultural Journals","Farming Guidelines"]
                },
                {
                    name:"Advanced Studies",
                    subjects:["Agricultural Economics","Plant Breeding","Pest Management"],
                    projects:["Economic Analysis","Crop Research"],
                    resources:["Agricultural Databases","Research Papers"]
                    }
                ]
                }
                
    },
    {
        name: "Environmental Science",
        icon: "fas fa-leaf",
        description: "Study of the environment and ecosystems",
        progress: 40,
        roadmap: {
            semesters: [
                {
                    name: "Foundation",
                    subjects: ["Ecology", "Environmental Chemistry", "Climate Science"],
                    projects: ["Ecosystem Analysis", "Pollution Control"],
                    resources: ["Environmental Reports", "Climate Data"]
                },
                {
                    name: "Advanced Studies",
                    subjects: ["Sustainability", "Conservation Biology", "Environmental Policy"],
                    projects: ["Sustainable Development", "Conservation Planning"],
                    resources: ["Environmental Guidelines", "Conservation Reports"]
                    }
                    ]
                    }
    },
    {
        name: "Biotechnology",
        icon: "fas fa-dna",
        description: "Study of the application of biological systems",
        progress: 55,
        roadmap: {
            semesters: [
                {
                    name: "Foundation",
                    subjects: ["Cell Biology", "Genetics", "Microbiology"],
                    projects: ["Cell Culture", "Genetic Engineering"],
                    resources: ["Biotech Journals", "Research Papers"]
                },
                {
                    name: "Advanced Studies",
                    subjects: ["Bioprocessing", "Bioinformatics", "Biomedical Engineering"],
                    projects: ["Bioreactor Design", "Drug Development"],
                    resources: ["Biotech Forums", "Bioinformatics Tools"]
                }
            ]
    }
},
{
    name:"aeronautical engineering",
    icon: "fas fa-plane",
    description: "Study of the design, development, and operation of aircraft",
    progress: 30,
    roadmap: {
        semesters: [
            {
                name: "Foundation",
                subjects: ["Engineering Mathematics", "Aerodynamics", "Aircraft Structures"],
                projects: ["Aircraft Design", "Flight Simulation"],
                resources: ["Aeronautical Journals", "Flight Simulation Software"]
                },
                {
                    name: "Advanced Studies",
                    subjects: ["Propulsion Systems", "Aircraft Systems", "Flight Mechanics"],
                    projects: ["Aircraft Performance", "Flight Control Systems"],
                    resources: ["Aeronautical Conferences", "Flight Mechanics Software"]
                    }
                    ]
                    }
},
{
    name: "Architecture",
    icon: "fas fa-city",
    description: "Study of building design and construction",
    progress: 80,
    roadmap: {
        semesters: [
            {
                name: "Foundation",
                subjects: ["Building Design", "Construction Methods", "Materials Science"],
                projects: ["Building Design", "Construction Planning"],
                resources: ["Architecture Journals", "Building Information Modeling (BIM) Software"]
            },
            {
                name: "Advanced Studies",
                subjects: ["Sustainable Design", "Urban Planning", "Building Systems"],
                projects: ["Green Building Design", "Urban Development Plan"],
                resources: ["Sustainable Architecture Guidelines", "Urban Planning Reports"]
                }
                ]
                }
},
{
    name: "Business Administration",
    icon: "fas fa-chart-line",
    description: "Study of business management and operations",
    progress: 50,
    roadmap: {
        semesters: [
            {
                name: "Foundation",
                subjects: ["Accounting", "Economics", "Business Communication"],
                projects: ["Financial Analysis", "Market Research"],
                resources: ["Business Journals", "Accounting Software"]
            },
            {
                name: "Advanced Studies",
                subjects: ["Marketing", "Human Resources", "Operations Management"],
                projects: ["Marketing Campaign", "HR Strategy"],
                resources: ["Marketing Reports", "HR Guidelines"]
                }
                ]
                }
},
{
    name:"marine engineering",
    icon: "fas fa-ship",
    description: "Study of ship design and construction",
    progress: 40,
    roadmap: {
        semesters: [
            {
                name: "Foundation",
                subjects: ["Marine Engineering Basics", "Ship Design", "Naval Architecture"],
                projects: ["Ship Model Design", "Marine Systems Analysis"],
                resources: ["Marine Engineering Books", "Ship Design Software"]
            },
            {
                name: "Advanced Studies",
                subjects: ["Marine Propulsion", "Marine Systems", "Ship Maintenance"],
                projects: ["Propulsion System Design", "Ship Maintenance Plan"],
                resources: ["Marine Engineering Reports", "Ship Maintenance Guidelines"]
                }
                ]
                }

},
{
    name: "Fashion Design",
    icon: "fas fa-tshirt",
    description: "Study of clothing and fashion trends",
    progress: 30,
    roadmap: {
        semesters: [
            {
                name: "Foundation",
                subjects: ["Fashion Sketching", "Textile Design", "Pattern Making"],
                projects: ["Fashion Portfolio", "Garment Construction"],
                resources: ["Fashion Design Books", "Fashion Design Software"]
            },
            {
                name: "Advanced Studies",
                subjects: ["Fashion Marketing", "Apparel Production", "Fashion Styling"],
                projects: ["Fashion Branding", "Fashion Show Production"],
                resources: ["Fashion Design Reports", "Fashion Design Guidelines"]
                }
                ]
                }
},
{
    name:"biomedical engineering",
    icon:"fas fa-heartbeat",
    description: "Study of medical devices and equipment",
    progress: 70,
    roadmap: {
        semesters: [
            {
                name: "Foundation",
                subjects: ["Biology", "Biomechanics", "Medical Imaging"],
                projects: ["Biomedical Device Design", "Medical Imaging Analysis"],
                resources: ["Biomedical Journals", "Medical Device Guidelines"]
            },
            {
                name: "Advanced Studies",
                subjects: ["Tissue Engineering", "Biomedical Instrumentation", "Rehabilitation Engineering"],
                projects: ["Tissue Regeneration Research", "Medical Device Testing"],
                resources: ["Biomedical Reports", "Medical Device Standards"]
                }
                ]
                }
}
   
    
];


function populateFields() {
    const fieldsGrid = document.getElementById('fieldsGrid');
    educationalFields.forEach(field => {
        const fieldCard = document.createElement('div');
        fieldCard.className = 'field-card';
        fieldCard.innerHTML = `
            <i class="${field.icon} field-icon"></i>
            <h3>${field.name}</h3>
            <p>${field.description}</p>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${field.progress}%"></div>
            </div>
            <p class="progress-text">${field.progress}% Complete</p>
        `;
        fieldCard.addEventListener('click', () => showRoadmap(field));
        fieldsGrid.appendChild(fieldCard);
    });
}


function showRoadmap(field) {
    const fieldsSection = document.querySelector('.fields-section');
    const roadmapSection = document.querySelector('.roadmap-section');
    const roadmapContent = document.getElementById('roadmapContent');

    fieldsSection.classList.add('hidden');
    roadmapSection.classList.remove('hidden');

    let roadmapHTML = `
        <div class="roadmap-header">
            <i class="${field.icon} field-icon"></i>
            <h3>${field.name} Roadmap</h3>
        </div>
        <div class="roadmap-content">
    `;

    field.roadmap.semesters.forEach((semester, index) => {
        roadmapHTML += `
            <div class="semester">
                <div class="semester-header">
                    <h4><i class="fas fa-calendar-alt"></i> ${semester.name}</h4>
                    <span class="semester-number">Semester ${index + 1}</span>
                </div>
                <div class="semester-content">
                    <div class="subjects">
                        <h5><i class="fas fa-book"></i> Key Subjects:</h5>
                        <ul>
                            ${semester.subjects.map(subject => `<li>${subject}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="projects">
                        <h5><i class="fas fa-project-diagram"></i> Recommended Projects:</h5>
                        <ul>
                            ${semester.projects.map(project => `<li>${project}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="resources">
                        <h5><i class="fas fa-link"></i> Learning Resources:</h5>
                        <ul>
                            ${semester.resources.map(resource => `<li>${resource}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `;
    });

    roadmapHTML += '</div>';
    roadmapContent.innerHTML = roadmapHTML;
}


function hideRoadmap() {
    const fieldsSection = document.querySelector('.fields-section');
    const roadmapSection = document.querySelector('.roadmap-section');

    fieldsSection.classList.remove('hidden');
    roadmapSection.classList.add('hidden');
}


function updateProgress() {
    const progressBars = document.getElementById('progressBars');
    let progressHTML = '';

    educationalFields.forEach(field => {
        progressHTML += `
            <div class="progress-item">
                <div class="progress-label">
                    <span>${field.name}</span>
                    <span>${field.progress}%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${field.progress}%"></div>
                </div>
            </div>
        `;
    });

    progressBars.innerHTML = progressHTML;
}


const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeModal = document.querySelector('.close-modal');

loginBtn.addEventListener('click', () => {
    loginModal.classList.remove('hidden');
});

closeModal.addEventListener('click', () => {
    loginModal.classList.add('hidden');
});

window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.classList.add('hidden');
    }
});


document.addEventListener('DOMContentLoaded', () => {
    populateFields();
    updateProgress();
});
