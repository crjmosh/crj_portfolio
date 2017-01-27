$(document).ready(function() {
	var $portfolioItems = $('.portfolio-item');
	var $portfolioItemText = $('.port-item-text');
	var $contentColumn = $('#content-column');

	function setStyling() {
		var winWidth = $(window).width();
		if (winWidth <= 600) {
			$portfolioItems.removeClass("valign-wrapper");
			$portfolioItemText.addClass("center");
			$contentColumn.css({padding : "0px"})
		} else {
			$portfolioItems.addClass("valign-wrapper")
			$portfolioItemText.removeClass("center");
			$contentColumn.css({padding : "0px 20px"})
		}
	}

	setStyling();

	$(window).resize(function() {	
		setStyling();
	});

});