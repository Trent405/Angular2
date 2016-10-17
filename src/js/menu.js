$(document).ready(function(){

	var tourTl = new TimelineMax();

	$('.btn-tour').click(function(){
		
		if ($('.tour-menu li').css('opacity')==0) {
			tourTl
				.staggerFromTo($('.tour-menu li'), 0.3, {autoAlpha: 0, y:-35, x: 175}, {autoAlpha: 1, y:-35, x: 250, ease:Power1.easeIn}, 0.15);

		} else{
			tourTl
				.staggerFromTo($('.tour-menu li'), 0.3, {autoAlpha: 1, y:-35, x: 250}, {autoAlpha: 0, y:-35, x: 175, ease:Power1.easeIn}, 0.15);
		}

	});
	$('.header').click(function(){
		if ($('.tour-menu li').css('opacity')==1) {
			tourTl
				.staggerTo($('.tour-menu li'), 0.3, {autoAlpha: 0, y:-35, x: 175, ease:Power1.easeIn}, 0.15);
		}

	});

});