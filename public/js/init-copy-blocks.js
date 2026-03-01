(function () {
  function initCopyBlocks() {
    const copyButtons = document.querySelectorAll('.copy-block');
    if (copyButtons.length === 0) return;

    copyButtons.forEach((button) => {
      button.addEventListener('click', async () => {
        const targetId = button.dataset.copyTarget;
        const code = targetId ? document.getElementById(targetId) : null;
        if (!code) return;

        try {
          await navigator.clipboard.writeText(code.textContent || '');
          button.textContent = 'Copiado';
        } catch {
          button.textContent = 'Falhou ao copiar';
        }

        setTimeout(() => {
          button.textContent = 'Copiar estrutura';
        }, 1200);
      });
    });
  }

  initCopyBlocks();
})();
