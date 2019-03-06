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
		if (!$(this.element).hasClass("animation-complete")) {
			$(".social-icons > a").addClass("animated zoomIn");
			$(".social-icons").css("visibility", "visible");
			setTimeout(function () {
				$(".social-icons > a").removeClass("animated zoomIn");
				$(".social-icons > a").addClass("hvr-float");
				$(".social-icons").addClass("animation-complete");
			}, 1000);
		}
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
		$("#education-content-1").addClass("animated fadeInUp");
		$("#education-content-1").css("visibility", "visible");
	}, {
		offset: "100%"
	});

	$("#waypoint-5").waypoint(function () {
		$("#education-content-2").addClass("animated fadeInUp");
		$("#education-content-2").css("visibility", "visible");
	}, {
		offset: "90%"
	});

	/* 	$("#waypoint-6").waypoint(function () {
			$("#experience-1").addClass("animated fadeInUp");
			$("#experience-1").css("visibility", "visible");
		}, {
			offset: "100%"
		}); */

	$("#waypoint-7").waypoint(function () {
		$("#project-1").addClass("animated fadeInRight");
		$("#project-1").css("visibility", "visible");
	}, {
		offset: "120%"
	});

	$("#waypoint-8").waypoint(function () {
		$("#project-2").addClass("animated fadeInRight");
		$("#project-2").css("visibility", "visible");
	}, {
		offset: "120%"
	});

	$("#waypoint-9").waypoint(function () {
		$("#project-3").addClass("animated fadeInRight");
		$("#project-3").css("visibility", "visible");
	}, {
		offset: "120%"
	});

	$(".img-project-cover").waypoint(function () {
		if (!$(this.element).hasClass("animation-complete")) {
			$(this.element).addClass('animated fadeInLeft');
			$(this.element).css("visibility", "visible");
			var currentImage = $(this.element);
			setTimeout(function () {
				$(currentImage).removeClass("animated fadeInLeft");
				$(currentImage).addClass("hvr-backward");
				$(currentImage).addClass("animation-complete");
			}, 1000);
		}
	}, {
		offset: "95%"
	});

	$("hr").waypoint(function () {
		$(this.element).addClass('grow');
	}, {
		offset: "75%"
	});

	if ($(window).width() > 992) {
		$("#project-1").addClass("delay");
		$("#project-2").addClass("delay");
		$("#project-3").addClass("delay");
	}

	// fancyBox
	$("[data-fancybox]").fancybox({
		toolbar: false
	});

	// Make open mobile-nav background opaque
	$(".navbar").children().click(function () {
		if ($('.navbar-toggler').hasClass('collapsed')) {
			$('#side-nav').css("background", "#110f01");
		} else {
			setTimeout(function () {
				$('#side-nav').css("background", "transparent");
			}, 200);
		}
	});

	// Close mobile-nav if user clicks on nav-link
	$('.nav-link').click(function () {
		setTimeout(function () {
			$('#side-nav').css("background", "transparent");
		}, 200);
	});

	$(document).on('click', function () {
		// Close mobile-nav if user clicks on body
		if ($('.navbar-collapse').hasClass('show')) {
			$('.navbar-collapse').collapse('hide');
			setTimeout(function () {
				$('#side-nav').css("background", "transparent");
			}, 200);
		}
	});

	$(document).on('scroll', function () {
		// Close mobile-nav if user scrolls
		if ($('.navbar-collapse').hasClass('show')) {
			$('.navbar-collapse').collapse('hide');
			setTimeout(function () {
				$('#side-nav').css("background", "transparent");
			}, 200);
		}
	});
});