// Typed animation
var typed = new Typed('#element', {
  strings: [
    'Circuit Designer', 'PCB Designer', 'Cybersecurity Enthusiast',
    'MATLAB + Verilog Programmer'
  ],
  typeSpeed: 50,
  loop: true
});
// Hamburger toggle
const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
// Smooth scroll (optional enhancement)
document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
// proj desc buttons
document.querySelectorAll('.read-more').forEach(btn => {
  btn.addEventListener('click', function() {
    const desc = this.previousElementSibling;

    desc.classList.toggle('expanded');

    if (desc.classList.contains('expanded')) {
      this.innerText = 'Show Less';
    } else {
      this.innerText = 'Read More';
    }
  });
});
// read more smooth toggle
document.querySelectorAll('.read-more').forEach(btn => {
  btn.addEventListener('click', function() {
    const desc = this.previousElementSibling;

    desc.classList.toggle('expanded');

    if (desc.classList.contains('expanded')) {
      this.innerText = 'Show Less';
    } else {
      this.innerText = 'Read More';
    }
  });
});
document.querySelectorAll('.read-more').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.stopPropagation();

    const desc = this.previousElementSibling;

    desc.classList.toggle('expanded');

    if (desc.classList.contains('expanded')) {
      this.innerText = 'Show Less';
    } else {
      this.innerText = 'Read More';
    }
  });
});
// Form submit
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Message Sent Successfully!');
});