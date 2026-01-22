// Smooth scrolling for navbar links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetID = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetID);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Contact form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you for contacting TechLeap Institute! We will get back to you soon.');
  contactForm.reset();
});

// Optional: Simple testimonial carousel auto-scroll (horizontal scroll)
const carousel = document.querySelector('.testimonial-carousel');
let scrollAmount = 0;
const scrollStep = 300;
const maxScroll = carousel.scrollWidth - carousel.clientWidth;

function autoScrollTestimonials() {
  scrollAmount += scrollStep;
  if (scrollAmount > maxScroll) scrollAmount = 0;
  carousel.scrollTo({
    left: scrollAmount,
    behavior: 'smooth'
  });
}

// Uncomment to enable automatic scrolling every 4 seconds
// setInterval(autoScrollTestimonials, 4000);
