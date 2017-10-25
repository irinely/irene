'use strict';

$(function() {
	var $humburger = $('.humburger');
	var $navigationSmall = $('.navigation-small');

	$humburger.on('click', function(e) {
		e.stopPropagation();
		$navigationSmall.toggle();
	});

	$(document).on('click', function() {
		$navigationSmall.hide();
	});
});
$(function() {
	$('.js-scrollTo').on('click', function(e) {
		var $this = $(this);
		var href = $this.attr('href') || $this.data('href');

		e.preventDefault();

		$('html, body').stop().animate({
			scrollTop: $(href).offset().top
		}, 500);

		$this.trigger('blur');
	});
});
$(function() {
	new WOW().init();
});

$(function() {
	var $button = $('.block-works button');
	var $hiddenWorks = $('.works .work.hidden');

	$button.on('click', function(e) {
		$hiddenWorks.removeClass('hidden');
		$button.hide();
	});
});

$(document).ready(function() {
	$(".fancybox").fancybox({
		openEffect: 'none',
		closeEffect: 'none'
	});
});
