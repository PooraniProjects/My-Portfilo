// JavaScript using IntersectionObserver
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                // Optional: unobserve to animate only once
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // trigger when ~10% visible
    });

    items.forEach(el => observer.observe(el));
});
