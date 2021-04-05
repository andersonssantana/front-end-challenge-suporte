const modal = document.createElement("div");
Object.assign(modal, {
  className: 'modal micromodal-slide is-open position-relative',
  }
)

const img = document.createElement("img");
Object.assign(img, {
  className: 'form-modal',
  src: 'https://logodownload.org/wp-content/uploads/2015/05/palmeiras-logo-1.png'
})

const overlay = document.createElement("div");
Object.assign(overlay, {
  className: 'modal__overlay',
})

const container = document.querySelector(".header-conversion-form-whatsapp-modal");
container.appendChild(modal);
modal.appendChild(overlay);
modal.appendChild(img);
