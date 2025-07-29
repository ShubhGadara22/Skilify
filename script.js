// ===== DOM Elements =====
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const loginModal = document.getElementById('loginModal');
const closeModal = document.getElementById('closeModal');
const submitLogin = document.getElementById('submitLogin');
const mainContent = document.getElementById('mainContent');
const loginError = document.getElementById('loginError');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const loadingSpinner = document.getElementById('loadingSpinner');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');

// Navigation links
const navHome = document.getElementById('navHome');
const navSkills = document.getElementById('navSkills');
const navModules = document.getElementById('navModules');
const navProfile = document.getElementById('navProfile');
const navMenu = document.querySelector('.nav-menu');

// ===== localStorage Keys =====
const USERS_KEY = 'skilltrack_users';
const LOGGED_IN_USER = 'skilltrack_loggedin_user';

// ===== Skill Data =====
const skills = [
  {
    name: "Web Development",
    category: "Tech",
    description: "Build modern, responsive websites and web applications using HTML, CSS, JavaScript, and popular frameworks like React and Vue.",
    resources: [
      {type: "PDF", label: "HTML & CSS Complete Guide", link: "https://www.w3schools.com/html/html_intro.asp"},
      {type: "Video", label: "JavaScript Crash Course 2024", link: "https://youtu.be/hdI2bqOjy3c"},
      {type: "Course", label: "Complete Web Developer Bootcamp", link: "https://www.udemy.com/course/the-web-developer-bootcamp/"}
    ],
    progress: 35,
    modules: [
      {ch: "1", title: "Web Fundamentals", info: "HTML structure, CSS styling, responsive design basics"},
      {ch: "2", title: "JavaScript Essentials", info: "DOM manipulation, events, async programming"},
      {ch: "3", title: "Frontend Frameworks", info: "React, Vue, component-based development"},
      {ch: "4", title: "Backend & Deployment", info: "Node.js, databases, hosting, CI/CD pipelines"}
    ]
  },
  {
    name: "Data Analysis (Python)",
    category: "Tech",
    description: "Master data analysis with Python using pandas, numpy, and visualization libraries to extract insights from complex datasets.",
    resources: [
      {type: "PDF", label: "Pandas Complete Reference", link: "https://pandas.pydata.org/Pandas_Cheat_Sheet.pdf"},
      {type: "Video", label: "Python Data Science Full Course", link: "https://youtu.be/r-uOLxNrNk8"},
      {type: "Course", label: "Data Science Specialization", link: "https://www.coursera.org/specializations/data-science-python"}
    ],
    progress: 60,
    modules: [
      {ch: "1", title: "Python Fundamentals", info: "Syntax, data structures, control flow"},
      {ch: "2", title: "Data Manipulation", info: "Pandas, NumPy, data cleaning techniques"},
      {ch: "3", title: "Data Visualization", info: "Matplotlib, Seaborn, interactive plots"},
      {ch: "4", title: "Statistical Analysis", info: "Statistical methods, hypothesis testing, modeling"}
    ]
  },
  {
    name: "Public Speaking",
    category: "Soft Skill",
    description: "Develop confidence and expertise in public speaking, presentation skills, and effective communication techniques.",
    resources: [
      {type: "PDF", label: "TEDx Speaker Guide", link: "https://www.ted.com/participate/organize-a-local-tedx-event/tedx-organizer-guide"},
      {type: "Video", label: "Advanced Public Speaking Techniques", link: "https://youtu.be/tShavGuo0_E"},
      {type: "Course", label: "Professional Communication Skills", link: "https://www.coursera.org/learn/effective-communication"}
    ],
    progress: 20,
    modules: [
      {ch: "1", title: "Overcoming Fear", info: "Building confidence, managing anxiety"},
      {ch: "2", title: "Speech Structure", info: "Organizing content, storytelling techniques"},
      {ch: "3", title: "Delivery Techniques", info: "Voice control, body language, engagement"}
    ]
  },
  {
    name: "Financial Literacy",
    category: "Life Skill",
    description: "Learn essential financial skills including budgeting, saving, investing, and building long-term wealth.",
    resources: [
      {type: "PDF", label: "Financial Planning Guide", link: "https://rbidocs.rbi.org.in/rdocs/Publications/PDFs/72684.pdf"},
      {type: "Video", label: "Personal Finance Masterclass", link: "https://youtu.be/5QYK6pKw1n8"},
      {type: "Course", label: "Investment Fundamentals", link: "https://www.nseindia.com/financial-education"}
    ],
    progress: 10,
    modules: [
      {ch: "1", title: "Budgeting Basics", info: "Income tracking, expense management, emergency funds"},
      {ch: "2", title: "Banking & Credit", info: "Account types, loans, credit scores"},
      {ch: "3", title: "Investment Strategy", info: "Stocks, bonds, mutual funds, portfolio management"}
    ]
  },
  {
    name: "Digital Marketing",
    category: "Business",
    description: "Master modern digital marketing strategies including SEO, social media, content marketing, and analytics.",
    resources: [
      {type: "PDF", label: "Digital Marketing Handbook", link: "#"},
      {type: "Video", label: "Complete Digital Marketing Course", link: "#"},
      {type: "Course", label: "Google Digital Marketing Course", link: "#"}
    ],
    progress: 45,
    modules: [
      {ch: "1", title: "SEO Fundamentals", info: "Keyword research, on-page optimization"},
      {ch: "2", title: "Social Media Marketing", info: "Platform strategies, content creation"},
      {ch: "3", title: "Analytics & Tracking", info: "Google Analytics, conversion tracking"}
    ]
  }
];

