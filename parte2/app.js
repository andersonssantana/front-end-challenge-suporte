const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
navToggle.addEventListener('click', () => links.classList.toggle('show-links'));

const institucional = document.querySelector('.red');
const sublinks = document.querySelector('.sublinks');
const arrow = document.querySelector('.arrow');
institucional.addEventListener('click', () => {
  sublinks.classList.toggle('show-links');
  arrow.classList.toggle('fa-caret-up');
});
