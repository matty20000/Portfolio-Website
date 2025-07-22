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
//adding a comment
// Mobile menu toggle (assumes an element with id 'menu-toggle' and a nav with class 'nav')
const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('.nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}
// Pop up tab
const skillDetails = {
  "SolidWorks": "Sheet-metal/General Modeling, Motion Studies, Kinematic graphs",
  "AutoCAD": "General Modeling",
  "MATLAB": "ermmmm what the sigma",
  "Soldering": "Hand soldering, Soldering Paste, PCB ovens, Trouble shooting",
  "Product-Design": "Designing Parts directly for in-house manufacting"
};

// Update this function
function openModal(skillName) {
  document.getElementById('modalTitle').textContent = skillName;
  document.getElementById('modalContent').textContent = skillDetails[skillName] || "Information about " + skillName;
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