// ===== Helper Functions =====
function getUsers() {
  const data = localStorage.getItem(USERS_KEY);
  return data ? JSON.parse(data) : {};
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function setLoggedIn(email) {
  localStorage.setItem(LOGGED_IN_USER, email);
}

function getLoggedIn() {
  return localStorage.getItem(LOGGED_IN_USER);
}

function clearLoggedIn() {
  localStorage.removeItem(LOGGED_IN_USER);
}

function isValidGmail(email) {
  return typeof email === 'string' && email.trim().toLowerCase().endsWith('@gmail.com');
}

function getUserData(email) {
  const users = getUsers();
  if (!users[email]) return null;
  
  // Initialize user data structure if it doesn't exist
  if (!users[email].data) {
    users[email].data = { 
      progress: skills.map(() => 0),
      joinDate: new Date().toISOString(),
      lastActive: new Date().toISOString()
    };
    saveUsers(users);
  }
  
  return users[email].data;
}

function saveUserData(email, data) {
  const users = getUsers();
  if (!users[email]) return;
  
  data.lastActive = new Date().toISOString();
  users[email].data = data;
  saveUsers(users);
}

function showLoading() {
  loadingSpinner?.classList.remove('hidden');
}

function hideLoading() {
  loadingSpinner?.classList.add('hidden');
}

function updateNavigation(activeNav = 'navHome') {
  // Remove active class from all nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });
  
  // Add active class to current nav
  const activeLink = document.getElementById(activeNav);
  if (activeLink) {
    activeLink.classList.add('active');
  }
}

// ===== Mobile Menu Toggle =====
mobileMenuToggle?.addEventListener('click', () => {
  navMenu?.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.navbar') && navMenu?.classList.contains('active')) {
    navMenu.classList.remove('active');
  }
});

// ===== Authentication Functions =====
function showLoginModal() {
  loginError.textContent = '';
  emailInput.value = '';
  passwordInput.value = '';
  loginModal.classList.remove('hidden');
  emailInput.focus();
}

function hideLoginModal() {
  loginModal.classList.add('hidden');
  loginError.textContent = '';
}

function loginSuccess(email) {
  setLoggedIn(email);
  updateUIForUser(email);
  hideLoginModal();
  loadHome();
  
  // Close mobile menu if open
  navMenu?.classList.remove('active');
}

function updateUIForUser(email) {
  loginBtn.classList.add('hidden');
  logoutBtn.classList.remove('hidden');
  
  const username = email.split('@')[0];
  const logoSpan = document.querySelector('.logo span');
  if (logoSpan) {
    logoSpan.textContent = `SkillTrack (${username})`;
  }
}

function logout() {
  clearLoggedIn();
  loginBtn.classList.remove('hidden');
  logoutBtn.classList.add('hidden');
  
  const logoSpan = document.querySelector('.logo span');
  if (logoSpan) {
    logoSpan.textContent = 'SkillTrack';
  }
  
  loadWelcome();
  updateNavigation('navHome');
}

// ===== Page Loaders =====
function loadWelcome() {
  mainContent.innerHTML = `
    <div class="welcome-hero">
      <h1 class="hero-title">Welcome to SkillTrack</h1>
      <p class="hero-subtitle">Track your learning journey and master new skills</p>
      <div class="hero-features">
        <div class="feature-item">
          <i class="fas fa-chart-line"></i>
          <span>Track Progress</span>
        </div>
        <div class="feature-item">
          <i class="fas fa-graduation-cap"></i>
          <span>Learn Skills</span>
        </div>
        <div class="feature-item">
          <i class="fas fa-trophy"></i>
          <span>Achieve Goals</span>
        </div>
      </div>
    </div>
  `;
}

