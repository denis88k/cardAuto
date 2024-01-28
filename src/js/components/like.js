import { toggleClass } from './helpers.js';

const likeCardSlider = document.querySelector('.card__swiper-like-icon');

likeCardSlider.addEventListener('click', () => {
	toggleClass(likeCardSlider, 'card__swiper-like-icon-active');
});

const likeSimilarSlider = document.querySelectorAll('.similar_car__swiper-icon-like');

likeSimilarSlider.forEach(like => {
	like.addEventListener('click', () => {
		toggleClass(like, 'similar_car__swiper-icon-like-active');
	});
});
