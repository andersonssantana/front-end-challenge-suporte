const body = document.querySelector('body');

const modal = document.createElement('div');
Object.assign(modal, {className: 'modal micromodal-slide is-open'});

const overlay = document.createElement('div');
Object.assign(overlay, {className: 'modal__overlay'})

const content = document.createElement('div');
Object.assign(content, {className: 'position-relative'})

const img = document.createElement('img');
Object.assign(img, {
  className: 'form-modal',
  src: 'https://logodownload.org/wp-content/uploads/2015/05/palmeiras-logo-1.png'
})

content.appendChild(img);
overlay.appendChild(content);
modal.appendChild(overlay);
body.appendChild(modal);
