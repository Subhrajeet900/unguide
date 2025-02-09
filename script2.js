const educationalFields = [
    {
        name: 'Computer Science',
        icon: 'fas fa-book',
        progress: 75,
        roadmap: {
            semesters: [
                {
                    name: 'Semester 1',
                    subjects: ['Introduction to Programming', 'Data Structures'],
                    projects: ['Simple Calculator'],
                    resources: ['Online Tutorials', 'Books']
                },
                {
                    name: 'Semester 2',
                    subjects: ['Algorithms', 'Database Management'],
                    projects: ['Web Application'],
                    resources: ['Online Courses', 'Books']
                }
            ]
        }
    },
    {
        name: 'Mechanical Engineering',
        icon: 'fas fa-book',
        progress: 60,
        roadmap: {
            semesters: [
                {
                    name: 'Semester 1',
                    subjects: ['Mechanics of Materials', 'Statics'],
                    projects: ['Bridge Design'],
                    resources: ['Online Tutorials', 'Books']
                },
                {
                    name: 'Semester 2',
                    subjects: ['Dynamics', 'Fluid Mechanics'],
                    projects: ['Machine Design'],
                    resources: ['Online Courses', 'Books']
                }
            ]
        }
    },
    {
        name: 'Electrical Engineering',
        icon: 'fas fa-book',
        progress: 80,
        roadmap: {
            semesters: [
                {
                    name: 'Semester 1',
                    subjects: ['Circuit Theory', 'Electromagnetic Fields'],
                    projects: ['Power System Simulation'],
                    resources: ['Online Tutorials', 'Books']
                },
                {
                    name: 'Semester 2',
                    subjects: ['Control Systems', 'Signals and Systems'],
                    projects: ['Wireless Communication'],
                    resources: ['Online Courses', 'Books']
                }
            ]
        }
    },
    {
        name: 'Civil Engineering',
        icon: 'fas fa-book',
        progress: 50,
        roadmap: {
            semesters: [
                {
                    name: 'Semester 1',
                    subjects: ['Structural Analysis', 'Geotechnical Engineering'],
                    projects: ['Bridge Construction'],
                    resources: ['Online Tutorials', 'Books']
                },
                {
                    name: 'Semester 2',
                    subjects: ['Environmental Engineering', 'Transportation Engineering'],
                    projects: ['Urban Planning'],
                    resources: ['Online Courses', 'Books']
                }
            ]
        }
    },
    {
        name: 'Aeronautical Engineering',
        icon: 'fas fa-book',
        progress: 70,
        roadmap: {
            semesters: [
                {
                    name: 'Semester 1',
                    subjects: ['Aerodynamics', 'Aircraft Design'],
                    projects: ['Jet Engine Simulation'],
                    resources: ['Online Tutorials', 'Books']
                },
                {
                    name: 'Semester 2',
                    subjects: ['Aviation Law', 'Flight Mechanics'],
                    projects: ['Air Traffic Control'],
                    resources: ['Online Courses', 'Books']
                }
            ]
        }
    },
    {
        name: 'Marine Engineering',
        icon: 'fas fa-book',
        progress: 65,
        roadmap: {
            semesters: [
                {
                    name: 'Semester 1',
                    subjects: ['Marine Mechanics', 'Marine Engineering'],
                    projects: ['Ship Design'],
                    resources: ['Online Tutorials', 'Books']
                },
                {
                    name: 'Semester 2',
                    subjects: ['Marine Navigation', 'Marine Safety'],
                    projects: ['Marine Rescue'],
                    resources: ['Online Courses', 'Books']
                }
            ]
        }
    },
    {
        name: 'Biomedical Engineering',
        icon: 'fas fa-book',
        progress: 85,
        roadmap: {
            semesters: [
                {
                    name: 'Semester 1',
                    subjects: ['Biomedical Imaging', 'Biomechanics'],
                    projects: ['Medical Imaging'],
                    resources: ['Online Tutorials', 'Books']
                },
                {
                    name: 'Semester 2',
                    subjects: ['Biological Systems', 'Medical Devices'],
                    projects: ['Medical Robotics'],
                    resources: ['Online Courses', 'Books']
                }
            ]
        }
    },
    {
        name: 'Pharmacy',
        icon: 'fas fa-book',
        progress: 70,
        roadmap: {
            semesters: [
                {
                    name: 'Semester 1',
                    subjects: ['Pharmacology', 'Chemistry'],
                    projects: ['Drug Discovery'],
                    resources: ['Online Tutorials', 'Books']
                },
                {
                    name: 'Semester 2',
                    subjects: ['Pharmacognosy', 'Pharmaceutical Analysis'],
                    projects: ['Pharmaceutical Manufacturing'],
                    resources: ['Online Courses', 'Books']
                }
            ]
        }
    },
    {
        name: 'Nursing',
        icon: 'fas fa-book',
        progress: 60,
        roadmap: {
            semesters: [
                {
                    name: 'Semester 1',
                    subjects: ['Nursing Theories', 'Basic Nursing'],
                    projects: ['Nursing Care Plan'],
                    resources: ['Online Tutorials', 'Books']
                },
                {
                    name: 'Semester 2',
                    subjects: ['Advanced Nursing', 'Clinical Practice'],
                    projects: ['Nursing Research'],
                    resources: ['Online Courses', 'Books']
                }
            ]
        }
    },
    {
        name: 'Biotechnology',
        icon: 'fas fa-book',
        progress: 80,
        roadmap: {
            semesters: [
                {
                    name: 'Semester 1',
                    subjects: ['Genetics', 'Biochemistry'],
                    projects: ['Biotechnology Research'],
                    resources: ['Online Tutorials', 'Books']
                },
                {
                    name: 'Semester 2',
                    subjects: ['Molecular Biology', 'Biotechnology Applications'],
                    projects: ['Biotechnology Products'],
                    resources: ['Online Courses', 'Books']
                }
            ]
        }
    },
    {
        name: 'Agriculture',
        icon: 'fas fa-book',
        progress: 55,
        roadmap: {
            semesters: [
                {
                    name: 'Semester 1',
                    subjects: ['Soil Science', 'Plant Biology'],
                    projects: ['Crop Rotation'],
                    resources: ['Online Tutorials', 'Books']
                },
                {
                    name: 'Semester 2',
                    subjects: ['Animal Science', 'Agribusiness'],
                    projects: ['Animal Husbandry'],
                    resources: ['Online Courses', 'Books']
                }
            ]
        }
    },
    {
        name: 'Business Administration',
        icon: 'fas fa-book',
        progress: 75,
        roadmap: {
            semesters: [
                {
                    name: 'Semester 1',
                    subjects: ['Managerial Economics', 'Organizational Behavior'],
                    projects: ['Business Plan'],
                    resources: ['Online Tutorials', 'Books']
                },
                {
                    name: 'Semester 2',
                    subjects: ['Marketing', 'Finance'],
                    projects: ['Market Research'],
                    resources: ['Online Courses', 'Books']
                }
            ]
        }
    },
    {
        name: 'Marketing',
        icon: 'fas fa-book',
        progress: 60,
        roadmap: {
            semesters: [
                {
                    name: 'Semester 1',
                    subjects: ['Marketing Principles', 'Consumer Behavior'],
                    projects: ['Marketing Campaign'],
                    resources: ['Online Tutorials', 'Books']
                },
                {
                    name: 'Semester 2',
                    subjects: ['Digital Marketing', 'Social Media Marketing'],
                    projects: ['E-commerce Strategy'],
                    resources: ['Online Courses', 'Books']
                }
            ]
        }
    },
    {
        name: 'Finance',
        icon: 'fas fa-book',
        progress: 80,
        roadmap: {
            semesters: [
                {
                    name: 'Semester 1',
                    subjects: ['Financial Accounting', 'Corporate Finance'],
                    projects: ['Financial Analysis'],
                    resources: ['Online Tutorials', 'Books']
                },
                {
                    name: 'Semester 2',
                    subjects: ['Investment Management', 'Risk Management'],
                    projects: ['Portfolio Management'],
                    resources: ['Online Courses', 'Books']
                }
            ]
        }
    },
    {
        name: 'Architecture',
        icon: 'fas fa-book',
        progress: 70,
        roadmap: {
            semesters: [
                {
                    name: 'Semester 1',
                    subjects: ['Design Principles', 'Building Construction'],
                    projects: ['Architectural Design'],
                    resources: ['Online Tutorials', 'Books']
                },
                {
                    name: 'Semester 2',
                    subjects: ['Interior Design', 'Urban Planning'],
                    projects: ['Residential Design'],
                    resources: ['Online Courses', 'Books']
                }
            ]
        }
    },
    {
        name: 'Fashion Design',
        icon: 'fas fa-book',
        progress: 65,
        roadmap: {
            semesters: [
                {
                    name: 'Semester 1',
                    subjects: ['Fashion Theory', 'Pattern Making'],
                    projects: ['Fashion Collection'],
                    resources: ['Online Tutorials', 'Books']
                },
                {
                    name: 'Semester 2',
                    subjects: ['Fashion Marketing', 'Fashion Technology'],
                    projects: ['Fashion Show'],
                    resources: ['Online Courses', 'Books']
                }
            ]
        }
    },
    {
        name: 'Interior Design',
        icon: 'fas fa-book',
        progress: 80,
        roadmap: {
            semesters: [
                {
                    name: 'Semester 1',
                    subjects: ['Interior Design Principles', 'Space Planning'],
                    projects: ['Interior Design Project'],
                    resources: ['Online Tutorials', 'Books']
                },
                {
                    name: 'Semester 2',
                    subjects: ['Renovation Design', 'Sustainable Design'],
                    projects: ['Sustainable Interior Design'],
                    resources: ['Online Courses', 'Books']
                }
            ]
        }
    }
];

