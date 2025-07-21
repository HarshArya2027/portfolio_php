// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const responseDiv = document.getElementById('formResponse');
            
            fetch('process_contact.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                responseDiv.classList.remove('hidden');
                if (data.success) {
                    responseDiv.innerHTML = `
                        <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                            <strong class="font-bold">Success!</strong>
                            <span class="block sm:inline">${data.message}</span>
                        </div>
                    `;
                    contactForm.reset();
                } else {
                    responseDiv.innerHTML = `
                        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                            <strong class="font-bold">Error!</strong>
                            <span class="block sm:inline">${data.message}</span>
                        </div>
                    `;
                }
                
                // Hide message after 5 seconds
                setTimeout(() => {
                    responseDiv.classList.add('hidden');
                }, 5000);
            })
            .catch(error => {
                console.error('Error:', error);
                responseDiv.classList.remove('hidden');
                responseDiv.innerHTML = `
                    <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <strong class="font-bold">Error!</strong>
                        <span class="block sm:inline">There was a problem submitting your form. Please try again.</span>
                    </div>
                `;
            });
        });
    }

    // Project filtering functionality
    const filterButtons = document.querySelectorAll('.project-filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    if (filterButtons.length && projectItems.length) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Update active button
                filterButtons.forEach(btn => {
                    btn.classList.remove('active', 'bg-blue-600', 'text-white');
                    btn.classList.add('bg-gray-200', 'hover:bg-gray-300');
                });
                this.classList.add('active', 'bg-blue-600', 'text-white');
                this.classList.remove('bg-gray-200', 'hover:bg-gray-300');
                
                const filterValue = this.getAttribute('data-filter');
                
                projectItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.classList.add('fade-in');
                        }, 10);
                    } else {
                        item.classList.remove('fade-in');
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });

        // Initialize with "All Projects" selected
        const allProjectsBtn = document.querySelector('.project-filter-btn[data-filter="all"]');
        if (allProjectsBtn) {
            allProjectsBtn.classList.add('active', 'bg-blue-600', 'text-white');
            allProjectsBtn.classList.remove('bg-gray-200', 'hover:bg-gray-300');
        }
    }

    // Project modal functionality
    const projectModal = document.getElementById('projectModal');
    if (projectModal) {
        const closeModal = document.getElementById('closeModal');
        
        // Sample project data (in a real scenario, this might come from a database)
        const projectsData = {
            'secure-ecommerce': {
                title: 'Secure E-Commerce Platform',
                type: 'Web Development',
                image: 'assets/images/ecommerce-project.jpg',
                date: 'June 2023',
                description: 'A full-stack e-commerce platform with implemented cybersecurity measures including CSRF protection, SQL injection prevention, and secure payment processing.',
                features: [
                    'CSRF tokens for all form submissions',
                    'Prepared statements to prevent SQL injection',
                    'Stripe API integration for payments',
                    'Admin dashboard for management',
                    'Responsive Bootstrap design'
                ],
                technologies: ['PHP', 'JavaScript', 'MySQL', 'Bootstrap'],
                github: '#',
                live: '#'
            },
            // Add more projects as needed
        };
        
        // Open modal when "View Details" is clicked
        document.querySelectorAll('.project-item a[href="#"]').forEach(link => {
            if (!link.classList.contains('project-filter-btn')) {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const projectTitle = this.closest('.project-item').querySelector('h3').textContent;
                    const projectId = projectTitle.toLowerCase().replace(/\s+/g, '-');
                    
                    const project = projectsData[projectId] || {
                        title: projectTitle,
                        type: this.closest('.project-item').querySelector('span').textContent,
                        image: this.closest('.project-item').querySelector('img').src,
                        date: '2023',
                        description: this.closest('.project-item').querySelector('p').textContent,
                        features: ['Feature 1', 'Feature 2', 'Feature 3'],
                        technologies: Array.from(this.closest('.project-item').querySelectorAll('.flex-wrap span')).map(span => span.textContent),
                        github: '#',
                        live: '#'
                    };
                    
                    // Populate modal
                    document.getElementById('modalTitle').textContent = project.title;
                    document.getElementById('modalImage').src = project.image;
                    document.getElementById('modalImage').alt = project.title;
                    document.getElementById('modalType').textContent = project.type;
                    document.getElementById('modalDate').textContent = project.date;
                    document.getElementById('modalDescription').textContent = project.description;
                    
                    const featuresList = document.getElementById('modalFeatures');
                    featuresList.innerHTML = '';
                    project.features.forEach(feature => {
                        const li = document.createElement('li');
                        li.textContent = feature;
                        featuresList.appendChild(li);
                    });
                    
                    const techContainer = document.getElementById('modalTech');
                    techContainer.innerHTML = '';
                    project.technologies.forEach(tech => {
                        const span = document.createElement('span');
                        span.className = 'px-2 py-1 bg-gray-200 text-gray-800 rounded-full text-xs';
                        span.textContent = tech;
                        techContainer.appendChild(span);
                    });
                    
                    document.getElementById('modalGithub').href = project.github;
                    document.getElementById('modalLive').href = project.live;
                    
                    // Show modal
                    projectModal.classList.remove('hidden');
                    document.body.style.overflow = 'hidden';
                });
            }
        });
        
        // Close modal
        if (closeModal) {
            closeModal.addEventListener('click', function() {
                projectModal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            });
        }
        
        // Close modal when clicking outside
        projectModal.addEventListener('click', function(e) {
            if (e.target === projectModal) {
                projectModal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
        });
    }
});