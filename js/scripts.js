//BurgerMenu
const mainNavigation = document.getElementById('main-navigation');
const burger = document.querySelector('.btn-burger');
const lang = document.querySelector('.langtop');

burger.addEventListener('click', () => {
	mainNavigation.classList.toggle('nav--active');
	burger.classList.toggle('btn-burger--active');
	lang.classList.toggle('langtop--active');

	if (mainNavigation.classList.contains('nav--active')) {
		hideScroll();
	} else {
		showScroll();
	}
});

const hideScroll = () => {
    const scrollWidth = `${getScrollbarWidth()}px`;

	document.body.style.paddingRight = scrollWidth;
	document.body.style.overflow = 'hidden';

	mainNavigation.style.paddingRight = scrollWidth;
};

const showScroll = () => {
	document.body.style.paddingRight = '';
	document.body.style.overflow = 'visible';

	mainNavigation.style.paddingRight = '';
};

const resetNav = () => {
	mainNavigation.classList.remove('nav--active');
	burger.classList.remove('btn-burger--active');
	lang.classList.remove('langtop--active');
	showScroll();
}

window.addEventListener('resize', resetNav);

// Get scrollbar width
const getScrollbarWidth = () => {
	const outer = document.createElement('div');

	outer.style.position = 'absolute';
	outer.style.top = '-9999px';
	outer.style.width = '50px';
	outer.style.height = '50px'; 
	outer.style.overflow = 'scroll';
	outer.style.visibility = 'hidden';

	document.body.appendChild(outer);
	const scrollBarWidth = outer.offsetWidth - outer.clientWidth;
	document.body.removeChild(outer);

	return scrollBarWidth;
}


// Smooth scroll
const anchors = document.querySelectorAll('a[href$="1"]')

for (let anchor of anchors) {
	anchor.addEventListener("click", function(event) {
		event.preventDefault();
		const blockID = anchor.getAttribute('href')
		document.querySelector('' + blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
		showScroll();
		mainNavigation.classList.remove('nav--active');
		burger.classList.remove('btn-burger--active');
		lang.classList.remove('langtop--active');
	})
}

//Slider 
// new Swiper('.MySwiper', {
// 	loop: true,
// 	spaceBetween: 450,

// 	pagination: {
// 		el: '.dots',
// 		clickable: true,
// 	},
// });




