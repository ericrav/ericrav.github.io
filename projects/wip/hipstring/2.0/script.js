var cir1, cir2, cir3, cir4, voting = "positive", emOffset = 5000;
$(document).ready(function () {
	$(".more-tracks").css("top", $(".selectedSound").height() + "px");
	var votingStats = [[2,3],[0,4],[1,1],[2,1],[9,5],[12,3],[4,8],[0,0],[4,5],[2,3]];
	var $elements = $(".attribute");
	for (var i = 0; i < $elements.length; i++) {
		var p     = votingStats[i][0]; 
		var n     = votingStats[i][1]; 
		var total = (p + n) == 0 ? 1 : p + n;
		var $el   = $($elements[i]);
		$el.find(".voting-stats .positive .bar").css("width", (((p/total)*65)+5) + "%");
		$el.find(".voting-stats .negative .bar").css("width", (((n/total)*65)+5) + "%");
		$el.find(".voting-stats .positive span").text(p);
		$el.find(".voting-stats .negative span").text(n);
	}
	$(".more-tracks h2 i").tooltip({placement: "bottom"});
    $(".attribute").tooltip({delay: {show: 1200, hide:100}, trigger: "manual"});
    $(".attribute .info").hover(function(){$(this).parent().tooltip('show');},
								function(){$(this).parent().tooltip('hide');});
    $(".attribute .info").click(function(){$(this).parent().tooltip('toggle');});
    $(".attribute .stats-toggle").hover(function(e){showVotingStats(e, 'show');},
										function(e){showVotingStats(e, 'hide');});
    $(".attribute .stats-toggle").click(function(e){showVotingStats(e, 'toggle');});
    
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
	    $el.addClass(voting + " rated");
	}
	countVotes();
    });
});
var showVotingStats = function(e, option) {
	console.log(e);
    $el    = $(e.currentTarget).parent();
    $p     = $el.find("p.attName");
    $stats = $el.find("div.voting-stats");
    if (option=="show") {
    	$p.animate({'opacity':0});
    	$stats.fadeIn();
    } else if (option=="hide") {
    	$p.animate({'opacity':1});
    	$stats.fadeOut();
    } else {
    	if ($p.css("opacity") == 1) {
    		showVotingStats(e, "show");
    	} else {
    		showVotingStats(e, "hide");
    	}
    }
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
