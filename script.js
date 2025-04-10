function toggleMenu(){
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburg-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

var typed = new Typed(".text", {
    strings: ["Student","Web Developer", "Front - end Developer","Full - stack Developer"],
    typeSpeed: 100,
    backSpeed: 100, // Corrected property name
    backDelay: 1000,
    loop: true
});

/* ------------ theme colors -------------*/


//theme changer
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    
    // Save the current theme to localStorage
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark-theme');
    } else {
        localStorage.removeItem('theme');
    }
});


// Select all sections with an ID for scroll active functionality
const sections = document.querySelectorAll('section[id]');

// Function to add active class to navbar links based on scroll position
const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.navbar a[href*=' + sectionId + ']');

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link');
        } else {
            sectionsClass.classList.remove('active-link');
        }
    });
};

// Add scroll event listener
window.addEventListener('scroll', scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: true
});

// Reveal animations for various sections
sr.reveal('.about, .section-container', { delay: 200 });
sr.reveal('.projects, .experience-details-container, .article-container', { delay: 400 });
sr.reveal('.skill-card, .progress-bar', { interval: 200 });
sr.reveal('.achievement', { interval: 200 });
sr.reveal('.contact, .contact-info-upper-container', { interval: 200 });