function loadHome() {
  const email = getLoggedIn();
  if (!email) {
    loadWelcome();
    return;
  }
  
  const userData = getUserData(email);
  if (!userData) {
    loadWelcome();
    return;
  }
  
  // Update skills progress from user data
  skills.forEach((skill, index) => {
    skill.progress = userData.progress[index] || 0;
  });

  const skillsHtml = skills.map((skill, idx) => `
    <div class="skill-card" style="--i: ${idx}">
      <div class="skill-header">
        <div>
          <h3 class="skill-title">${skill.name}</h3>
          <span class="skill-category">${skill.category}</span>
        </div>
      </div>
      <p class="skill-description">${skill.description}</p>
      <div class="skill-progress">
        <div class="skill-progress-header">
          <span class="skill-progress-label">Progress</span>
          <span class="skill-progress-value">${skill.progress}%</span>
        </div>
        <div class="skill-bar-bg">
          <div class="skill-bar" style="width: ${skill.progress}%"></div>
        </div>
      </div>
      <div class="skill-actions">
        <button class="btn btn-primary btn-sm explore-btn" data-idx="${idx}">
          <i class="fas fa-eye"></i>
          Explore
        </button>
      </div>
    </div>
  `).join('');

  mainContent.innerHTML = `
    <div class="text-center mb-4">
      <h2 style="font-size: 2.5rem; font-weight: 800; background: linear-gradient(135deg, var(--primary-color), var(--accent-color)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-bottom: 1rem;">
        Your Learning Journey
      </h2>
      <p style="font-size: 1.125rem; color: var(--text-secondary);">
        Continue building your skills and track your progress
      </p>
    </div>
    <div class="skills-grid">
      ${skillsHtml}
    </div>
  `;

  // Attach event listeners to explore buttons
  document.querySelectorAll('.explore-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-idx'));
      loadSkillDetail(idx);
    });
  });
}

function loadSkills() {
  updateNavigation('navSkills');
  loadHome();
}

