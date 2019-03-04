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
				}, 750, "easeInOutExpo");
				return false;
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll-trigger').click(function () {
		$('.navbar-collapse').collapse('hide');
	});

})(jQuery); // End of use strict

$(document).ready(function () {

	// Animations on waypoint
	$(".social-icons").waypoint(function () {
		$(".social-icons > a").addClass("animated zoomIn hvr-float");
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
		$("#education-content-1").addClass("animated bounceInUp");
		$("#education-content-1").css("visibility", "visible");
	}, {
		offset: "100%"
	});

	$("#waypoint-5").waypoint(function () {
		$("#education-content-2").addClass("animated bounceInUp");
		$("#education-content-2").css("visibility", "visible");
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
		$("#project-1").addClass("animated fadeInUp delay-fast");
		$("#project-1").css("visibility", "visible");
	}, {
		offset: "110%"
	});

	$("#waypoint-8").waypoint(function () {
		$("#project-2").addClass("animated fadeInUp delay-fast");
		$("#project-2").css("visibility", "visible");
	}, {
		offset: "110%"
	});

	$("#waypoint-9").waypoint(function () {
		$("#project-3").addClass("animated fadeInUp delay-fast");
		$("#project-3").css("visibility", "visible");
	}, {
		offset: "110%"
	});

/* 	if ($(window).width() > 992) {
		$("#project-1").addClass("delay");
		$("#project-2").addClass("delay");
		$("#project-3").addClass("delay");
	} */

	$(".img-project").waypoint(function () {
		$(this.element).addClass('animated fadeInUp');
		$(this.element).css("visibility", "visible");
	}, {
		offset: "85%"
	});

	$(".resume-content .btn").waypoint(function () {
		$(this.element).addClass('animated fadeInUp delay-slow');
		$(this.element).css("visibility", "visible");
	}, {
		offset: "85%"
	});

	$("hr").waypoint(function () {
		$(this.element).addClass('grow');
	}, {
		offset: "75%"
	});

	// fancyBox
	$("[data-fancybox]").fancybox({
		toolbar: false
	});

	// Navbar
	$(".navbar").children().click(function () {
		if ($('.navbar-toggler').hasClass('collapsed')) {
			$('#side-nav').css("background", "#110f01");
		} else {
			setTimeout(function () {
				$('#side-nav').css("background", "transparent");
			}, 200);
		}
	});
	
	$('.nav-link').click(function () {
		setTimeout(function () {
			$('#side-nav').css("background", "transparent");
		}, 200);
	});
});