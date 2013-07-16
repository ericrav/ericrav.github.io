var cir1, cir2, cir3, cir4, voting = "positive";
$(document).ready(function () {
    $(".attribute").tooltip({delay: {show: 2000, hide:100}});
    cir1 = $("#cir1");
    cir2 = $("#cir2");
    cir3 = $("#cir3");
    cir4 = $("#cir4");
    moveCircle(cir1);
    moveCircle(cir2);
    moveCircle(cir3);
    moveCircle(cir4);
    
    $(".voting a").click(function() {
	$(".voting a.selected").removeClass("selected");
	$(this).addClass("selected");
	voting = $(this).attr("id");
    });
    $(".elements li").click(function() {
	if ($(this).hasClass(voting)) {
	    $(this).removeClass();
	} else {
	    $(this).removeClass();
	    $(this).addClass(voting);
	}
    });
});
var moveCircle = function(obj) {
    var x = Math.random()*425+15;
    var y = Math.random()*600+100;
    var t = Math.random()*3300+5000;
    obj.animate({left:x,top:y},t, function(){moveCircle(obj);});
}
