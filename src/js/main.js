document.addEventListener('DOMContentLoaded', () => {
	// Featured section
	const featuredSlides = document.querySelectorAll('.featured__slide');
	const featuredLinks = document.querySelectorAll('.featured__link');

	function changeFilm(index) {
		featuredSlides.forEach((slide) => {
			slide.classList.remove('featured__slide--active');
		});

		featuredLinks.forEach((link) => {
			link.classList.remove('featured__link--active');
		});

		featuredSlides[index].classList.add('featured__slide--active');
		featuredLinks[index].classList.add('featured__link--active');
	}

	featuredLinks.forEach((film, index) => {
		film.addEventListener('mouseenter', () => changeFilm(index));
	});

	// Header
	const header = document.querySelector('.header');

	const searchSection = document.querySelector('.search');
	const searchBtn = document.querySelector('#searchBtn');
	const searchClose = document.querySelector('.search__close');

	searchBtn.addEventListener('click', () => {
		searchSection.classList.add('search--active');
	});

	searchClose.addEventListener('click', () => {
		searchSection.classList.remove('search--active');
	});

	const navSection = document.querySelector('.nav');
	const menuBtn = document.querySelector('#menuBtn');
	const navClose = document.querySelector('.nav__close');

	menuBtn.addEventListener('click', () => {
		navSection.classList.add('nav--active');
	});

	navClose.addEventListener('click', () => {
		navSection.classList.remove('nav--active');
	});

	let scrollY = window.scrollY;

	function headerToggle() {
		if (scrollY > 10) {
			header.classList.add('header--hidden');
			header.classList.remove('header--active');
		}

		if (window.scrollY < scrollY) {
			header.classList.add('header--active');
			header.classList.remove('header--hidden');
		}

		if (window.scrollY == 0) {
			header.classList.remove('header--active');
		}

		scrollY = window.scrollY;
	}

	window.addEventListener('scroll', headerToggle);
});
