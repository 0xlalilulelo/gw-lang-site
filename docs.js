import './style.css';
import { initLayout } from './doc-layout.js';

document.addEventListener('DOMContentLoaded', () => {
    initLayout();
    
    // Simple intersection observer for reveal animations
    const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('in');
                io.unobserve(e.target);
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));

    // Observer for "In This Section" sidebar links
    const sections = document.querySelectorAll('.doc-content section');
    const sidebarLinks = document.querySelectorAll('.doc-sidebar ul li a');
    
    if (sections.length > 0 && sidebarLinks.length > 0) {
        const sectionIo = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    sidebarLinks.forEach(link => link.classList.remove('active'));
                    const activeLink = document.querySelector(`.doc-sidebar ul li a[href="#${entry.target.id}"]`);
                    if (activeLink) activeLink.classList.add('active');
                }
            });
        }, { rootMargin: '-20% 0px -80% 0px' });
        
        sections.forEach(section => sectionIo.observe(section));
    }
});
