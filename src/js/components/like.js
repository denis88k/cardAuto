import { toggleClass } from './helpers.js';

const likeCardSlider = document.querySelector('.card__swiper-like-icon');

likeCardSlider.addEventListener('click', () => {
	toggleClass(likeCardSlider, 'card__swiper-like-icon-active');
});
