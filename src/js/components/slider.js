// import { Carousel } from '@fancyapps/ui/dist/carousel/carousel.esm.js';

// const sliderCarousel = document.querySelector('.choice-car__wrapper');
// const choiceSlide = sliderCarousel.querySelectorAll('.choice-car__slide');
// const choiceSlideImg = choiceSlide[0].querySelector('img');

// const options = {
// 	Dots: false,
// 	infinite: true,
// 	transition: 'slide',
// };

// export const sliderStart = () => {
// 	if (window.innerWidth <= 800) {
// 		const sliderCarousel = document.querySelectorAll('.choice-car__wrapper');
// 		sliderCarousel.forEach(slider => {
// 			new Carousel(slider, options);
// 		});
// 	}
// };
// если есть картинка при первой загрузки страницы, то инициализируется слайдер
// для git
// if (window.innerWidth === 800) {
// 	if (choiceSlideImg.dataset.lazySrc) {
// 		new Carousel(sliderCarousel, options);
// 	}
// }

// для прод
// export const sliderReset = () => {
// 	sliderStart();
// };

import './../vendor/swiper.js';

const cardBasic = document.querySelector('.similar_car__card-basic');
const sliderBasic = cardBasic.querySelectorAll('.similar_car__swiper');

const initSlider = slider => {
	// let swiper = new Swiper(`.${slider}`, {
	let swiper = new Swiper(slider, {
		// centeredSlides: true,
		slidesPerView: 'auto',
		spaceBetween: 10,
		breakpoints: {
			560: {
				slidesPerView: '1',
			},
		},
		// loop: true,
		// navigation: {
		// 	nextEl: '.swiper-button-next',
		// 	prevEl: '.swiper-button-prev',
		// },
	});
};

sliderBasic.forEach(slider => {
	initSlider(slider);
	// console.log(slider.classList);
});

const cardSlider = document.querySelector('.card__swiper');
const cardSliderMini = document.querySelector('.card__swiper-mini');

let swiperCardMini = new Swiper(cardSliderMini, {
	slidesPerView: 'auto',
	spaceBetween: 1,
});

let swiperCard = new Swiper(cardSlider, {
	centeredSlides: true,
	slidesPerView: '1',
	// spaceBetween: 10,
	effect: 'fade',
	thumbs: {
		swiper: swiperCardMini,
	},
});
