document.addEventListener('DOMContentLoaded', () => {
    const projectItems = document.querySelectorAll('.project-item');

    projectItems.forEach(item => {
        item.addEventListener('click', () => {
            window.location.href = item.getAttribute('data-url');
        });
    });

    const filterSelect = document.getElementById('filter');
    const sortSelect = document.getElementById('sort');
    let projects = Array.from(projectItems);

    filterSelect.addEventListener('change', () => {
        const filterValue = filterSelect.value;
        projects.forEach(project => {
            const isOngoing = project.classList.contains('ongoing');
            const isCompleted = project.classList.contains('completed');

            if (filterValue === 'all') {
                project.style.display = 'block';
            } else if (filterValue === 'ongoing' && !isOngoing) {
                project.style.display = 'none';
            } else if (filterValue === 'completed' && !isCompleted) {
                project.style.display = 'none';
            } else {
                project.style.display = 'block';
            }
        });
    });

    sortSelect.addEventListener('change', () => {
        const sortValue = sortSelect.value;
        projects.sort((a, b) => {
            const aText = a.querySelector('h3').textContent;
            const bText = b.querySelector('h3').textContent;

            if (sortValue === 'name') {
                return aText.localeCompare(bText);
            } else if (sortValue === 'impact') {
                const aImpact = parseInt(a.querySelector('.impact').textContent.split(': ')[1]);
                const bImpact = parseInt(b.querySelector('.impact').textContent.split(': ')[1]);
                return bImpact - aImpact;
            }
        });

        const grid = document.querySelector('.projects-grid');
        projects.forEach(project => grid.appendChild(project));
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    document.querySelectorAll('.project-item').forEach(item => {
        observer.observe(item);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const projectItems = Array.from(document.querySelectorAll('.project-item'));

    projectItems.forEach(item => {
        item.addEventListener('click', () => {
            window.location.href = item.getAttribute('data-url');
        });
    });

    const filterSelect = document.getElementById('filter');
    const sortSelect = document.getElementById('sort');

    filterSelect.addEventListener('change', () => {
        const filterValue = filterSelect.value;
        projectItems.forEach(project => {
            const isOngoing = project.classList.contains('ongoing');
            const isCompleted = project.classList.contains('completed');

            if (filterValue === 'all') {
                project.style.display = 'block';
            } else if (filterValue === 'ongoing' && !isOngoing) {
                project.style.display = 'none';
            } else if (filterValue === 'completed' && !isCompleted) {
                project.style.display = 'none';
            } else {
                project.style.display = 'block';
            }
        });
    });

    sortSelect.addEventListener('change', () => {
        const sortValue = sortSelect.value;
        projectItems.sort((a, b) => {
            if (sortValue === 'date') {
                const aDate = new Date(a.getAttribute('data-date'));
                const bDate = new Date(b.getAttribute('data-date'));
                return bDate - aDate; 
            } else if (sortValue === 'impact') {
                const aImpact = parseInt(a.querySelector('.impact').textContent.split(': ')[1]);
                const bImpact = parseInt(b.querySelector('.impact').textContent.split(': ')[1]);
                return bImpact - aImpact;
            }
        });

        const grid = document.querySelector('.projects-grid');
        projectItems.forEach(project => grid.appendChild(project));
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.project-item').forEach(item => observer.observe(item));
});

document.addEventListener('DOMContentLoaded', () => {
    const projectItems = Array.from(document.querySelectorAll('.project-item'));

    // Function to sort projects by date
    function sortByDate() {
        projectItems.sort((a, b) => {
            const aDate = new Date(a.getAttribute('data-date'));
            const bDate = new Date(b.getAttribute('data-date'));
            return bDate - aDate; // Descending order
        });

        const grid = document.querySelector('.projects-grid');
        projectItems.forEach(project => grid.appendChild(project));
    }

    // Initial sort by date
    sortByDate();

    // Event listeners for filter and sort
    const filterSelect = document.getElementById('filter');
    const sortSelect = document.getElementById('sort');

    filterSelect.addEventListener('change', () => {
        const filterValue = filterSelect.value;
        projectItems.forEach(project => {
            const isOngoing = project.classList.contains('ongoing');
            const isCompleted = project.classList.contains('completed');

            if (filterValue === 'all') {
                project.style.display = 'block';
            } else if (filterValue === 'ongoing' && !isOngoing) {
                project.style.display = 'none';
            } else if (filterValue === 'completed' && !isCompleted) {
                project.style.display = 'none';
            } else {
                project.style.display = 'block';
            }
        });
    });

    sortSelect.addEventListener('change', () => {
        const sortValue = sortSelect.value;
        if (sortValue === 'date') {
            sortByDate();
        } else if (sortValue === 'impact') {
            projectItems.sort((a, b) => {
                const aImpact = parseInt(a.querySelector('.impact').textContent.split(': ')[1]);
                const bImpact = parseInt(b.querySelector('.impact').textContent.split(': ')[1]);
                return bImpact - aImpact;
            });

            const grid = document.querySelector('.projects-grid');
            projectItems.forEach(project => grid.appendChild(project));
        }
    });

    // Animate on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.project-item').forEach(item => observer.observe(item));
});

document.addEventListener('DOMContentLoaded', () => {
    const projectItems = Array.from(document.querySelectorAll('.project-item'));

    projectItems.forEach(item => {
        item.addEventListener('click', () => {
            window.location.href = item.getAttribute('data-url');
        });
    });

    const filterSelect = document.getElementById('filter');
    const sortSelect = document.getElementById('sort');

    filterSelect.addEventListener('change', () => {
        const filterValue = filterSelect.value;
        projectItems.forEach(project => {
            const isOngoing = project.classList.contains('ongoing');
            const isCompleted = project.classList.contains('completed');

            if (filterValue === 'all') {
                project.style.display = 'block';
            } else if (filterValue === 'ongoing' && !isOngoing) {
                project.style.display = 'none';
            } else if (filterValue === 'completed' && !isCompleted) {
                project.style.display = 'none';
            } else {
                project.style.display = 'block';
            }
        });
    });

    sortSelect.addEventListener('change', () => {
        const sortValue = sortSelect.value;
        projectItems.sort((a, b) => {
            if (sortValue === 'date') {
                const aDate = new Date(a.getAttribute('data-date'));
                const bDate = new Date(b.getAttribute('data-date'));
                return bDate - aDate; // Descending order
            } else if (sortValue === 'impact') {
                const aImpact = parseInt(a.querySelector('.impact').textContent.split(': ')[1]);
                const bImpact = parseInt(b.querySelector('.impact').textContent.split(': ')[1]);
                return bImpact - aImpact;
            }
        });

        const grid = document.querySelector('.projects-grid');
        projectItems.forEach(project => grid.appendChild(project));
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.project-item').forEach(item => observer.observe(item));
});

document.addEventListener('DOMContentLoaded', () => {
    const projectItems = Array.from(document.querySelectorAll('.project-item'));

    // Function to sort projects by date
    function sortByDate() {
        projectItems.sort((a, b) => {
            const aDate = new Date(a.getAttribute('data-date'));
            const bDate = new Date(b.getAttribute('data-date'));
            return bDate - aDate; // Descending order
        });

        const grid = document.querySelector('.projects-grid');
        projectItems.forEach(project => grid.appendChild(project));
    }

    // Initial sort by date
    sortByDate();

    // Event listeners for filter and sort
    const filterSelect = document.getElementById('filter');
    const sortSelect = document.getElementById('sort');

    filterSelect.addEventListener('change', () => {
        const filterValue = filterSelect.value;
        projectItems.forEach(project => {
            const isOngoing = project.classList.contains('ongoing');
            const isCompleted = project.classList.contains('completed');

            if (filterValue === 'all') {
                project.style.display = 'block';
            } else if (filterValue === 'ongoing' && !isOngoing) {
                project.style.display = 'none';
            } else if (filterValue === 'completed' && !isCompleted) {
                project.style.display = 'none';
            } else {
                project.style.display = 'block';
            }
        });
    });

    sortSelect.addEventListener('change', () => {
        const sortValue = sortSelect.value;
        if (sortValue === 'date') {
            sortByDate();
        } else if (sortValue === 'impact') {
            projectItems.sort((a, b) => {
                const aImpact = parseInt(a.querySelector('.impact').textContent.split(': ')[1]);
                const bImpact = parseInt(b.querySelector('.impact').textContent.split(': ')[1]);
                return bImpact - aImpact;
            });

            const grid = document.querySelector('.projects-grid');
            projectItems.forEach(project => grid.appendChild(project));
        }
    });

    // Animate on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.project-item').forEach(item => observer.observe(item));
});

document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        { name: 'Community Garden', startDate: '2023-06-01', status: 'Completed', description: 'A community-driven garden project.', impact: '500 people helped' },
        { name: 'Seed Bank', startDate: '2023-04-15', status: 'Ongoing', description: 'A project to establish a local seed bank.', impact: '200 families reached' },
        { name: 'Food Relief', startDate: '2023-08-20', status: 'Completed', description: 'Providing food relief to underserved communities.', impact: '2,000 meals served' },
        { name: 'School Lunch', startDate: '2023-05-10', status: 'Ongoing', description: 'Ensuring nutritious school lunches for children.', impact: '1,000 students fed' },
        { name: 'Food Waste Reduction', startDate: '2023-03-30', status: 'Completed', description: 'Reducing food waste through various initiatives.', impact: '30,000 lbs of food waste reduced' },
        { name: 'Food Recovery Network', startDate: '2023-07-25', status: 'Completed', description: 'Network for recovering excess food.', impact: '1,500 lbs of food recovered' },
        { name: 'New Project', startDate: '2024-01-01', status: 'Ongoing', description: 'A new project starting in 2024.', impact: 'Not yet available' } // New ongoing project
    ];

    // Function to format date for sorting
    function formatDate(dateStr) {
        return new Date(dateStr);
    }

    // Sort projects by start date in descending order
    projects.sort((a, b) => formatDate(b.startDate) - formatDate(a.startDate));

    const projectsContainer = document.getElementById('projects-container');

    // Display sorted projects
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project-item');
        projectElement.innerHTML = `
            <img src="images/${project.name.toLowerCase().replace(/\s+/g, '-')}.jpg" alt="${project.name}">
            <h3>${project.name}</h3>
            <p><strong>Status:</strong> ${project.status}</p>
            <p><strong>Start Date:</strong> ${project.startDate}</p>
            <p>${project.description}</p>
            <p><strong>Impact:</strong> ${project.impact}</p>
        `;
        projectsContainer.appendChild(projectElement);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        { name: 'Community Garden', startDate: '2023-06-01', status: 'Completed', description: 'A community-driven garden project.', impact: '500 people helped' },
        { name: 'Seed Bank', startDate: '2023-04-15', status: 'Ongoing', description: 'A project to establish a local seed bank.', impact: '200 families reached' },
        { name: 'Food Relief', startDate: '2023-08-20', status: 'Completed', description: 'Providing food relief to underserved communities.', impact: '2,000 meals served' },
        { name: 'School Lunch', startDate: '2023-05-10', status: 'Ongoing', description: 'Ensuring nutritious school lunches for children.', impact: '1,000 students fed' },
        { name: 'Food Waste Reduction', startDate: '2023-03-30', status: 'Completed', description: 'Reducing food waste through various initiatives.', impact: '30,000 lbs of food waste reduced' },
        { name: 'Food Recovery Network', startDate: '2023-07-25', status: 'Completed', description: 'Network for recovering excess food.', impact: '1,500 lbs of food recovered' },
        { name: 'New Project', startDate: '2024-01-01', status: 'Ongoing', description: 'A new project starting in 2024.', impact: 'Not yet available' } // New ongoing project
    ];

    // Function to format date for sorting
    function parseDate(dateStr) {
        return new Date(dateStr);
    }

    // Sort projects by start date in descending order
    projects.sort((a, b) => parseDate(b.startDate) - parseDate(a.startDate));

    const projectsContainer = document.getElementById('projects-container');

    // Display sorted projects
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project-item', 'col-md-4', 'mb-4');
        projectElement.innerHTML = `
            <img src="images/${project.name.toLowerCase().replace(/\s+/g, '-')}.jpg" class="img-fluid rounded" alt="${project.name}">
            <h3>${project.name}</h3>
            <p><strong>Status:</strong> ${project.status}</p>
            <p><strong>Start Date:</strong> ${project.startDate}</p>
            <p>${project.description}</p>
            <p><strong>Impact:</strong> ${project.impact}</p>
        `;
        projectsContainer.appendChild(projectElement);
    });
});
