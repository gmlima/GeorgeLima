// Load Content on Page Load
document.addEventListener('DOMContentLoaded', () => {
    loadPortfolioContent();
    initializeEffects();
});

function loadPortfolioContent() {
    // Helper: Safe set text
    const setText = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = text; // Using innerHTML to allow basic tags like <br> or <strong>
    };

    // Helper: Safe set src
    const setSrc = (id, src) => {
        const el = document.getElementById(id);
        if (el) el.src = src;
    };

    const d = portfolioData; // shorthand

    // --- Header ---
    setText('nav-logo', d.navbar.logo);
    const navList = document.getElementById('nav-links');
    d.navbar.links.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.href;
        a.innerText = link.text;
        if (link.class) a.className = link.class;
        li.appendChild(a);
        navList.appendChild(li);
    });

    // --- Hero ---
    setText('hero-eyebrow', d.hero.eyebrow);
    setText('hero-name', d.hero.name);
    setText('hero-bio', d.hero.bio);
    setSrc('hero-image', d.hero.image);

    const heroBtns = document.getElementById('hero-buttons');
    d.hero.buttons.forEach(btn => {
        const a = document.createElement('a');
        a.href = btn.href;
        a.className = btn.class;
        a.innerHTML = btn.text; // innerHTML allows icons
        if (btn.target) a.target = btn.target;
        if (btn.icon) {
            a.innerHTML += ` <i data-lucide="${btn.icon}"></i>`;
        }
        heroBtns.appendChild(a);
    });

    // --- Stats ---
    const statsGrid = document.getElementById('stats-grid');
    d.stats.forEach(stat => {
        const div = document.createElement('div');
        div.className = 'stat-item';
        div.innerHTML = `
            <span class="stat-number">${stat.number}</span>
            <span class="stat-label">${stat.label}</span>
        `;
        statsGrid.appendChild(div);
    });

    // --- About ---
    setText('about-title', d.about.title);
    const aboutTextContainer = document.getElementById('about-text-content');
    [d.about.text_1, d.about.text_2].forEach(pText => {
        const p = document.createElement('p');
        p.innerHTML = pText;
        aboutTextContainer.appendChild(p);
    });

    const eduList = document.getElementById('education-list');
    d.about.education.forEach(edu => {
        const div = document.createElement('div');
        div.className = 'edu-item';
        div.innerHTML = `
            <span class="year">${edu.year}</span>
            <div class="edu-details">
                <strong>${edu.title}</strong>
                <span>${edu.institution}</span>
            </div>
        `;
        eduList.appendChild(div);
    });

    const interestsList = document.getElementById('interests-list');
    d.about.interests.forEach(int => {
        const li = document.createElement('li');
        li.innerHTML = `
            <i data-lucide="${int.icon}"></i>
            <span>${int.text}</span>
        `;
        interestsList.appendChild(li);
    });

    // --- Experience ---
    setText('experience-title', d.experience.title);
    const expList = document.getElementById('experience-list');
    d.experience.timeline.forEach(item => {
        const div = document.createElement('div');
        div.className = 'timeline-item';
        div.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-date">${item.period}</div>
            <div class="timeline-content">
                <h3>${item.role}</h3>
                <span class="institution">${item.institution}</span>
                <p>${item.description}</p>
            </div>
        `;
        expList.appendChild(div);
    });

    // --- Research ---
    setText('research-title', d.research.title);
    const researchGrid = document.getElementById('projects-grid');
    d.research.projects.forEach(proj => {
        const div = document.createElement('div');
        div.className = 'project-card';
        div.innerHTML = `
            <div class="card-header">
                <h3>${proj.title}</h3>
                <span class="badge">${proj.period}</span>
            </div>
            <p>${proj.description}</p>
            <div class="tags">
                ${proj.tags.map(tag => `<span>${tag}</span>`).join('')}
            </div>
        `;
        researchGrid.appendChild(div);
    });

    // --- Publications ---
    setText('publications-title', d.publications.title);
    const pubsList = document.getElementById('publications-list');
    d.publications.items.forEach(pub => {
        const div = document.createElement('div');
        div.className = 'pub-item';
        div.innerHTML = `
            <div class="pub-year">${pub.year}</div>
            <div class="pub-info">
                <h4>${pub.title}</h4>
                <p>${pub.details}</p>
            </div>
        `;
        pubsList.appendChild(div);
    });

    const pubsLinks = document.getElementById('publications-links');
    d.publications.links.forEach(link => {
        const a = document.createElement('a');
        a.href = link.href;
        a.target = "_blank";
        a.className = "btn-text";
        a.innerHTML = link.text;
        pubsLinks.appendChild(a);
    });

    // --- Contact ---
    setText('contact-title', d.contact.title);
    setText('contact-description', d.contact.description);

    const contactItems = document.getElementById('contact-items');
    d.contact.items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'c-item';
        div.innerHTML = `
            <i data-lucide="${item.icon}"></i>
            <p>${item.text}</p>
        `;
        contactItems.appendChild(div);
    });

    setText('footer-text', d.contact.footer);

    // Initialize Icons after DOM injection
    lucide.createIcons();
}

// --- Original Interaction Logic (Preserved) ---
function initializeEffects() {
    // Mobile Menu
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Toggle icon
            const icon = navLinks.classList.contains('active') ? 'x' : 'menu';
            // We need to re-render the icon or simply toggle visibility if we had two icons
            // For simplicity with Lucide, we can just re-inject the svg or handle logic.
            // But since we are rebuilding dom, let's keep it simple.
        });
    }

    // Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.5)";
        } else {
            navbar.style.boxShadow = "none";
        }
    });

    // Cursor Glow Effect
    const glow = document.querySelector('.cursor-glow');
    if (glow) {
        document.addEventListener('mousemove', (e) => {
            glow.style.left = e.clientX + 'px';
            glow.style.top = e.clientY + 'px';
        });
    }
}
