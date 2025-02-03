window.addEventListener('load', () => {
  [('body', 'html')].forEach(e => {
    document.querySelector(e).addEventListener('contextmenu', e => {
      e.preventDefault();
      e.stopPropagation();
    });
    document.querySelector(e).addEventListener('click', () => {
      alert(`hello, you clicked ${e} element`);
    });
  });
});
