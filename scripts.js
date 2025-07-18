// scripts.js

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Mobile menu toggle (assumes an element with id 'menu-toggle' and a nav with class 'nav')
const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('.nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}
// Pop up tab
function openModal(skillName) {
  document.getElementById('modalTitle').textContent = skillName;
  // You can show different content based on skillName if you want...
  document.getElementById('modalContent').textContent = "Information about " + skillName;
  document.getElementById('skillModal').style.display = "block";
}

function closeModal() {
  document.getElementById('skillModal').style.display = "none";
}

// Scroll-to-top button (assumes an element with id 'scrollTopBtn')
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  if (scrollTopBtn) {
    scrollTopBtn.style.display = window.scrollY > 400 ? 'block' : 'none';
  }
});
if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
