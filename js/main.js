/* =================================
------------------------------------
	Game Warrior Template
	Version: 1.0
 ------------------------------------ 
 ====================================*/


'use strict';


$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut(); 
	$("#preloder").delay(400).fadeOut("slow");

});

(function($) {

	/*------------------
		Navigation
	--------------------*/
	$('.nav-switch').on('click', function(event) {
		$('.main-menu').slideToggle(400);
		event.preventDefault();
	});


	/*------------------
		Background Set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});


	/*------------------
		Hero Slider
	--------------------*/
	$('.hero-slider').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		mouseDrag: false,
		animateOut: 'fadeOut',
    	animateIn: 'fadeIn',
		items: 1,
		autoplay: true
	});
	var dot = $('.hero-slider .owl-dot');
	dot.each(function() {
		var index = $(this).index() + 1;
		if(index < 10){
			$(this).html('0').append(index);
			$(this).append('<span>.</span>');
		}else{
			$(this).html(index);
			$(this).append('<span>.</span>');
		}
	});


	/*------------------
		News Ticker
	--------------------*/
	$('.news-ticker').marquee({
	    duration: 10000,
	    //gap in pixels between the tickers
	    //gap: 200,
	    delayBeforeStart: 0,
	    direction: 'left',
	    duplicated: true
	});

})(jQuery);

/*----------------------
my whatsapp
-----------------------*/
function rotate(obj) {
	obj.style.transform = "rotateY(-180deg)";
	obj.firstElementChild.style.zIndex = '2';
	obj.lastElementChild.style.zIndex = '2';

}
function toBack(obj) {
	obj.style.transform = "rotateY(0deg)";
	obj.firstElementChild.style.zIndex = '4';
	obj.lastElementChild.style.zIndex = '2';

}

/*----------------------
my whatsapp
-----------------------*/
/*animate*/

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
	.add({
		targets: '.ml6 .letter',
		translateY: ["1.1em", 0],
		translateZ: 0,
		duration: 750,
		delay: (el, i) => 50 * i
	}).add({
		targets: '.ml6',
		opacity: 0,
		duration: 1000,
		easing: "easeOutExpo",
		delay: 1000
	});

/*animate*/
var ml4 = {};
ml4.opacityIn = [0, 1];
ml4.scaleIn = [0.2, 1];
ml4.scaleOut = 3;
ml4.durationIn = 800;
ml4.durationOut = 600;
ml4.delay = 500;

anime.timeline({ loop: true })
	.add({
		targets: '.ml4 .letters-1',
		opacity: ml4.opacityIn,
		scale: ml4.scaleIn,
		duration: ml4.durationIn
	}).add({
		targets: '.ml4 .letters-1',
		opacity: 0,
		scale: ml4.scaleOut,
		duration: ml4.durationOut,
		easing: "easeInExpo",
		delay: ml4.delay
	}).add({
		targets: '.ml4 .letters-2',
		opacity: ml4.opacityIn,
		scale: ml4.scaleIn,
		duration: ml4.durationIn
	}).add({
		targets: '.ml4 .letters-2',
		opacity: 0,
		scale: ml4.scaleOut,
		duration: ml4.durationOut,
		easing: "easeInExpo",
		delay: ml4.delay
	}).add({
		targets: '.ml4 .letters-3',
		opacity: ml4.opacityIn,
		scale: ml4.scaleIn,
		duration: ml4.durationIn
	}).add({
		targets: '.ml4 .letters-3',
		opacity: 0,
		scale: ml4.scaleOut,
		duration: ml4.durationOut,
		easing: "easeInExpo",
		delay: ml4.delay

	}).add({
		targets: '.ml4 .letters-4',
		opacity: ml4.opacityIn,
		scale: ml4.scaleIn,
		duration: ml4.durationIn
	}).add({
		targets: '.ml4 .letters-4',
		opacity: 0,
		scale: ml4.scaleOut,
		duration: ml4.durationOut,
		easing: "easeInExpo",
		delay: ml4.delay

	}).add({
		targets: '.ml4 .letters-5',
		opacity: ml4.opacityIn,
		scale: ml4.scaleIn,
		duration: ml4.durationIn
	}).add({
		targets: '.ml4 .letters-5',
		opacity: 0,
		scale: ml4.scaleOut,
		duration: ml4.durationOut,
		easing: "easeInExpo",
		delay: ml4.delay

	}).add({
		targets: '.ml4 .letters-6',
		opacity: ml4.opacityIn,
		scale: ml4.scaleIn,
		duration: ml4.durationIn
	}).add({
		targets: '.ml4 .letters-6',
		opacity: 0,
		scale: ml4.scaleOut,
		duration: ml4.durationOut,
		easing: "easeInExpo",
		delay: ml4.delay

	}).add({
		targets: '.ml4 .letters-7',
		opacity: ml4.opacityIn,
		scale: ml4.scaleIn,
		duration: ml4.durationIn
	}).add({
		targets: '.ml4 .letters-7',
		opacity: 0,
		scale: ml4.scaleOut,
		duration: ml4.durationOut,
		easing: "easeInExpo",
		delay: ml4.delay



	}).add({
		targets: '.ml4',
		opacity: 0,
		duration: 500,
		delay: 500
	});
