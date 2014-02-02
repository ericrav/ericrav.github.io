$(document).keypress(function(e){
	if (e.which == 103) {
		$(".grid-overlay").toggle();
		e.preventDefault();
	}
});
var hideAbout = function() {
	$(".avatar").stop().css("visibility", "");
	$(".about-me").animate({"min-width":0}, {
		step: function(now,fx){
			$(this).css("-webkit-transform","rotateY("+(270+parseInt(now))+"deg)");
			$(this).css("transform","rotateY("+(270+parseInt(now))+"deg)");
		},
		duration: 400,
		complete: function(){
			$(".avatar").animate({"min-width":0}, {
				step: function(now,fx){
					$(this).css("-webkit-transform","rotateY("+now+"deg)");
					$(this).css("transform","rotateY("+now+"deg)");
				},
				duration: 400,
				complete: function(){
					$(".about-me").hide();
					$(".about-me").removeClass("shown");
				}
			});
		}
	});
}
var showAbout = function() {
	$(".avatar").stop();
	$(".about-me").stop().show();
	$(".avatar").animate({"min-width":90}, {
		step: function(now,fx){
			$(this).css("-webkit-transform","rotateY("+now+"deg)");
			$(this).css("transform","rotateY("+now+"deg)");
		},
		duration: 400,
		complete: function(){
			$(".about-me").animate({"min-width":90}, {
				step: function(now,fx){
					$(this).css("-webkit-transform","rotateY("+(270+parseInt(now))+"deg)");
					$(this).css("transform","rotateY("+(270+parseInt(now))+"deg)");
				},
				duration: 400,
				complete: function(){
					$(".avatar").css("visibility", "hidden");
					$(".about-me").addClass("shown");
					$(document).one("click", hideAbout);
				}
			});
		}
	});
}

var width, height;
$(document).ready(function(){
	width = $(window).width();
	height = $(window).height();
	$("#about").click(function(e){
		if ($(".about-me").hasClass("shown")) hideAbout();
		else showAbout();
		e.preventDefault();
	});
	$(".avatar .overlay").click(function(e){
		if (!$(".about-me").hasClass("shown")) showAbout();
	});

	$(window).resize(function() {
		width = $(window).width();
		height = $(window).height();

	});
});