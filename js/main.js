$(function() {

    $(".slider").slick({
        dots: false,
        slidesToShow: 3,
        autoplay: true,
        prevArrow: '<div class="slider__slider-btn slider__slider-btn-prev"><img src="img/left_arrow.png" alt="left_arr"></div>',
        nextArrow: '<div class="slider__slider-btn slider__slider-btn-next"><img src="img/right_arrow.png" alt="right_arr"></div>',

        responsive: [{
                breakpoint: 1271,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    //centerMode: true
                }

            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    //centerMode: true
                }

            }
        ]

    })



});

let burger = document.querySelector('.header__burger');
let mobileMenu = document.querySelector('.header__menu-mobile');
let body = document.querySelector('body');

burger.addEventListener("click", function() {

    mobileMenu.classList.toggle("header__menu-mobile--active");
    burger.classList.toggle("header__burger--active");
    body.classList.toggle("body--active");
})