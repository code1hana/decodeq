//main, survey
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const btn = document.querySelector('.btn');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    btn.classList.toggle('active');
});