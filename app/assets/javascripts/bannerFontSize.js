$(document).ready(function() {
	var curWidth = $('#banner-full').width();
	var $bannerPrimaryText = $('.banner-primary-text');
	var $bannerSecondaryText = $('.banner-secondary-text');
	
	// Font sizes set based on a fraction of the banner width
	var primaryFontFraction = 0.058
	var secondaryFontFraction = 0.041
	
	// Set banner font sizes on initial page load
	var primaryFontSize = (curWidth * primaryFontFraction) + "px";
	var secondaryFontSize = (curWidth * secondaryFontFraction) + "px";
	$bannerPrimaryText.css({fontSize: primaryFontSize});
	$bannerSecondaryText.css({fontSize: secondaryFontSize});

	// Set banner font sizes on window resize
	$(window).resize(function() {
		curWidth = $('#banner-full').width();
		var primaryFontSize = (curWidth * primaryFontFraction) + "px";
		var secondaryFontSize = (curWidth * secondaryFontFraction) + "px";
		$bannerPrimaryText.css({fontSize: primaryFontSize});
		$bannerSecondaryText.css({fontSize: secondaryFontSize});
	});

});