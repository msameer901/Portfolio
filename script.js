// Typed animation
var typed = new Typed('#element', {
  strings: [
    'Circuit Designer', 'PCB Designer', 'Cybersecurity Enthusiast',
    'MATLAB + Verilog Programmer'
  ],
  typeSpeed: 50,
  loop: true
});

// Mobile menu open/close
const menu = document.getElementById('mobile-menu');
const openBtn = document.getElementById('menu-toggle');
const closeBtn = document.getElementById('close-btn');

openBtn.addEventListener('click', () => {
  menu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('active');
});

// Close mobile menu when a nav link is clicked
menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({behavior: 'smooth'});
    }
  });
});

// Read more toggle
document.querySelectorAll('.read-more').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    const desc = this.previousElementSibling;
    desc.classList.toggle('expanded');
    this.innerText =
        desc.classList.contains('expanded') ? 'Show Less' : 'Read More';
  });
});

// Contact form
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Message Sent Successfully!');
});
