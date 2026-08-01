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
  'Creo-SolidWorks': 'CAD modeling with Creo and SolidWorks for SMT machine fixtures, production tooling, and practical mechanical design support.',
  'SAP-Windchill': 'Engineering review process experience using SAP and Windchill to manage documentation and support controlled manufacturing changes.',
  Printing: '3D printing experience used to optimize fixtures for SMT machine handling and accelerate hands-on manufacturing improvements.',
  GDT: 'Drawing review experience with GD&T, supporting clearer manufacturing requirements and engineering communication.',
  'Process-Issues': 'Systematic identification and resolution of process issues, including critical stoppages in circuit board assembly and surface mount technology constraints.',
  'Cross-Functional': 'Communication across engineering teams, manufacturers, housing staff, law enforcement, management, and teaching teams to move issues into action.',
  'Engineering-Leadership': 'Leadership in engineering teams through internal project ownership, Pi Tau Sigma presidency, and team-focused improvement work.'
};

function openModal(skillName) {
  const modalTitle = document.getElementById('modalTitle');
  const modalContent = document.getElementById('modalContent');

  if (!modalTitle || !modalContent || !skillModal) return;

  modalTitle.textContent = skillName.replace(/-/g, ' ');
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
