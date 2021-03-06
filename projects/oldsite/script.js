var scroll;
var lastScroll = 0;
var scrolledDown = false;
var ready = true;
var windowHeight;
var windowWidth;
var nameWidth;
var limit;
var hidden = false;

$(document).ready(function() {
    reposition();
    $(window).resize(function() {reposition()});
    $(window).scroll(function() {
	scrollTitle();
	if (scrolledDown) {
	   barToggle();
	}
    });
    $("#bar-container").hover(function() {
	$("#nav").animate({
	    backgroundColor: jQuery.Color("rgba(249,241,219,.9)")
	});
	if (!scrolledDown) {
	    $("#nav").animate({
		"opacity": 1
	    });
	}
	if (hidden) {
	    $(".mainbar").show();
	    hidden = false;
	}
    }, function() {
	if (!scrolledDown) {
	    $("#nav").animate({
		"opacity": 0
	    });
	}
	$("#nav").animate({
	    backgroundColor: jQuery.Color("rgba(249,230,187,0.5)")
	});
    });
});

function reposition() {
    windowHeight = $(this).height();
    windowWidth = $(this).width();
    limit = windowHeight / 2;
    textStart = windowHeight;
    //nameWidth = $(this).width();
    $("#title").css({
	"height":windowHeight + "px"
    });
    scrollTitle();
}

function scrollTitle() {
    scroll = $(window).scrollTop();
    if (scroll < limit) {
	if (scrolledDown) {
	    moveTitleBack();
	    scrolledDown = false;
	}
	if(ready) {
	var newSize = (72 - scroll*(36 / (limit)));
	var time = Math.log(1+Math.abs(parseInt($("#name").css("font-size")) - newSize))*60;
	    if (time>120) time=120;
	$("#name").stop().animate({
	    "font-size": newSize + "px",
	    "letter-spacing": (25 - scroll*(15 / (limit))) + "px",
	    "top": (windowHeight / 2) - ($("#name").height() / 2) - 
		((windowHeight / 2) - ($("#name").height() / 2) - 10)*(scroll/limit) + "px"
	},time+1);
	}
    } else if (scroll >= limit) {
	if (!(scrolledDown)) {
	    moveTitle();
	}
	scrolledDown = true;
    }
}
function barToggle() {
    if (scroll >= (textStart - 30) && scroll > lastScroll && !(hidden)) {
	$(".mainbar").fadeOut();
	hidden = true;
    } else if (hidden && scroll < lastScroll) {
	$(".mainbar").fadeIn();
	hidden = false;
    }
    lastScroll = scroll;

}
    
function moveTitle() {
    $("#nav").animate({
	opacity: 1
    });
    $("#name").animate({
	//left: $("#nametext").width() - $("#topbar").width() + 40 + parseInt($("#name").css('font-size'),10) + "px",
	top: "15px",
	"font-size": "36px",
	letterSpacing: "10px"
    }, "fast", function() {
	$("#nametext").animate({
	    left: $(window).width() / -2 + $("#nametext").width() / 2 + 40 + "px"
	    }, function() {
		$("#name").css({
		    "text-align": "left",
		    "left": "40px",
		    "right": "500px",
		    "top": "15px",
		});
		$("#nametext").css({"left":"0px"});
		ready=false;
	    });
    });
}

function moveTitleBack() {
    $("#nav").animate({
	 opacity: 0
    });
    $("#nametext").animate({
	left: ($(window).width() / 2) - ($("#nametext").width() / 2) - 40 + "px",
    }, "fast", function() {
	$("#name").css({
	    "text-align": "center",
	    "left": "0px",
	    "right": "0px"
	});
	$("#nametext").css({left:"0px"});
	ready=true;
	scrollTitle();
    });

}
