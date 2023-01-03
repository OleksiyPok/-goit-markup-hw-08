(() => {

  const toggleHeaderButton = document.querySelector('.js-toggle-header-btn');
  const toggleMenuButton = document.querySelector('.js-toggle-menu-btn');
  const mobileMenu = document.querySelector('.js-menu-container');

  const toggleMenu = () => {  
    const isMenuOpen = toggleHeaderButton.getAttribute('aria-expanded') === 'true' || false;
    toggleHeaderButton.setAttribute('aria-expanded', !isMenuOpen);
    toggleMenuButton.setAttribute('aria-expanded', !isMenuOpen);
    toggleHeaderButton.classList.toggle('is-open');
    toggleMenuButton.classList.toggle('is-open');
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen ?
      'disableBodyScroll' : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  toggleHeaderButton.addEventListener('click', toggleMenu);
  toggleMenuButton.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;    
    toggleHeaderButton.classList.remove('is-open');
    toggleMenuButton.classList.remove('is-open');
    mobileMenu.classList.remove('is-open');
    toggleHeaderButton.setAttribute('aria-expanded', false);
    toggleMenuButton.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();