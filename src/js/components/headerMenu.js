const btnOpen = document.querySelector('.header__main-menu');
const btnClose = document.querySelector('.nav__btn-close');
const nav = document.querySelector('.nav');

btnOpen.addEventListener('click', () => {
	nav.classList.add('nav-active');
	document.body.classList.add('_lock');
});

btnClose.addEventListener('click', () => {
	nav.classList.remove('nav-active');
	document.body.classList.remove('_lock');
});
