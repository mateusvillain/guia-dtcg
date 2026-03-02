(function () {
  function initSearchShortcut() {
    const searchInput = document.querySelector('.nav-search input[name="q"]');
    if (!searchInput) return;

    const isMac = /Mac|iPhone|iPad|iPod/.test(
      navigator.platform || navigator.userAgent
    );

    document.querySelectorAll('[data-shortcut-mod]').forEach((el) => {
      el.textContent = isMac ? '⌘' : 'Ctrl';
    });

    window.addEventListener('keydown', (event) => {
      if (event.key.toLowerCase() !== 'k') return;

      const hasModifier = isMac ? event.metaKey : event.ctrlKey;
      if (!hasModifier) return;

      event.preventDefault();
      searchInput.focus();
      searchInput.select();
    });
  }

  initSearchShortcut();
})();
