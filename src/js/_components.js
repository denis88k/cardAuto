import './components/headerMenu.js'; // header-menu
import './vendor/swiper.js';

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
let swiperCard = new Swiper(cardSlider, {
	centeredSlides: true,
	slidesPerView: '1',
	spaceBetween: 1.21,
});

let swiperCardMini = new Swiper(cardSliderMini, {
	spaceBetween: 10,
	thumbs: {
		swiper: swiperCard,
	},
});

// import './components/timer.js'; // таймер

// import modal from './components/modal.js';

// // promo-actual
// modal('.promo__header-modal-discount', '.modal-discount', '.modal-discount .modal__close');
// modal('.promo__header-modal-tiresСasco', '.modal-tiresСasco', '.modal-tiresСasco .modal__close');
// modal('.promo__header-modal-bestPrice', '.modal-bestPrice', '.modal-bestPrice .modal__close');

// // choice-car-card
// // document.querySelectorAll('.choice-car__btn-buy').forEach(btnBuy => {
// // 	modal(btnBuy, '.modal-btnUnderCar', '.modal-btnUnderCar .modal__close', true);
// // });
// // document.querySelectorAll('.choice-car__btn-order').forEach(btnOrder => {
// // 	modal(btnOrder, '.modal-btnUnderCar', '.modal-btnUnderCar .modal__close', true);
// // });

// import validateForms from './components/validation.js';

// document.querySelectorAll('.form').forEach(form => {
// 	validateForms(form);
// 	form.querySelectorAll('.form__input').forEach(input => {
// 		input.onblur = function (e) {
// 			if (this.classList.contains('input__tel')) {
// 				// console.log(e.target.inputmask.unmaskedvalue().length, 'blur tel');
// 				const targetLength = e.target.inputmask.unmaskedvalue().length;
// 				if (0 < targetLength && targetLength < 10) {
// 					this.classList.add('just-validate-error-field');
// 				} else if (0 < targetLength) {
// 					this.classList.add('just-validate-success-field');
// 				}
// 			}
// 			if (this.classList.contains('input__name')) {
// 				// console.log(e.target.value.length, 'blur name');
// 				const targetLength = e.target.value.length;
// 				if (0 < targetLength && targetLength < 3) {
// 					this.classList.add('just-validate-error-field');
// 				} else if (0 < targetLength) {
// 					this.classList.add('just-validate-success-field');
// 				}
// 			}
// 		};
// 		input.onfocus = function () {
// 			// if (this.classList.contains('input__tel')) {
// 			//   console.log(this.inputmask.unmaskedvalue(), 'focus tel');
// 			// }
// 			this.classList.contains('just-validate-error-field') && this.classList.remove('just-validate-error-field');
// 			this.classList.contains('just-validate-success-field') && this.classList.remove('just-validate-success-field');
// 			// if (this.classList.contains('input__name')) {
// 			//   console.log(this, 'focus name');
// 			// }
// 		};
// 	});
// });
