// Typed animation
var typed = new Typed('#element', {
  strings: [
    'Circuit Designer', 'PCB Designer', 'Cybersecurity Enthusiast',
    'MATLAB + Verilog Programmer'
  ],
  typeSpeed: 50,
  loop: true
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

// Form submit
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Message Sent Successfully!');
});