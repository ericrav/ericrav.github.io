var cir1, cir2, cir3, cir4, voting = "positive", emOffset = 5000;
$(document).ready(function () {
    $(".attribute").tooltip({delay: {show: 1200, hide:100}, trigger: "manual"});
    $(".attribute .info").hover(function(){$(this).parent().tooltip('toggle');});
    
    $(".voting a").click(function() {
	$(".voting a.selected").removeClass("selected");
	$(this).addClass("selected");
	voting = $(this).attr("id");
	var $elements = $(".elements li."+voting);
	$elements.removeClass(voting);
	setTimeout(function(){$elements.addClass(voting);},115);
    });
    $(".elements li").click(function() {
	if ($(this).hasClass(voting)) {
	    $(this).removeClass();
	} else {
	    $(this).removeClass();
	    $(this).addClass(voting);
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
	$('.color-bg').css({'background':'rgba(166,68,15,'+String(val*-0.025)+')'});
    } else {
	$('.color-bg').css({'background':'rgba(0,0,0,0)'});
    }
}
