new Swiper('.offers__slider', {
	// Стрелки
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	// Навигация
	// Буллеты, прогресс-бар
	pagination: {
		el: '.swiper-pagination',
		//Буллеты
		clickable: true,
	},
	// Количество слайдов для показа
	slidesPerView: 3,
	// Отступ между слайдами
	spaceBetween: 30,
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
	},
});