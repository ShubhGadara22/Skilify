:root {
  --primary-color: #0077ff;
  --accent-color: #00c18d;
  --background-color: #181a20;
  --card-bg: #23262f;
  --text-color: #ececec;
  --error-color: #f77;
}

body {
  font-family: Arial, sans-serif;
  background: var(--background-color);
  color: var(--text-color);
  margin: 0;
  padding: 0;
}

nav {
  background: var(--card-bg);
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
}

/* Navigation logo */
nav .logo {
  font-weight: bold;
  font-size: 1.5rem;
  color: var(--primary-color);
}

/* Navigation menu */
nav ul {
  display: flex;
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
}

nav ul li a {
  color: var(--text-color);
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  transition: color 0.3s ease;
}

nav ul li a:hover {
  color: var(--accent-color);
}

/* Login / Logout buttons */
#loginBtn,
#logoutBtn {
  background: var(--accent-color);
  border: none;
  color: white;
  padding: 8px 18px;
  border-radius: 20px;
  cursor: pointer;
  transition: background 0.3s ease;
  font-size: 1rem;
  margin-left: 8px;
}

#loginBtn:hover,
#logoutBtn:hover {
  background: var(--primary-color);
}

.hidden {
  display: none;
}

.container {
  max-width: 900px;
  margin: 40px auto;
  padding: 0 15px;
  min-height: 400px;
}

/* Skill cards */
.skill-card {
  background: var(--card-bg);
  border-radius: 12px;
  padding: 18px 22px;
  margin: 18px 0;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.skill-card:hover {
  transform: translateY(-4px) scale(1.02);
}

.skill-bar-bg {
  background: #22242a;
  border-radius: 8px;
  height: 16px;
  margin: 10px 0 0 0;
  width: 80%;
  position: relative;
}

.skill-bar {
  position: absolute;
  height: 100%;
  border-radius: 8px;
  background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
  transition: width 0.7s ease-in-out;
}

.skill-level {
  font-size: 0.95rem;
  margin-top: 2px;
  color: var(--accent-color);
}

/* Buttons inside cards */
button.track-btn {
  background: var(--primary-color);
  color: #fff;
  border: none;
  padding: 6px 14px;
  border-radius: 8px;
  cursor: pointer;
  float: right;
  margin-left: 12px;
  transition: background 0.3s ease;
}

button.track-btn:hover {
  background: var(--accent-color);
}

/* Login Modal */
#loginModal {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

#loginModal.hidden {
  display: none;
}

#loginModal .modal-content {
  background: var(--card-bg);
  padding: 30px 40px;
  border-radius: 12px;
  width: 320px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
  position: relative;
  box-sizing: border-box;
}

#loginModal input[type=email],
#loginModal input[type=password] {
  width: 100%;
  padding: 10px;
  margin: 12px 0;
  border-radius: 8px;
  border: none;
  background: var(--background-color);
  color: var(--text-color);
  font-size: 1rem;
  box-sizing: border-box;
  outline-offset: 2px;
  outline-color: var(--primary-color);
}

#loginModal button {
  width: 100%;
  background: var(--primary-color);
  border: none;
  padding: 10px;
  color: white;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 10px;
  transition: background 0.3s ease;
}

#loginModal button:hover {
  background: var(--accent-color);
}

/* Modal close button */
#loginModal .close {
  position: absolute;
  top: 8px;
  right: 14px;
  font-size: 1.7rem;
  color: var(--text-color);
  cursor: pointer;
  user-select: none;
}

/* Error messages */
.error-msg {
  color: var(--error-color);
  font-size: 0.9rem;
  margin-top: 6px;
  min-height: 20px;
}


/* Responsive adjustments */
@media (max-width: 630px) {
  nav ul {
    gap: 12px;
  }
  nav .logo {
    font-size: 1.3rem;
  }
  .container {
    padding: 0 8px;
    margin: 25px auto;
    min-height: 350px;
  }
  #loginModal .modal-content {
    width: 90vw;
    padding: 28px 20px;
  }
}

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize Application
function initializeApp() {
    initMobileNavigation();
    initSkillFiltering();
    initScrollAnimations();
    initSmoothScrolling();
    initSearchFunctionality();
    initThemeToggle();
    initTooltips();
    initLoadingStates();
    console.log('SkillMaster Academy initialized successfully!');
}

