var cir1, cir2, cir3, cir4, voting = "positive", emOffset = 5000;
$(document).ready(function () {
	$(".more-tracks h2 i").tooltip({placement: "bottom"});
    $(".attribute").tooltip({delay: {show: 1200, hide:100}, trigger: "manual"});
    $(".attribute .info").hover(function(){$(this).parent().tooltip('show');},
				function(){$(this).parent().tooltip('hide');});
    $(".attribute .info").click(function(){$(this).parent().tooltip('toggle');});
    
    $(".voting a").click(function() {
	$(".voting a.selected").removeClass("selected");
	$(this).addClass("selected");
	voting = $(this).attr("id");
	var $elements = $(".elements li."+voting);
	$elements.css("background","#333");
	setTimeout(function(){$elements.css("background","");},115);
    });
    $(".elements li p").click(function() {
	$el = $(this).parent();
	if ($el.hasClass(voting)) {
	    $el.removeClass();
	} else {
	    $el.removeClass();
	    $el.addClass(voting);
	}
	countVotes();
    });
});
var moveCircle = function(obj) {
    var x = Math.random()*425+15;
    var y = Math.random()*600+100;
    var t = Math.random()*3300+emOffset;
    console.log(t);
    obj.animate({left:x,top:y},t, function(){moveCircle(obj);});
}

var countVotes = function() {
    var val = $('.elements li.positive').length - $('.elements li.negative').length;
    if (val > 0) {
	$('.color-bg').css({'background':'rgba(58,139,232,'+String(val*0.025)+')'});
    } else if (val < 0) {
	$('.color-bg').css({'background':'rgba(217,87,76,'+String(val*-0.025)+')'});
    } else {
	$('.color-bg').css({'background':'rgba(0,0,0,0)'});
    }
}
