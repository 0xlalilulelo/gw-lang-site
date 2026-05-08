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
});
