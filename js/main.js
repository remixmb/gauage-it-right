import { GaugeSlider } from './components/gauge-slider.js';
import { InjectionGuide } from './components/injection-guide.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize gauge slider
    new GaugeSlider('needle-basics');

    // Initialize injection guides
    new InjectionGuide('estrogen-guide', 'estrogen');
    new InjectionGuide('testosterone-guide', 'testosterone');

    // Handle navigation highlighting
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

    // Highlight active nav item based on scroll position
    const highlightNav = () => {
        let scrollPosition = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    // Add scroll event listener
    window.addEventListener('scroll', highlightNav);
    
    // Initialize nav highlighting
    highlightNav();
});