function loadModules() {
  updateNavigation('navModules');
  const email = getLoggedIn();
  if (!email) {
    mainContent.innerHTML = `
      <div class="text-center">
        <h2>Please login to view modules</h2>
        <p>Access comprehensive learning modules for all skills</p>
      </div>
    `;
    return;
  }

  const modulesHtml = skills.map(skill => `
    <div class="skill-card">
      <h3 class="skill-title">
        <i class="fas fa-book-open" style="color: var(--primary-color); margin-right: 0.5rem;"></i>
        ${skill.name} Modules
      </h3>
      <div class="modules-grid">
        ${skill.modules.map(mod => `
          <div class="module-card">
            <div class="module-title">Chapter ${mod.ch}: ${mod.title}</div>
            <div class="module-info">${mod.info}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  mainContent.innerHTML = `
    <div class="text-center mb-4">
      <h2 style="font-size: 2.5rem; font-weight: 800; margin-bottom: 1rem;">Learning Modules</h2>
      <p style="font-size: 1.125rem; color: var(--text-secondary);">
        Structured learning paths for all your skills
      </p>
    </div>
    ${modulesHtml}
  `;
}

function loadProfile() {
  updateNavigation('navProfile');
  const email = getLoggedIn();
  if (!email) {
    mainContent.innerHTML = `
      <div class="text-center">
        <h2>Please login to view your profile</h2>
        <p>Track your progress and achievements</p>
      </div>
    `;
    return;
  }

  const userData = getUserData(email);
  const progressSum = userData.progress.reduce((a, b) => a + b, 0);
  const averageProgress = Math.round(progressSum / (userData.progress.length || 1));
  const completedSkills = userData.progress.filter(p => p >= 100).length;
  const inProgressSkills = userData.progress.filter(p => p > 0 && p < 100).length;
  
  const joinDate = userData.joinDate ? new Date(userData.joinDate).toLocaleDateString() : 'Unknown';
  const lastActive = userData.lastActive ? new Date(userData.lastActive).toLocaleDateString() : 'Unknown';

  mainContent.innerHTML = `
    <div class="text-center mb-4">
      <h2 style="font-size: 2.5rem; font-weight: 800; margin-bottom: 1rem;">Your Profile</h2>
      <p style="font-size: 1.125rem; color: var(--text-secondary);">
        Welcome back, ${email}
      </p>
    </div>
    
    <div class="profile-stats">
      <div class="stat-card">
        <div class="stat-value">${averageProgress}%</div>
        <div class="stat-label">Average Progress</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${completedSkills}</div>
        <div class="stat-label">Completed Skills</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${inProgressSkills}</div>
        <div class="stat-label">Skills in Progress</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${skills.length}</div>
        <div class="stat-label">Total Skills</div>
      </div>
    </div>

    <div class="skill-card mt-4">
      <h3 class="skill-title">
        <i class="fas fa-info-circle" style="color: var(--accent-color); margin-right: 0.5rem;"></i>
        Account Information
      </h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-top: 1rem;">
        <div>
          <strong>Email:</strong><br>
          <span style="color: var(--text-secondary);">${email}</span>
        </div>
        <div>
          <strong>Member Since:</strong><br>
          <span style="color: var(--text-secondary);">${joinDate}</span>
        </div>
        <div>
          <strong>Last Active:</strong><br>
          <span style="color: var(--text-secondary);">${lastActive}</span>
        </div>
      </div>
      <div style="margin-top: 1.5rem; padding: 1rem; background: var(--card-bg); border-radius: var(--border-radius); border: 1px solid var(--border-color);">
        <p style="margin: 0; color: var(--text-secondary);">
          <i class="fas fa-database" style="color: var(--primary-color); margin-right: 0.5rem;"></i>
          Your progress data is securely stored locally in your browser and automatically synced across sessions.
        </p>
      </div>
    </div>
  `;
}

function loadSkillDetail(idx) {
  const skill = skills[idx];
  const email = getLoggedIn();
  if (!email) {
    loadWelcome();
    return;
  }

  const userData = getUserData(email);
  skill.progress = userData.progress[idx] || 0;

  const resourcesHtml = skill.resources.map(resource => `
    <li class="resource-item">
      <span class="resource-type">${resource.type}</span>
      <a href="${resource.link}" target="_blank" rel="noopener noreferrer">
        <i class="fas fa-external-link-alt" style="margin-right: 0.5rem; font-size: 0.875rem;"></i>
        ${resource.label}
      </a>
    </li>
  `).join('');

  const modulesHtml = skill.modules.map(mod => `
    <div class="module-card">
      <div class="module-title">Chapter ${mod.ch}: ${mod.title}</div>
      <div class="module-info">${mod.info}</div>
    </div>
  `).join('');

  mainContent.innerHTML = `
    <div class="skill-detail">
      <div class="skill-detail-header">
        <h1 class="skill-detail-title">${skill.name}</h1>
        <p class="skill-detail-category">${skill.category}</p>
      </div>

      <div class="skill-detail-progress">
        <div class="skill-progress-header">
          <span class="skill-progress-label" style="font-size: 1.125rem;">Current Progress</span>
          <span class="skill-progress-value" style="font-size: 1.125rem;">${skill.progress}%</span>
        </div>
        <div class="skill-bar-bg" style="height: 12px; margin-top: 0.75rem;">
          <div class="skill-bar" style="width: ${skill.progress}%"></div>
        </div>
      </div>

      <div class="skill-card">
        <h3 class="skill-title">
          <i class="fas fa-info-circle" style="color: var(--primary-color); margin-right: 0.5rem;"></i>
          About This Skill
        </h3>
        <p style="color: var(--text-secondary); line-height: 1.6; margin: 1rem 0 0 0;">
          ${skill.description}
        </p>
      </div>

      <div class="skill-card">
        <h3 class="skill-title">
          <i class="fas fa-book-open" style="color: var(--accent-color); margin-right: 0.5rem;"></i>
          Learning Modules
        </h3>
        <div class="modules-grid">
          ${modulesHtml}
        </div>
      </div>

      <div class="skill-card">
        <h3 class="skill-title">
          <i class="fas fa-link" style="color: var(--warning-color); margin-right: 0.5rem;"></i>
          Learning Resources
        </h3>
        <ul class="resources-list">
          ${resourcesHtml}
        </ul>
      </div>

      <div class="skill-card">
        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
          <button class="btn btn-primary" id="progressBtn" style="min-width: 160px;">
            <i class="fas fa-plus"></i>
            Add 10% Progress
          </button>
          <button class="btn btn-outline" id="backBtn" style="min-width: 120px;">
            <i class="fas fa-arrow-left"></i>
            Back to Skills
          </button>
        </div>
      </div>
    </div>
  `;

  // Event listeners for skill detail buttons
  document.getElementById('progressBtn').addEventListener('click', () => {
    showLoading();
    setTimeout(() => {
      skill.progress = Math.min(skill.progress + 10, 100);
      userData.progress[idx] = skill.progress;
      saveUserData(email, userData);
      hideLoading();
      loadSkillDetail(idx);
    }, 300);
  });

  document.getElementById('backBtn').addEventListener('click', () => {
    loadHome();
    updateNavigation('navHome');
  });
}

// ===== Event Listeners =====

// Login/Logout
loginBtn?.addEventListener('click', showLoginModal);
logoutBtn?.addEventListener('click', logout);

// Modal controls
closeModal?.addEventListener('click', hideLoginModal);
loginModal?.addEventListener('click', (e) => {
  if (e.target === loginModal) hideLoginModal();
});

// Login form submission
submitLogin?.addEventListener('click', () => {
  const email = emailInput.value.trim().toLowerCase();
  const password = passwordInput.value;

  if (!email || !password) {
    loginError.innerHTML = '<i class="fas fa-exclamation-circle"></i> Please enter email and password.';
    return;
  }
  
  if (!isValidGmail(email)) {
    loginError.innerHTML = '<i class="fas fa-exclamation-circle"></i> Email must end with @gmail.com';
    return;
  }

  showLoading();
  
  // Simulate loading delay for better UX
  setTimeout(() => {
    let users = getUsers();

    if (users[email]) {
      // Check if stored as string (old format) or object (new format)
      const storedPassword = typeof users[email] === 'string' ? users[email] : users[email].password;
      
      if (storedPassword === password) {
        // Convert old format to new format if needed
        if (typeof users[email] === 'string') {
          users[email] = {
            password: users[email],
            data: { progress: skills.map(() => 0) }
          };
          saveUsers(users);
        }
        hideLoading();
        loginSuccess(email);
      } else {
        hideLoading();
        loginError.innerHTML = '<i class="fas fa-exclamation-circle"></i> Incorrect password.';
      }
    } else {
      // New user registration
      users[email] = {
        password: password,
        data: { 
          progress: skills.map(() => 0),
          joinDate: new Date().toISOString(),
          lastActive: new Date().toISOString()
        }
      };
      saveUsers(users);
      hideLoading();
      loginSuccess(email);
    }
  }, 500);
});

// Enter key support for login form
emailInput?.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') passwordInput.focus();
});

