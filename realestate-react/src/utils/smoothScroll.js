export const smoothScrollTo = (targetId, closeMenu = null) => {
  const target = document.querySelector(targetId);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (closeMenu) {
      closeMenu();
    }
  }
};