// Mobile Navigation
function initMobileNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('nav-open');
        });

        // Close mobile menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('nav-open');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('nav-open');
            }
        });
    }
}

// Skill Filtering System
function initSkillFiltering() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const skillCards = document.querySelectorAll('.skill-card');

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            
            // Update active button
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter skill cards with animation
            skillCards.forEach((card, index) => {
                const cardCategory = card.dataset.category;
                
                if (category === 'all' || cardCategory === category) {
                    setTimeout(() => {
                        card.style.display = 'block';
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        
                        requestAnimationFrame(() => {
                            card.style.transition = 'all 0.3s ease';
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        });
                    }, index * 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Scroll Animations
function initScrollAnimations() {
    const animateElements = document.querySelectorAll('.animate-on-scroll, .feature-card, .skill-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
        observer.observe(element);
    });
}

// Smooth Scrolling
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Search Functionality
function initSearchFunctionality() {
    // Create search overlay
    const searchOverlay = document.createElement('div');
    searchOverlay.className = 'search-overlay hidden';
    searchOverlay.innerHTML = `
        <div class="search-container">
            <div class="search-header">
                <input type="text" class="search-input" placeholder="Search skills, courses, or resources...">
                <button class="search-close">&times;</button>
            </div>
            <div class="search-results">
                <div class="search-suggestion">Try searching for: Python, Web Development, Data Science</div>
            </div>
        </div>
    `;
    document.body.appendChild(searchOverlay);

    // Add search trigger (Ctrl+K or Cmd+K)
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            openSearch();
        }
        if (e.key === 'Escape') {
            closeSearch();
        }
    });

    // Search functionality
    const searchInput = searchOverlay.querySelector('.search-input');
    const searchResults = searchOverlay.querySelector('.search-results');
    const searchClose = searchOverlay.querySelector('.search-close');

    searchClose.addEventListener('click', closeSearch);
    searchOverlay.addEventListener('click', (e) => {
        if (e.target === searchOverlay) closeSearch();
    });

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        if (query.length > 0) {
            performSearch(query, searchResults);
        } else {
            searchResults.innerHTML = '<div class="search-suggestion">Try searching for: Python, Web Development, Data Science</div>';
        }
    });

    function openSearch() {
        searchOverlay.classList.remove('hidden');
        searchInput.focus();
    }

    function closeSearch() {
        searchOverlay.classList.add('hidden');
        searchInput.value = '';
        searchResults.innerHTML = '<div class="search-suggestion">Try searching for: Python, Web Development, Data Science</div>';
    }

    function performSearch(query, resultsContainer) {
        const skills = [
            { name: 'Python Programming', category: 'Programming', url: 'programming.html' },
            { name: 'Web Development', category: 'Technology', url: 'web-development.html' },
            { name: 'Data Science', category: 'Technology', url: 'data-science.html' },
            { name: 'UI/UX Design', category: 'Design', url: 'design.html' },
            { name: 'Digital Marketing', category: 'Marketing', url: 'digital-marketing.html' },
            { name: 'Business & Finance', category: 'Business', url: 'business.html' }
        ];

        const filteredSkills = skills.filter(skill => 
            skill.name.toLowerCase().includes(query) || 
            skill.category.toLowerCase().includes(query)
        );

        if (filteredSkills.length > 0) {
            resultsContainer.innerHTML = filteredSkills.map(skill => `
                <div class="search-result">
                    <a href="${skill.url}" class="search-result-link">
                        <div class="search-result-title">${skill.name}</div>
                        <div class="search-result-category">${skill.category}</div>
                    </a>
                </div>
            `).join('');
        } else {
            resultsContainer.innerHTML = '<div class="search-no-results">No results found. Try a different search term.</div>';
        }
    }
}

// Theme Toggle (Dark/Light Mode)
function initThemeToggle() {
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.setAttribute('aria-label', 'Toggle dark mode');
    
    // Add theme toggle to navigation
    const navActions = document.querySelector('.nav-container');
    if (navActions) {
        navActions.appendChild(themeToggle);
    }

    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', currentTheme);
    updateThemeToggle(currentTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeToggle(newTheme);
    });

    function updateThemeToggle(theme) {
        const icon = themeToggle.querySelector('i');
        if (theme === 'dark') {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    }
}

