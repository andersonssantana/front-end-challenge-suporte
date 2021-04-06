const list = document.querySelectorAll('.header-mobile__whatsapp-link');

list.forEach(oldItem => {
  const newItem = oldItem.cloneNode(true);
  Object.assign(newItem, {
    href: oldItem.dataset.link,
    target: 'blank'
  });
  oldItem.parentNode.replaceChild(newItem, oldItem);
});
