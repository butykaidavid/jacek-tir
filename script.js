// ===== NAVIGATION SCROLL EFFECT =====
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== MOBILE MENU TOGGLE =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===== SMOOTH SCROLL FOR NAVIGATION LINKS =====
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));
        
        // Add active class to clicked link
        link.classList.add('active');
        
        // Get target section
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== ACTIVE NAVIGATION ON SCROLL =====
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===== ANIMATED COUNTERS FOR STATS =====
const statNumbers = document.querySelectorAll('.stat-number');
let hasAnimated = false;

const animateCounters = () => {
    if (hasAnimated) return;
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                stat.textContent = Math.ceil(current);
                setTimeout(updateCounter, 20);
            } else {
                stat.textContent = target;
            }
        };
        
        updateCounter();
    });
    
    hasAnimated = true;
};

// Trigger counter animation when stats section is visible
const statsSection = document.querySelector('.stats');
if (statsSection) {
    const observerOptions = {
        threshold: 0.5
    };
    
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
            }
        });
    }, observerOptions);
    
    statsObserver.observe(statsSection);
}

// ===== SCROLL TO TOP BUTTON =====
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== CONTACT FORM SUBMISSION =====
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    // Create success message
    const successMessage = document.createElement('div');
    successMessage.style.cssText = `
        position: fixed;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #10b981, #059669);
        color: white;
        padding: 1.5rem 3rem;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        animation: slideDown 0.5s ease-out;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 1rem;
    `;
    successMessage.innerHTML = `
        <i class="fas fa-check-circle" style="font-size: 1.5rem;"></i>
        <span>Köszönjük! Üzenetét sikeresen elküldtük. Hamarosan felvesszük Önnel a kapcsolatot!</span>
    `;
    
    document.body.appendChild(successMessage);
    
    // Clear form
    contactForm.reset();
    
    // Remove message after 5 seconds
    setTimeout(() => {
        successMessage.style.animation = 'slideUp 0.5s ease-out';
        setTimeout(() => {
            successMessage.remove();
        }, 500);
    }, 5000);
});

// Add animations for success message
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(-50px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }
    
    @keyframes slideUp {
        from {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
        to {
            opacity: 0;
            transform: translateX(-50%) translateY(-50px);
        }
    }
`;
document.head.appendChild(style);

// ===== NEWSLETTER FORM =====
const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = newsletterForm.querySelector('input[type="email"]').value;
        
        // Create success message
        const successMessage = document.createElement('div');
        successMessage.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: linear-gradient(135deg, #10b981, #059669);
            color: white;
            padding: 1rem 2rem;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            z-index: 10000;
            animation: fadeIn 0.5s ease-out;
            font-weight: 600;
        `;
        successMessage.innerHTML = `
            <i class="fas fa-check-circle"></i> Sikeresen feliratkozott a hírlevelünkre!
        `;
        
        document.body.appendChild(successMessage);
        
        // Clear form
        newsletterForm.reset();
        
        // Remove message after 4 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 4000);
    });
}

// ===== GALLERY LIGHTBOX EFFECT =====
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        // Add a subtle click animation
        item.style.transform = 'scale(0.95)';
        setTimeout(() => {
            item.style.transform = '';
        }, 200);
    });
});

// ===== PARALLAX EFFECT ON HERO =====
const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    if (hero && scrollPosition < hero.offsetHeight) {
        hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    }
});

// ===== FADE IN ANIMATIONS ON SCROLL =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add fade-in effect to cards
const cards = document.querySelectorAll('.feature-card, .service-card, .pricing-card, .contact-card');
cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    fadeInObserver.observe(card);
});

// ===== TYPING EFFECT FOR HERO TITLE (Optional Enhancement) =====
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const text = heroTitle.innerHTML;
    heroTitle.innerHTML = '';
    heroTitle.style.opacity = '1';
    
    let index = 0;
    const typeWriter = () => {
        if (index < text.length) {
            heroTitle.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 50);
        }
    };
    
    // Uncomment to enable typing effect
    // setTimeout(typeWriter, 500);
}

// ===== INTERACTIVE PRICING CARDS =====
const pricingCards = document.querySelectorAll('.pricing-card');

pricingCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.zIndex = '10';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.zIndex = '1';
    });
});

// ===== SERVICE CARDS TILT EFFECT =====
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// ===== FEATURE CARDS HOVER EFFECT =====
const featureCards = document.querySelectorAll('.feature-card');

featureCards.forEach(card => {
    const icon = card.querySelector('.feature-icon');
    
    card.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.1) rotate(5deg)';
        icon.style.transition = 'all 0.3s ease';
    });
    
    card.addEventListener('mouseleave', () => {
        icon.style.transform = '';
    });
});

// ===== LOADING ANIMATION =====
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ===== SCROLL INDICATOR IN HERO =====
const scrollIndicator = document.querySelector('.scroll-indicator');

if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        const featuresSection = document.querySelector('.features');
        if (featuresSection) {
            featuresSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// ===== PREVENT FORM DOUBLE SUBMISSION =====
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', function() {
        const submitBtn = this.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.disabled = true;
            setTimeout(() => {
                submitBtn.disabled = false;
            }, 3000);
        }
    });
});

// ===== LOG INITIALIZATION =====
console.log('%c🚚 Kamion Parkoló Weboldal Betöltve! ', 'background: #2563eb; color: white; padding: 10px 20px; font-size: 16px; font-weight: bold; border-radius: 5px;');
console.log('%cMinden funkció sikeresen inicializálva.', 'color: #10b981; font-size: 12px;');
