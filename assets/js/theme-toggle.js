(function () {
  // Theme Init
  const storedTheme = localStorage.getItem('executive-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = storedTheme || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);

  // Direction (RTL) Init
  const storedDir = localStorage.getItem('executive-direction');
  if (storedDir === 'rtl') {
    document.documentElement.setAttribute('dir', 'rtl');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
  }
})();

window.addEventListener('DOMContentLoaded', () => {
  // --- Theme Toggle Logic ---
  const themeToggles = document.querySelectorAll('.theme-toggle-btn');
  
  const updateToggleIcons = (theme) => {
    themeToggles.forEach(btn => {
      const sunIcon = btn.querySelector('.sun-icon');
      const moonIcon = btn.querySelector('.moon-icon');
      if (theme === 'dark') {
        if (sunIcon) sunIcon.style.display = 'block';
        if (moonIcon) moonIcon.style.display = 'none';
      } else {
        if (sunIcon) sunIcon.style.display = 'none';
        if (moonIcon) moonIcon.style.display = 'block';
      }
    });
  };

  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  updateToggleIcons(currentTheme);

  themeToggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('executive-theme', newTheme);
      updateToggleIcons(newTheme);
    });
  });

  // --- Direction (RTL) Toggle Logic ---
  const rtlToggles = document.querySelectorAll('.rtl-toggle-btn');
  const currentDir = document.documentElement.getAttribute('dir') || 'ltr';

  // Apply RTL stylesheet early on DOM load if active
  const bsSheet = document.querySelector('link[href*="bootstrap"]');
  if (bsSheet && currentDir === 'rtl') {
    bsSheet.setAttribute('href', 'assets/css/bootstrap.rtl.min.css');
  }

  const updateRtlButtons = (dir) => {
    rtlToggles.forEach(btn => {
      btn.innerText = dir === 'rtl' ? 'LTR' : 'RTL';
    });
  };

  updateRtlButtons(currentDir);

  rtlToggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const activeDir = document.documentElement.getAttribute('dir') || 'ltr';
      const newDir = activeDir === 'rtl' ? 'ltr' : 'rtl';
      
      document.documentElement.setAttribute('dir', newDir);
      localStorage.setItem('executive-direction', newDir);
      
      // Swap Bootstrap Grid link
      const sheet = document.querySelector('link[href*="bootstrap"]');
      if (sheet) {
        if (newDir === 'rtl') {
          sheet.setAttribute('href', 'assets/css/bootstrap.rtl.min.css');
        } else {
          sheet.setAttribute('href', 'assets/css/bootstrap.min.css');
        }
      }
      
      updateRtlButtons(newDir);
    });
  });
});
