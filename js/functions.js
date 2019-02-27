(function ($) {
	"use strict"; // Start of use strict

	// Smooth scrolling using jQuery easing
	$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll-trigger').click(function () {
		$('.navbar-collapse').collapse('hide');
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#sideNav'
	});

})(jQuery); // End of use strict

// Animations on waypoint
$(".social-icons").waypoint(function () {
	$(".social-icons > a").addClass("animated zoomIn");
	$(".social-icons").css("visibility", "visible");
}, {
	offset: "80%"
});

$("#waypoint-1").waypoint(function () {
	$(".dev-icons").addClass("animated bounceInRight");
	$(".dev-icons").css("visibility", "visible");
}, {
	offset: "100%"
});

$("#waypoint-2").waypoint(function () {
	$("#languages").addClass("animated bounceInRight");
	$("#languages").css("visibility", "visible");
}, {
	offset: "100%"
});

$("#waypoint-3").waypoint(function () {
	$("#workflow").addClass("animated bounceInRight");
	$("#workflow").css("visibility", "visible");
}, {
	offset: "100%"
});

$("#waypoint-4").waypoint(function () {
	$("#resume-content-1").addClass("animated bounceInUp");
	$("#resume-content-1").css("visibility", "visible");
}, {
	offset: "100%"
});

$("#waypoint-5").waypoint(function () {
	$("#resume-content-2").addClass("animated bounceInUp");
	$("#resume-content-2").css("visibility", "visible");
}, {
	offset: "100%"
});

$("#waypoint-6").waypoint(function () {
	$("#experience-1").addClass("animated fadeInUp");
	$("#experience-1").css("visibility", "visible");
}, {
	offset: "100%"
});

$("#waypoint-7").waypoint(function () {
	$("#project-1").addClass("animated fadeInUp");
	$("#project-1").css("visibility", "visible");
}, {
	offset: "100%"
});

$("#waypoint-8").waypoint(function () {
	$("#project-2").addClass("animated fadeInUp");
	$("#project-2").css("visibility", "visible");
}, {
	offset: "100%"
});

$("#waypoint-9").waypoint(function () {
	$("#project-3").addClass("animated fadeInUp");
	$("#project-3").css("visibility", "visible");
}, {
	offset: "100%"
});

$("hr").waypoint(function () {
	$(this.element).addClass('grow');
}, {
	offset: "75%"
});

$(".project-image").waypoint(function () {
	$(this.element).addClass('animated zoomIn');
	$(this.element).css("visibility", "visible");
}, {
	offset: "85%"
});

// fancyBox
$("[data-fancybox]").fancybox({
	toolbar: false
});

$('.beautyartistkristi-gallery').click(function () {
	$.fancybox([{
		href: '#beautyartistkristi-gallery'
	}]);
});