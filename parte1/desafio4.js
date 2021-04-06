const body = document.querySelector('body');
const modal = document.createElement('div');
const overlay = document.createElement('div');
const content = document.createElement('div');
const img = document.createElement('img');

Object.assign(modal, {className: 'modal micromodal-slide is-open'});
Object.assign(overlay, {className: 'modal__overlay'})
Object.assign(content, {className: 'position-relative'})
Object.assign(img, {
  className: 'form-modal',
  src: 'https://logodownload.org/wp-content/uploads/2015/05/palmeiras-logo-1.png'
})

content.appendChild(img);
overlay.appendChild(content);
modal.appendChild(overlay);
body.appendChild(modal);
