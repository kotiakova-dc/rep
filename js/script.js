// слайдер с таймлайном
var swiper = new Swiper('.swiper-container-timeline', {
	pagination: {
		el: '.swiper-pagination-top',
		clickable: true
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	autoplay: {
		delay: 20000,
		disableOnInteraction: false
	},

	loop: false,
	watchSlidesProgress: true
});
// приостанавливает слайд при наведении
document.addEventListener('mouseenter', event => {
	const el = event.target;
	if (el && el.matches && el.matches('.swiper-container-timeline')) {

		el.swiper.autoplay.stop();
		el.classList.add('swiper-paused');

		const activeNavItem = el.querySelector('.swiper-pagination-bullet-active');
		activeNavItem.style.animationPlayState = "paused";
	}
}, true);

document.addEventListener('mouseleave', event => {
	const el = event.target;
	if (el && el.matches && el.matches('.swiper-container-timeline')) {
		el.swiper.autoplay.start();
		el.classList.remove('swiper-paused');

		const activeNavItem = el.querySelector('.swiper-pagination-bullet-active');

		activeNavItem.classList.remove('swiper-pagination-bullet-active');


		setTimeout(() => {
			activeNavItem.classList.add('swiper-pagination-bullet-active');

		}, 10);
	}
}, true);
////////////////////////////////////////////////////////////////////////////////////////////////////
// слайдер в мобильной рамке с отзывами 
var swiperReviews = new Swiper('.swiper-container__reviews', {
	slidesPerView: 1,
	spaceBetween: 1,
	//loop:true,
	centeredSlides: true,
	//slideToClickedSlide:true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
////////////////////////////////////////////////////////////////////////////////////////////////////
// выпадающее окно поиска
const searchDropDown = document.querySelector('.search--dropdown')
const openSearchBtn = document.getElementById('open-search-window')
const searchDropDownBtn = document.getElementById('search--dropdown-btn')
const searchDropDownInput = document.getElementById('search--dropdown-input')
openSearchBtn.addEventListener('click', function () {
	searchDropDown.classList.add('search--dropdown--active');
	console.log(searchDropDown)
})
// скрыть окно поиска
document.addEventListener("click", function (e) {
	if (e.target != openSearchBtn && searchDropDown.classList.contains('search--dropdown--active') && e.target != searchDropDownBtn && e.target != searchDropDownInput && e.target != searchDropDown) {
		searchDropDown.classList.remove('search--dropdown--active');
		console.log(searchDropDownBtn)
	}
});
/* MODAL WINDOWS
**************************************************************/
const openModalBtn = document.getElementById('contact-me-btn')
const modalContainer = document.getElementById('modal--contact-me')
const modalSuccess = document.getElementById('modal--success')
const showModal = () => {
	openModalBtn.addEventListener('click', () => {
		modalContainer.classList.add('show-modal')
	});
}

showModal('open-modal', 'modal--contact-me')

const closeBtn = document.querySelectorAll('.close-modal')
function closeModal() {
	const modalContainer = document.getElementById('modal--contact-me')
	modalContainer.classList.remove('show-modal')
}

closeBtn.forEach(c => c.addEventListener('click', closeModal));


const btnModalSubmit = document.querySelector('.btn--modal')

//
$(document).ready(function () {
	$('#phone').inputmask("+7(999) 999-99-99");
});


$("#btn--modal").click(function (e) {
	if (($('#phone').inputmask("isComplete")) && ($('#name').val().length !== 0) && ($('#agreement-checkbox').is(':checked'))) {
		e.preventDefault();

		closeModal();

		$('#modal--success').addClass('modal--success--visible')


		setTimeout(function () {
			$('#modal--success').removeClass('modal--success--visible')
		}, 2000);

	} else {
		return false;
	}
});

// очистка полей после закрытия модального окна
$("#close-modal").click(function () {
	$('#phone').val('')
	$('#name').val('')
});



function fontsStyle(params) {

	let file_content = fs.readFileSync(source_folder + '/scss/fonts.scss');
	if (file_content == '') {
		fs.writeFile(source_folder + '/scss/fonts.scss', '', cb);
		return fs.readdir(path.build.fonts, function (err, items) {
			if (items) {
				let c_fontname;
				for (var i = 0; i < items.length; i++) {
					let fontname = items[i].split('.');
					fontname = fontname[0];
					if (c_fontname != fontname) {
						fs.appendFile(source_folder + '/scss/fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
					}
					c_fontname = fontname;
				}
			}
		})
	}
}

function cb() { }


/////////   

//     const dropDownArrow = document.querySelectorAll('.nav__sub-dropdown');
// const liSubMenu = document.querySelectorAll('.nav__sub-menu')
//     //const dropDownSubMenu = document.querySelectorAll('.nav__popup')
//    // dropDownArrow.addEventListener('click',revealSubMenu)
//     function revealSubMenu() {
//       dropDownArrow.forEach(el => 
//        this.classList.toggle('show-dropdown'));
//        console.log(this.dropDownArrow)
//         //this.closest('div').classList.add('nav__popup--show')


//       //dropDownArrow.classList.toggle('show-dropdown')
//      //dropDownSubMenu.classList.toggle('nav__popup--show')
//       console.log(1)
//     }

//   liSubMenu.forEach(el => 
//       el.addEventListener('click', revealSubMenu))

/* DROP DOWN SUB MENUS
**************************************************************/
$(function () {

	//BEGIN
	$(".nav__sub-menu").on("click", function (e) {

		e.preventDefault();
		var $this = $(this);
		if (!$this.find('.nav__popup').hasClass('nav__popup--show')) {


			$this.find('.nav__popup').slideToggle();
			$('.submenu-arrow', this).toggleClass('submenu-arrow--show');
			//	$(".js-faq-title").removeClass("faq__active");
			//	$('.js-faq-rotate').removeClass('faq__rotate');
		}

		//$(".nav__popup").slideUp(800);
		//$(".js-faq-title").removeClass("faq__active");
		//$('.js-faq-rotate').removeClass('faq__rotate');

		//$this.toggleClass("faq__active");

	});


});



$(function () {

	//BEGIN
	$(".nav__secondary").on("click", function (e) {

		e.preventDefault();
		var $this = $(this);
		if (!$this.find('li.nav__secondary ul').hasClass('nav__secondary--hidden')) {

			console.log(1)
			$this.find('ul').slideToggle();
			$('.submenu-arrow', this).toggleClass('submenu-arrow--hide');
			//$('.nav__sub-dropdown',this).toggleClass('show-dropdown');
			//	$(".js-faq-title").removeClass("faq__active");
			//	$('.js-faq-rotate').removeClass('faq__rotate');
		}

		//$(".nav__popup").slideUp(800);
		//$(".js-faq-title").removeClass("faq__active");
		//$('.js-faq-rotate').removeClass('faq__rotate');

		//$this.toggleClass("faq__active");

	});


});


/* MOBILE MENU
**************************************************************/

$(function () {
	$(".nav__icon").on("click", function () {
	  $(this).toggleClass("active");
	  $(".sidebar").slideToggle();
	  $(".icons-top").toggleClass('icons-top--fixed');
	  $(".wrapper").toggleClass('wrapper--mobile-fixed')
	});
  
	$(window).on("load resize", function () {
	  var w = $(window).width();
	
	  var x = 1024;
	  if (w >=  x) {
		$(".sidebar").addClass('show')
	
	  } else {
		$(".sidebar").removeClass('show')
	  }
	});
  });



  
/* NEWS SLIDER MOBILE
**************************************************************/
var swiper= Swiper;
var init = false;



/* Which media query
**************************************************************/
function swiperMode() {
    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 640px)');
    let tablet = window.matchMedia('(min-width: 640px) and (max-width: 1024px)');
    let desktop = window.matchMedia('(min-width: 1025px)');

    // Enable (for mobile)
    if(mobile.matches) {
        if (!init) {
            init = true;
            swiper = new Swiper('.news__swiper-container', {
               // slidesPerView: 3,
             
                disableOnInteraction: false,
               
                centeredSlides: true,
                loop: false,
                spaceBetween: 10,
                direction: 'horizontal',
                effect: 'coverflow',

                // navigation: {
                //     nextEl: '.swiper-button-next',
                //     prevEl: '.swiper-button-prev',
                // },
				slidesPerView: "auto",
				centeredSlides: true,
				spaceBetween: 30,
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 0,
                    modifier: 0,
                    slideShadows: false,
                },

                breakpoints: {

                    767: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                        effect: 'coverflow',

                        coverflowEffect: {
                            rotate: 0,
                            stretch: 20,
                            depth: 120,
                            modifier: 3,
                            slideShadows: false,
                        }
                    },
					440: {
				
						spaceBetween: 10,
					}

                }

            });
        }

    }

    // Disable (for tablet)
    else if(tablet.matches) {
        swiper.destroy();
        init = false;
    }

    // Disable (for desktop)
    else if(desktop.matches) {
        swiper.destroy();
        init = false;
    }
}

/* On Load
**************************************************************/
window.addEventListener('load', function() {
    swiperMode();
});

/* On Resize
**************************************************************/
window.addEventListener('resize', function() {
    swiperMode();
});