const schools = [
    {
        id: 'engineering',
        name: 'School of Engineering & Technology',
        icon: 'fas fa-building',
        fields: [
            'Computer Science',
            'Mechanical Engineering',
            'Electrical Engineering',
            'Civil Engineering',
            'Aeronautical Engineering',
            'Marine Engineering',
            'Biomedical Engineering'
        ]
    },
    {
        id: 'medical',
        name: 'School of Medical Sciences',
        icon: 'fas fa-stethoscope',
        fields: [
            'Pharmacy',
            'Nursing',
            'Biomedical Engineering'
        ]
    },
    {
        id: 'science',
        name: 'School of Sciences',
        icon: 'fas fa-flask',
        fields: [
            'Environmental Science',
            'Biotechnology',
            'Agriculture'
        ]
    },
    {
        id: 'business',
        name: 'School of Business',
        icon: 'fas fa-briefcase',
        fields: [
            'Business Administration'
        ]
    },
    {
        id: 'arts',
        name: 'School of Arts & Design',
        icon: 'fas fa-palette',
        fields: [
            'Architecture',
            'Fashion Design'
        ]
    }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderSchools('all');
    setupCategoryButtons();
    setupLoginForm();
    setupSuggestionBox();
    loadSuggestions();
});

// Render schools based on category
function renderSchools(category) {
    const schoolsGrid = document.getElementById('schoolsGrid');
    schoolsGrid.innerHTML = '';

    const schoolsToShow = category === 'all' ? schools : schools.filter(school => school.id === category);

    schoolsToShow.forEach(school => {
        const schoolCard = document.createElement('div');
        schoolCard.className = 'school-card';
        
        const matchingFields = educationalFields.filter(field => 
            school.fields.includes(field.name.toLowerCase()) || 
            school.fields.includes(field.name)
        );
        
        schoolCard.innerHTML = `
            <div class="school-header">
                <i class="${school.icon}"></i>
                <h3>${school.name}</h3>
            </div>
            <ul class="fields-list">
                ${matchingFields.map(field => `
                    <li class="field-item" data-field-name="${field.name}">
                        <i class="${field.icon}"></i>
                        <span>${field.name}</span>
                        <div class="progress-indicator">
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${field.progress}%"></div>
                            </div>
                            <span class="progress-text">${field.progress}%</span>
                        </div>
                    </li>
                `).join('')}
            </ul>
        `;
        
        // Add click event listeners to field items
        const fieldItems = schoolCard.querySelectorAll('.field-item');
        fieldItems.forEach(item => {
            item.addEventListener('click', () => {
                const fieldName = item.dataset.fieldName;
                const field = educationalFields.find(f => f.name === fieldName);
                if (field) {
                    showRoadmap(field);
                }
            });
        });
        
        schoolsGrid.appendChild(schoolCard);
    });
}

