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
