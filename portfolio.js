// Navigation fluide
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Animation au scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Formulaire de contact
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message envoyé (simulation) !');
    e.target.reset();
});

// Dark Mode (optionnel)
const themeToggle = document.createElement('button');
themeToggle.textContent = '🌙';
themeToggle.style.position = 'fixed';
themeToggle.style.bottom = '20px';
themeToggle.style.right = '20px';
document.body.appendChild(themeToggle);

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀' : '🌙';
});