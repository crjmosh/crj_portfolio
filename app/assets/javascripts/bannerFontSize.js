$(document).ready(function() {
	var curHeight = $('#banner-full').height();
	var $bannerPrimaryText = $('.banner-primary-text');
	var $bannerSecondaryText = $('.banner-secondary-text');
	var primaryFontSize = (curHeight * 0.15) + "px";
	var secondaryFontSize = (curHeight * 0.082) + "px";

	$bannerPrimaryText.css({fontSize: primaryFontSize});
	$bannerSecondaryText.css({fontSize: secondaryFontSize});

	$(window).resize(function() {
		curHeight = $('#banner-full').height();
		var primaryFontSize = (curHeight * 0.15) + "px";
		var secondaryFontSize = (curHeight * 0.082) + "px";
		$bannerPrimaryText.css({fontSize: primaryFontSize});
		$bannerSecondaryText.css({fontSize: secondaryFontSize});
	});

});