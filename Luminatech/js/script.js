/* --- Navigation Menu Logic --- */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// Show menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Hide menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// Close menu when a link is clicked
const navLinks = document.querySelectorAll('.nav__link');

function closeMenu() {
    navMenu.classList.remove('show-menu');
}
navLinks.forEach(link => link.addEventListener('click', closeMenu));

/* --- Scroll Effects --- */
function windowScrollEffects() {
    const header = document.getElementById('header');
    
    // Header shadow on scroll
    if (window.scrollY >= 80) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }

    // Update active link based on scroll position
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        const activeLink = document.querySelector('.nav__list a[href*=' + sectionId + ']');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            if (activeLink) activeLink.classList.add('active-link');
        } else {
            if (activeLink) activeLink.classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', windowScrollEffects);

/* --- Contact Form Handling --- */
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const submitBtn = contactForm.querySelector('button[type="submit"]');

        // Basic validation check
        if (name.trim() === "" || email.trim() === "") {
            alert("Please fill in all required fields.");
            return;
        }

        // Visual feedback for sending
        const originalBtnText = submitBtn.innerText;
        submitBtn.innerText = 'Sending...';
        submitBtn.disabled = true;

        // Simulate an API call
        setTimeout(() => {
            alert("Thank you! Your message has been sent successfully.");
            submitBtn.innerText = 'Sent!';
            contactForm.reset();
            
            setTimeout(() => {
                submitBtn.innerText = originalBtnText;
                submitBtn.disabled = false;
            }, 3000);
        }, 1500);
    });
}
