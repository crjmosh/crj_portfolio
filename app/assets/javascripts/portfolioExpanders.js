$(document).ready(function() {
	// function scrollToAnchor(aid){
  //   var aTag = $("a[name='"+ aid +"']");
  //   $('html,body').animate({scrollTop: aTag.offset().top},'slow');
	// }

	$('.websites').click(function(){
    $('.websites-body').slideToggle("slow");
    $('.logos-body').slideUp("slow");
    $('.apps-body').slideUp("slow");
    $('.artprep-body').slideUp("slow");
    $('.music-body').slideUp("slow");
   // scrollToAnchor('websites');
	 // setTimeout(function(){scrollToAnchor('websites')}, 500);
	});

	$('.logos').click(function(){
    $('.logos-body').slideToggle("slow");
    $('.websites-body').slideUp("slow");
    $('.apps-body').slideUp("slow");
    $('.artprep-body').slideUp("slow");
    $('.music-body').slideUp("slow");
	});

	$('.apps').click(function(){
    $('.apps-body').slideToggle("slow");
    $('.logos-body').slideUp("slow");
    $('.websites-body').slideUp("slow");
    $('.artprep-body').slideUp("slow");
    $('.music-body').slideUp("slow");
	});

	$('.artprep').click(function(){
    $('.artprep-body').slideToggle("slow");
    $('.logos-body').slideUp("slow");
    $('.apps-body').slideUp("slow");
    $('.websites-body').slideUp("slow");
    $('.music-body').slideUp("slow");
	});

	$('.music').click(function(){
    $('.music-body').slideToggle("slow");
    $('.logos-body').slideUp("slow");
    $('.apps-body').slideUp("slow");
    $('.artprep-body').slideUp("slow");
    $('.websites-body').slideUp("slow");
	});
});