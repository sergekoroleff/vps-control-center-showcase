'use strict';
(() => {
  const buttons = [...document.querySelectorAll('[data-gallery]')];
  const modal = document.getElementById('lightbox');
  const largeImage = document.getElementById('lightbox-image');
  const caption = document.getElementById('lightbox-caption');
  const close = modal.querySelector('.lightbox-close');
  let index = 0;
  let previousFocus = null;
  function show(i) {
    index = (i + buttons.length) % buttons.length;
    const card = buttons[index];
    const image = card.querySelector('img');
    largeImage.src = image.src;
    largeImage.alt = image.alt;
    caption.textContent = card.querySelector('.gallery-desc strong').textContent + ' · ' + (index + 1) + ' / ' + buttons.length;
  }
  function open(i) {
    previousFocus = document.activeElement;
    show(i);
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden','false');
    document.body.classList.add('modal-open');
    close.focus();
  }
  function hide() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden','true');
    document.body.classList.remove('modal-open');
    largeImage.removeAttribute('src');
    if(previousFocus) previousFocus.focus();
  }
  buttons.forEach((b, i) => b.addEventListener('click', () => open(i)));
  close.addEventListener('click', hide);
  modal.querySelector('.lightbox-prev').addEventListener('click', () => show(index - 1));
  modal.querySelector('.lightbox-next').addEventListener('click', () => show(index + 1));
  modal.addEventListener('click', e => {if(e.target === modal) hide();});
  document.addEventListener('keydown', e => {
    if(!modal.classList.contains('is-open')) return;
    if(e.key === 'Escape') hide();
    if(e.key === 'ArrowLeft') show(index - 1);
    if(e.key === 'ArrowRight') show(index + 1);
    if(e.key === 'Tab') {
      const focusables = [...modal.querySelectorAll('button')];
      const pos = focusables.indexOf(document.activeElement);
      if(e.shiftKey && pos <= 0){focusables.at(-1).focus();e.preventDefault();}
      if(!e.shiftKey && pos === focusables.length - 1){focusables[0].focus();e.preventDefault();}
    }
  });
})();