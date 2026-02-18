const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('side-menu');
const skillModal = document.getElementById('skillModal');

if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    const isOpen = navLinks.classList.toggle('active');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
  });

  window.addEventListener('click', (event) => {
    if (!navLinks.contains(event.target) && !menuBtn.contains(event.target)) {
      navLinks.classList.remove('active');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function onClick(event) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      navLinks?.classList.remove('active');
      menuBtn?.setAttribute('aria-expanded', 'false');
    }
  });
});

const skillDetails = {
  SolidWorks: 'Sheet-metal and general modeling, motion studies, and kinematic graph analysis.',
  AutoCAD: '2D drafting and mechanical layouts for production-ready documentation.',
  MATLAB: 'Data analysis, script-based automation, and engineering-focused calculations.',
  Soldering: 'Hand soldering, solder paste application, PCB oven workflows, and troubleshooting.',
  'Product-Design': 'Part design for in-house manufacturing with practical cost and process awareness.'
};

function openModal(skillName) {
  const modalTitle = document.getElementById('modalTitle');
  const modalContent = document.getElementById('modalContent');

  if (!modalTitle || !modalContent || !skillModal) return;

  modalTitle.textContent = skillName;
  modalContent.textContent = skillDetails[skillName] || `Information about ${skillName}.`;

  skillModal.classList.add('open');
  skillModal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  if (!skillModal) return;

  skillModal.classList.remove('open');
  skillModal.setAttribute('aria-hidden', 'true');
}

skillModal?.addEventListener('click', (event) => {
  if (event.target === skillModal) {
    closeModal();
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
});

window.openModal = openModal;
window.closeModal = closeModal;