passwordInput?.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') submitLogin.click();
});

// Navigation event handlers
navHome?.addEventListener('click', (e) => {
  e.preventDefault();
  updateNavigation('navHome');
  loadHome();
  navMenu?.classList.remove('active');
});

navSkills?.addEventListener('click', (e) => {
  e.preventDefault();
  updateNavigation('navSkills');
  loadSkills();
  navMenu?.classList.remove('active');
});

navModules?.addEventListener('click', (e) => {
  e.preventDefault();
  updateNavigation('navModules');
  loadModules();
  navMenu?.classList.remove('active');
});

navProfile?.addEventListener('click', (e) => {
  e.preventDefault();
  updateNavigation('navProfile');
  loadProfile();
  navMenu?.classList.remove('active');
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  // Close modal on Escape
  if (e.key === 'Escape' && !loginModal?.classList.contains('hidden')) {
    hideLoginModal();
  }
  
  // Navigation shortcuts (when not typing in inputs)
  if (!e.target.matches('input, textarea')) {
    if (e.key === '1') {
      e.preventDefault();
      navHome?.click();
    } else if (e.key === '2') {
      e.preventDefault();
      navSkills?.click();
    } else if (e.key === '3') {
      e.preventDefault();
      navModules?.click();
    } else if (e.key === '4') {
      e.preventDefault();
      navProfile?.click();
    }
  }
});

// ===== Initialize App =====
window.addEventListener('load', () => {
  hideLoading();
  
  const email = getLoggedIn();
  if (email) {
    updateUIForUser(email);
    loadHome();
  } else {
    loadWelcome();
  }
  
  updateNavigation('navHome');
});

// Handle page visibility change to update last active time
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) {
    const email = getLoggedIn();
    if (email) {
      const userData = getUserData(email);
      if (userData) {
        saveUserData(email, userData);
      }
    }
  }
});

// Add smooth scrolling for better UX
window.addEventListener('beforeunload', () => {
  const email = getLoggedIn();
  if (email) {
    const userData = getUserData(email);
    if (userData) {
      saveUserData(email, userData);
    }
  }
});