// Tooltips
function initTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', showTooltip);
        element.addEventListener('mouseleave', hideTooltip);
    });

    function showTooltip(e) {
        const text = e.target.getAttribute('data-tooltip');
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = text;
        document.body.appendChild(tooltip);

        const rect = e.target.getBoundingClientRect();
        tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
        tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
        
        setTimeout(() => tooltip.classList.add('visible'), 10);
    }

    function hideTooltip() {
        const tooltip = document.querySelector('.tooltip');
        if (tooltip) {
            tooltip.remove();
        }
    }
}

// Loading States
function initLoadingStates() {
    const skillButtons = document.querySelectorAll('.skill-btn');
    const ctaButtons = document.querySelectorAll('.btn-primary');

    [...skillButtons, ...ctaButtons].forEach(button => {
        button.addEventListener('click', (e) => {
            if (button.href && !button.href.includes('#')) {
                e.preventDefault();
                
                const originalText = button.textContent;
                button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
                button.style.pointerEvents = 'none';
                
                setTimeout(() => {
                    window.location.href = button.href;
                }, 500);
            }
        });
    });
}

// Scroll Progress Bar
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Newsletter Subscription (Mock)
function initNewsletterSubscription() {
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    
    newsletterForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]').value;
            
            if (email) {
                showNotification('Thank you for subscribing! Welcome to SkillMaster Academy.', 'success');
                form.reset();
            }
        });
    });
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">&times;</button>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => notification.classList.add('show'), 100);
    
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => removeNotification(notification));
    
    setTimeout(() => removeNotification(notification), 5000);
}

function removeNotification(notification) {
    notification.classList.remove('show');
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// Stats Counter Animation
function initStatsAnimation() {
    const stats = document.querySelectorAll('.stat-number');
    
    const animateStats = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalNumber = parseInt(target.textContent.replace(/\D/g, ''));
                const suffix = target.textContent.replace(/[0-9]/g, '');
                
                animateNumber(target, finalNumber, suffix);
                observer.unobserve(target);
            }
        });
    };

    const observer = new IntersectionObserver(animateStats, { threshold: 0.5 });
    stats.forEach(stat => observer.observe(stat));
}

function animateNumber(element, target, suffix) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, 30);
}

// Resource Download Tracking
function initResourceTracking() {
    const downloadLinks = document.querySelectorAll('[data-download]');
    
    downloadLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const resourceName = link.getAttribute('data-download');
            console.log(`Downloaded: ${resourceName}`);
            showNotification(`Started downloading ${resourceName}`, 'success');
        });
    });
}

// Dynamic Content Loading
function loadSkillContent(skillType) {
    const contentContainer = document.getElementById('skill-content');
    if (!contentContainer) return;

    contentContainer.innerHTML = '<div class="loading-skeleton">Loading content...</div>';
    
    // Simulate API call
    setTimeout(() => {
        const content = getSkillContent(skillType);
        contentContainer.innerHTML = content;
        initScrollAnimations(); // Re-initialize animations for new content
    }, 1000);
}

function getSkillContent(skillType) {
    const skillData = {
        programming: {
            title: 'Python Programming Mastery',
            modules: ['Basics', 'OOP', 'Web Frameworks', 'Data Analysis', 'Machine Learning'],
            resources: 25,
            videos: 50,
            courses: 5
        },
        webdev: {
            title: 'Full Stack Web Development',
            modules: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'Databases'],
            resources: 30,
            videos: 75,
            courses: 8
        }
    };

    const data = skillData[skillType] || skillData.programming;
    
    return `
        <div class="skill-detail-content">
            <h2>${data.title}</h2>
            <div class="modules-grid">
                ${data.modules.map(module => `
                    <div class="module-card">
                        <h3>${module}</h3>
                        <p>Comprehensive training module</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Initialize additional features when page loads
document.addEventListener('DOMContentLoaded', () => {
    initScrollProgress();
    initStatsAnimation();
    initNewsletterSubscription();
    initResourceTracking();
});

// PWA Support
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('SW registered'))
            .catch(error => console.log('SW registration failed'));
    });
}

// Performance Monitoring
function trackPagePerformance() {
    window.addEventListener('load', () => {
        const navigationTiming = performance.getEntriesByType('navigation')[0];
        const loadTime = navigationTiming.loadEventEnd - navigationTiming.loadEventStart;
        console.log(`Page load time: ${loadTime}ms`);
    });
}

trackPagePerformance();

// Export functions for use in other modules
window.SkillMaster = {
    showNotification,
    loadSkillContent,
    animateNumber
};