// Setup category button listeners
function setupCategoryButtons() {
    const buttons = document.querySelectorAll('.category-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const category = button.dataset.category;
            renderSchools(category);
        });
    });
}

function showRoadmap(field) {
    // Create modal for roadmap
    const modal = document.createElement('div');
    modal.className = 'modal roadmap-modal active';
    
    modal.innerHTML = `
        <div class="modal-content roadmap-content">
            <div class="modal-header">
                <h2><i class="${field.icon}"></i> ${field.name} Roadmap</h2>
                <button class="close-btn">&times;</button>
            </div>
            <div class="roadmap-body">
                ${field.roadmap.semesters.map((semester, index) => `
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
                                <h5><i class="fas fa-project-diagram"></i> Projects:</h5>
                                <ul>
                                    ${semester.projects.map(project => `<li>${project}</li>`).join('')}
                                </ul>
                            </div>
                            <div class="resources">
                                <h5><i class="fas fa-link"></i> Resources:</h5>
                                <ul>
                                    ${semester.resources.map(resource => `<li>${resource}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Close button functionality
    const closeBtn = modal.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
        modal.remove();
    });

    // Click outside to close
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Login modal functions
const loginBtn = document.getElementById('loginBtn');
const modal = document.getElementById('loginModal');

loginBtn.addEventListener('click', () => {
    modal.classList.add('active');
});

function closeLoginModal() {
    modal.classList.remove('active');
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeLoginModal();
    }
});

// Setup login form
function setupLoginForm() {
    const form = document.querySelector('.login-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const remember = document.getElementById('remember').checked;
        
        // Here you would typically handle the login logic
        console.log('Login attempt:', { email, password, remember });
        
        closeLoginModal();
    });
}

// Setup suggestion box
function setupSuggestionBox() {
    const form = document.getElementById('suggestionForm');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('suggestorName').value;
        const email = document.getElementById('suggestorEmail').value;
        const suggestion = document.getElementById('suggestionText').value;
        
        // Create new suggestion
        const newSuggestion = {
            id: Date.now(),
            name,
            email,
            suggestion,
            date: new Date().toLocaleDateString()
        };
        
        // Get existing suggestions from localStorage
        const suggestions = JSON.parse(localStorage.getItem('suggestions') || '[]');
        suggestions.push(newSuggestion);
        localStorage.setItem('suggestions', JSON.stringify(suggestions));
        
        // Clear form
        form.reset();
        
        // Reload suggestions
        loadSuggestions();
    });
}

function loadSuggestions() {
    const suggestionsList = document.getElementById('suggestionsList');
    if (!suggestionsList) return;
    
    const suggestions = JSON.parse(localStorage.getItem('suggestions') || '[]');
    
    let suggestionsHTML = '';
    suggestions.forEach(suggestion => {
        suggestionsHTML += `
            <div class="suggestion-card">
                <div class="suggestion-header">
                    <span class="suggester-name">${suggestion.name}</span>
                    <span class="suggestion-date">${suggestion.date}</span>
                </div>
                <p class="suggestion-text">${suggestion.suggestion}</p>
            </div>
        `;
    });
    
    suggestionsList.innerHTML = suggestionsHTML || '<p class="no-suggestions">No suggestions yet. Be the first to suggest!</p>';
}

// Update progress bars
function updateProgress() {
    const progressBars = document.getElementById('progressBars');
    if (!progressBars) return;

    let progressHTML = '';
    schools.forEach(school => {
        const progress = Math.floor(Math.random() * 100); // Simulated progress
        progressHTML += `
            <div class="progress-item">
                <div class="progress-label">
                    <span>${school.name}</span>
                    <span>${progress}%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${progress}%"></div>
                </div>
            </div>
        `;
    });

    progressBars.innerHTML = progressHTML;
}
