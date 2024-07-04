$(document).ready(function () {
	$(".header__burger").click(function (event) {
	  $(".header__burger,.header__menu").toggleClass("active");
	  $("body").toggleClass("lock");
	});
	$(".rev_slider").slick({
	  dots: true,
	  infinite: true,
	  speed: 500,
	  fade: true,
	  cssEase: "linear",
 
	  breakpoint: 767,
	  settings: {
		 slidesToShow: 1,
		 slidesToScroll: 1,
	  },
	});
 });