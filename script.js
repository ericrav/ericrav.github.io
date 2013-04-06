var scroll;
var lastScroll = 0;
var scrolledDown = false;
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
	}
	scrolledDown = false;
	$("#name").css({
	    "font-size": (72 - scroll*(36 / (limit))) + "px",
	    "letter-spacing": (25 - scroll*(15 / (limit))) + "px",
	    "top": (windowHeight / 2) - ($("#name").height() / 2) - 
		((windowHeight / 2) - ($("#name").height() / 2) - 10)*(scroll/limit) + "px"
	});
	
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
	left: $("#nametext").width() - $("#topbar").width() + 40 + parseInt($("#name").css('font-size'),10) + "px",
	top: "15px",
	"font-size": "36px",
	letterSpacing: "10px"
    },function() {
	$("#name").css({
	    "text-align": "left",
	    "left": "40px",
	    "right": "500px",
	    "top": "15px",
	});
    });
}

function moveTitleBack() {
    $("#nav").animate({
	 opacity: 0
    });
    $("#name").animate({
	left: (windowWidth / 2) - ($("#nametext").width() / 2) - 40 + "px",
    },function() {
    $("#name").css({
	"text-align": "center",
	"left": "0px",
	"right": "0px"
    });
    });
}
