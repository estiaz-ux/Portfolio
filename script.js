// Mobile Menu Toggle
document.getElementById('mobile-menu-btn').addEventListener('click', function () {
  const menu = document.getElementById('mobile-menu');
  const icon = this.querySelector('i');
  menu.classList.toggle('hidden');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
});

// Contact Form (Demo Alert)
document.getElementById('contact-form')?.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you! Your message has been sent.');
  this.reset();
});

// Smooth reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('section > div').forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(40px)';
  el.style.transition = 'all 0.8s ease-out';
  observer.observe(el);
});