$(document).ready(function() {
	var $portfolioItems = $('.portfolio-item');
	var $portfolioItemText = $('.port-item-text');

	function setStyling() {
		var winWidth = $(window).width();
		if (winWidth <= 600) {
			$portfolioItems.removeClass("valign-wrapper");
			$portfolioItemText.addClass("center");
		} else {
			$portfolioItems.addClass("valign-wrapper")
			$portfolioItemText.removeClass("center");
		}
	}

	setStyling();

	$(window).resize(function() {	
		setStyling();
	});

});